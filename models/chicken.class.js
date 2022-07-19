class Chicken extends MovableObject {

    height = 60;
    y = 400;
    width = 60;
    imagesAnimated = [
        'img/3_enemies_chicken/chicken_normal/1_walk/1_w.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/2_w.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/3_w.png',
    ];

    imagesDead = [
        'img/3_enemies_chicken/chicken_normal/2_dead/dead.png',
    ];

    speed = 0.18;

    constructor(x) {
        super().loadImage('img/3_enemies_chicken/chicken_normal/1_walk/1_w.png');

        this.x = x + 500 + Math.random() * 1000; // location of spawning of the enemies
        this.speed = 0.1 + Math.random() * 0.25;
        this.loadImages(this.imagesAnimated);
        this.loadImages(this.imagesDead);
        this.animate();
    }

    enemyKilled(){
        super.enemyKilled();
    }

    animate() {
        setInterval(() => {
            if (!this.isDead()) {
                this.moveLeft();
                this.reverseDirection = false;
            }

        }, 1000 / 60);

        setInterval(() => {
            if (this.isDeadChicken()) {
                this.speed = false;
                this.playAnimation(this.imagesDead);
            } else {
                this.playAnimation(this.imagesAnimated);
            }

        }, 140);

    }




}


