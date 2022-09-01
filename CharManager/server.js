const express = require('express')
const app = express()
const dotenv = require('dotenv')
const { config } = require('process')
const mongoose = require('mongoose')
const morgan = require('morgan') 
const passport = require('passport')
const methodOverride = require('method-override') //????
const session = require('express-session')
const MongoStore = require('connect-mongo')
const connectDB = require('../CharManager/config/db')


// load config
dotenv.config({path: 'config/config.env'})

// Passport Config
require('./config/passport')(passport)


connectDB()

//Body Parser
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// logging
if (process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'))
}

//Method Override
// app.use(
//     methodOverride((req, res) => {
//       if (req.body && typeof req.body === 'object' && '_method' in req.body) {
//         // look in urlencoded POST bodies and delete it
//         let method = req.body._method
//         delete req.body._method
//         return method
//       }
//     })
//   )


// EJS
app.set('view engine', 'ejs')
app.use(express.static('public'))

// Sessions
app.use(
  session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({mongoUrl: process.env.MONGO_URI,}),
  })
)


//Passport Middleware
app.use(passport.initialize())
app.use(passport.session())


// Routes
app.use('/', require('./routes/index'))
app.use('/auth', require('./routes/auth'))
app.use('/postCharacter', require('./routes/postCharacter')) //not sure about this 

const PORT = process.env.PORT || 3000

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on ${PORT}`))