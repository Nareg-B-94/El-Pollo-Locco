class Cloud2 extends movableObject {

    height = 160;
    width = 300;
    y = 50;
    speed = 0.2;

    constructor() {
        super().loadImage('img/5_background/layers/4_clouds/1.png');

        this.x = Math.random() * 500; // position of the clouds on random spots

        this.animate();
    };
    animate() {
        setInterval(() => {
            this.x -= this.speed;
        }, 1);

    };
};