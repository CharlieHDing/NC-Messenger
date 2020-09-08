const connection = require('../db/connection')

const fetchUserByUID = (req)=>{
    const username = req.params.username
    return connection
    .select('*')
    .from('users')
    .where('userID', userId)
    .then((userArr)=>{
        const user = userArr[0]
        if (user === undefined) {
            return Promise.reject({status:404, msg:`No user found for userId: ${userId}` })
        } else {
            return user
        }
    })
}

module.exports = { fetchUserByUID }