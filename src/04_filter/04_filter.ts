export const ages = [18, 20, 25, 2, 90, 100, 84, 45, 56, 14]

const predicate = (age: number) => {
    return age > 90
}
const oldAge = [100]

export type CourseType = {
    title: string
    price: number
}

export type CoursesType = Array<CourseType>

export const courses: CoursesType = [
    {title: 'CSS', price: 110},
    {title: 'JS', price: 200},
    {title: 'React', price: 150}
]

const cheapPredicate = (course: CourseType) => {
    return course.price < 160
}

const cheapCourse = [
    {title: 'CSS', price: 110},
    {title: 'React', price: 150}
]

