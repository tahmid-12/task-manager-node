const mongoose = require('mongoose');

const connectstring = 'mongodb://localhost:27017/Store';


const connectDB = (url) => {
    return (
        mongoose.connect(connectstring)
    )
}

// mongoose.connect(connectstring)
//         .then(() => {
//             console.log('Database Connected');
//         })
//         .catch((err) => {
//             console.log(err)
//         })

module.exports = {
    connectDB
}