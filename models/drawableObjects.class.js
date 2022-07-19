class DrawableObjects {
    img;
    imageCache = {};
    currentImage = 0;
    x = 120;
    y = 280;
    height = 150;
    width = 100;
    // offsetHeight = 80;
    // offsetWidth = 60;

    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

    loadImages(array) {
        array.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });

    }

    drawFrame(ctx) {

        if (this instanceof Character || this instanceof Chicken || this instanceof Chicken2 || this instanceof Endboss) {

            ctx.beginPath();
            ctx.lineWidth = '5';
            ctx.strokeStyle = 'transparent';
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.stroke();

        }

        // if (this instanceof Character || this instanceof Chicken || this instanceof Chicken2 || this instanceof Endboss) {

        //     ctx.beginPath();
        //     ctx.lineWidth = '2';
        //     ctx.strokeStyle = 'red';
        //     ctx.rect(this.x, this.y, this.offsetWidth, this.offsetHeight);
        //     ctx.stroke();

        // }

    }



}