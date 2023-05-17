import { getSaludo } from "../../src/base-pruebas/02-template-string"


describe("Prueba en 02-template-string", () => {

    test("getSaludo debe retornar un string", () => {
        
        const name = 'johinner'
        const message = getSaludo(name)
        expect(message).toBe(`Hola ${name}`);
    })

})

