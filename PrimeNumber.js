function isPrime(z) {
    var flag = true;
    if (z == 0 || z == 1) {
        flag = false;
    }
    for (let y = 2; y < z; y++) {
        for (let t = 1; t <= y; t++) {
            if (t % y == 0) {
                break;
            } else if (z % y == 0) {
                flag = false;
            }
        }
    }
    return flag;
}

var userInput = +prompt('Please Enter Your Value To check Prime Number list between a range from "1" till your selected number');
var arrayToCheck = [];

for (var i = 1; i < userInput; i++) {
    if (isPrime(i) == true) {
        arrayToCheck.push(i);
    }
}

for (i = 0; i < arrayToCheck.length; i++) {
    var r = i + ')' + ' ' + arrayToCheck[i] + ', ' + ' ';
    document.write(r);
}

console.log(arrayToCheck);