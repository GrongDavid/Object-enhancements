function createInstructor(firstName, lastName){
    return {firstName, lastName};
}

let favoriteNumber = 42;
const instructor = {
    firstName: "Colt",
    [favoriteNumber]: "this is my favorite!"
}

const instructorTwo = {
    firstName: "Colt",
    sayHi(){
        return "Hi!";
    },
    sayBye(){
        return this.firstName + " says bye!";
    }
}

function createAnimal(species, verb, noise){
    return {
        species,
        [verb](){
            return noise;
        }
     
    }
}

const d = createAnimal("dog", "bark", "Wooof");
console.log(d.bark());