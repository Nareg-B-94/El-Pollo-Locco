class Chicken2 extends MovableObject {

    height = 40;
    y = 420;
    width = 50;
    imagesAnimated = [
        'img/3_enemies_chicken/chicken_small/1_walk/1_w.png',
        'img/3_enemies_chicken/chicken_small/1_walk/2_w.png',
        'img/3_enemies_chicken/chicken_small/1_walk/3_w.png',
    ];

    imagesDead = [
        'img/3_enemies_chicken/chicken_small/2_dead/dead.png',
    ];

    speed = 0.22;

    constructor(x) {
        super().loadImage('img/3_enemies_chicken/chicken_small/1_walk/1_w.png');

        this.x = x + 200 + Math.random() * 1246;
        this.speed = 0.2 + Math.random() * 0.20;
        this.loadImages(this.imagesAnimated);
        this.loadImages(this.imagesDead);
        this.animate();
    }

    enemyKilled(){
        super.enemyKilled();
    }

    animate() {

        // setInterval(() => {
        //     if (!this.isDead()) {
        //         this.moveLeft();
        //         this.reverseDirection = false;
        //     }

        // }, 1000 / 60);

        // setInterval(() => {
        //     if (this.isDeadChicken()) {
        //         this.speed = false;
        //         this.playAnimation(this.imagesDead);
        //     } else {
        //         this.playAnimation(this.imagesAnimated);
        //     }

        // }, 140);


        setInterval(() => {
            if (!this.isDead()) {
                this.moveLeft();
                this.reverseDirection = false;
                this.playAnimation(this.imagesAnimated);
            }
            else {
                this.playAnimation(this.imagesDead);
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