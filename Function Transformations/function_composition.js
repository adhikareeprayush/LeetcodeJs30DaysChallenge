var compose = function (functions) {
    if (functions.length == 0) {
        return function (x) {
            return x
        }
    }
    else {
        return function (x) {
            let result = functions[functions.length - 1](x)
            for (let i = functions.length - 2; i >= 0; i--) {
                result = functions[i](result)
            }
            return result
        }
    }
};