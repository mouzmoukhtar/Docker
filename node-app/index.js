const express = require('express');

// init app 
const PORT = 5000;
const app = express();

app.get('/',(req, res) => res.send('<h1> Hello ITI!</h1>'));


app.listen(PORT,() => console.log(`app is up and running on port: ${PORT}`));