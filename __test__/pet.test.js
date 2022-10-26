const Pet = require('../src/pet');


describe('constructor', () => {

    it('returns an object', () => {
        expect(new Pet('Fido')).toBeInstanceOf(Object);
    });
    it('sets the name property', () => {
        const pet = new Pet('Fido');
        expect(pet.name).toEqual('Fido');
    });
    it('has a initial age of 0', () => {
        const pet = new Pet('Fido');
        expect(pet.age).toEqual(0);
    });
    it('has a initial hunger of 0', () => {
        const pet = new Pet('Fido');
        expect(pet.hunger).toEqual(0);
    });
    it('has a initial fitness of 10', () => {
        const pet = new Pet('Fido');
        expect(pet.fitness).toEqual(10);
    });
});


describe('Your pet is growing up', () => {
        
    it('pet age up by 1', () => {
        const pet = new Pet('Fido');
        pet.growUp();
        expect(pet.age).toEqual(1);
    })
    it('pet hunger up by 5', () => {
        const pet = new Pet('Fido');
        pet.growUp();
        expect(pet.hunger).toEqual(5);
    })
    it('pet fitness down by 3', () => {
        const pet = new Pet('Fido');
        pet.growUp();
        expect(pet.fitness).toEqual(7);
    })
})

describe('exercise your pet, take for a walk', () => {
    it('pet fitness increased but never over 10', () => {
        const pet = new Pet('Fido');
        pet.growUp();
        expect(pet.fitness).toEqual(7);      
        pet.walk();
        expect(pet.fitness).toEqual(10)
    });
    it('Throws an error if dead', () =>{
        const pet1 = new Pet('Fido');
        pet1.fitness = 0;
        expect(() => pet1.walk()).toThrow('Your pet is DEAD! Well done... Bravo..');
    });
})

describe('The use of the snack and lasagna functions', () => {
    it('Checks that a snack lowers hunger by 3 and is never below 0', () => {
        const pet = new Pet('Fido');
        pet.growUp();
        expect(pet.hunger).toEqual(5);
        pet.feedASnack();
        expect(pet.hunger).toEqual(2);
    });
    it('Checks the Lasagna function', () => {
        const pet = new Pet('Cat');
        pet.growUp();
        pet.lasagna();
        expect(pet.hunger).toBe(0);
    });
    it('Throws an error if dead', () =>{
        const pet = new Pet('Dog');
        pet.age = 30;
        expect(() => pet.feedASnack()).toThrow('Your pet is DEAD! Well done... Bravo..');
    });
});

describe('check the health status of your pet', () => {
    it('if fitness and hunger reach danger limits', () =>{
        const pet = new Pet('Fido');
        pet.growUp();
        pet.fitness = 3; 
        pet.hunger = 5;
        expect(pet.checkUp()).toBe('Time for my lazy owner to walk me for a walk and feed me, made the commitment?? make sure you keep it!')
    })
    it('if fitness reach danger limits', () =>{
        const petCat = new Pet('Fido')
        petCat.growUp();
        petCat.hunger = 2;
        petCat.fitness = 3;
        expect(petCat.checkUp()).toBe("I need to walk... why don't you ever walk me?")
    })
    it('if hunger reach danger limits', () =>{
        const petDog = new Pet('Fido')
        petDog.hunger = 5;
        expect(petDog.checkUp()).toBe("Please feed me, you never stop eating, why can't I??")
    })
    it('if fitness and hunger are fine', () =>{
        const petHamster = new Pet('Fido')
        petHamster.feedASnack();
        expect(petHamster.checkUp()).toBe("I'm doing just fine, I want, nor need NOTHING from you... come back when you have something worth my time")
    });
    it('Throws an error if dead', () =>{
        const pet = new Pet('Fido');
        pet.age = 30;
        expect(() => pet.checkUp()).toThrow('Your pet is DEAD! Well done... Bravo..');
    });
});

describe('The getter isAlive', () => {
    it('returns if pet is alive', () => {
        const pet = new Pet('Fido');
        pet.growUp();
        expect(pet.isAlive).toBe(true);

        const petDog = new Pet('Dog');
        petDog.age = 30;
        expect(petDog.isAlive).toBe(false);

        const petCat = new Pet('Cat')
        petCat.age = 15;
        petCat.fitness = 0;
        expect(petCat.isAlive).toBe(false);

    })
})
