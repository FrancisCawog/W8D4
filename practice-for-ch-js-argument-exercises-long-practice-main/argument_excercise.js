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
//         //let args = Array.from(arguments);
//         // args = args.slice(1)

//     return function(){ 
//         const args2 = Array.from(arguments);
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

// markov.says("meow", "Ned");
// markov.says.myBind(pavlov, "meow", "Kush")();
// markov.says.myBind(pavlov)("meow", "a tree");
// markov.says.myBind(pavlov, "meow")("Markov");

// const notMarkovSays = markov.says.myBind(pavlov);
// notMarkovSays("meow", "me");
  

function continuousSum(num1) {
    const numbers = [num1];

    return function _curriedSum(num) {
        numbers.push(num);

    
    console.log(numbers.reduce((acc, el) => acc + el));

    return _curriedSum;
    }
}

// continuousSum(5)(30)(20)(1);


Function.prototype.curry = function (numArgs) {
    const numbers = [];
    let that = this;


    return function _curriedSum(num) {
        numbers.push(num);

        if(numbers.length === numArgs){
            return that.apply(null, numbers);
        }else{
            return _curriedSum
        }
    }
}

function fourAdd(num1, num2, num3, num4){
    return num1 + num2 + num3 + num4
}

const sums = fourAdd.curry(4);
console.log(sums(5)(30)(20)(1));

