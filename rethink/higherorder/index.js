const getItem = predicate => arr => predicate;
const add = a => b => a + b;

function nativeAdd(a) {
    return function (b) {
        return a + b;
    }
}

const addOne = nativeAdd(1);
addOne(2);

function nativeFilter(arr, predicate) {
    if (!arr || !arr.length) {
        return [];
    }
    const temp = [];
    let index = 0;
    while(index < arr.length - 1) {
        if (predicate(arr[index])) {
            temp.push(arr[index]);
        }
        index++;
    }
    return temp;
}

const arr = [1,2,3,4,5,6,7];
console.log(nativeFilter(arr, item => item > 3));

const reducer = (state = 0, aciton) => {
    switch(aciton.type) {
        case 'I':
            return state + 1;
        case 'D':
            return state - 1;
        default:
            return state;
    }
}
// remove switch case
const switchcase = cases => defaultKeys => key;