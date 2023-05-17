import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";

describe("Pruebas eb 09-promesas", () => {
    test("getHeroByIdAsync debe de retornar un heroe", (done) => {
        const id = 2;
        getHeroeByIdAsync(id)
            .then(hero => {
                // espera => y resivio
                expect(hero).toEqual({
                    id: 1,
                    name: 'Batman',
                    owner: 'DC'
                })
               done()
            })
    })
})