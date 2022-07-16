class MovableObject {
    x = 120;
    y = 280;
    height = 150;
    width = 100;
    img;
    imageCache = {};
    currentImage = 0;
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

    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

    // colliding function
    isColliding(mo) {
        return this.x + this.width > mo.x && this.y + this.height > mo.y && this.x < mo.x && this.y < mo.y + mo.height;
    }

    // taking damage
    hit() {
        this.hitPoints -= 5;
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

    drawFrame(ctx) {

        if (this instanceof Character || this instanceof Chicken || this instanceof Chicken2 || this instanceof Endboss) {

            ctx.beginPath();
            ctx.lineWidth = '5';
            ctx.strokeStyle = 'white';
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.stroke();

        }

    }

    loadImages(array) {
        array.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });

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