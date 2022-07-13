class Chicken extends movableObject {

    height = 60;
    y = 400;
    width = 60;
    imagesAnimated = [
        'img/3_enemies_chicken/chicken_normal/1_walk/1_w.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/2_w.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/3_w.png',
    ];
    speed = 0.1;

    constructor() {
        super().loadImage('img/3_enemies_chicken/chicken_normal/1_walk/1_w.png');

        this.x = 200 + Math.random() * 500; // location of spawning of the enemies
        this.speed = 0.1 + Math.random() * 0.25;
        this.loadImages(this.imagesAnimated);
        this.animate();
    }

    animate() {

        this.moveLeft();

        setInterval(() => {
            this.playAnimation(this.imagesAnimated);
        }, 140);
    }




}


