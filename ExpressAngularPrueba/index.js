const express = require('express');
const app = express();
const port = 3000;
app.use(require('./routes/routes'));
app.use(express.json())
app.use(express.urlencoded({ extended: false }))




app.listen(port, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Server listen in port ", port);
    }
})