const mysql = require('mysql');

const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'ventas'
})

conexion.connect((err) => {
    if (err) {
        console.log(err)
    } else {
        console.log("Database conected")
    }
})


module.exports = conexion