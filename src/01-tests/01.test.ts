import {mult, splitIntoWords, sum} from "./01";

let a: number
let b: number
let c: number

beforeEach(() => {
    a = 1;
    b = 2;
    c = 3;
})

test("sum should be correct", () => {

    const result = sum(a, b)
    const result2 = sum(b, c)

    expect(result).toBe(3)
    expect(result2).toBe(5)
})

test("multiply should be correct", () => {

    const result = mult(a, b)
    const result2 = mult(b, c)

    expect(result).toBe(2)
    expect(result2).toBe(6)
})

test("splitting into words should be correct", () => {
    // подготовительные данные
    const sent1 = "Hello my friends!"
    const sent2 = "js - the  best programming language."
    // действия
    const result = splitIntoWords(sent1)
    const result2 = splitIntoWords(sent2)
    // одижаемый результат
    expect(result.length).toBe(3)
    expect(result[0]).toBe("hello")
    expect(result[1]).toBe("my")
    expect(result[2]).toBe("friends")

    expect(result2.length).toBe(5)
    expect(result2[0]).toBe("js")
    expect(result2[1]).toBe("the")
    expect(result2[2]).toBe("best")
    expect(result2[3]).toBe("programming")
    expect(result2[4]).toBe("language")
})