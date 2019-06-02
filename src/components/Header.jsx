import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


export default () =>{
    return (
        <nav className="rojo">
            <Link to="/register">Registrate loro</Link>
            <Link to="/login">Logueate wachin</Link>
        </nav>
    )
}