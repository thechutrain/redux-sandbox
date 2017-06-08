const express = require('express')
const PORT = 4000
const app = express()

const pricing = {
	apple: 0.5,
	banana: 0.35,
	cantaloupe: 2.5
}

app.get('/api/pricing', (req, res) => {
	res.json(pricing)
})

app.listen(PORT, () => {
	console.log(`listening on port: ${PORT}`)
})
