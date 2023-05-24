import { useRef } from "react"

export const FocusScreen = () => {

    const inputRef = useRef()

    const onClick = () => {
        inputRef.current.select()
    }
    return (
        <>
            <h1>Focus Screen</h1>
            <br />

            <input
                ref={inputRef}
                type="text"
                placeholder="nombre"
                className="form-control"
            />

            <button onClick={onClick} className="mt-2">set Focus</button>
        </>

    )
}
