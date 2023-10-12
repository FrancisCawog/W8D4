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







// Function.prototype.myBind = function (context) {
//     var fn = this;
//     var bindArgs = Array.prototype.slice.call(arguments, 1); // Get the arguments to bind

//     return function () {
//         var callArgs = Array.prototype.slice.call(arguments); // Get the arguments when the bound function is called
//         return fn.apply(context, bindArgs.concat(callArgs)); // Concatenate and call the original function with both sets of arguments
//     };
// };

// Function.prototype.myBind = function (context, ...bindArgs) {
//     var fn = this;

//     return function (...callArgs) {
//         return fn.apply(context, bindArgs.concat(callArgs)); // Concatenate and call the original function with both sets of arguments
//     };
// };



Function.prototype.myBind = function (context) {
    let that = this;
    that.apply(context, arguments);
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
  