import {ManType} from "./05_01";

let people: ManType[];

beforeEach(() => {
    people = [
        {name: "Andrew Ivanov", age: 33},
        {name: "Alexander Petrov", age: 24},
        {name: "Dmitriy Sidorov", age: 18}
    ]
})

test("should be array of greeting messages", () => {
    const messages = people.map(man => `Hello ${man.name.split(" ")[0]}. Welcome to IT-Incubator`);

    expect(messages.length).toBe(3)
    expect(messages[0]).toBe("Hello Andrew. Welcome to IT-Incubator")
    expect(messages[1]).toBe("Hello Alexander. Welcome to IT-Incubator")
    expect(messages[2]).toBe("Hello Dmitriy. Welcome to IT-Incubator")

})