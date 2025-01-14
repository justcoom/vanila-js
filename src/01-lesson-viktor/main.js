const user = {name: "Bob", age: 23} // ссылка на объект

const user2 = {...user}

console.log(user === user2)
console.log(user)
console.log(user2)

const users = [
    {
        id: 1,
        name: 'Bob',
        isStudent: true,
    },
    {
        id: 2,
        name: 'Alex',
        isStudent: true,
    },
    {
        id: 3,
        name: 'Ann',
        isStudent: true,
    },
    {
        id: 4,
        name: 'Donald',
        isStudent: true,
    },
]
// create
const newUser = {
    id: 5,
    name: "Mikita",
    isStudent: false
}

const newUsers = [...users, newUser]
console.log(newUsers)

//delete id = 3

let index;
const copyUsers = [...users]
for (let i = 0; i < copyUsers.length; i++) {
    if(copyUsers[i].id === 3) {
        index = i
    }
}

copyUsers.splice(index, 1)
console.log(users.filter(el => el.id !== 3))

//update id = 2 => isStudent = false

console.log(users.map(el => el.id === 2 ? {...el, isStudent: false} : el)) // условная копия

const copy = [...users] // поверхностная копия

const fullCopy = users.map(el => ({...el})) // глубокая копия
const fullCopy2 = structuredClone(users)

const superUser = {
    id: 10,
    name: 'Clementina DuBuque',
    username: 'Moriah.Stanton',
    email: 'Rey.Padberg@karina.biz',
    address: {
        street: 'Kattie Turnpike', // morgan street
        suite: 'Suite 198',
        city: 'Lebsackbury',
        zipcode: '31428-2261',
        geo: {
            lat: '-38.2386', // -39
            lng: '57.2232', // -36
        },
    },
    phone: '024-648-3804',
    website: 'ambrose.net',
    company: {
        name: 'Hoeger LLC',
        catchPhrase: 'Centralized empowering task-force',
        bs: 'target end-to-end models', // change on frontend developer
    },
}

const superUserCopy = {...superUser, company: {...superUser.company, bs: "frontend developer"}}
console.log(superUserCopy)

const superUserCopy2 = {...superUserCopy, address: {...superUserCopy.address, street: "Morgan Street"}}

console.log(superUserCopy2)

const superUserCopy3 = {...superUserCopy2, address: {...superUserCopy2.address, geo: {...superUserCopy2.address.geo, lat: "-39", lng: "-36"}}}

console.log(superUserCopy3)

// деструктурирующее присваивание
const array = ["Bob", "Alex"]

const  [bob, alex] = array
const {name, age} = user

console.log(bob)
console.log(alex)