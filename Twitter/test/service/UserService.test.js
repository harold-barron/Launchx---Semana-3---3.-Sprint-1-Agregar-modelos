
const UserService = require("./../../app/services/UserService")

describe ('Unit test for User Service class', () =>
{
    test('1) Creating a new user with the UserService class', ()=>
    {
        const User2 =UserService.create(1,'username','name')

        expect(User2.id).toBe(1)
        expect(User2.username).toBe('username')
        expect(User2.name).toBe('name')
        expect(User2.bio).not.toBeUndefined()
        console.log(User2)
    });
    test('2)Get all user data in a list ', () =>
    {
        const user2 = UserService.create(1,"haroldvanlecks","harold")
        const userInfoInList = UserService.getInfo(user2)
        
        expect(userInfoInList[0]).toBe(1)
        expect(userInfoInList[1]).toBe("haroldvanlecks")
        expect(userInfoInList[2]).toBe("harold")
        expect(userInfoInList[3]).toBe("Sin bio")
    })
})