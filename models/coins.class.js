class Coins extends movableObject {

    height = 45;
    y = 250;
    width = 45;
    imagesAnimated = [
        'img/8_coin/coin_1.png',
        'img/8_coin/coin_2.png',
    ];
    speed = 0.11;

    constructor(x) {
        super().loadImage('img/8_coin/coin_1.png');

        this.x = x + 500 + Math.random() * 500;
        this.speed = 0.11 + Math.random() * 0.15;
        this.loadImages(this.imagesAnimated);
        this.animate();

    }

    animate() {

        this.moveLeft();

        setInterval(() => {
            this.playAnimation(this.imagesAnimated);
        }, 50);
    }

}