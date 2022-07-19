class Endboss extends MovableObject {

    height = 450
    y = 35;
    width = 280;

    imagesAnimated = [
        'img/4_enemie_boss_chicken/1_walk/G1.png',
        'img/4_enemie_boss_chicken/1_walk/G2.png',
        'img/4_enemie_boss_chicken/1_walk/G3.png',
        'img/4_enemie_boss_chicken/1_walk/G4.png',
    ];

    imagesHurt = [
        'img/4_enemie_boss_chicken/4_hurt/G21.png',
        'img/4_enemie_boss_chicken/4_hurt/G22.png',
        'img/4_enemie_boss_chicken/4_hurt/G23.png',
    ];

    imagesDead = [
        'img/4_enemie_boss_chicken/5_dead/G24.png',
        'img/4_enemie_boss_chicken/5_dead/G25.png',
        'img/4_enemie_boss_chicken/5_dead/G26.png',
    ];






    constructor(x) {
        super().loadImage(this.imagesAnimated[0]);
        this.loadImages(this.imagesAnimated);
        this.loadImages(this.imagesHurt);
        this.loadImages(this.imagesDead);
        this.x = x + 3700;
        this.animate();
    }

    animate() {
        setInterval(() => {
            if (this.isDeadBoss()) {
                this.playAnimation(this.imagesDead);
            }
            else if
             (this.isHurt()) {
                this.playAnimation(this.imagesAnimated && this.imagesHurt);
            }
            // console.log(this.isDeadBoss);
            else { this.playAnimation(this.imagesAnimated); }

        }, 150);

        setInterval(() => {
            this.moveLeft();
            this.reverseDirection = false;
        }, 1000 / 60);
    }
}