import {BuildingType, HouseType} from "../02-object/02_02";

export type ManType = {
    name: string
    age: number
}

export type PeopleType = Array<ManType>

const people: PeopleType = [
    {name: 'Andrey Ivanov', age: 33},
    {name: 'Alexandr Petrov', age: 24},
    {name: 'Dmitry Sidorov', age: 18}
]



const dimychTransformator = (man: ManType) => {
    return {
        stack: ['css, html', 'js', 'tdd', 'react'],
        firstName: man.name.split(' ')[0],
        lastName: man.name.split(' ')[1]
    }
}

const devs = [
    {
        stack: ['css, html', 'js', 'tdd', 'react'],
        firstName: 'Andrey', lastName: 'Ivanov'
    },
    {
        stack: ['css, html', 'js', 'tdd', 'react'],
        firstName: 'Alexandr', lastName: 'Petrov'
    },
    {
        stack: ['css, html', 'js', 'tdd', 'react'],
        firstName: 'Dmitry', lastName: 'Sidorov'
    }
]


const dev2 = [
    dimychTransformator(people[0]),
    dimychTransformator(people[1]),
    dimychTransformator(people[2])
]

const dev3 = people.map(dimychTransformator)

const dev4 = people.map( man => ({
        stack: ['css, html', 'js', 'tdd', 'react'],
        firstName: man.name.split(' ')[0],
        lastName: man.name.split(' ')[1]
}))

let messanges = people.map( m => `Hello ${m.name.split(' ')[0]} your are welcome`)
console.log(messanges)

export const createGreetingMessage = (m: PeopleType) => {
    return people.map( m => `Hello ${m.name.split(' ')[0]} your are welcome`)
}

export  const getStreetsTitlesOfGovermenrsBuildings = (building: Array<BuildingType>) => {
    return building.map( (b => b.addres.street.title))
}


export  const getStreetsTitlesOfHouses = (houses: Array<HouseType>) => {
    return houses.map( h => h.adress.street.title)
}

export  const createMessages = (houses: Array<HouseType>) => {
    let callbackfn = (g: HouseType) => `Hello guys from ${g.adress.street.title}`;
    return houses.map( callbackfn )
}



















