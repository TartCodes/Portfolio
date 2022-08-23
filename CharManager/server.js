const express = require('express')
const dotenv = require('dotenv')
const { config } = require('process')
const morgan = require('morgan') //shows errors and status (Ex. in the terminal shows how long a request took etc or if any errors occurred)
// const exphbs = require('express-handlebars')
const passport = require('passport')
const session = require('express-session')
const connectDB = require('../CharManager/config/db')

// load config
dotenv.config({path: 'config/config.env'})

// Passport Config
require('./config/passport')(passport)





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

// Sessions
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false
    
  }))


//Passport Middleware
app.use(passport.initialize())
app.use(passport.session())


// Routes
app.use('/', require('./routes/index'))

const PORT = process.env.PORT || 3000

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on ${PORT}`))