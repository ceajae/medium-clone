const express = require("express");
const routes = require('./routes/');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const helmet = require('helmet');

// const cloudinary = require('cloudinary');

const app = express();
const router = express.Router();
const url = process.env.MONGODB_URI || "mongodb://localhost:27017/medium";

console.log(url);


//configure cloudinary
// cloudinary.config({
//     cloud_name: 'mediumm-clone',
//     api_key: '168561793949542',
//     api_secret: '6YaF1IAxsDvVcIrvSJdHGUqwbGk'
// })

// connect to MongoDB datastore

try {
    mongoose.connect(url, { useNewUrlParser: true }
    );
    console.log('we have connected to db!!!!');
    // console.log(process.env);
}
catch (error){
    console.log(error);
}

// assign port number
let port = 5000 || process.env.PORT;
console.log(process.env);


//set up routes 
routes(router);

//set up middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(helmet());
app.use('/api', router);

//start server
app.listen(port, ()=> {
    console.log(`Server started at port: ${port}`);
})




