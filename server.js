const express = require("express");
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/static', express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => res.send('Hello World!'));
app.get('/react', (req, res) => 
    res.sendFile(path.join(__dirname + '/public/index.html'))
);

//Start the API server 

app.listen(PORT, () => {
    console.log('We are live on ' + PORT);
});
