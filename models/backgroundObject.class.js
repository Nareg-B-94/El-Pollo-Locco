class BackgroundObject extends movableObject {

width = 720;
height= 480;

    constructor(imagePath, x) {
        super().loadImage(imagePath)
        this.x = x;
        this.y = 480 - this.height;

    }

    // width = 800;
    // height = 330;
    // x = 0;
    // y = 80;


};