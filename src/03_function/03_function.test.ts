import {StudentsType} from "../02-object/object";
import {addSkill, doesStudentLiveIn, makeStudentActive} from "./03_function";

let stutdent: StudentsType;

beforeEach( () => {
    stutdent = {
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
})

test("new tech skill should be added", ()=> {
    expect(stutdent.technologies.length).toBe(3)
    addSkill(stutdent, 'JS');
    expect(stutdent.technologies.length).toBe(4)
    expect(stutdent.technologies[3].title).toBe('JS')
    expect(stutdent.technologies[3].id).toBeDefined()

})

test("student is active ", ()=> {

    expect(stutdent.isActive).toBe(false)

    makeStudentActive(stutdent)

    expect(stutdent.isActive).toBe(true)

})


test("student lives in city? ", ()=> {

    let result1 = doesStudentLiveIn(stutdent, 'Kiev')
    let result2 = doesStudentLiveIn(stutdent, 'Minsk')


    expect(result1).toBe(false)
    expect(result2).toBe(true)

})
