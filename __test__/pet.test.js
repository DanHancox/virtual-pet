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
    })
})

describe('feed your pet', () => {
    it('pet hunger decreased', () => {
        const pet = new Pet('Fido');
        pet.walk();
        expect(pet.hunger).toEqual(5);      
        pet.snack();
        expect(pet.hunger).toEqual(2);
    })
    it('pet hunger decreased', () => {
        const pet = new Pet('Fido');
            pet.walk();
            pet.walk();
            expect(pet.hunger).toEqual(10);      
            pet.snack ();
            expect(pet.hunger).toEqual(7)
    }); 
});

describe('lasagna in park', () => {
    it('pet hunger decreased', () => {
        const pet = new Pet('Fido');
        pet.walk();
        pet.walk();
        expect(pet.hunger).toEqual(10);      
        pet.lasagna();
        expect(pet.hunger).toEqual(0);
    });
});

describe('check the health status of your pet', () => {
    it('if fitness and hunger reach danger limits', () =>{
        const pet = new Pet('Fido');
        pet.growUp();
        pet.fitness = 3; 
        expect(pet.checkUp()).toEqual('Time for my lazy owner to walk me for a walk and feed me, made the commitment?? make sure you keep it!')
        const petCat = new Pet('Fido')
        petCat.fitness = 3;
        expect(petCat.checkUp()).toEqual("I need to walk... why don't you ever walk me?")
        const petDog = new Pet('Fido')
        petDog.hunger = 5;
        expect(petDog.checkUp()).toEqual("Please feed me, you never stop eating, why can't I??")
        const petHamster = new Pet('Fido')
        expect(petHamster.checkUp()).toEqual("I'm doing just fine, I want, nor need NOTHING from you... come back when you have something worth my time")
    })
});




