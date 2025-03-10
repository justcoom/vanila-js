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

async function loadJson(url) {
    const response = await fetch(url)
    if (response.status === 200) {
        return await response.json();
    } else {
        throw new Error(response.status);
    }
}

loadJson('no-such-user.json').catch((err) => alert(err)); // Error: 404