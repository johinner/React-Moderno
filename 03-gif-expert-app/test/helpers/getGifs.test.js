
import { getGifs } from "../../src/helpers/getGifs";

describe("Prueba en getGifts()", () => {
    test("debe de retornar un arreglo de girs", async () => {
        const gifs = await getGifs("pikachu");

        //Determina si el Arreglo es mayor a 0
        expect(gifs.length).toBeGreaterThan(0);
        //Determina si el Objeto contiene las propiedadaes
        expect(gifs[0]).toEqual({
            id: expect.any(String),
            title: expect.any(String),
            url: expect.any(String),
        });
    });
});
