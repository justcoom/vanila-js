export function sum(a: number, b: number) {
    return a + b;
}

export function mult(a: number, b: number) {
    return a * b;
}

export const splitIntoWords = (sentence: string) => {
    const words =  sentence.toLowerCase().split(" ")
    return words.filter((word) => word !== "" && word !== "-")
        .map((word) => word.replace("!", "").replace(".", ""))
}