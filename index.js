const express = require('express')
const app = express()
const port = 3000

app.get('/api/program', (req, res) => {
	const programs = [
		{ id: 1, name: 'Program 1' },
		{ id: 2, name: 'Program 2' },
		{ id: 3, name: 'Program 3' },
	]
	res.send(programs)
})

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`)
})
