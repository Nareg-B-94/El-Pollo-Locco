class Level {
    bottles;
    coins;
    enemies;
    endboss;
    clouds;
    backgroundObjekts;
    levelEndX = 720 * 5;

    constructor(bottles, coins, enemies, endboss, clouds, backgroundObjekts) {

        this.clouds = clouds;
        this.backgroundObjekts = backgroundObjekts;
        this.bottles = bottles;
        this.coins = coins;
        this.enemies = enemies;
        this.endboss = endboss;
    }
}