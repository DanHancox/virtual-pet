const maximumFitness = 10;
const minimumHunger = 0;
const minimumFitness = 0;
const lengthOfExistance = 30;
const startingAge = 0;

//Creating the constructor for Pet
function Pet(name){
    this.name = name
    this.age = startingAge
    this.hunger = minimumHunger
    this.fitness = maximumFitness
}

//create variables to use rather than writing repetitive numbers in the objects. these const variables have global scope
const aging = 1;
const snack = 5;
const fatigue = 3;
//Pet growing older, higher age and hunger, less fitness
Pet.prototype.growUp = function() {
    this.age += aging;
    this.hunger += snack;
    this.fitness -= fatigue;
}

const walkies = 4;
//Elevates the level of your pets fitness by 4, unless already maxed fitness
Pet.prototype.walk = function () { 
    this.fitness += walkies;
        if(this.fitness > maximumFitness) {
        this.fitness = maximumFitness;
    }};



    
    
        
        




module.exports = Pet;
