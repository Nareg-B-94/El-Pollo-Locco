class Character extends movableObject {

    height = 220;
    width = 120;
    // y = 250;
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

    currentImage = 0;
    world;
    jumpingSound = new Audio('audio/jump.mp3');
    hurtSound = new Audio('audio/hurt.mp3');
    throwSound = new Audio('audio/throw.mp3');



    constructor() {
        super().loadImage('img/2_character_pepe/2_walk/W-21.png');
        this.loadImages(this.imagesAnimated);
        this.loadImages(this.imagesJumping);
        this.applyGravity()
        this.animate();
    }

    animate() {

        setInterval(() => {
            if (this.world.keyboard.right && this.x < this.world.level.levelEndX) {
                this.moveRight();
                console.log(this.reverseDirection)
            }
            this.world.cameraX = this.x
        }, 1000 / 60);

        setInterval(() => {
            if (this.world.keyboard.left && this.x > 0) {
                this.moveLeft();
                this.reverseDirection = true;
                console.log(this.reverseDirection);
            }
            this.world.cameraX = -this.x + 100;

            // console.log(this.x);
        }, 1000 / 60);


        setInterval(() => {
            if (this.world.keyboard.up && !this.isAboveGround() ) {
                this.jump();
            }

        }, 100);

        setInterval(() => {

            if (this.isAboveGround()) {
                this.playAnimation(this.imagesJumping);
            } else {

                if (this.world.keyboard.right || this.world.keyboard.left) {

                    // Walk animation
                    this.playAnimation(this.imagesAnimated);
                };
            }
        }, 100);

    }



}


