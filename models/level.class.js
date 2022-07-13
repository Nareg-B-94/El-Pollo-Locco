class Level {
    coins;
    enemies;
    clouds;
    backgroundObjekts;
    levelEndX = 700 * 4.5;

    constructor(coins, enemies, clouds, backgroundObjekts) {

        this.enemies = enemies;
        this.coins = coins;
        this.clouds = clouds;
        this.backgroundObjekts = backgroundObjekts;


    }
}