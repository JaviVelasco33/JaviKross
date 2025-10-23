import { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import ProfileForm from "../components/Profile/ProfileForm";

import "@/styles/Pages/_ProfilePage.scss";

const ProfilePage = () => {
    const [query, setQuery] = useState("");
    
    useEffect(() => {
        document.title = "JaviKross | Profile";
    }, []);

    return (
        <div className="profile-page">
            <Header query={query} setQuery={setQuery} />
            <div className="main-content">
                <h1>Perfil</h1>
                <ProfileForm/>
            </div>
        </div>
    );
};

export default ProfilePage;
