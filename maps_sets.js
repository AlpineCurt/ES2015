console.log('------- Maps and Sets -------');

// Question 1
// a set containing (1, 2, 3, 4)

// Question 2
// returns string "referee" WRONG
// returns string "ref" because it ignores the duplicate letters when creating a set out of "referee"

// Question 3
// a single key:value pair of [1, 2, 3] : false
// Apparently that's wrong.  Why is it creating a new key value pair when the key is used twice.

// hasDuplicate
const hasDuplicate = (arr) => {arr.length !== new Set(arr).size};

// vowelCount
const vowelCount = (string) => {
    const vowels = new Set("aeiou");
    const vowelMap = new Map();
    for (letter of string) {
        if (vowels.has(letter.toLowerCase())) {
            if (vowelMap.has(letter)) {
                vowelMap.set(letter.toLowerCase(), vowelMap.get(letter.toLowerCase()) + 1);
            } else {
                vowelMap.set(letter.toLowerCase(), 1);
            }
        }
    }
    return vowelMap;
}

console.log(vowelCount('awesome'));
console.log(vowelCount('Colt'));