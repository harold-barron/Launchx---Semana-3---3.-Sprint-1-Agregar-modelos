const User = require('./../../app/models/User')

describe ('Unit test for User class ', () => 
{
    test('Create an User Object', ()=>
    {
        const User_info = new User(1, `haroldvanlecks`, `Harold`, `bio`, `dateCreated`, `lastUpdated`)

        expect(User_info.id).toBe(1)
        expect(User_info.username).toBe("haroldvanlecks")
        expect(User_info.name).toBe("Harold")
        expect(User_info.bio).toBe("bio")
        expect(User_info.date).toBe("dateCreated")
        expect(User_info.lastUpdadte).toBe("lastUpdate")
    });
})
