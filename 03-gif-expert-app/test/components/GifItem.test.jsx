import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GitfItem";

describe("Prueba en componente <GifItem />", () => {
    const title = "prueba Testing";
    const url = "https://pruebatesting.jpg/";

    //fotocopia del componente en html
    test("debe de hacer match con el snapshot", () => {
        const { container } = render(<GifItem title={title} url={url} />);
        expect(container).toMatchSnapshot();
    });

    test('debe de mostrar la imagen con el URL y el ALT indicado', () => {
        render(<GifItem title={title} url={url} />);
        //screen.debug();
        const {src, alt} = screen.getByRole('img')
        expect(alt).toBe(title);
        expect(src).toBe(url);
    })
});
