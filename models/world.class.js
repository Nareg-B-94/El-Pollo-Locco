class World {
    character = new Character();
    enemies = [
        new Chicken(),
        new Chicken(),
        new Chicken(),
    ];
    clouds = [
        new Cloud(),
        new Cloud2(),
    ];
    backgroundObjekts = [
        new BackgroundObject('img/5_background/layers/1_first_layer/1.png'),
        new BackgroundObject('img/5_background/layers/1_first_layer/2.png'),
    ];

    canvas;
    ctx;
    constructor(canvas) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.draw();
    };

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.addObjectsToMap(this.clouds);
        this.addObjectsToMap(this.backgroundObjekts);
        this.addObjectsToMap(this.enemies);
        this.addToMap(this.character);


        //draw() will be always called
        let self = this;
        requestAnimationFrame(function () {
            self.draw();
        });
    };

    addObjectsToMap(objects) {
        objects.forEach(o => {
            this.addToMap(o);
        })
    }


    addToMap(mo) {
        this.ctx.drawImage(mo.img, mo.x, mo.y, mo.width, mo.height);
    };

};