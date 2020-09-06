import {ManType} from "./Destructuring";


let props: ManType;

beforeEach(() => {
    props = {
        name: 'Dima',
        age: 40,
        lessons: [{title: '1', name: 'AAA'}, {title: '2', name: 'BBB'}, {title: '3', name: 'CCC'}],
        adress: {
            street: {
                nameStreet: 'Karckogo'
            }
        }
    }
})


test(" ", () => {


    // let age = props.age
    // let lessons = props.lessons ---ниже строчка заменяет эти две

    const {age, lessons} = props
    const {nameStreet} = props.adress.street

    let a = props.age
    let l = props.lessons

    expect(age).toBe(40)
    expect(lessons.length).toBe(3)

    expect(a).toBe(40)
    expect(l.length).toBe(3)
    expect(nameStreet).toBe('Karckogo')
})

test(" ", () => {
    const l1 = props.lessons[0]
    const l2 = props.lessons[1]

    // const [ls1, ls2] = props.lessons

    const [ls1, ...propsRest] = props.lessons


    //Если нам нужно достать только 3 lesson
    const [, , ls3] = props.lessons

    expect(l1.title).toBe('1')
    expect(l2.title).toBe('2')


    expect(ls1.title).toBe('1')
    // expect(ls2.title).toBe('2')
    expect(propsRest.length).toBe(2)
    expect(ls3.title).toBe('3')
    expect(propsRest[0].title).toBe('2')

    expect(propsRest[0]).toStrictEqual({ name: 'BBB', title: '2'})
})