function filterOutOdds() {
    var nums = Array.prototype.slice.call(arguments);
    return nums.filter(function(num) {
        return num % 2 === 0
    });
}

const filterOutOdds2 = (...nums) => nums.filter(num => num % 2 === 0);
console.log(filterOutOdds2(1, 2, 3, 4, 5, 6, 7, 8, 9));

const findMin = (...nums) => Math.min(...nums);
console.log(findMin(2, 45, -4, 32, -34));

const mergeObjects = (objA, objB) => ({...objA, ...objB});
const objA = {a: 1, b: 2};
const objB = {c: 3, d: 4, wtf: 'omglol'};
console.log(mergeObjects(objA, objB));

const doubleAndReturnArgs = (arr, ...nums) => [...arr, ...nums.map(num => num * 2)];
console.log(doubleAndReturnArgs([1, 2], 3, 2, 4));

const removeRandom = (items) => {
    // This doesn't work because the .spice() modifies the original array
    let newItems = items;
    let min = 0;
    let max = items.length - 1;
    let randomIndex = Math.floor(Math.random() * max - min);
    newItems.splice(randomIndex, 1);
    return newItems;
}

const removeRandom2 = (items) => {
    let randomIndex = Math.floor(Math.random() * items.length);
    return [...items.slice(0, randomIndex), ...items.slice(randomIndex + 1)];
}
const testArray1 = ['a', 'b', 'c', 'd', 'e', 'f'];
//console.log('removeRandom ' + removeRandom(testArray1));
console.log('removeRandom2 ' + removeRandom2(testArray1));
console.log('testArray1 ' + testArray1);


const extend = (array1, array2) => [...array1, ...array2];
const testArray2 = ['g', 'h', 'i', 'j'];
console.log(extend(testArray1, testArray2));


const addKeyVal = (obj, key, val) => ({...obj, [key]: val});
// why doesn't this work? (after looking at answers, i was REALLY close)
const addKeyVal2 = (obj, key, val) => {
    let newObj = {...obj};
    newObj[key] = val;
    return newObj
}
const testObj = {name: 'Fred', age: 33};
console.log('addKeyVal ', addKeyVal(testObj, 'job', 'burger flipper'));
console.log('addKeyVal2 ', addKeyVal2(testObj, 'job', 'Master WalMart greeter'));


const removeKey = (obj, key) => {
    let keysToKeep = Array.from(Object.keys(obj)).filter(keyCheck => keyCheck !== key);
    //console.log('keysToKeep ', keysToKeep);
    let newObj = {}
    keysToKeep.forEach(eachKey => newObj[eachKey] = obj[eachKey]);
    return newObj;
}
console.log(removeKey(testObj, 'age'));


const combine = (obj1, obj2) => ({...obj1, ...obj2});
const testObj1 = {name : 'Jess', age: 'unknown'};
const testObj2 = {job : 'Stop/Slow Sign holder', salary : 25000};
console.log(combine(testObj1, testObj2));


const update = (obj, key, value) => {
    let newObj = {...obj};
    newObj[key] = value;
    return newObj;
}
console.log(update(testObj1, 'job', 'Sign Twirler'));