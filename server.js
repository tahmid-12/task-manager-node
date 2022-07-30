const express = require('express');
const app = express();
const PORT = process.env.PORT || 3500;

app.get('/',(req,res) => {
    res.send('First Page')
});

app.listen(PORT,() => {
    console.log(`Running at Port ${PORT}`);
})