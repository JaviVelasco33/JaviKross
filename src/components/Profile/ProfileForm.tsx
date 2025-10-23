import CustomButton from "../CustomButton/CustomButton";

import "@/styles/components/Profile/_ProfileForm.scss";

const ProfileForm = () => {
    return (
        <div className="content">
            <form className="profile-form" action="">
                <div className="form-group">
                    <label htmlFor="username">Usuario</label>
                    <input type="text" id="username" placeholder="" />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Contraseña</label>
                    <input type="password" id="password" placeholder="" />
                </div>
            <CustomButton className="save-button" label="Guardar cambios" type="submit"  />
            </form>
        </div>
    );
};

export default ProfileForm;
