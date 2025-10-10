// Import Express
const express = require('express')

// Create an Express app
const app = express()


// Define routes here:

app.get('/greetings/:name', (req, res) => {
    const name = req.params.name
    res.send(`Hello there, ${name}!`)
})

app.get('/roll/:number', (req, res) => {
    const number = parseInt(req.params.number)

    if (!number && number !== 0) {
        return res.send(`You must specify a number.`)
    }

    const randomNumber = Math.floor(Math.random() * (number + 1))
    res.send(`You rolled ${randomNumber}`)
})


app.get('/collectibles/:index', (req, res) => {

    const collectibles = [
        { name: 'shiny ball', price: 5.95 },
        { name: 'autographed picture of a dog', price: 10 },
        { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
    ];

    const index = parseInt(req.params.index)
    const item = collectibles[index]

    if (!item) {
        return res.send('This item is not yet in stock. Check back soon!')
    }
    res.send(`So, you want the ${item.name}? For ${item.price}, it can be yours!`)

})

app.get('/shoes', (req, res) => {

    const shoes = [
        { name: "Birkenstocks", price: 50, type: "sandal" },
        { name: "Air Jordans", price: 500, type: "sneaker" },
        { name: "Air Mahomeses", price: 501, type: "sneaker" },
        { name: "Utility Boots", price: 20, type: "boot" },
        { name: "Velcro Sandals", price: 15, type: "sandal" },
        { name: "Jet Boots", price: 1000, type: "boot" },
        { name: "Fifty-Inch Heels", price: 175, type: "heel" }
    ];

    const minPrice = req.query['min-price']
    const maxPrice = req.query['max-price']
    const type = req.query.type

    let results = shoes

    if (minPrice) {
        const minNum = Number(minPrice)
        results = results.filter(shoe => shoe.price >= minNum)
    }

    if (maxPrice) {
        const maxNum = Number(maxPrice)
        results = results.filter(shoe => shoe.price <= maxNum)
    }

    if (type) {
        const typeLowerCase = type.toLowerCase()
        results = results.filter(shoe => shoe.type.toLowerCase() === typeLowerCase)
    }

    res.json(results)

})

app.listen(3000, () => {
    console.log('Listening on port 3000')
})
app.listen(3005, () => {
  console.log('Listening on port 3005')
})