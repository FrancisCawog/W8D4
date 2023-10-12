function sum() {
    let total = 0;
    for (let i = 0; i < arguments.length; i++) {
        total += arguments[i];
    }
    return total;
}

//console.log(sum(1, 2, 3, 4));

function sum(...numbers){
    return numbers.reduce((total, num) => total + num, 0);
}

// console.log(sum(1, 2, 3, 4));

function sum(...numbers) {
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
        total += numbers[i];
    }
    return total;
}

// console.log(sum(1, 2, 3, 4));


// ES5 syntax
// ============================================
// Function.prototype.myBind = function (context) {
//     const that = this;
//     const args = Array.prototype.slice.call(arguments, 1);

//     return function(){ 
//         const args2 = Array.prototype.slice.call(arguments);
//         return that.apply(context, args.concat(args2));
//     }
// }

// ES6 syntax 
// =============================================
Function.prototype.myBind = function(context, ...bindTimeArgs){
    let that = this;
    return function(...callTimeArgs){
        return that.apply(context, bindTimeArgs.concat(callTimeArgs) )
    }
}
        
class Cat {
    constructor(name) {
        this.name = name;
    }

    says(sound, person) {
        console.log(`${this.name} says ${sound} to ${person}!`);
        return true;
    }}
  
    class Dog {
    constructor(name) {
        this.name = name;
      }
    }
  
const markov = new Cat("Markov");
const pavlov = new Dog("Pavlov");

markov.says("meow", "Ned");
markov.says.myBind(pavlov, "meow", "Kush")();
markov.says.myBind(pavlov)("meow", "a tree");
markov.says.myBind(pavlov, "meow")("Markov");

const notMarkovSays = markov.says.myBind(pavlov);
notMarkovSays("meow", "me");
  


