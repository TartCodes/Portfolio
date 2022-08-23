const express = require('express')
const dotenv = require('dotenv')
const { config } = require('process')
const morgan = require('morgan')
// const exphbs = require('express-handlebars')
const connectDB = require('../CharManager/config/db')

// load config
dotenv.config({path: 'config/config.env'})

connectDB()

const app = express()

// logging
if (process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'))
}

// Handlebars ----dont think I'm using this, I'm using EJS? then REACT one learned
// app.engine('.hbs', exphbs({defaultLayout: 'main', extname: '.hbs'}))
// app.set('view engine', '.hbs')

// EJS
app.set('view engine', 'ejs')
app.use(express.static('public'))

// Routes
app.use('/', require('./routes/index'))

const PORT = process.env.PORT || 3000

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on ${PORT}`))