class Bottles extends MovableObject {

    height = 60;
    y = 390;
    width = 60;
    imagesAnimated = [
        'img/6_salsa_bottle/1_salsa_bottle_on_ground.png',
        'img/6_salsa_bottle/2_salsa_bottle_on_ground.png',
    ];

    constructor(x) {
        super().loadImage('img/6_salsa_bottle/1_salsa_bottle_on_ground.png');

        this.x = x + 231 + Math.random() * 1235;
        this.loadImages(this.imagesAnimated);
        this.animate();
    }

    animate() {
        setInterval(() => {
            this.playAnimation(this.imagesAnimated);
        }, 240);
    }

}