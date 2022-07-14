class Level {
    bottles;
    coins;
    enemies;
    clouds;
    backgroundObjekts;
    levelEndX = 700 * 4.5;

    constructor(bottles, coins, enemies, clouds, backgroundObjekts) {

        this.clouds = clouds;
        this.backgroundObjekts = backgroundObjekts;
        this.bottles = bottles;
        this.coins = coins;
        this.enemies = enemies;




    }
}