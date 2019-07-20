//isEven

// function isEven(num) {
//     if (num % 2 === 0) {
//         return true;
//     }
//     else {
//         return false;
//     }
// }

function isEven(num) {
    return num % 2 === 0;
}

//factorial

function factorial(num) {
    if (num === 0) {
        return 1;
    }
    var result = 1;
    for(var i = 2; i <= num; i++) {
        result = result * i;
    }
    return result;
}

//kebabToSnake

function kebabToSnake(str) {
    var newStr = str.replace(/-/g , "_");
    return newStr;
}