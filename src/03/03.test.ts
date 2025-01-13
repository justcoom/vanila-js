import {StudentType} from "../02/02";
import {addSkill, doesStudentLiveIn, makeStudentActive} from "./03";

let student: StudentType;

beforeEach(() => {
    student = {
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
})

test("new tech skill should be added to student", () => {
    expect(student.technologies.length).toBe(3);
    addSkill(student, "JS");
    expect(student.technologies.length).toBe(4)
    expect(student.technologies[3].title).toBe("JS")
    expect(student.technologies[3].id).toBeDefined()
})

test("student should be made active", () => {
    expect(student.isActive).toBe(false);
    makeStudentActive(student)
    expect(student.isActive).toBe(true);
})

test("student should lives in city", () => {
    let res1 = doesStudentLiveIn(student, "Moscow")
    let res2 = doesStudentLiveIn(student, "Minsk");
    expect(res1).toBe(false);
    expect(res2).toBe(true);
})