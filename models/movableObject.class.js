class movableObject {
    x = 120;
    y = 250;
    img;
    height = 190;
    width = 120;

    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    };

    moveRight() {
        console.log('moving right')
    };

    moveChicken() { };

};