class Chicken2 extends movableObject {

    height = 40;
    y = 420;
    width = 50;
    imagesAnimated = [
        'img/3_enemies_chicken/chicken_small/1_walk/1_w.png',
        'img/3_enemies_chicken/chicken_small/1_walk/2_w.png',
        'img/3_enemies_chicken/chicken_small/1_walk/3_w.png',
    ];
    speed = 0.22;

    constructor(x) {
        super().loadImage('img/3_enemies_chicken/chicken_small/1_walk/1_w.png');

        this.x = x + 200 + Math.random() * 1246;
        this.speed = 0.2 + Math.random() * 0.20;
        this.loadImages(this.imagesAnimated);
        this.animate();
    }

    animate() {

        this.moveLeft();

        setInterval(() => {
            this.playAnimation(this.imagesAnimated);
        }, 130);
    }




















}