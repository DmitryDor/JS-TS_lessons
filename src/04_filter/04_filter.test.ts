import {courses, CoursesType} from "./04_filter";


test('shold take old man older 90', () => {
    const ages = [18, 20, 25, 2, 90, 100, 84, 45, 56, 14]

    const oldAges = ages.filter(age => age > 90)

    expect(oldAges.length).toBe(1)
    expect(oldAges[0]).toBe(100)
})


test('shold take cheap courses', () => {
    const courses: CoursesType = [
        {title: 'CSS', price: 110},
        {title: 'JS', price: 200},
        {title: 'React', price: 150}
    ]

    const cheapCourses = courses.filter(course => course.price < 160)


    expect(cheapCourses.length).toBe(2)
    expect(cheapCourses[0].price).toBe(110)
    expect(cheapCourses[1].price).toBe(150)
})

test('get only completed tasks', () => {
const tasks = [
    {id: 1, title: 'CSS', isDone: false},
    {id: 2, title: 'HTML', isDone: true},
    {id: 3, title: 'React', isDone: false},
    {id: 4, title: 'JS', isDone: true},
    {id: 5, title: 'Redux', isDone: false},
]

    const completedTasks = tasks.filter( t => t.isDone)

    expect(completedTasks.length).toBe(2)
    expect(completedTasks[0].title).toBe('HTML')
    expect(completedTasks[1].title).toBe('JS')
    expect(completedTasks[0].id).toBe(2)
    expect(completedTasks[1].id).toBe(4)

})


test('get only uncompleted tasks', () => {
    const tasks = [
        {id: 1, title: 'CSS', isDone: false},
        {id: 2, title: 'HTML', isDone: true},
        {id: 3, title: 'React', isDone: false},
        {id: 4, title: 'JS', isDone: true},
        {id: 5, title: 'Redux', isDone: false},
    ]

    const unCompletedTasks = tasks.filter( t => !t.isDone )

    expect(unCompletedTasks.length).toBe(3)
    expect(unCompletedTasks[0].title).toBe('CSS')
    expect(unCompletedTasks[1].title).toBe('React')
    expect(unCompletedTasks[0].id).toBe(1)
    expect(unCompletedTasks[1].id).toBe(3)
    expect(unCompletedTasks[2].id).toBe(5)

})

