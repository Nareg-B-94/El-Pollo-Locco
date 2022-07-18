class Endscreen extends MovableObject {
    width = 720;
    height = 480;


    constructor() {
        super.loadImage('img/9_intro_outro_screens/game_over/oh no you lost!.png');
        this.x = 0;
        this.y = 0;
    }
}