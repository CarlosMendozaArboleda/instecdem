const express = require('express');
const path = require('path');
const app = express();


app.use(express.urlencoded({ extended:false }));
app.use(express.json({ type: 'application/*+json'}));
app.use(require('./routes/index'))
app.use(express.static(path.join(__dirname,"public")))

app.listen(3500, (req, res) => {
     console.log('Server on Port 3500');
})
