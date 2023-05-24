import { useEffect, useState } from "react";
import { Message } from "./Message";

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'johinner2',
        email: '@gmail'
    })

    const {username, email} = formState;

    const onInputChange = ({target}) => {
        const {name, value} = target;

        setFormState({
            ...formState,
            [name]: value
        })
    }

    useEffect(() => {
        //console.log('useEffect')
    }, []);

    useEffect(() => {
       // console.log('combio el formulario')
    }, [formState]);

    return (
        <>
            <h1>Use Effect</h1>
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

            {
                (username === 'johinner2') && <Message/>
            }
            
        </>
    )
};