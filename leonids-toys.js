const toys = [
    {
        id: 1,
        name: "Tommy, the Dinosaur",
        maker: "DinosInc",
        price: 20.50,
        height: 15,
        length: 20,
        width: 6
    },
    {
        id: 2,
        name: "Teddy, the Bear",
        maker: "Mother Nature",
        price: 19.99,
        height: 12,
        length: 4,
        width: 6
    },
    {
        id: 3,
        name: "Ricky, the Toy Car",
        maker: "Vroom Vroom",
        price: 9.99,
        height: 2,
        length: 4,
        width: 2
    }
]

const LegoSet = {
    id: 4,
    name: "The Best Lego Collection Ever",
    maker: "Lego Inc",
    price: 29.99,
    height: 20,
    length: 25,
    width: 6
}

toys.push(LegoSet)

const Airplane = {
    id: 5,
    name: "The Mini Aviator Kit",
    maker: "Tots with Wings",
    price: 9.99,
    height: 4,
    length: 9,
    width: 4
}

toys.push(Airplane)

console.log("*********************")
console.log("Leonid's Bespoke Toys")

// for (const toy of toys) {
//     console.log(" ")
//     console.log(toy.name)
//     console.log(toy.maker)
//     console.log(`Price is $${toy.price}.`)
//     console.log(" ")
// }

for (const toy of toys) {
    toy.price = toy.price * 1.05
    console.log(" ")
    console.log(`${toy.name} by ${toy.maker} costs ${toy.price}.`)
}


console.log("*********************")

const toyToFind = 5;

for (const toy of toys) {
    if (toy.id === toyToFind) {
        console.log(" ")
        console.log("Inventory Check (Hard-Coded)")
        console.log(`${toy.name} is in our inventory:`)
        console.log(`${toy.name} by ${toy.maker} costs ${toy.price}.`)
    }
}

console.log(" ")
console.log(".............")
console.log(" ")

const addToyToInventory = (toyObject) => {
    // get max current id
    const lastIndex = toys.length - 1
    const currentLastToy = toys[lastIndex]
    const maxID = currentLastToy.id

    // increase current max id by 1

    const idForNewToy = maxID + 1

    // Add the id property to new toy object

    toyObject.id = idForNewToy

    // Add toy object to the array

    toys.push(toyObject)
}

const newToy = {
    name: "Hand-whittled Whistle",
    maker: "Whilly's Wooden Whistles",
    price: 4.99,
    height: 3,
    length: 10,
    width: 5
}

// function invoked here
addToyToInventory(newToy)

console.log(toys)