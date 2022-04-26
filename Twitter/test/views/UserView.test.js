const userView = require("./../../app/views/UserView")

describe("Test for UserView", () =>{

    test("1.Return an error object when try to create a new user with a null playload", () =>
    {
        const playload = null
        const result = userView.createUser(playload)
        expect(result.error).toMatch(/playload no existe/)
    })
})