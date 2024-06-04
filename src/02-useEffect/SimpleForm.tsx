import React, { useEffect, useState } from "react";

export const SimpleForm = () => {
    const [formState, setFormState] = useState({
        username: 'erick',
        email: 'example@example.com'
    });

    const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormState({
            ...formState,
            [name]: value
        });
    }

    useEffect(() => {
        const onMouseMove = ({ x, y }) => {
            const coords = {x, y};
            console.log(coords);
        }

        window.addEventListener('mousemove', onMouseMove);

        return () => {
            window.removeEventListener('mousemove', onMouseMove);
        }

    }, []);

    return (
        <>
            <h1>Formulario</h1>
            <hr />
            <input type="text" placeholder="nombre" name="username" value={formState.username} onChange={onInputChange} />
            <br /><br />
            <input type="email" placeholder="example@example.com" name="email" value={formState.email} onChange={onInputChange} />
        </>
    )
}