import React, { useState, useEffect } from 'react';
import { registerUserUtil } from '../redux/actions/UserActions';
import { connect } from 'react-redux';
const Register = (props) => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [password, setPassword] = useState('');
    const [userCreated, setUserCreated] = useState(false);
    const handleInputChange = (evt) => {
        evt.preventDefault();
        let field = evt.target.name;
        let value = evt.target.value;
        switch (field) {
            case 'name':
                setName(value);
                break;
            case 'lastName':
                setLastName(value);
                break;
            case 'email':
                setEmail(value);
                break;
            case 'password':
                setPassword(value);
                break;
        }
    };
   const handleSubmit = (evt) => {
       evt.preventDefault();
       props.handleSubmit({ name, lastName, email, password})
   }
   useEffect(() =>{
       if(props.user.id){
           setUserCreated(true)
       }
   }, [props.user])
    return (
        userCreated ? 
        'esta creado wachin' 
        : 
        <section>
            <form onSubmit={handleSubmit}>
                <h3>Iniciar sesión</h3>
                <div>
                    <label htmlFor="name">Nombre</label>
                    <input type="text" name="name" value={name} onChange={handleInputChange}/>
                </div>
                <div>
                    <label htmlFor="lastName">Apellido</label>
                    <input type="text" name="lastName" value={lastName} onChange={handleInputChange}/>
                </div>
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
}
const mapDispatchToProps = dispatch =>({
    handleSubmit: ({name, lastName, email, password}) => dispatch(registerUserUtil({name, lastName, email, password}))
})
const mapStateToProps = state => ({
    user: state.user
})
export default connect(mapStateToProps, mapDispatchToProps)(Register);