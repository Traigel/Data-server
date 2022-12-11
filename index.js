const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const dataRouter = require('./routers/data-router')
const documents1 = require('./routers/documents1-router')
const documents2 = require('./routers/documents2-router')
const cancel = require('./routers/cancel-router')

const app = express()
const PORT = process.env.PORT || 5000

app.use(cors())

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send('Hello, I am a developer. My <a href="https://traigel.github.io/Portfolio">portfolio</a>. <br\> <a href="https://github.com/Traigel/Data-server">More information about this server</a>');
});

app.use('/documents1', documents1)

app.use('/documents2', documents2)

app.use('/cancel', cancel)

app.use('/data', dataRouter)

app.use((req, res) => {
    res.send(404);
})

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
})