var expect = function (val) {
    return {
        toBe: function (check) {
            if (val === check) {
                return true;
            }
            else {
                throw "Not Equal"
            }
        },
        notToBe: function (check) {
            if (val !== check) {
                return true;
            }
            else {
                throw "Equal"
            }
        }
    }
}

var a = expect(10).toBe(10);
var b = expect(10).notToBe(11);
console.log(a); // true
console.log(b); // true

var c = expect(10).toBe(11); // "Not Equal"
var d = expect(10).notToBe(10); // "Equal"
console.log(c);
console.log(d);