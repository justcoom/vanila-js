import {StudentType} from "../02/02";
import {CityType, GovernmentBuildingsType, HouseType} from "../02/02_02";


export const sum = (a: number, b: number) => {
    return a + b;
}

export const addSkill = (student: StudentType, skill: string) => {
    student.technologies.push({
        id: new Date().getTime(),
        title: skill
    })
}

export function makeStudentActive(s: StudentType) {
    s.isActive = true
}

export function doesStudentLiveIn(s: StudentType, cityName: string) {
    return s.address.city.title === cityName
}

export const addMoneyToBudget = (building: GovernmentBuildingsType, budget: number) => {
    building.budget += budget
}

export const repairHouse = (house: HouseType) => {
    house.repaired = true
}

export function toFireStaff(governmentBuildings: GovernmentBuildingsType, stuffNumberToFire: number) {
    governmentBuildings.staffCount -= stuffNumberToFire
}

export const toHireStaff = (governmentBuildings: GovernmentBuildingsType, stuffNumberToHire: number) => {
    governmentBuildings.staffCount += stuffNumberToHire
}

export function createMessage(props: CityType) {
    return `Hello ${props.title} citizens`
}