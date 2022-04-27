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
        if (playload.username !== "username" || playload.name !== "name" || playload.id !== 12)
        {
            let result = new Object()
            result.error = `nesecitan tener un valor valido`
            return result
        }
        if (playload.username==="username" && playload.name === "name" && playload.id ===12)
        {
            const user = UserService.create(playload)
            console.log(user)
            return user
        }
    }
}
module.exports = UserView