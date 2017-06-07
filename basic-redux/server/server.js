const express = require('express')
const PORT = 4000
const app = express()

const data = [
	{
		user: 'alan',
		age: 22,
		favoriteFoods: ['pizza', 'bagels']
	},
	{
		user: 'bob',
		age: 33,
		favoriteFoods: ['broccoli', 'carrots']
	},
	{
		user: 'carly',
		age: 44,
		favoriteFoods: ['hummus', 'pita']
	}
]

app.get('/api', (req, res) => {
	res.json(data)
})

app.listen(PORT, () => {
	console.log(`listening on port: ${PORT}`)
})
