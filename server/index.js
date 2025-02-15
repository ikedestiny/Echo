const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const PORT = process.env.PORT || 5000







//routers
const userRoute = require('./routers/UserRouter')
const ImageUploadRoute = require('./routers/ImageUploadRoute')

//routes



const app = express()
require('dotenv').config()  //configure env variables


//middlewares
app.use(express.json())
app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use("/api/users", userRoute)
app.use('/api/image', ImageUploadRoute)





app.listen(PORT, () => {
    console.log('Server started on port 5000');
});

mongoose.connect(process.env.ATLAS_URI).then(() => {
    console.log("Database connection established");

}).catch((err) => {
    console.error("Database connection failed", err.message);

})

app.get('/', (req, res) => {
    res.send('ECHOOOOOO!');
});
