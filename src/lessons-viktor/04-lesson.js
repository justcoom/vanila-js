const todolistId_1 = crypto.randomUUID()
const todolistId_2 = crypto.randomUUID()

const todolists = [
    {
        id: todolistId_1,
        title: "What to learn",
    },
    {
        id: todolistId_2,
        title: "What to buy",
    },
]

const tasks = {
    [todolistId_1]: [
        {
            id: 1,
            title: "HTML",
            isDone: true,
        },
        {
            id: 2,
            title: "CSS",
            isDone: true,
        },
        {
            id: 3,
            title: "javaScript",
            isDone: false,
        },
    ],
    [todolistId_2]: [
        {
            id: crypto.randomUUID(),
            title: "Milk",
            isDone: true,
        },
        {
            id: 4,
            title: "Water",
            isDone: false,
        },
        {
            id: crypto.randomUUID(),
            title: "Meat",
            isDone: false,
        },
    ],
}

console.log(tasks[todolistId_2])

// todolist 1 => id === 2 isDone => false

console.log({
    ...tasks, [todolistId_1]: tasks[todolistId_1]
        .map(t => t.id === 2 ? {...t, isDone: false} : t)
})

// td2 => id === 4 delete

console.log(
    {
        ...tasks,
        [todolistId_2]: tasks[todolistId_2].filter(t => t.id !== 4)
    }
)

// td1 => addTask

const addTask = {
    id: 4,
    title: "Beer",
    isDone: true,
}

console.log(
    {
        ...tasks,
        [todolistId_1]: [...tasks[todolistId_1], addTask]
    }
)


// map is associative array
const map = new Map()

map.set({name: "Bob"}, {name: "Alex"})
map.set([1, 2, 3, 4, 5], () => {})
console.log(map)

// Массив с дубликатами
let numbers = [1, 2, 3, 4, 2, 3, 5, 6, 1]

// Создаем Set для фильтрации уникальных значений
let uniqueNumbers = new Set(numbers)
console.log(uniqueNumbers)

// Преобразуем Set обратно в массив
let uniqueNumbersArray = [...uniqueNumbers]

console.log(uniqueNumbersArray)
// Выведет [1, 2, 3, 4, 5, 6]
