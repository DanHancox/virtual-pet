const maximumFitness = 10;
const minimumFitness = 0;
const maximumHunger = 10;
const minimumHunger = 0;
const startingAge = 0;
const lifeSpan = 30;
const aging = 1;
const getHungry = 5;
const fatigue = 3;
const walkies = 4;
const nibbles = 3;
const fitnessDanger = 3;
const hungerDanger = 5;


//Creating the constructor for Pet
function Pet(name){
    this.name = name
    this.age = startingAge
    this.hunger = minimumHunger
    this.fitness = maximumFitness
}
Pet.prototype = {
    get isAlive () {
    return this.age < lifeSpan && this.hunger < maximumHunger && this.fitness > minimumFitness;
    }
};

//Pet growing older, higher age and hunger, less fitness
Pet.prototype.growUp = function() {
    this.age += aging;
    this.hunger += getHungry;
    this.fitness -= fatigue;
}
//Elevates the level of your pets fitness by 4, unless already maxed fitness
Pet.prototype.walk = function () { 
    if (!this.isAlive) {
        throw new Error('Your pet is DEAD! Well done... Bravo..');
    }
    this.fitness += walkies;
    this.hunger += getHungry;
        if(this.fitness > maximumFitness) {
        this.fitness = maximumFitness;
    }};
//Feeding your pet to lower hunger
Pet.prototype.feedASnack = function(){
    if (!this.isAlive) {
        throw new Error('Your pet is DEAD! Well done... Bravo..');
    }
    this.hunger -= nibbles;
        if(this.hunger < minimumHunger) {
        this.hunger = minimumHunger;
        }
    }
//finds a naughty lasagna and aint hungry no mo 
Pet.prototype.lasagna = function () {
    if (!this.isAlive) {
        throw new Error('Your pet is DEAD! Well done... Bravo..');
    }
    this.hunger = minimumHunger;
};
//your pet needs a check up to see its current state of health
Pet.prototype.checkUp = function () {
    if (!this.isAlive) {
        throw new Error('Your pet is DEAD! Well done... Bravo..');
    };
    if((this.fitness) <= fitnessDanger && (this.hunger) >= hungerDanger) {
        return 'Time for my lazy owner to walk me for a walk and feed me, made the commitment?? make sure you keep it!';
    } else if ((this.fitness) <= fitnessDanger) {
        return "I need to walk... why don't you ever walk me?"
    } else if ((this.hunger) >= hungerDanger) {
        return "Please feed me, you never stop eating, why can't I??"
    } else {
        return "I'm doing just fine, I want, nor need NOTHING from you... come back when you have something worth my time"
    }
}

module.exports = Pet;
