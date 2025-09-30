import React from "react";
import "@/styles/Login/_LoginForm.scss";

const LoginForm: React.FC = () => {
    return (
        <form className="login-form">
            <h2>Inicia Sesión</h2>
            <div className="form-group">
                <label htmlFor="username">Usuario</label>
                <input type="text" id="username" placeholder="Tu nombre de usuario" />
            </div>
            <div className="form-group">
                <label htmlFor="password">Contraseña</label>
                <input type="password" id="password" placeholder="Tu contraseña" />
            </div>
        </form>
    );
};

export default LoginForm;
