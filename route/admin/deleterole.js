const connect = require('../../database/connect')
const path = require('path')
let home = async (req, res, next) => {

    const query = `delete from public.role where id ='${req.query.id}'`
    let result = await connect.query(query)
    if (result.rowCount > 0) {
        res.redirect('managerrole')
    } else {
        res.render(path.join(__dirname, '../../view/managerrole.ejs'), { role: "don't have any", quantity: 0, err: req.query.err ? req.query.err : "" })
    }


}

module.exports = home