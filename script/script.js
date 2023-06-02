//////////////////////////// Closure ///////////////////////
/**
 * Closure example
 * @returns
 */
function outerFunction() {
    const outer = 'This is outer variable.';

    function innerFunction() {
        printResult('Closure: ' + outer);
    }

    return innerFunction;
}

///////////////////////// Promise /////////////////////////
/**
 * Promise example
 * @returns
 */
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = { id: 1, name: 'Iris' };
            resolve(data);
        }, 1000);
    });
}

////////////////////////// Prototypal inheritance ///////////////////////
function Animal(name) {
    this.name = name;
}
Animal.prototype.greet = function () {
    console.log("Hello world");
}

function Dog(name, breed) {
    Animal.call(this, name);
    this.breed = breed;
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
Dog.prototype.bark = function () {
    console.log('Woof');
}

///////////////////////////////// Event Loop ////////////////////////////////
/**
 * Event Sequences
 * @returns
 */
function EventLoop() {
    console.log('Start');
    
    setTimeout(() => {console.log('Timeout 1')}, 0)
    setTimeout(() => {console.log('Timeout 2')}, 0);

    Promise.resolve.then(() => console.log('Promise completed'));

    console.log('End');
}

/////////////////////////////////// Generators ////////////////////////////////
/**
 * Generator
 * @param {*} start 
 * @param {*} end 
 */
function countUp(start, end) {
    for(let i = start; i <= end; i++) {
        yield i;
    }
}

/////////////////////////////////// Asynchronous Iteration ////////////////////////////////
async function getData() {
    const data = [1, 2, 3, 4, 5];
    for(const item of data) {
        await new Promise((resolve) => setTimeout(resolve, 100));
        yield item;
    }
}




/**
 * Print the result into HTML Element.
 * @param {*} arg 
 */
function printResult(arg) {
    document.getElementById('root').innerHTML = arg;
}

function main() {
    outerFunction();
    fetchData()
        .then((data) => console.log('Promise: ', data))
        .catch((error) => console.log('Promise: error ', error.message))
        .finally(() => console.log('Promise: fetch operation complete'));

    
    const animal = new Animal('Max');
    const dog = new Dog('Buddy', 'Labrator');
    animal.greet();
    dog.greet();
    dog.bark();

    EventLoop();

    const generator = countUp(1, 5);
    for(const num of generator) {
        console.log(num);
    }

    (async () => {
        for await (const value of getData()) {
            console.log(value);
        }
    })
}