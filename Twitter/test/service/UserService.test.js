
const UserService = require("./../../app/services/UserService")

describe ('Unit test for User Service class', () =>
{
    test('1) Creating a new user with the UserService class', ()=>
    {
        const User2 = new UserService(1,'username','name')

        expect(User2.id).toBe(1)
        expect(User2.username).toBe('username')
        expect(User2.name).toBe('name')
        expect(User2.bio).not.toBeUndefined()
        
    }) 
})