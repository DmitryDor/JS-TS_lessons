
type TechType = {
    id: number
    title: string
}
type TechnologiesType = Array<TechType>
type LocalCityType = {
    title: string
    countryTitle: string
}
type AddressType = {
    streetTitle: string
    city: LocalCityType
}
export type StudentsType = {
     name: string
    age: number
    isActive: boolean
    address: AddressType
    technologies: TechnologiesType
}


export const students: StudentsType = {
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


console.log(students.age)
console.log(students['isActive'])
console.log(students.address.city.title)
console.log(students.technologies[2].title)