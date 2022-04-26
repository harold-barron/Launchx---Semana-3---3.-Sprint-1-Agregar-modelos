const user = require("./../models/User")
const User = require("./../models/User")

class UserService 
{
    static create(id,username,name)
    {
       return new User(id,username,name,"Sin bio")
    }

    static getInfo(user)
    {
        const userInList= [user.id,user.username,user.name,user.bio]
        return  userInList
    }
}

module.exports = UserService