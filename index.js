const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const db = require('./db')
const profileRouter = require('./routes/profile-router')

const app = express()
const apiPort = 5000

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use('/api', profileRouter)

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))



// const express = require('express')
// const cors = require('cors')
// const corsMiddleware = require('./cors')

// const profileRouter = require('./routes/profile-router')

// const app = express()
// const apiPort = 5000

// app.use(express.urlencoded({ extended: true }))
// app.use(cors())
// app.use(express.json())

// app.get('/', corsMiddleware, (req, res) => { res.send('Here Slash!') })

// app.use('/api', profileRouter)

// app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))

// module.exports = app