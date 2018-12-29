const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const mongoose = require('mongoose')

const app = express()

const db = require('./config/keys').MongoURI

mongoose.connect(db, { userNewUrlParser: true })
        .then(() => console.log('MongoDB connected'))
        .catch(err => console.log(err))

app.use(expressLayouts)
app.set('view engine', 'ejs')

app.use(express.urlencoded({ extended: false }))

app.use('/', require('./routes'))
app.use('/users', require('./routes/users'))

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server started on port ${PORT}`))
