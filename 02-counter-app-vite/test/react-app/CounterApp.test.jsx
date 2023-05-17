import { fireEvent, render, screen } from "@testing-library/react";
import { CounterApp } from "../../src/CounterApp";

describe("Prueba en componente <CounterApp />", () => {
  const value = 10;
  //fotocopia del componente en html
  test("debe de hacer match con el snapshot", () => {
    const { container } = render(<CounterApp value={value} />);
    expect(container).toMatchSnapshot();
  });

  test("debe de mostrar el valor inicial en 100", () => {
    render(<CounterApp value={100} />);
    // screen.debug()
    expect(screen.getByText(100)).toBeTruthy();
  });

  test("debe de incrementar con el boton +1", () => {
    render(<CounterApp value={value} />);
    fireEvent.click(screen.getByText("+1"));
    expect(screen.getByRole("heading", { level: 2 }).innerHTML).toContain(
      `${value + 1}`
    );
  });

  test("debe de decrementar con el boton -1", () => {
    render(<CounterApp value={value} />);
    fireEvent.click(screen.getByText("-1"));
    expect(screen.getByRole("heading", { level: 2 }).innerHTML).toContain(
      `${value - 1}`
    );
  });

  test("boton de reset debe devolver a el valor defaul", () => {
    render(<CounterApp value={value} />);
    fireEvent.click(screen.getByText("-1"));
    fireEvent.click(screen.getByText("-1"));
    screen.debug();
    fireEvent.click(screen.getByRole("button", { name: "btn-reset" }));
    expect(screen.getByRole("heading", { level: 2 }).innerHTML).toContain(
      `${value}`
    );
  });
});
