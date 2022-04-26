
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
    test('3)Update Username', ()=>
    {
        const user = UserService.create(1,"haroldvanlecks","harold")
        UserService.updateUsername(user,"haroldv")
        expect(user.username).toBe("haroldv")
    })
    test('4) Givven a list of user give me the list of usernames', () =>
    {
        const user1 = UserService.create(1,"haroldvanlecks1","harold")
        const user2 = UserService.create(1,"haroldvanlecks2","harold")
        const user3 = UserService.create(1,"haroldvanlecks3","harold")
        const usernames = UserService.getAllUsernames([user1,user2,user3])
        expect(usernames).toContain("haroldvanlecks1")
        expect(usernames).toContain("haroldvanlecks2")
        expect(usernames).toContain("haroldvanlecks3")
        
    })
})