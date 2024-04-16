// Write a function that finds the maximum and minimum elements in an array.

function findMinandMax(arr) {
    if (arr.length == 0) {
        return "empty array"
    }

    let min = arr[0];
    let max = arr[0];

    for (let ind = 1; ind < arr.length; ind++) {
        if (arr[ind] < min) {
            min = arr[ind];
        }
        if (arr[ind] > max) {
            max = arr[ind];
        }
    }
    return { min, max }
}

const arr = Array.from({ length: 50 }, () => Math.floor(Math.random() * 1000));
console.log(...arr);
console.log(findMinandMax(arr));