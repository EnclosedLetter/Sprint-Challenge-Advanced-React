const math = required ('./math')

const actual = math.sum(2, 3)

const expected = 5

if (actual !== expected){
    throw new Error('Expected ${expected}, but got ${actual}!')
}

console.log("All test have passed")