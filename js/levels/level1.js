let level1;


/**
 * Level1 are generated with all objects
 */
function initLevel() {
 level1 = new Level(
        createLevelBabyChickens(),
        createLevelNormalChickens(),
        createLevelClouds(),
        createLevelBackground(),
        createLevelCoins(),
        createLevelBottles(),
        createLevelHearts()
    )
}


/**
 * babyChickens are generated on the X axis with with a defined distance
 * @returns object
 */
function createLevelBabyChickens() {
    return [
            new BabyChicken(250),
            new BabyChicken(300),
            new BabyChicken(350),
            new BabyChicken(400),
            new BabyChicken(500),
            new BabyChicken(600),
            new BabyChicken(800),
            new BabyChicken(1000),
            new BabyChicken(1300),
            new BabyChicken(1500),
            new BabyChicken(2000),
            new BabyChicken(2500),
            new BabyChicken(3500),
    ];
}


/**
 * chickens are generated on the X axis with with a defined distance
 * @returns object - chickens with defined distance on x and y axis
 */
function createLevelNormalChickens() {
    return [
            new Chicken(300),
            new Chicken(400),
            new Chicken(450),
            new Chicken(500),
            new Chicken(550),
            new Chicken(600),
            new Chicken(700),
            new Chicken(900),
            new Chicken(1000),
            new Chicken(2000),
            new Chicken(2500),
            new Chicken(3000)
    ];
}


/**
 * clouds are generated on the X axis with with a defined distance
 * @returns object - clouds with defined distance
 */
function createLevelClouds() {
    return [
            new Clouds(0, 0),
            new Clouds(1, 500),
            new Clouds(0, 1000),
            new Clouds(1, 1500),
            new Clouds(0, 2000),
            new Clouds(1, 2500),
            new Clouds(0, 3000),
            new Clouds(1, 3500),
            new Clouds(0, 4000),
            new Clouds(1, 4500),
            new Clouds(0, 5000),
            new Clouds(1, 5500),
            new Clouds(0, 6000),
            new Clouds(1, 6500),
            new Clouds(0, 7000),
            new Clouds(1, 7500),
            new Clouds(0, 8000),
            new Clouds(1, 8500),
            new Clouds(0, 9000),
            new Clouds(1, 9500),
            new Clouds(0, 10000)
    ];
}


/**
 * backgrounds are generated on the X axis with with a defined distance
 * @returns object - backgrounds with defined distance
 */
