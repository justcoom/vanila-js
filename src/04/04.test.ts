test("should take old mans older 90", () => {
    const ages = [18, 20, 22, 1, 100, 90, 14]

    const oldAges = ages.filter(age => age > 90);

    expect(oldAges.length).toBe(1);
    expect(oldAges[0]).toBe(100);
})

test("should take courses cheaper 160", () => {
    const courses = [
        {title: "css", price: 110},
        {title: "JS", price: 200},
        {title: "React", price: 150}
    ]

    const cheapCoursee = courses.filter(course => course.price < 160);

    expect(cheapCoursee.length).toBe(2);
    expect(cheapCoursee[0].title).toBe("css");
    expect(cheapCoursee[1].title).toBe("React");
})

test("get only completed tasks", () => {
    const tasks = [
        {id: 1, title: "Bread", isDone: false},
        {id: 2, title: "Milk", isDone: true},
        {id: 3, title: "Solt", isDone: false},
        {id: 4, title: "Sugar", isDone: true},
        {id: 5, title: "Peper", isDone: false}
    ]

    const compeletedTask = tasks.filter(task => task.isDone)

    expect(compeletedTask.length).toBe(2)
    expect(compeletedTask[0].id).toBe(2)
    expect(compeletedTask[1].id).toBe(4)
})