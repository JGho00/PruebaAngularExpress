const bd = require('../config/conexion')

module.exports = {
    select: function(req, res) {
        let sql = 'select *from tblproductos'

        bd.query(sql, (err, datos) => {
            if (err) {
                console.log("Ocurrio un error,", err);
            } else {
                console.log(datos)
                res.json(datos)
            }
        })

    },
    selectById: function(req, res) {
        const id = req.params.id;
        let sql = (`select *from tblproductos where ID = ${id}`)

        bd.query(sql, (err, datos) => {
            if (err) {
                console.log("Ocurrio un error,", err);
            } else {
                console.log(datos)
            }
        })

    }
}