type LessonType = {
    title: string
    name?: string
}

export type ManType = {
    name: string
    age: number
    lessons: Array<LessonType>
    address: {street: {title: string}}
}

let props: ManType;
beforeEach(()=>{
    props = {
        name: "Dimych",
        age: 32,
        lessons: [{title: "1"}, {title: "2"}, {title: "3", name: "react"}],
        address: {
            street: {
                title: "Nezavisimosti"
            }
        }
    }
})

test("123", () => {


    // const age = man.age
    // const lessons = man.lessons

    const {age, lessons, address: {street: {title}}} = props
    // const {title} = props.address.street

    expect(age).toBe(32)
    expect(lessons.length).toBe(3)
    expect(title).toBe("Nezavisimosti")
})

test("222222", () => {

    const l1 = props.lessons[0]
    const l2 = props.lessons[1]

    const [ls1, ...restLessons] = props.lessons

    expect(l1.title).toBe("1")
    expect(l2.title).toBe("2")

    expect(ls1.title).toBe("1")

    expect(restLessons.length).toBe(2)
    expect(restLessons[1]).toStrictEqual({title: "3", name: "react"})

})