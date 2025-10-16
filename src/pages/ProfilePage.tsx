import React, { useEffect, useState } from "react";
import { Header } from "../components/Header/Header";

const ProfilePage = () => {
    const [query, setQuery] = useState("");
    
    useEffect(() => {
        document.title = "JaviKross | Profile";
    }, []);

    return (
        <div>
            <Header query={query} setQuery={setQuery} />

        </div>
    );
};

export default ProfilePage;
