const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const MongoClient = require("mongodb").MongoClient;
const PORT = 8001


MongoClient.connect(
    "mongodb+srv://TartCodes:<password>@cluster0.roa15t0.mongodb.net/?retryWrites=true&w=majority", { useUnifiedTopology: true }
  )
    .then((client) => {
      console.log("Connected to Database");
      const db = client.db("pomoRewards");
      const rewardsCollection = db.collection('rewards')

    
//=======
// Middleware
//=======   
app.set('view-engine', 'ejs')
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

//=======
// Routes
//======= 
// app.get('/', (req,res) => {
//     res.sendFile(__dirname + '/index.html')
// })


//ejs
app.get('/', (req, res) => {
    db.collection('rewards').find().toArray()  
      .then(rewards => {
        res.render('index.ejs', { rewards: rewards })
      })
      .catch(/* ... */)
  })

//   app.post('/rewards', (req, res) => {
//     rewardsCollection.insertOne(req.body)
//       .then(result => {
//         res.redirect('/')
//       })
//       .catch(error => console.error(error))
//   })


app.listen(process.env.PORT || PORT , () => {
    //process.env.PORT will default to heroku port first
    console.log(`The server is now running on port ${PORT}`);
}) 


})