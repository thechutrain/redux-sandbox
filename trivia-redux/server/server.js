const express = require('express')
const PORT = 4000
const app = express()

const questions = [
	{
		question: 'What is your favorite color?',
		choices: ['blue', 'green', 'yellow', 'red'],
		correct: 0
	},
	{
		question: 'Who was the first president of the United States of America?',
		choices: [
			'Thomas Jefferson',
			'John Adams',
			'George Washington',
			'Benjamin Franklin'
		],
		correct: 2
	}
]

app.get('/api/questions', (req, res) => {
	res.json(questions)
})

app.listen(PORT, () => {
	console.log(`listening on port: ${PORT}`)
})
