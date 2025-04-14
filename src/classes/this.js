const obj = {
    name: 'Alice',
    greet: function() {
        setTimeout(function() {
            console.log(this.name);
        }, 100);
    }
};
obj.greet.call(obj); // Что выведет? Как исправить?

// 2. Стрелочные функции vs function
// const obj = {
//     name: 'Bob',
//     regular: function() {
//         console.log(this.name);
//     },
//     arrow: () => {
//         console.log(this.name);
//     }
// };
// obj.regular(); // Bob
// obj.arrow();   // window|undefined
// window.name = 'Global';
// obj.arrow();   // global

// 3. Метод объекта как колбэк
// const button = {
//     text: 'Click me',
//     click: function() {
//         console.log(this.text);
//     }
// };
//
// document.addEventListener('click', button.click.bind(button)); // Что выведет при клике?
// console.log(button)

// const obj = {
//     name: 'Charlie',
//     logName: function() {
//         console.log(this.name);
//         return this;
//     },
//     logNameTwice: function() {
//         this.logName().logName();
//     }
// }; // charlie charlie
// obj.logNameTwice(); // Что будет?

// function Person(name) {
//     this.name = name;
//     setTimeout(() => {
//         console.log(this.name);
//     }, 100);
// }
// new Person('Dave'); // Что выведет? Как исправить?

// const obj1 = { name: 'Eve' };
// const obj2 = { name: 'Frank' };
//
// function logName(prefix) {
//     console.log(prefix + this.name);
// }
//
// logName.call(obj1, 'Hello, '); // ?
// logName.apply(obj2, ['Hi, ']); // ?

// const obj = {
//     name: 'Grace',
//     logName: function() {
//         console.log(this.name);
//     }
// };
//
// const boundLog = obj.logName.bind(obj);
// boundLog.call({ name: 'Hank' }); // Что выведет?

// class Counter {
//     constructor() {
//         this.count = 0;
//     }
//     increment() {
//         this.count++;
//         console.log(this.count);
//     }
// }
//
// const counter = new Counter();
// document.addEventListener('click', counter.increment); // Что будет при клике?

//
const library = {
    name: 'City Library',
    books: ['Book 1', 'Book 2'],
    listBooks: function() {
        this.books.forEach(function (book) {
            console.log(this.name + ': ' + book);
        }, this); // interesting!!!
    }
};
library.listBooks(); // Что выведет? Как исправить?

const dataFetcher = {
    data: null,
    fetch: function() {
        return new Promise(function (resolve) {
            setTimeout(() => {
                this.data = 'Loaded';
                resolve(this.data);
            }, 100);
        });
    }
};
dataFetcher.fetch().then(console.log); // Что выведет? Как исправить?