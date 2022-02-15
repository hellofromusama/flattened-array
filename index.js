let arr = [
    [1, 2],
    [3, 4],
    [5, 6, [7, 8], 9],
    [10, 11, 12, 13],
];

function flatten(arr) {
    return arr.reduce((acc, curr) => {
        return acc.concat(curr);
    }, []);
}

function customflat(arr, depth = 1) { 
    let result = [];
    arr.forEach((arr) => {
        if (Array.isArray(arr) && depth > 0) {
             result.push(...customflat(arr, depth - 1));
        } else {
            result.push(arr);
        }
    });
    return result;
}
console.log(customflat(arr, 2));