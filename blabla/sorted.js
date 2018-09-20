var obj = {
    LY: 43,
    US: 19,
    IN: 395,
    IR: 32,
    EG: 12,
    SA: 17
};
var array = [];
for (var key in obj) {
    array.push({ name: key, value: obj[key] });
}
// console.log(array); sorted by number

var sortedArr = array.sort((a, b) => {
    return b.value - a.value;
});
console.log(sortedArr);
// Sorted by name :
var employees = [];
employees[0] = { name: 'B', age: 32, retiredate: 'March 12, 2014' };
employees[1] = { name: 'C', age: 17, retiredate: 'June 2, 2023' };
employees[2] = { name: 'A', age: 58, retiredate: 'December 20, 2036' };
employees[3] = { name: 'D', age: 62, retiredate: 'April 30, 2020' };

employees.sort(function(a, b) {
    var nameA = a.name.toLowerCase(),
        nameB = b.name.toLowerCase();
    if (nameA < nameB)
        //sort string ascending
        return -1;
    if (nameA > nameB) return 1;
    return 0; //default return value (no sorting)
});
console.log(employees);
