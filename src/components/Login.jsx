import React, { useState } from 'react';
export default (props) => {
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const handleInputChange = (evt) => {
        evt.preventDefault();
        let field = evt.target.name;
        let value = evt.target.value;
        if(field == 'email'){
            setEmail(value);
        }else{
            setPassword(value)
        }
    };
    return (
        <section>
            <form>
                <h3>Iniciar sesión</h3>
                <div>
                    <label htmlFor="email">Correo electrónico</label>
                    <input type="text" name="email" value={email} onChange={handleInputChange}/>
                </div>
                <div>
                    <label htmlFor="password">Contraseña</label>
                    <input type="password" name="password" value={password} onChange={handleInputChange}/>
                </div>
                <div>
                    <button type="submit">Enviar</button>
                </div>
            </form>
        </section>
    )
};