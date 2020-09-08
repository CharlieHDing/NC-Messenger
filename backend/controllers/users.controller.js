const { fetchUserByUID } = require('../models/users.model')

const getUserByUID = (req, res, next) => {
    fetchUserByUID(req).then((user)=>{
            res.status(200).send({user})
    })
    .catch(next)
}


module.exports = { getUserByUID }