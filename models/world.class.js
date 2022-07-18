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

        }, 100);
    }

    checkThrowObject() {
        if (this.keyboard.space) {
            let bottle = new ThrowableObject(this.character.x + 100, this.character.y + 100)
            this.throwableObject.push(bottle);
        }
    }

    // checkBottleCollision() {
    //     this.level.enemies.forEach(enemy => {
    //         if (this.throwableObject.forEach(bottles => {
    //             if (bottles.isColliding(enemy)) {
    //                 this.hits += 20;
    //                 this.throwableObject.splice(0, 1);
    //                 enemy.
    //             }
    //         });) {

    //         }
    //     });

    //     }
    // }

    checkCollisions() {
        this.level.enemies.forEach((enemy) => {
            if (this.character.isColliding(enemy)) {
                this.character.hit();
                this.statusBarHP.setPercentage(this.character.hitPoints);
            }
            if (this.character.isDead()) {
                this.gameMusic.pause();
            }
        });
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
