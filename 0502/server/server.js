const express = require('express')
const cors = require('cors')

const PORT = 3030
const db = require('./models')
const hotelRoute = require('./api/HotelApi')

const app = express()

app.use(cors())
app.use(express.json())
app.use(hotelRoute)

db.sequelize.sync().then( () => {
    app.listen(PORT, () => {
        console.log(`Server Running On ${PORT}`);
    })
})