import Logo from "../components/Logo";
import LoadBar from "../components/Addons/LoadBar";
import "@/styles/Pages/_LoadingPage.scss";

interface LoadingPageProps {
    progress: number;
    fadeOut?: boolean;
}

const LoadingPage = ({ progress, fadeOut = false }: LoadingPageProps) => {
    return (
        <div className={`loading-page ${fadeOut ? "fade-out" : ""}`}>
            <Logo className="logo-loading" href="/" />
            <LoadBar trackedProgress={progress} />
        </div>
    );
};

export default LoadingPage;