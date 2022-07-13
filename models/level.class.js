class Level {
    coins;
    enemies;
    clouds;
    backgroundObjekts;
    levelEndX = 700 * 4.5;

    constructor(coins, enemies, clouds, backgroundObjekts) {
        this.coins = coins;
        this.enemies = enemies;
        this.clouds = clouds;
        this.backgroundObjekts = backgroundObjekts;


    }
}