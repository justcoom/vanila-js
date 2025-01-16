// PUSH

const numbers = [1, 2, 3, 4, 5, 6]

// numbers.push(7)
// console.log(numbers)

// myPush(numbers, 7, 8 , 9)
// console.log(numbers)

function myPush(array, ...number) {
    for (let i = 0; i < number.length; i++) {
        array[array.length] = number[i]
    }
    // for (const el of number) {
    //     array[array.length] = el
    // }
    return array.length
}

// const newArray = numbers.concat(7,8,[9,10], 11, [12, 13])
// console.log(newArray)

function myConcat(array, ...params) {
    const newArray = []
    for (const el of array) {
        newArray[newArray.length] = el
    }

    for (const el of params) {
        if (Array.isArray(el)) {
            for (const subEl of el) {
                newArray[newArray.length] = subEl
            }
        } else {
            newArray[newArray.length] = el
        }
    }

    return newArray
}

console.log(myConcat(numbers, 7, [8, 9], [100, 200, 100]))

function myPop(array) {
    if (!array.length) {
        return undefined
    }
    const lastElement = array[array.length - 1]
    array.length = array.length - 1
    return lastElement
}

console.log(myPop(numbers))
console.log(myPop([]))
console.log(numbers)

function myShift(array) {
    const firstEl = array[0]

    for (let i = 1; i < array.length; i++) {
        array[i - 1] = array[i]
    }
    array.length = array.length - 1
    return firstEl
}

console.log(myShift(numbers))
console.log(numbers)

function myUnshift(array, ...rest) {

    const originalLength = array.length
    array.length = array.length + rest.length

    for (let i = originalLength - 1; i >= 0; i--) {
        array[i + rest.length] = array[i]
        if (i < rest.length) {
            array[i] = rest[i]
        }
    }
    return array.length
}

myUnshift(numbers, 10, 20)
console.log(numbers)
console.log(numbers.length)

function myReverse (array) {
    for (let i = 0; i < array.length / 2; i++) {
        let temp = array[array.length - 1 - i]
        array[array.length - 1 - i] = array[i]
        array[i] = temp
    }
    return array
}

console.log(myReverse(numbers))







