const numbers = [1, 2, 3, 4, 5, 6, 33, 33]

console.log(numbers.find(n => n === 3))

function itIncludes(array, value) {
    for (const arrayElement of array) {
        if (arrayElement === value) {
            return true
        }
    }
    return false
}

console.log(itIncludes(numbers, 3))

function indexOf(array, searchEl, fromIndex) {
    for (let i = fromIndex || 0; i < array.length; i++) {
        if (array[i] === searchEl) {
            return i
        }
    }
    return -1
}

console.log(indexOf(numbers, 2, 1))

function itFilter(array, callback) {
    const newArr = []
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i]) === true) {
            newArr.push(array[i])
        }
    }
    return newArr
}

console.log(itFilter(numbers, n => !(n % 2)))

console.log(numbers.map(n => Math.sqrt(n)))

console.log(numbers.map(n => n * n))

function itMap(array, callback) {
    const newArr = []
    for (let i = 0; i < array.length; i++) {
        newArr.push(callback(array[i]))
    }
    return newArr
}

console.log(itMap(numbers, n => n ** 2))

console.log(itMap(numbers, n => n === 5 ? n + 20 : n))


const test = [23, 24, 33, 4, 5, 6, 33, 23, 24, 24, 4, 5, 5, 4, 33]

function forReduceTest (acc,el) {
    // if (acc[el] !== undefined) {
    //     acc[el] += 1
    // } else {
    //     acc[el] = 1
    // }
    // return acc
    acc[el] = (acc[el] || 0) + 1
    return acc
}

console.log(test.reduce(forReduceTest, {}))

const myReduce = (array, callback, acc) => {
    for (let i = 0; i < array.length; i++) {
        callback(acc, array[i])
    }
    return acc
}

console.log(myReduce(test, forReduceTest, {}))
