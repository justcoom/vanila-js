export type UserType = {
    name: string
    hair: number
    address: {city: string, house?: number}
}

export type LaptopType = {
    title: string
}

export type UserWithLaptopType = UserType & {
    laptop: LaptopType
}

export type UserWithBooksAndSkillsType = UserType & {
    books: Array<string>
    skillsLevels?: number[]
}

type CompanyType = { id: number, title: string };
export type WithCompaniesType = {
    companies: Array<CompanyType>
}

export function makeHairstyle(u: UserType, power: number) {
    const copy = {
        ...u,
        hair: u.hair / 2
    }
    return copy
}

export function moveUser(u: UserWithLaptopType, city: string) {
    return {
        ...u,
        address: {
            ...u.address,
            city: city
        }
    }
}

export const upgradeUserLaptop = (u: UserWithLaptopType, laptopTitle: string) => {
    return {
        ...u,
        laptop: {
            ...u.laptop,
            title: laptopTitle
        }
    }
}

export function moveUserToOtherHouse(u: UserWithLaptopType & UserWithBooksAndSkillsType, house: number) {
    return {
        ...u,
        address: {
            ...u.address,
            house: house
        }
    }
}

export const addNewBooksToUser = (u: UserWithLaptopType & UserWithBooksAndSkillsType, books: Array<string>) => {
    return {
        ...u,
        books: [...u.books, ...books]
    }
}

export function updateBook(u: UserWithLaptopType & UserWithBooksAndSkillsType, oldBook: string, newBook: string) {
     return  {
        ...u,
        books: u.books.map(b => b === oldBook ? newBook : b)
    }
}

export const updateSkillLevel = (u: UserWithLaptopType & UserWithBooksAndSkillsType, oldSkill: number, newSkill: number) => {
    return {
        ...u,
        skillsLevels: u.skillsLevels.map(s => s === oldSkill ? newSkill : s)
    }
}

export const removeBook = (u: UserWithLaptopType & UserWithBooksAndSkillsType, removedSkill: string) => {
    return {
        ...u,
        books: u.books.filter(b => b !== removedSkill)
    }
}

export const addCompany = (u: UserWithLaptopType & WithCompaniesType, company: {id: number, title: string}) => {
    return {
        ...u,
        companies: [...u.companies, company]
    }
}

export const updateCompanyTitle = (u: WithCompaniesType, deleteID: number, newCompanyTitle: string) => {
    return {
        ...u,
        companies: u.companies.map(c => c.id === deleteID ? {...c, title: newCompanyTitle} : c)
    }
}

export const updateCompanyTitle2 = (companies: {[key: string]: CompanyType[]}, userName: string,
                                    companyId: number,
                                    newTitle: string) => {
    let companyCopy = {...companies}
    companyCopy[userName] = companyCopy[userName].map(c => c.id === companyId
        ? {...c, title: newTitle}
        : c)
    return companyCopy
}