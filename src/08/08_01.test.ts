import {
    addCompany,
    addNewBooksToUser,
    makeHairstyle,
    moveUser,
    moveUserToOtherHouse, removeBook, updateBook, updateCompanyTitle, updateCompanyTitle2, updateSkillLevel,
    upgradeUserLaptop,
    UserType,
    UserWithBooksAndSkillsType,
    UserWithLaptopType, WithCompaniesType
} from "./08_01";


test("reference type test", () => {
    const user: UserType = {
        name: "Dimych",
        hair: 32,
        address: {
            city: "Minsk"
        },
    }

    const awesomeUser = makeHairstyle(user, 2)
    user.address.city = "Kiev"

    expect(awesomeUser.hair).toBe(16)
    expect(user.hair).toBe(32)
    expect(awesomeUser.address).toBe(user.address)

})

test("change address", () => {
    const user: UserWithLaptopType = {
        name: "Dimych",
        hair: 32,
        address: {
            city: "Minsk",
            house: 12,
        },
        laptop: {
            title: "Zenbook"
        }
    }

    const movedUser = moveUser(user, "Kiev")

    expect(movedUser).not.toBe(user)
    expect(user.address).not.toBe(movedUser.address)
    expect(movedUser.address.city).toBe("Kiev")
    expect(movedUser.laptop.title).toBe(user.laptop.title)
    expect(movedUser.address.house).toBe(12)

})

test("upgrade laptop to macbook", () => {
    const user: UserWithLaptopType = {
        name: "Dimych",
        hair: 32,
        address: {
            city: "Minsk",
            house: 12,
        },
        laptop: {
            title: "Zenbook"
        }
    }

    const userCopy = upgradeUserLaptop(user, "Macbook")

    expect(userCopy).not.toBe(user)
    expect(user.address).toBe(userCopy.address)
    expect(userCopy.laptop.title).toBe('Macbook')
    expect(user.laptop.title).toBe('Zenbook')
    expect(userCopy.laptop.title).not.toBe(user.laptop.title)

})

test("move to other house", () => {
    const user: UserWithLaptopType & UserWithBooksAndSkillsType = {
        name: "Dimych",
        hair: 32,
        address: {
            city: "Minsk",
            house: 12,
        },
        laptop: {
            title: "Zenbook"
        },
        books: ["CSS", "HTML", "js", "react"]
    }

    const userCopy = moveUserToOtherHouse(user, 99)

    expect(userCopy).not.toBe(user)
    expect(user.books).toBe(userCopy.books)
    expect(userCopy.laptop).toBe(user.laptop)
    expect(userCopy.address.house).toBe(99)
    expect(userCopy.address.house).not.toBe(user.address.house)

})

test("add new books to user", () => {
    const user: UserWithLaptopType & UserWithBooksAndSkillsType = {
        name: "Dimych",
        hair: 32,
        address: {
            city: "Minsk",
            house: 12,
        },
        laptop: {
            title: "Zenbook"
        },
        books: ["CSS", "HTML", "js", "react"]
    }

    const userCopy = addNewBooksToUser(user, ['ts', 'rest api'])

    expect(userCopy).not.toBe(user)
    expect(userCopy.laptop).toBe(user.laptop)
    expect(userCopy.address).toBe(user.address)

    expect(userCopy.books).not.toBe(user.books)
    expect(userCopy.books[4]).toBe('ts')
    expect(userCopy.books[5]).toBe('rest api')

})

test("update js to ts", () => {
    const user: UserWithLaptopType & UserWithBooksAndSkillsType = {
        name: "Dimych",
        hair: 32,
        address: {
            city: "Minsk",
            house: 12,
        },
        laptop: {
            title: "Zenbook"
        },
        books: ["CSS", "HTML", "js", "react"],
        skillsLevels: [20, 45, 39, 85],
    }

    const userCopy = updateBook(user, 'js', 'ts')

    expect(userCopy).not.toBe(user)
    expect(userCopy.laptop).toBe(user.laptop)
    expect(userCopy.address).toBe(user.address)

    expect(userCopy.books).not.toBe(user.books)
    expect(userCopy.books[2]).toBe('ts')

})

test("update skills", () => {
    const user: UserWithLaptopType & UserWithBooksAndSkillsType = {
        name: "Dimych",
        hair: 32,
        address: {
            city: "Minsk",
            house: 12,
        },
        laptop: {
            title: "Zenbook"
        },
        books: ["CSS", "HTML", "js", "react"],
        skillsLevels: [20, 45, 39, 85],
    }

    const userCopy = updateSkillLevel(user, 45, 90)

    expect(userCopy).not.toBe(user)
    expect(userCopy.laptop).toBe(user.laptop)
    expect(userCopy.address).toBe(user.address)

    expect(userCopy.skillsLevels).not.toBe(user.skillsLevels)
    expect(userCopy.skillsLevels[1]).toBe(90)

})

test("remove js book", () => {
    const user: UserWithLaptopType & UserWithBooksAndSkillsType = {
        name: "Dimych",
        hair: 32,
        address: {
            city: "Minsk",
            house: 12,
        },
        laptop: {
            title: "Zenbook"
        },
        books: ["CSS", "HTML", "js", "react"],
        skillsLevels: [20, 45, 39, 85],
    }

    const userCopy = removeBook(user, 'js')

    expect(userCopy).not.toBe(user)
    expect(userCopy.laptop).toBe(user.laptop)
    expect(userCopy.address).toBe(user.address)

    expect(userCopy.books).not.toBe(user.books)
    expect(userCopy.books[2]).toBe("react")

})

test("add new company", () => {
    const user: UserWithLaptopType & WithCompaniesType = {
        name: "Dimych",
        hair: 32,
        address: {
            city: "Minsk",
            house: 12,
        },
        laptop: {
            title: "Zenbook"
        },
        companies: [{id: 1, title: "Епам"}, {id: 2, title: "IT-INCUBATOR"}]
    }

    const userCopy = addCompany(user, {id: 3, title: "Google"})

    expect(userCopy).not.toBe(user)
    expect(userCopy.laptop).toBe(user.laptop)
    expect(userCopy.address).toBe(user.address)

    expect(userCopy.companies).not.toBe(user.companies)
    expect(userCopy.companies[2]).toEqual({id: 3, title: "Google"})

})

test("update company title", () => {
    const user: UserWithLaptopType & WithCompaniesType = {
        name: "Dimych",
        hair: 32,
        address: {
            city: "Minsk",
            house: 12,
        },
        laptop: {
            title: "Zenbook"
        },
        companies: [{id: 1, title: "Епам"}, {id: 2, title: "IT-INCUBATOR"}]
    }

    const userCopy = updateCompanyTitle(user, 1, 'Epam') as UserWithLaptopType & WithCompaniesType

    expect(userCopy).not.toBe(user)
    expect(userCopy.address).toBe(user.address)
    expect(userCopy.companies).not.toBe(user.companies)
    expect(userCopy.companies[0].title).toBe("Epam")

})

test("update company title2", () => {

    let companies = {
        "Dimych": [{id: 1, title: "Епам"}, {id: 2, title: "IT-INCUBATOR"}],
        "Artem": [{id: 2, title: "IT-INCUBATOR"}]
    }

    const copy = updateCompanyTitle2(companies,
        "Dimych", 1, "EPAM")
    expect(copy['Dimych']).not.toBe(companies["Dimych"])
    expect(copy['Artem']).toBe(companies["Artem"])
    expect(copy['Dimych'][0].title).toBe("EPAM")

})