const express = require('express')
const app = express()
const PORT = 8001

app.get('/', (req,res) => {
    res.sendFile(__dirname + '/index.html')
})




app.listen(process.env.PORT || PORT , () => {
    //process.env.PORT will default to heroku port first
    console.log(`The server is now running on port ${PORT}`);
}) 