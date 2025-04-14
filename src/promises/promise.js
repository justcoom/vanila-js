// const promise = new Promise((res, rej) => {
//     setTimeout(() => {
//         rej('err')
//     }, 3000)
// })
//
// const promise2 = new Promise((res, rej) => {
//     setTimeout(() => {
//         res('data2')
//     }, 5000)
// })
//
// promise.then((data) => {
//     console.log(data)
//     return 10
// }).catch((err) => {
//     console.log(err)
//     return 20
// })
//
// promise2.then((data) => {
//     console.log(data)
//     return 10
// }).catch((err) => {
//     console.log(err)
//     return 20
// })
//
// const allPromise = Promise.all([promise, promise2])
//
// allPromise
//     .then((data) => {
//         console.log(data[0], '2', data[1], 'finish')
//     })
//     .catch((err) => {
//         console.log(err, 'err')
//     })
//
// console.log(Promise.resolve(100))
//
// new Promise((res, rej) => {
//     res({name: "Valera", id: 1})
// })
//     .then((data) => console.log(data.name))

// async function func() {
//     console.log(await promise)
// }
//
// func().catch(err => console.log(err))

// async function loadJson(url) {
//     const response = await fetch(url)
//     if (response.status === 200) {
//         return await response.json();
//     } else {
//         throw new Error(response.status);
//     }
// }
//
// loadJson('no-such-user.json').catch((err) => alert(err)); // Error: 404
//
// setTimeout(() => console.log(1), 0)
// console.log(2);
// Promise.resolve(console.log(4));
// (() => console.log(3))();

// 1 4 5 2 3
// 2 5 3 1
// 2 3 4 1 5

// async function sleep (ms) {
//     return new Promise((res, rej) => {
//         setTimeout(() => {
//             res()
//             console.log(ms)
//         }, ms)
//     })
// }
//
// async function show() {
//     await sleep(3000)
//     await sleep(2000)
//     await sleep(1000)
// }
//
// show()

// console.log("Start");
//
// setTimeout(() => console.log("Timeout"), 0);
//
// Promise.resolve()
//     .then(() => {
//         console.log("Promise 1");
//         return new Promise((res, rej) => {
//             res()
//             setTimeout(() => console.log("Timeout inside Promise"), 0);
//         })
//     })
//     .then(() => console.log("Promise 2"));
//
// console.log("End");


// function a() {
//     setTimeout(() => {
//         console.log('a')
//     })
// }
// function b() {
//     console.log('b')
// }
//
// a()
//
// new Promise(function (res, rej) {
//     console.log('create promise')
//     res()
// }).then(() => {
//     setTimeout(function timer() {
//         console.log('timeout')
//     }, 0)
// })
//
// b()

// console.log(1)
//
// setTimeout(() => {
//     console.log(2)
//     Promise.resolve().then(() => {
//         console.log(3)
//     })
// })
//
// new Promise((res, rej) => {
//     console.log(4)
//     res(5)
// }).then(data => {
//     console.log(data)
//
//     Promise.resolve()
//         .then(() => {
//             console.log(6)
//         })
//         .then(() => {
//             console.log(7)
//
//             setTimeout(() => {
//                 console.log(8)
//             }, 0)
//         })
// })
//
// setTimeout(() => {
//     console.log(9)
// })
//
// console.log(10)

// 1 4 10 5 6 7 2 3 9 8

// setTimeout(() => {
//     console.log('1')
// }, 0)
//
// setTimeout(() => {
//     console.log('2')
// }, 1000)
//
// new Promise(function (res, rej) {
//     console.log('3')
//     res()
//     console.log('4')
// }).then(() => {
//     console.log('5')
// })
//
// console.log('6')
//
// async function test1() {
//     console.log('7')
//     await test2()
//     console.log('8')
// }
//
// async function test2() {
//     console.log('9')
// }
//
// test1()
//
// console.log('10')

// 3 4 6 7 9 10 5 8 1 2

async function first() {
    console.log(9)
    await Promise.resolve(2).then(r => console.log(r))
    console.log(0)
    await Promise.resolve(3).then(r => console.log(r))
}

async function second() {
    console.log(10)
    await Promise.resolve(4).then(r => console.log(r))
    console.log(11)
    await Promise.resolve(5).then(r => console.log(r))
}

first()
second()

const promises = Promise.resolve('new Promise')
promises.then(str => console.log(str))


// 9 10 2 4 new Promise 0 11 3 5

//