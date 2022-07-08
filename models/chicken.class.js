class Chicken extends movableObject {

    constructor() {
        super().loadImage('img/3_enemies_chicken/chicken_normal/1_walk/1_w.png');

        this.x = 200 + Math.random() * 500; // spawning of the enemies on random spots
        this.height = 100;
        this.y = 300;
    };


}