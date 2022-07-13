class Endboss extends movableObject {

    height = 450
    y = 35;
    width = 280;
    imagesAnimated = [
        'img/4_enemie_boss_chicken/1_walk/G1.png',
        'img/4_enemie_boss_chicken/1_walk/G2.png',
        'img/4_enemie_boss_chicken/1_walk/G3.png',
        'img/4_enemie_boss_chicken/1_walk/G4.png',
    ];

    constructor(x) {
        super().loadImage(this.imagesAnimated[0]);
        this.loadImages(this.imagesAnimated);
        this.x = x + 4000;
        this.animate();
    }

    animate(){
        setInterval(() => {
            this.playAnimation(this.imagesAnimated);
        }, 150);

        this.moveLeft();
    }
}