var createCounter = function (init) {
    let count = init;
    return {
        increment: function () {
            count++;
            return count
        },
        reset: function () {
            count = init;
            return count
        },
        decrement: function () {
            count--;
            return count
        }

    }

};