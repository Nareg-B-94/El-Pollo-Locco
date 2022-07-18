class StatusBarSalsa extends DrawableObjects {

    imagesSalsa = [
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/0.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/20.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/40.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/60.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/80.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/100.png',
    ];
    numberOfSalsa = 0;

    constructor() {
        super();
        this.loadImages(this.imagesSalsa);
        this.x = 50;
        this.y = 35
        this.width = 200;
        this.height = 60;
        this.setNumberOfSalsa(0);
    }

    setNumberOfSalsa(number) {
        this.number = number;
        let path = this.imagesSalsa[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }

    resolveImageIndex() {
        if (this.number == 100) {
            return 5;
        } else if (this.number >= 80) {
            return 4;
        } else if (this.number >= 60) {
            return 3;
        } else if (this.number >= 40) {
            return 2;
        } else if (this.number >= 20) {
            return 1;
        } else {
            return 0;
        }
    }

}