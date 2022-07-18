class Character extends MovableObject {

    height = 220;
    width = 120;
    y = 100;
    speed = 5;


    imagesAnimated = [
        'img/2_character_pepe/2_walk/W-21.png',
        'img/2_character_pepe/2_walk/W-22.png',
        'img/2_character_pepe/2_walk/W-23.png',
        'img/2_character_pepe/2_walk/W-24.png',
        'img/2_character_pepe/2_walk/W-25.png',
        'img/2_character_pepe/2_walk/W-26.png',
    ];

    imagesJumping = [
        'img/2_character_pepe/3_jump/J-31.png',
        'img/2_character_pepe/3_jump/J-32.png',
        'img/2_character_pepe/3_jump/J-33.png',
        'img/2_character_pepe/3_jump/J-34.png',
        'img/2_character_pepe/3_jump/J-35.png',
        'img/2_character_pepe/3_jump/J-36.png',
        'img/2_character_pepe/3_jump/J-37.png',
        'img/2_character_pepe/3_jump/J-38.png',
        'img/2_character_pepe/3_jump/J-39.png',
    ];

    imagesDead = [
        'img/2_character_pepe/5_dead/D-51.png',
        'img/2_character_pepe/5_dead/D-52.png',
        'img/2_character_pepe/5_dead/D-53.png',
        'img/2_character_pepe/5_dead/D-54.png',
        'img/2_character_pepe/5_dead/D-55.png',
        'img/2_character_pepe/5_dead/D-56.png',
        'img/2_character_pepe/5_dead/D-57.png',
    ];

    imagesHurt = [
        'img/2_character_pepe/4_hurt/H-41.png',
        'img/2_character_pepe/4_hurt/H-42.png',
        'img/2_character_pepe/4_hurt/H-43.png',
    ];

    currentImage = 0;
    world;
    jumpingSound = new Audio('audio/jump.mp3');
    hurtSound = new Audio('audio/hurt.mp3');
    looseSound = new Audio('audio/loose.mp3');





    constructor() {
        super().loadImage('img/2_character_pepe/2_walk/W-21.png');

        this.loadImages(this.imagesAnimated);
        this.loadImages(this.imagesJumping);
        this.loadImages(this.imagesDead);
        this.loadImages(this.imagesHurt);
        this.applyGravity();
        this.animate();

        this.jumpingSound.volume = 0.5;
        this.looseSound.volume = 0.5;
        this.hurtSound.volume = 0.5;


    }

    animate() {


        setInterval(() => {
            if (this.world.keyboard.right && this.x < this.world.level.levelEndX) {
                this.moveRight();
                // console.log(this.reverseDirection)
            }
            this.world.cameraX = this.x
        }, 1000 / 60);

        setInterval(() => {
            if (this.world.keyboard.left && this.x > 0) {
                this.moveLeft();
                this.reverseDirection = true;
                // console.log(this.reverseDirection);
            }
            this.world.cameraX = -this.x + 100;

            // console.log(this.x);
        }, 1000 / 60);


        setInterval(() => {
            if (this.world.keyboard.up && !this.isAboveGround()) {
                this.jump();
                this.jumpingSound.play();

            }

        }, 100);



       let stopInterval = setInterval(() => {

            if (this.isDead()) {
                this.playAnimation(this.imagesDead);
                this.looseSound.play();

                clearInterval(stopInterval);

            } else if (this.isHurt()) {
                this.playAnimation(this.imagesHurt);
                this.hurtSound.play();

            } else if (this.isAboveGround()) {
                this.playAnimation(this.imagesJumping);
            } else if (this.world.keyboard.right || this.world.keyboard.left) {
                // Walk animation
                this.playAnimation(this.imagesAnimated);
            }

        }, 100);

    }
}


