import React, { useState, useEffect } from 'react';
import { loginUserUtil } from '../redux/actions/UserActions';
import { connect } from 'react-redux';
const Login = (props) => {
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
    const handleSubmit = (evt)  => {
        evt.preventDefault()
        props.handleSubmit({email, password})
    }
    useEffect(() =>{
        if(props.logged){
           alert('creado')
        }
    }, [props.logged])
    return (
        <section className="container">
            <article className="row">
                <form className="col-md-12" style={{textAlign: "center"}} onSubmit={handleSubmit}>
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
            </article>
        </section>
    )
};
const mapDispatchToProps = dispatch => ({
    handleSubmit: ({email, password}) => dispatch(loginUserUtil({email, password}))
})
const mapStateToProps = state => ({
    logged: state.user.logged
})
export default connect(mapStateToProps, mapDispatchToProps)(Login)