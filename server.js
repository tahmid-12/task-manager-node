const express = require('express');
const app = express();
const tasks = require('./routes/tasks')
const { connectDB } = require('./db/connect')
const PORT = process.env.PORT || 3500;
require('dotenv').config();

app.use(express.json())

app.get('/',(req,res) => {
    res.send('First Page')
});

app.use('/api/v1/tasks', tasks)

const start = async () => {
    try{
        await connectDB(process.env.MONGO_URI)
        app.listen(PORT,() => {
            console.log(`Running at Port ${PORT}`);
        })
    }catch(err){
        console.log(err)
    }
}

start()