function createLevelBackground() {
    return [

        new BackgroundObject("img/5_background/layers/air.png", -1438),
        new BackgroundObject("img/5_background/layers/3_third_layer/1.png", -1438),
        new BackgroundObject("img/5_background/layers/2_second_layer/1.png", -1438),
        new BackgroundObject("img/5_background/layers/1_first_layer/1.png", -1438),
        new BackgroundObject('./img/5_background/layers/3_third_layer/2.png', -719),
        new BackgroundObject('./img/5_background/layers/air.png', -719),
        new BackgroundObject('./img/5_background/layers/2_second_layer/2.png', -719),
        new BackgroundObject('./img/5_background/layers/1_first_layer/2.png', -719),   
        new BackgroundObject('./img/5_background/layers/air.png', 0),
        new BackgroundObject('./img/5_background/layers/3_third_layer/1.png', 0),
        new BackgroundObject('./img/5_background/layers/2_second_layer/1.png', 0),
        new BackgroundObject('./img/5_background/layers/1_first_layer/1.png', 0),   
        new BackgroundObject('./img/5_background/layers/air.png', 719),
        new BackgroundObject('./img/5_background/layers/3_third_layer/2.png', 719),
        new BackgroundObject('./img/5_background/layers/2_second_layer/2.png', 719),
        new BackgroundObject('./img/5_background/layers/1_first_layer/2.png', 719),   
        new BackgroundObject('./img/5_background/layers/air.png', 719*2),
        new BackgroundObject('./img/5_background/layers/3_third_layer/1.png', 719*2),
        new BackgroundObject('./img/5_background/layers/2_second_layer/1.png', 719*2),
        new BackgroundObject('./img/5_background/layers/1_first_layer/1.png', 719*2),   
        new BackgroundObject('./img/5_background/layers/air.png', 719*3),
        new BackgroundObject('./img/5_background/layers/3_third_layer/2.png', 719*3),
        new BackgroundObject('./img/5_background/layers/2_second_layer/2.png', 719*3),
        new BackgroundObject('./img/5_background/layers/1_first_layer/2.png', 719*3),   
        new BackgroundObject('./img/5_background/layers/air.png', 719*4),
        new BackgroundObject('./img/5_background/layers/3_third_layer/1.png', 719*4),
        new BackgroundObject('./img/5_background/layers/2_second_layer/1.png', 719*4),
        new BackgroundObject('./img/5_background/layers/1_first_layer/1.png', 719*4),   
        new BackgroundObject('./img/5_background/layers/air.png', 719*5),
        new BackgroundObject('./img/5_background/layers/3_third_layer/2.png', 719*5),
        new BackgroundObject('./img/5_background/layers/2_second_layer/2.png', 719*5),
        new BackgroundObject('./img/5_background/layers/1_first_layer/2.png', 719*5),   
        new BackgroundObject('./img/5_background/layers/air.png', 719*6),
        new BackgroundObject('./img/5_background/layers/3_third_layer/1.png', 719*6),
        new BackgroundObject('./img/5_background/layers/2_second_layer/1.png', 719*6),
        new BackgroundObject('./img/5_background/layers/1_first_layer/1.png', 719*6),   
        new BackgroundObject('./img/5_background/layers/air.png', 719*7),
        new BackgroundObject('./img/5_background/layers/3_third_layer/2.png', 719*7),
        new BackgroundObject('./img/5_background/layers/2_second_layer/2.png', 719*7),
        new BackgroundObject('./img/5_background/layers/1_first_layer/2.png', 719*7),
   
        new BackgroundObject('./img/5_background/layers/air.png', 719*8),
        new BackgroundObject('./img/5_background/layers/3_third_layer/1.png', 719*8),
        new BackgroundObject('./img/5_background/layers/2_second_layer/1.png', 719*8),
        new BackgroundObject('./img/5_background/layers/1_first_layer/1.png', 719*8)
    ];
}


/**
 * coins are generated on the X axis with with a defined distance
 * @returns object - coins with defined distance on x and y axis
 */
function createLevelCoins() {
    return [
        new Coin(-1300, 300),
        new Coin(-1200, 300),
        new Coin(-1100, 300),
        // new Coin(360, 240),
        // new Coin(400, 180),
        // new Coin(1300, 100),
        // new Coin(1200, 100),
        new Coin(1700, 50),
        new Coin(1800, 50),
        // new Coin(2900, 20),
        new Coin(3000, 20),
        // new Coin(4000, 150),
        new Coin(4000, 200)
    ];
}


/**
 * bottles are generated on the X axis with with a defined distance
 * @returns object - bottles with defined distance on x and y axis
 */
function createLevelBottles() {
    return [
        new Bottle(0, -1300, 80),
            new Bottle(1, 300, 360),
            new Bottle(2, 500, 360),
            new Bottle(2, 800, 360),
            new Bottle(0, 1000, 155),
            new Bottle(0, 1000, 215),
            new Bottle(1, 1600, 360),
            new Bottle(2, 2000, 360),
            new Bottle(0, 3300, 100),
            new Bottle(0, 3400, 155),
            new Bottle(0, 3500, 215),
            new Bottle(0, 3600, 215),
            new Bottle(0, 3700, 155),
            new Bottle(0, 3800, 100),
            new Bottle(1, 4000, 360),
            new Bottle(2, 4200, 360),
            new Bottle(1, 4500, 360),
            new Bottle(2, 4600, 360),
            new Bottle(0, 4800, 100),
            new Bottle(0, 4800, 155),
            

            
    ];
}


/**
 * hearts are generated on the X axis with with a defined distance
 * @returns object - hearts with defined distance on x and y axis
 */
function createLevelHearts() {
    return [
            // new Heart(2975, 80),
            new Heart(-1150, 20)
    ];
}
  
  