class World {
    character = new Character();
    level = level1;
    canvas;
    ctx;
    keyboard;
    cameraX = 0;
    statusBarHP = new StatusBarHP();
    statusBarSalsa = new StatusBarSalsa();
    statusBarCoins = new StatusBarCoins();
    throwableObject = [];
    gameMusic = new Audio('audio/gameMusic.mp3');
    chick1Dead = new Audio('audio/chicken1.mp3');
    winMusic = new Audio('audio/win.mp3');
    looseSound = new Audio('audio/loose.mp3');
    bottleSmashSound = new Audio('audio/bottleSmash.mp3');
    win = false;
    lose = false;
    gameOverWinVar = new GameOverScreenWin();
    gameOverLoseVar = new GameOverScreen();

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.run();
        this.audioMusic();

    }



    audioMusic() {
        this.gameMusic.play();
        this.gameMusic.volume = 0.15;
        this.bottleSmashSound.volume = 0.5;

    }



    setWorld() {
        this.character.world = this;
    }

    run() {
        setInterval(() => {

            this.checkCollisions();
            this.checkCollisionsWithCoins()
            this.checkThrowObject();
            this.checkCollisionsWithBottles();
            this.killBossWithSalsa();


        }, 100);
        setInterval(() => {
            this.enemyBeingKilled();

        }, 1000 / 60);
    }

    checkThrowObject() {
        if (this.keyboard.space && this.character.salsaCollected > 0) {

            let bottle = new ThrowableObject(this.character.x + 100, this.character.y + 100)
            this.throwableObject.push(bottle);
            this.character.salsaCollected -= 20;
            this.statusBarSalsa.setNumberOfSalsa(this.character.salsaCollected);

        }
    }


    chickenIsNoneLethal = true;

    enemyBeingKilled() {


        this.level.enemies.forEach((enemy, index) => {


            if (enemy instanceof Chicken || enemy instanceof Chicken2) {
                if (this.character.isColliding(enemy)) {

                    if (this.character.isAboveGround()) {

                        this.chickenIsNoneLethal = false;

                        enemy.isDeadChickenBoolean = true;

                        this.level.enemies.splice(index, 1);
                        this.chick1Dead.play();
                        this.chick1Dead.volume = 0.1;
                    };
                }


                setTimeout(() => {
                    this.chickenIsNoneLethal = true;

                }, 300);

            }

        });
    }

    killBossWithSalsa() {

        this.throwableObject.forEach(bottles => {
            let endboss = this.level.endboss[0]
            if (this.throwableObject.length > 0) {
                if (endboss.isColliding(bottles)) {
                    this.bottleSmashSound.play();

                    this.throwableObject.splice(bottles, 1);

                    if (this.level.endboss[0].hitPointsBoss > 0) {
                        this.level.endboss[0].hitPointsBoss -= 20;
                        if (this.level.endboss[0].hitPointsBoss == 0) {
                            this.gameOverWin();
                        }
                    }
                }
            }

        });

    }

    checkCollisions() {
        this.level.enemies.forEach((enemy) => {
            if (this.character.isColliding(enemy)) {
                if (this.chickenIsNoneLethal) {
                    this.character.hit();
                    this.statusBarHP.setPercentage(this.character.hitPoints);
                }
            }
            if (this.character.isDead()) {
                this.gameOverLose();
            }
        });
    }

    gameOverLose() {
        this.gameMusic.pause();
        this.looseSound.volume = 0.2;
        this.looseSound.play();
        this.keyboard.down = false;
        this.keyboard.up = false;
        this.keyboard.right = false;
        this.keyboard.left = false;
        this.keyboard.space = false;

        setTimeout(() => {
            this.lose = true;
        }, 1500);

    }

    gameOverWin() {
        this.gameMusic.pause();
        this.winMusic.play();
        this.keyboard.down = false;
        this.keyboard.up = false;
        this.keyboard.right = false;
        this.keyboard.left = false;
        this.keyboard.space = false;
        setTimeout(() => {
            this.win = true;
        }, 1500);

        // // this.gameOverWinVar = true;
        // console.log(this.gameOverWinVar)
    }

    checkCollisionsWithCoins() {

        this.level.coins.forEach((coin, index) => {
            if (this.character.isColliding(coin)) {
                this.character.collectCoins();

                this.statusBarCoins.setNumberOfCoins(this.character.coinsCollected);
                this.level.coins.splice(index, 1);

            }
        });

    }
    checkCollisionsWithBottles() {


        this.level.bottles.forEach((salsa, index) => {
            if (this.character.isColliding(salsa)) {
                this.character.collectBottles();
                this.statusBarSalsa.setNumberOfSalsa(this.character.salsaCollected);
                this.level.bottles.splice(index, 1);
            }
        });

    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.translate(this.cameraX, 0);
        this.addObjectsToMap(this.level.backgroundObjekts);
        this.addObjectsToMap(this.level.clouds);
        this.addObjectsToMap(this.level.bottles);
        this.addObjectsToMap(this.level.coins);
        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.level.endboss);
        this.addObjectsToMap(this.throwableObject);

        // --------- letting the Bars move with screen reverse direction.
        this.ctx.translate(-this.cameraX, 0);
        this.addToMap(this.statusBarHP);
        this.addToMap(this.statusBarSalsa);
        this.addToMap(this.statusBarCoins);
        // --------- letting the Bars move with screen with direction.
        this.ctx.translate(this.cameraX, 0);
        this.addToMap(this.character);
        this.ctx.translate(-this.cameraX, 0);



        //draw() will be always called
        let self = this;
        requestAnimationFrame(function () {
            self.draw();
        });


            if (this.lose) {

                this.addToMap(this.gameOverLoseVar);
            } else if (this.win) {
                this.addToMap(this.gameOverWinVar);
            }



    }

    addObjectsToMap(objects) {
        objects.forEach(obj => {
            this.addToMap(obj);
        })
    }


    addToMap(mo) {
        if (mo.reverseDirection) {
            this.flipImage(mo);
        };

        mo.draw(this.ctx);
        mo.drawFrame(this.ctx);

        if (mo.reverseDirection) {
            this.flipImageBack(mo);
        };

    }

    flipImage(mo) {
        this.ctx.save();
        this.ctx.translate(mo.width, 0);
        this.ctx.scale(-1, 1);
        mo.x = mo.x * -1;
    }

    flipImageBack(mo) {
        mo.x = mo.x * -1;
        this.ctx.restore();
    }



}
