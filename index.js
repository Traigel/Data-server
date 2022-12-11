const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const dataRouter = require('./data-router')

const app = express()
const PORT = process.env.PORT || 5000

app.use(cors())

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send('Hello, my <a href="https://traigel.github.io/Portfolio">portfolio</a> ');
});

app.use('/documents', (req, res) => {
    res.send('This endpoint is under development');
})

app.use('/data', dataRouter)

app.use((req, res) => {
    res.send(404);
})

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
})