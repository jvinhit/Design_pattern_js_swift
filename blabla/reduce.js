var dataString = [
    { category: 'Search Engines', hits: 5, bytes: 50189 },
    { category: 'Content Server', hits: 1, bytes: 17308 },
    { category: 'Content Server', hits: 1, bytes: 47412 },
    { category: 'Search Engines', hits: 1, bytes: 7601 },
    { category: 'Business', hits: 1, bytes: 2847 },
    { category: 'Internet Services', hits: 1, bytes: 3690 }
];
var opt = dataString.reduce((accumultor, value, index) => {
    if (!accumultor[value.category]) {
        accumultor[value.category] = {
            category: value.category,
            hits: 0
        };
        //result.push(accumultor[value.category]);
    }
    accumultor[value.category].hits += value.hits;
    //console.log(index + ' : ', accumultor);
    return accumultor;
}, {});
console.log(opt);

let data = [
    {
        country: 'China',
        pop: 1
    },
    {
        country: 'China',
        pop: 2
    },
    {
        country: 'USA',
        pop: 3
    },
    {
        country: 'Indonesia',
        pop: 4
    }
];

// total sum if country != china
let sum = data.reduce((accumultor, value) => {
    if (accumultor[value.country] === undefined) {
        accumultor[value.country] = {
            pop: 0
        };
    }
    accumultor[value.country].pop += value.pop;
    return accumultor;
}, {});

console.log(sum);

var easyData = [1, 2, 2, 3, 4];
let easyResult = easyData.reduce((acc, val) => {
    return acc + val;
}, 0);
console.log(easyResult);
