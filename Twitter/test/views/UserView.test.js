const userView = require("./../../app/views/UserView")

describe("Test for UserView", () =>{

    test("1.Return an error object when try to create a new user with a null playload", () =>
    {
        const playload = null
        const result = userView.createUser(playload)
        expect(result.error).toMatch(/playload no existe/)
    })
    test("2. Return an error object when try to create a new user with a playload with invalid properties", () =>
    {
        const playload = {username:null, name:12,id:"id"}
        const result = userView.createUser(playload)
        expect(result.error).toMatch(/nesecitan tener un valor valido/)
    })
    test("3. Return an error object when try to create a new user with a playload with missing properties", () =>
    {
        const playload = {username:"username"}     
        const result = userView.createUser(playload)
        expect(result.error).toMatch(/nesecitan tener un valor valido/)     
        console.log(playload) 
    })
    test("4. Creating an user by a given valid playload", ()=>
    {
        const playload = {username:"username", name:"name",id:1}
        const result = userView.createUser(playload)
        expect(playload.id).toBe(1)
        expect(playload.username).toBe("username")
        expect(playload.name).toBe("name")
    })
})