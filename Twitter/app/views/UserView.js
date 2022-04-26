const UserService = require("./../services/UserService")

class UserView 
{
    static createUser(playload)
    {
        if( playload == null)
        {
            let result = new Object()
            result.error = `playload no existe`
            return result
        }
    }
}
module.exports = UserView