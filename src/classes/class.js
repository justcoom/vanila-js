class User {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    say() {
        console.log(`my name is ${this.name}`)
    }
}

const firstUser = new User('Andrew', 30)

class Programmer extends User {
    constructor(name, age, isMaried) {
        super(name, age);
    }
    code() {
        console.log('i am programmer')
    }
}

const programmer = new Programmer('alex', 25)

console.log(programmer instanceof User) // should be false, but be got true!!!
console.log(programmer.__proto__ === Programmer.prototype)