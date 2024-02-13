var counter = function (n) {
    let count = n;
    return function () {
        return count++;
    }
}

var c = counter(10);
console.log(c()); // 10
console.log(c()); // 11
console.log(c()); // 12