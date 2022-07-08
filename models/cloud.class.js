class Cloud extends movableObject {

    height = 160;
    width = 200;
    y = 50;

    constructor(){
        super().loadImage('img/5_background/layers/4_clouds/2.png');

        this.x = Math.random() * 500; // position of the clouds on random spots


    }

}