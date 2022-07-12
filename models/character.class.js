class Character extends movableObject {

    height = 220;
    width = 120;
    y = 250;
    speed = 4;
    imagesAnimated =[
        'img/2_character_pepe/2_walk/W-21.png',
        'img/2_character_pepe/2_walk/W-22.png',
        'img/2_character_pepe/2_walk/W-23.png',
        'img/2_character_pepe/2_walk/W-24.png',
        'img/2_character_pepe/2_walk/W-25.png',
        'img/2_character_pepe/2_walk/W-26.png',
    ];
    currentImage = 0;
    world;

    constructor() {
        super().loadImage('img/2_character_pepe/2_walk/W-21.png');
        this.loadImages(this.imagesAnimated);

        this.animate();
    }

    animate(){

        setInterval(() => {
                if (this.world.keyboard.right) {
                    this.x += this.speed;
                    this.reverseDirection = false;
                }
            this.world.cameraX = this.x
        }, 1000 / 60);

        setInterval(() => {
            if (this.world.keyboard.left) {
                this.x -= this.speed;
                this.reverseDirection = true;
            }
            this.world.cameraX = -this.x
        }, 1000 / 60);


        setInterval(() => {

            if (this.world.keyboard.right || this.world.keyboard.left) {

                // Walk animation
                let i = this.currentImage % this.imagesAnimated.length
                let path = this.imagesAnimated[i];
                this.img = this.imageCache[path];
                this.currentImage++;
            };

        }, 100);

    }


    jump() { }
}