const list = [
    {
        id: 1,
        item: "milk",
        price: 4
    },
    {
        id: 2,
        item: "eggs",
        price: 9
    },
    {
        id: 3,
        item: "bread",
        price: 3
    }
]

for (const food of list) {
    if (food.price > 8) {
        console.log(food)
    }
}
