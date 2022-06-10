const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const PORT = 8001

    
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
    res.render('index.ejs', {
        rewards: [
            'Go on a hike(long break)', 'Take a walk', 'Stretch/Yoga', 'Have a snack', 'Play a game', 'Talk to a friend/loved one', 'Meditate', 'Coffee/Tea'
        ]       
    })
    
})
// 'reward': 'Go on a hike(long break)',
// 'rewardOne': 'Take a walk',
// 'rewardTwo': 'Stretch/Yoga',
// 'rewardThree': 'Have a snack',
// 'rewardFour': 'Play a game',
// 'rewardFive': 'Talk to a friend/loved one',
// 'rewardSix': 'Meditate, Coffee/Tea'
//







app.listen(process.env.PORT || PORT , () => {
    //process.env.PORT will default to heroku port first
    console.log(`The server is now running on port ${PORT}`);
}) 


