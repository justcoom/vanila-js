function incrementAge(u: Usertype) {
    u.age++
}

type Usertype = {
    name: string
    age: number
    address: {title: string}
}

test("reference type test", () => {
    const user: Usertype = {
        name: "Dimych",
        age: 32,
        address: {
            title: "Minsk"
        },
    }

    incrementAge(user)

    expect(user.age).toBe(33)

    const superman = user
    superman.age = 1000
    expect(user.age).toBe(1000)


})

test("array reference test", () => {
    const users = [
        {
            name: "Dimych",
            age: 32
        },
        {
            name: "Kate",
            age: 32
        }
    ]
    const admins = users
    admins.push({name: "fake", age: 10})

    expect(users[2]).toStrictEqual({name: "fake", age: 10})


})

test("value type test", () => {
    const usersCount = 100;
    let adminsCount = usersCount;

    adminsCount = adminsCount + 1
    expect(usersCount).toBe(100)


})

test("reference type test 2", () => {
    const address = {
        title: "Minsk"
    }

    const user: Usertype = {
        name: "Dimych",
        age: 32,
        address: address
    }

    const user2: Usertype = {
        name: "Natasha",
        age: 30,
        address: address
    }

    address.title = "Moscow"

    expect(user.address.title).toBe("Moscow")
    expect(user.address).toBe(user2.address)


})

test("reference type test array", () => {
    const address = {
        title: "Minsk"
    }

    const user: Usertype = {
        name: "Dimych",
        age: 32,
        address: address
    }

    const user2: Usertype = {
        name: "Natasha",
        age: 30,
        address: address
    }

    const users = [user, user2, {name: "Misha", age: 4, address: address}]

    const admins = [user, user2]

    admins[0].name = 'Dmitry'

    address.title = "Moscow"

    expect(users[0].name).toBe("Dmitry")
    expect(user.name).toBe('Dmitry')


})

test("sort array test", ()=> {
    const letters = ['c', 'd', 'a', 'z', 'e']

    letters.sort()

    expect(letters).toEqual(['a', 'c', 'd', 'e', 'z'])
})