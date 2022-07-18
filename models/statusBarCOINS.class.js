class StatusBarCoins extends DrawableObjects {

    imagesCoins = [
        'img/7_statusbars/1_statusbar/1_statusbar_coin/blue/0.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/blue/20.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/blue/40.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/blue/60.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/blue/80.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/blue/100.png',
    ];
    numberOfCoins = 0;

    constructor() {
        super();
        this.loadImages(this.imagesCoins);
        this.x = 50;
        this.y = 85;
        this.width = 200;
        this.height = 60;
        this.setNumberOfCoins(0);
    }

    setNumberOfCoins(number) {
        this.number = number;
        let path = this.imagesCoins[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }

    resolveImageIndex() {
        if (this.number == 100) {
            return 5;
        } else if (this.number == 80) {
            return 4;
        } else if (this.number == 60) {
            return 3;
        } else if (this.number == 40) {
            return 2;
        } else if (this.number == 20) {
            return 1;
        } else {
            return 0;
        }
    }
}