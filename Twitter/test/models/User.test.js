const User = require('./../../app/models/User')

describe ('Unit test for User class ', () => 
{
    test('Create an User Object', ()=>
    {
        const User_info = new User(1, `haroldvanlecks`, `Harold`, `bio`)

        expect(User_info.id).toBe(1)
        expect(User_info.username).toBe("haroldvanlecks")
        expect(User_info.name).toBe("Harold")
        expect(User_info.bio).toBe("bio")
        expect(User_info.dateCreated).not.toBeUndefined()
        expect(User_info.lastUpdated).not.toBeUndefined()
    });

    test('Add Getters', ()=>
    {
        const User_getters = new User(1, `haroldvanlecks`, `Harold`, `bio`)
        expect(User_getters.getUsername()).toBe("haroldvanlecks")
        expect(User_getters.getBio()).toBe("bio")
        expect(User_getters.getDateCreated()).not.toBeUndefined()
        expect(User_getters.getLastUpdated()).not.toBeUndefined()
    })
})
