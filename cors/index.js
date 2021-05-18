const cors = require('cors')

const corsOptions = {
  origin: ['http://localhost:4200'],
  optionsSuccessStatus: 200
}

module.exports = cors(corsOptions)
