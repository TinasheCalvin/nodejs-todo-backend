const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const cors = require('cors')
const taskRouter = require('./routes/task')

dotenv.config()

const app = express()

// defining middleware to handle json payloads
app.use(express.json({ extended: true }))

// defining middleware for cors
app.use(cors())

app.use('/tasks', taskRouter)

let port = process.env.PORT || 80

mongoose.set('strictQuery', false)

// making the db connection and starting the server
mongoose.connect(process.env.MONGO_DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB successfully'))
.catch(err => console.error(err))

app.listen(port, () => console.log(`App listening on port ${port}`))