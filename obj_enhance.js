console.log('------- Object Enhance -------');

function createInstructor(firstName, lastName){
    return {
      firstName: firstName,
      lastName: lastName
    }
}

const createInstructor_1 = (firstName, lastName) => { firstName, lastName; }
console.log(createInstructor('Dave', 'Matthews'));

/*
var favoriteNumber = 42;

var instructor = {
  firstName: "Colt"
}

instructor[favoriteNumber] = "That is my favorite!"
*/

const favoriteNumber_1 = 42;
const instructor_1 = {
    firstName: 'Colt',
    [favoriteNumber_1] : "That is my favorite!"
}

/*
var instructor = {
    firstName: "Colt",
    sayHi: function(){
      return "Hi!";
    },
    sayBye: function(){
      return this.firstName + " says bye!";
    }
}
*/

const instructor = {
    firstName: "Colt",
    sayHi() {return 'Hi!'},
    sayBye() {
        return this.firstName + " says bye!";
    }
}

console.log(instructor.sayHi());
console.log(instructor.sayBye());


/* This is not working
const createAnimal = (species, verb, noise) => {
    species,
    [verb]() {
        return noise;
    } 
}
*/

function createAnimal(species, verb, noise) {
    return {
        species,
        [verb]() {
            return noise;
        }
    }
}

const d = createAnimal('dog', 'bark', 'Woooof!');
console.log(d.bark());