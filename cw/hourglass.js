function hourglass(a) {
    if (a.length < 3) {
        return 0;
    }
    var max = 0;
    for (var i = 0; i < a.length - 2; i++) {
        for (var j = 0; j < a[i].length - 2; j++) {
            var sum = a[i][j] + a[i][j + 1] + a[i][j + 2] + a[i + 1][j + 1] + a[i + 2][j] + a[i + 2][j + 1] + a[i + 2][j + 2];
            console.log('sum: ', sum);
            max = Math.max(max, sum);
        }
    }
    return max;
}

const arr = [
    [-9, -9, -9, 12],
    [-9, 0, 9, 9],
    [-9, -9, -2, 9],
    [9, 9, 9, 9],
];

console.log(hourglass(arr));
