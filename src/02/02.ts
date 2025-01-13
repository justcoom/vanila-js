type LocalCityType = {
    title: string
    country: string
}

type AddressType = {
    streetTitle: string
    city: LocalCityType
}

type TechnologiesType = {
    id: number
    title: string
}

export type StudentType = {
    id: number
    name: string
    age: number
    isActive: boolean
    address: AddressType
    technologies: TechnologiesType[]
}

export const student: StudentType = {
    id: 1,
    name: "Dimych",
    age: 32,
    isActive: false,
    address: {
        streetTitle: "surganova 2",
        city: {
            title: "Minsk",
            country: "Belarus",
        }
    },
    technologies: [
        {
            id: 1,
            title: "HTMl",
        },
        {
            id: 2,
            title: "CSS",
        },
        {
            id: 3,
            title: "React",
        }
    ]
}

console.log(student.age)
console.log(student.name)
console.log(student.address.city.country)
console.log(student.technologies[2].title)