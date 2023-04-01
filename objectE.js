


// #1

function createInstructor(firstName , lastName){
    return {
      firstName: firstName,
      lastName: lastName
    }
  }


//# 2

let favoriteNumber = 42;
 

const instructor = {
  firstName: "Colt",
  [ favoriteNumber]: "That is my favorite!"
}


// #3

const instructor2 = {
    firstName: "William",
    sayHi(){
      return "Ello Gov'na!";
    },
    sayBye(){
      return this.firstName + " Cherry'Oh!";
    }
  }



// #4

const d = createAnimal("dog", "bark", "Woooof!")
d.bark()  

const c = createAnimal("cat", "meow", "MiiYAAowoWo")
c.meow() 

function createAnimal(species, verb, noise){
  return {
    species,
    [verb](){
      return noise;
    }
  }
}