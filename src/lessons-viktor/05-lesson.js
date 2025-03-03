// функция мемоизации memoize, которая принимает функцию, вызов которой надо замемоизировать. Если функция, которую мы мемоизируем вызывается повторно с одним и тем же аргументом, то вычисление не происходит, а сразу же возвращаем ее результат (из кэша)


const sqr = (num) => {
    console.log("вычисление")
    return num * num
}

const memoize = (func) => {
    const cashe = {}
    return (number) => {
        if (number in cashe) {
            return cashe[number]
        }
        return cashe[number] = func(number)
    }
}

const memoizedSqr = memoize(sqr);

console.log(memoizedSqr(5))
console.log(memoizedSqr(5))
console.log(memoizedSqr(6))
console.log(memoizedSqr(6))


//написать функцию которая рекурсивно обойдет объект и выдаст массив результатов (примитивов) заданного ключа
const companyData = {
    name: "TechCorp",
    ceo: {
        name: "Alice Johnson",
        salary: 200000,
    },
    engineering: {
        head: {
            name: "Bob Smith",
            salary: 150000,
        },
        backend: {
            lead: {
                name: "Carol Taylor",
                salary: 140000,
            },
            developer: {
                name: "Dave Brown",
                salary: 120000,
            },
        },
        frontend: {
            lead: {
                name: "Eve Davis",
                salary: 135000,
            },
        },
    },
    hr: {
        head: {
            name: "Frank Wilson",
            salary: 130000,
        },
        specialist: {
            name: "Grace Lee",
            salary: 85000,
        },
        specialist2: [
            {name: "Grace Lee", salary: 1000},
            {salary: 85000},
        ],
    },
};

const findKeyValues = (obj, key) => {
    const arr = []
    if (typeof obj !== "object" || obj === null) {
        return {}
    }
    
    for (const k in obj) {
        if (k === key) {
            arr.push(obj[k])
        } else if (typeof obj[k] === 'object' && obj[k] !== null) {
            arr.push(...findKeyValues(obj[k], key))
        }
    }
    return arr
}

const res = findKeyValues(companyData, 'salary')
console.log(res) // [200000, 150000,140000, 120000,135000, 130000,85000]
