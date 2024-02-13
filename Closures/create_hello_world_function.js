var createHelloWorld = function () {
    return function () {
        return "Hello World";
    }
}

// Test Cases
var helloWorld = createHelloWorld();
console.log(helloWorld()); // "Hello World"

var args = [1, 2, 3];
console.log(helloWorld(args)); // [1, 2, 3]
