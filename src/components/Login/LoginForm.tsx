import React from "react";
import { useNavigate } from "react-router-dom";
import "@/styles/Login/_LoginForm.scss";
import CustomButton from "../CustomButton/CustomButton";


const LoginForm: React.FC = () => {
    const navigate = useNavigate();

    function handleEnter () {
        // Por ahora solo navega a /home sin login real
        navigate("/home");
    };

    return (
        <div className="login-form-div">
            <form className="login-form">
                <div className="form-group">
                    <input type="text" id="username" placeholder="" />
                    <label htmlFor="username">Usuario</label>
                </div>
                <div className="form-group">
                    <input type="password" id="password" placeholder="" />
                    <label htmlFor="password">Contraseña</label>
                </div>
            </form>
            <CustomButton className="login-button" label="Entrar" onClick={handleEnter} type="submit"  />
        </div>
    );
};

export default LoginForm;
