class MovableObject extends DrawableObjects{
    speed = 0.1;
    reverseDirection = false;
    speedY = 0;
    acceleration = 1.7;
    hitPoints = 100;
    lastHit = 0;




    applyGravity() {
        setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            };
        }, 1000 / 25);
    }

    isAboveGround() {
        return this.y < 235;
    }

    // colliding function
    isColliding(mo) {
        return this.x + this.width > mo.x && this.y + this.height > mo.y && this.x < mo.x && this.y < mo.y + mo.height;
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