import {StudentsType} from "../02-object/object";
import {BuildingType, CityType, HouseType} from "../02-object/02_02";

export const sum = (a: number, b: number) => {
    return a + b
}
const res = sum(sum(1, 2), sum(1, 3))


export const student: StudentsType = {
    name: 'Dima',
    age: 40,
    isActive: false,
    address: {
        streetTitle: 'Karskogo',
        city: {
            title: 'Minsk',
            countryTitle: 'Bel'

        }
    },
    technologies: [
        {
            id: 1,
            title: 'HTML'
        },
        {
            id: 2,
            title: 'CSS'
        },
        {
            id: 3,
            title: 'REACT'
        }
    ]
}

export const addSkill = (stydent: StudentsType, skill: string) => {
    stydent.technologies.push({
        id: new Date().getTime(),
        title: skill
    })
}

export const makeStudentActive = (s: StudentsType) => {
    s.isActive = true
}

export const doesStudentLiveIn = (s: StudentsType, cityName: string) => {
    return s.address.city.title === cityName
}

export const addMoneyToBudget = (building: BuildingType, budget: number) => {
    building.budget += budget

}

export const demolishHousesOnTheStreet = (c: CityType, title: string) => {
}

export const repairHouse = (house: HouseType) => {
    house.repaired = true
}

export const toHireStaff = (building: BuildingType, number: number) => {
    building.staffCount += number
}

export const toFireStaff = (building: BuildingType, number: number) => {

    building.staffCount -= number
}

export  const cteateMessage = (props: CityType) => {
    // return 'Hello ' + props.title + ' citizens!'
    return `Hello ${props.title} citizens!`

}