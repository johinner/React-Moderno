import { fireEvent, render, screen } from "@testing-library/react"
import { AddCategory } from "../../src/components/AddCategory"

describe('Pruebas en <AddCategory />', () => {

    test('debe de cambiar el valor de la caja de texto', () => {
        render(<AddCategory onNewCategory={()=> {}}/>);

        const input = screen.getByRole('textbox');
        //cambia el valor de la caja de texto
        fireEvent.input(input, {target: {value: 'pokemon'}});

        expect(input.value).toBe('pokemon')
        //screen.debug()
    })

    test('debe de llamar onNewCategory si el input tiene un valor', () => {
        const inputValue = 'pokemon';
        // funcion simulada
        const onNewCategory = jest.fn();

        render(<AddCategory onNewCategory={onNewCategory}/>);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, {target: {value: inputValue}});
        // evaluear el comportamiento del formulario
        fireEvent.submit(form)
        expect(input.value).toBe('')

        // valida si la funcion a sido llamada
        expect(onNewCategory).toHaveBeenCalled();
        // valida que la funcion sea llamada X cantida de veces
        expect(onNewCategory).toHaveBeenCalledTimes(1)
        // valida que sea llamada con x valor
        expect(onNewCategory).toHaveBeenCalledWith(inputValue)
    })

    test('no debe de llamar el onNewCategory si el input esta vacion', ()=> {n
       
        const onNewCategory = jest.fn();
        render(<AddCategory onNewCategory={onNewCategory}/>);

        const form = screen.getByRole('form');
        fireEvent.submit(form)

        expect(onNewCategory).not.toHaveBeenCalled();
    })
})