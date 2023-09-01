const queens = []
const tributeChest = []

// function
const createQueen = (queenId, queenName) => {
    const queenObject = {
        id: queenId,
        name: queenName
    }

    queens.push(queenObject)
}

// info used to create array using callback function
createQueen(1, "Athena Perez")
createQueen(2, "Charisse Ford")
createQueen(3, "Jenna Solis")
createQueen(4, "Froggie")
createQueen(5, "Bean")

// logs created array to console
console.log(queens)

const hailTheQueen = (nameString) => {
    return `Hail Her Majesty, ${nameString}.`  // This function returns a string
}

// FOROF LOOP
for (const queenObject of queens) {
    const hailMessage = hailTheQueen(queenObject.name)
    console.log(hailMessage)
}


// const athena = hailTheQueen("Athena Perez") // Argument value is "Athena Perez"
// console.log(athena)

// const charisse = hailTheQueen("Charisse Ford") // Argument value is "Charisse Ford"
// console.log(charisse)

// const jenna = hailTheQueen("Jenna Solis") // Argument value is "Jenna Solis"
// console.log(jenna)

// const froggie = hailTheQueen("Froggie") // Argument value is "Froggie"
// console.log(froggie)

// const bean = hailTheQueen("Bean") // Argument value is "Bean"
// console.log(bean)

// const ramona = hailTheQueen("Ramona")
// console.log(ramona)

// const monica = hailTheQueen("Monica Dinglehopper")
// console.log(monica)


// function
const payTribute = (tributeId, tributeDescription, queenId) => {
    const tributeList = {
        id: tributeId,
        description: tributeDescription,
        queenId: queenId
    }

    tributeChest.push(tributeList)
}

// information to be inputted to function using function callback
payTribute(1, "Barrel of wine", 2)
payTribute(2, "Silk", 1)
payTribute(3, "Bushel of oranges", 3)
payTribute(4, "Ten gold coins", 1)

// logs created array to console
console.log(tributeChest)

// iterate the queenObject to show tribute for each one
for (const queenObject of queens) {

    //each queenObject will look at every tributeObject to see if it is hers
    for (const tributeObject of tributeChest) {
     //console.log(tributeObject)
    
     if (tributeObject.queenId === queenObject.id) {
     console.log(`${queenObject.name} has tribute ${tributeObject.description}`)
     }
    }
    }

