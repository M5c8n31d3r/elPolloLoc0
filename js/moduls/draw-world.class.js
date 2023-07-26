class DrawWorld {

    changeDirection = false;
    
        /**
         * calls all functions for drawing all elements
         */
        drawWorld() {
            this.clearCanvas();
            this.drawLevel();
            this.drawFixedObjects();
            this.drawEndscreen();
            this.repeatDrawFunction();
        }
    
    
        /**
         * clears the canvas
         */
        clearCanvas() {
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        }
    
    
        /**
         * draws the elements for the level
         */
        drawLevel() {
            this.ctx.translate(this.cameraX, 0);
            this.drawBackground();
            this.drawItems();
            this.drawGameCharacters();
            this.ctx.translate(-this.cameraX, 0);
        }
    
    
        /**
         * draws the background by adding background and clouds
         */
        drawBackground() {
            this.addObjectsToMap(this.level.backgroundObjects);
            this.addObjectsToMap(this.level.clouds);
        }
    
    
        /**
         * draws all items by adding the collectable items
         */
        drawItems() {
            this.addObjectsToMap(this.level.coins);
            this.addObjectsToMap(this.level.bottles);
            this.addObjectsToMap(this.level.hearts);
            this.addObjectsToMap(this.throwableObject);
            this.addObjectsToMap(this.thrownBottle);
        }
    
    
        /**
         * draws the character and enemies
         */
        drawGameCharacters() {
            this.addObjectsToMap(this.level.smallEnemies);
            this.addObjectsToMap(this.level.enemies);
            this.addObjectsToMap(this.deadEnemies);
            this.addToMap(this.character);
            this.addToMap(this.endboss);
        }
    
    
        /**
         * draws objects that are fixed
         */
        drawFixedObjects() {
            this.addToMap(this.statusBarHealth);
            this.addToMap(this.statusBarCoin);
            this.addToMap(this.statusBarBottle);
            this.drawstatusBarEndboss();
        }
    
    
        /**
         * draws the statusbar of the endboss
         */
        drawstatusBarEndboss() {
            if (this.character.reachedEndboss(this.endboss, 530))
                this.addToMap(this.statusBarEndboss);
        }
    
        drawstatusBarEndbossIcon() {
            if (this.character.reachedEndboss(this.endboss, 530))
                this.addToMap(this.statusBarEndbossIcon);
        }
    
    
        /**
         * two different endscreens when the character or the endboss lost
         */
        drawEndscreen() {
            if (this.character.endGame)
                this.addToMap(this.lost);
            else if (this.endboss.endGame)
                this.addToMap(this.gameOver); 
        }
    
        /**
         * repeat the drawing
         */
        repeatDrawFunction() {
            self = this;
            requestAnimationFrame(function () {
                self.drawWorld();
            });
        }
    
        
        /**
         * adding objects to the world
         * @param {array} objects 
         */
        addObjectsToMap(objects) {
            objects.forEach(object => this.addToMap(object));
        }
    
    
        /**
         * checks if the direction is changed
         * @param {array} object 
         */
        addToMap(object) {
            if(object.changeDirection) {
                this.flipImage(object);
            }
    
            object.draw(this.ctx)
    
            if (object.changeDirection) {
                this.flipImageBack(object);
            }
        }
    
    
        /**
         * for saving, shifting and reflection
         * @param {array} object 
         */
        flipImage(object) {
            this.ctx.save();
            this.ctx.translate(object.width, 0);
            this.ctx.scale(-1, 1);
            object.x = object.x * -1;
        }
    
    
        /**
         * direction is going back
         * @param {array} object 
         */
        flipImageBack(object) {
            this.ctx.restore();
            object.x = object.x * -1;
        }
    
        
        /**
         * the function checks with an if query (if keyboard f pressed and if bottles are available) => then code will be execuded
         * 
         */
        checkThrowObjects() {
            if (this.keyboard.B && this.collectedBottles > 0 && !this.character.changeDirection) {
                let bottle = new ThrowableObjects(this.character.x, this.character.y + 100);
                this.throwableObject.push(bottle);
                this.collectedBottles--;
                this.character.reduceProgressbarBottle();
                this.statusBarBottle.setPercentage(this.character.progressBottleBar);
                this.character.setTimeStamp();
                this.playSound(this.soundthrow, 1);
            }
        }
    

        /**
         * requests the time
         */
        setTimeStamp() {
            this.characterLastMovement = new Date().getTime();
        }
    

        /**
         * sets time stamp after 1sec returns timepassed
         */
        characterMoveTimepassed() {
            let timepassed = new Date().getTime() - this.characterLastMovement;
            timepassed = timepassed / 1000;
            return timepassed;
        }
    
    
        /**
         * sounds in the end
         */
        endOfGame() {
            if (this.character.endGame) {
                let sound = this.soundLost
                this.playEndSound(sound);
            } else if (this.endboss.endGame) {
                let sound = this.soundWon;
                this.playEndSound(sound);
            }
        }
    
    
        /**
         * sound at the end
         * @param {string} sound 
         */
        playEndSound(sound) {
            this.playSound(sound, 1);
            this.pauseMusic();
            this.resetGame(sound);
        }
    
    
        /**
         * reset the game und pause the sound
         * @param {string} sound 
         */
        resetGame(sound) {
            clearInterval(this.slowInterval);
            clearInterval(this.fastInterval);
            setTimeout(() => {
                this.restartGame();
                this.pauseMusic(sound);
            }, 2000)
        }
    
    
        /**
         * restarts the game after finishing it
         */
        restartGame() {
            document.location.reload();
        }
    
        
         /**
         * checks conditions of the splashed bottle
         * @param {object} bottle 
         */
         splashedBottle(bottle) {
            let splashedBottle = new BottleSplash(bottle.x, bottle.y);
            this.thrownBottle.push(splashedBottle);
            this.playSound(this.soundBrokenBottle, 1);
            this.throwableObject = [];
            setTimeout(() => this.thrownBottle.splice(splashedBottle), 200);
        }
    }