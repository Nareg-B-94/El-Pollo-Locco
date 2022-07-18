class MovableObject extends DrawableObjects {
    speed = 0.1;
    reverseDirection = false;
    speedY = 0;
    acceleration = 1.7;
    hitPoints = 100;
    lastHit = 0;
    coinsCollected = 0;
    salsaCollected = 0;
    coinsCollectedSound = new Audio('audio/collectCoins.mp3');
    salsaCollectedSound = new Audio('audio/collectBottle.mp3');
    offsetRight = 0;
    offsetLeft = 0;
    offsetTop = 0;
    offsetBottom = 0;


    applyGravity() {
        setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;

            };
        }, 1000 / 25);
    }

    isAboveGround() {
        // in order to let the bottle to fall to ground
        if (this instanceof ThrowableObject) {
            return true;

        } else {
            return this.y < 235;
        }
    }

    // colliding function
    // isColliding(mo) {
    //     return this.x + this.width > mo.x && this.y + this.height > mo.y && this.x < mo.x && this.y < mo.y + mo.height;
    // }
    isColliding(mo) {
        return this.x + this.width - this.offsetRight > mo.x + mo.offsetLeft &&
        this.y + this.height - this.offsetBottom > mo.y + mo.offsetTop && this.x + this.offsetLeft < mo.x +mo.width - mo.offsetRight && this.y + this.offsetTop < mo.y + mo.height - mo.offsetBottom;
    }

    // taking damage
    hit() {
        this.hitPoints -= 20;
        if (this.hitPoints < 0) {
            this.hitPoints = 0;

        } else {
            this.lastHit = new Date().getTime();
        }
    }

    // collecting Coins
    collectCoins() {
        if (this.coinsCollected < 100) {
            this.coinsCollected += 20;
            this.coinsCollectedSound.play();
        }

    }

    collectBottles() {
        if (this.salsaCollected < 100) {
            this.salsaCollected += 20;
            this.salsaCollectedSound.play();
        }

    }

    isHurt() {

        // difference in getting hurt in ms
        let timePassed = new Date().getTime() - this.lastHit;
        timePassed = timePassed / 1000;   // difference in getting hurt in s

        return timePassed < 0.2;

    }

    isDead() {
        return this.hitPoints == 0;

    }

    playAnimation(images) {
        let i = this.currentImage % images.length
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;


    }

    moveRight() {
        this.x += this.speed;
        this.reverseDirection = false;
    }

    moveLeft() {
        this.x -= this.speed;
        // this.reverseDirection = true;

    }

    jump() {
        this.speedY = 20;
    }

}