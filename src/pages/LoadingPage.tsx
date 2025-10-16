import { Logo } from "../components/Logo";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "@/styles/Pages/_LoadingPage.scss";

const LoadingPage = () => {
    const [progress, setProgress] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        let isMounted = true;

        const loadData = async () => {
            const fakeLoad = new Promise((resolve) => 
                setTimeout(resolve, 6000)
            );
            await fakeLoad;
            if (isMounted) navigate("/home");
        };

        loadData();

        const interval = setInterval(() => {
            setProgress((prog) => (prog < 100 ? prog + 2 : 100));
        },50);

        return () => {
            clearInterval(interval);
            isMounted = false;
        };
    }, [navigate]);
    
    return (
        <div className="loading-page">
            <Logo className="logo-loading" href="/" />
            <div className="loader"></div>
        </div>
    );
};

export default LoadingPage;
