import { render, screen} from "@testing-library/react"
import { GifGrid } from "../../src/components/GifGrid"
import { useFetchGifs } from "../../src/hooks/useFetchGifs"

//TODO:  imitar retorno de funciones => librerias
jest.mock("../../src/hooks/useFetchGifs");

describe('Prueba en componente <GifGrid/>', () => {

    const category = 'pikachu'
    const gifs = [
        {
            id: "0101fs",
            title: category,
            url: `https://${category}.jpg`
        },
        {
            id: "0102fs",
            title: category,
            url: `https://${category}2.jpg`
        }
    ]
    

    test('debe de mostrar el mensaje Cargando inicialmente', ()=> {
        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: true
        })
        render(<GifGrid category={category}/>)
        
        expect(screen.getByText('Cargando...'));
    })

    test('debe de mostart items cuando se cargan las imagenes useFetchGits', ()=> {

        //TODO: Simular retorno de la funcion useFetchGifs 
        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        })
        render(<GifGrid category={category}/>)
        screen.debug()
    })
})