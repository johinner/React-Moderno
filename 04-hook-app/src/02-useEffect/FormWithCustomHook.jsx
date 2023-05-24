import { useEffect, useState } from "react";
import { useForm } from "../hook/useForm";

export const FormWithCustomHook = () => {
    const {formState, onInputChange, onResetForm} = useForm({
        username: '',
        email: "",
        password: ""
    })

    const {username, email, password} = formState;

    

    return (
        <>
            <h1>Formulario con custom Hook</h1>
            <hr />

            <input
                type="text"
                className="form-control"
                placeholder="UserName"
                name="username"
                value={username}
                onChange={onInputChange}
            />

            <input
                type="email"
                className="form-control mt-2"
                placeholder="johi@live.com"
                name="email"
                value={email}
                onChange={onInputChange}
            />

<input
                type="password"
                className="form-control mt-2"
                placeholder="password"
                name="password"
                value={password}
                onChange={onInputChange}
            />
            
            <button onClick={onResetForm}>Borrar</button>
            
        </>
    )
};