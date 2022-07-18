class StatusBarBoss extends DrawableObjects {

percentage = 100;

constructor(){
    this.setPercentage(100);
}
    damageEndboss(){
        this.percentage = percentage;
        percentage -= 20;
    }
}