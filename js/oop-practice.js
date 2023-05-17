// STEP 1
/* class Cat {
    constructor(name) {
        this.name = name;
    }

}

const Dog = class {
    constructor(name) {
        this.name = name;
    }

} */
// STEP 2
/* const siamese = new cat('Siamese');
const pomeranian = new dog('Pomeranian'); */
// STEP 3
/* class Animal {
    constructor(){
        console.log('The Animal has been created');
    }
} */

// STEP 4
/* class Animal {
    constructor(name, message){
        this.name = name;
        this.message = message;
        console.log(message);
    }
}
const horse = new animal('Horse', 'The Animal has been created'); */
// STEP 5
/* class Animal {
    constructor(type, breed, color, height, length) {
        this.type = type;
        this.breed = breed;
        this.color = color;
        this.height = height;
        this.length = length;
    }
} */
  
// STEP 6
/* const animal = new Animal('cat', 'domestic', 'black', '25cm', '50cm');

for (let i in animal) {
    console.log(i + ": " + animal[i]);
} */
// STEP 7
/* class Animal {
    constructor(type, breed, color, height, length) {
        this.type = type;
        this.breed = breed;
        this.color = color;
        this.height = height;
        this.length = length;
    }
    speak() {
        if(this.type === 'dog') {
            return `The ${this.color} dog is barking!`;
        }
        else if(this.type === 'cat') {
            return `The ${this.color} cat is meowing!`;
        }
    }
}

const cat = new Animal('cat', 'domestic', 'tuxedo', '15in', '25in');
console.log(cat.speak()); */
// STEP 8
/* class Animal {
    #type;
    #breed;
    #color;
    #height;
    #length;

    constructor(type, breed, color, height, length){
        this.#type = type;
        this.#breed = breed;
        this.#color = color;
        this.#height = height;
        this.#length = length;
    }

    #checkType(){
        if(this.#type === 'dog'){
            return 'dog';
        }
        else{
            return 'cat';
        }
    }
    speak(){
        return `The ${this.#checkType()} has made a noise!`;
    }
}
const doggie = new Animal ('dog', 'pomeranian', 'white', '16in', '24in');
console.log(doggie.speak()); */
// STEP 9
