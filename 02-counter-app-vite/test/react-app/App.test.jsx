import { render, screen } from "@testing-library/react";
import { App } from "../../src/App";

describe("Prueba en componente <App />", () => {
  const title = "enviado desde Testing";

  //fotocopia del componente en html
  /*  test("debe de hacer match con el snapshot", () => {
    const { container, getByText } = render(<App title={title} />);
    expect(container).toMatchSnapshot();
  }); */

  test("debe de mostrar el titulo en un <h1></h1>", () => {
    render(<App title={title} />);
    // screen.debug()
    expect(screen.getByRole('heading', {level: 1}).innerHTML).toContain(title);
  });
});
