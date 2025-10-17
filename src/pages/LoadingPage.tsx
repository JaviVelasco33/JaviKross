import { Logo } from "../components/Logo";
import LoadBar from "../components/Addons/LoadBar";
import "@/styles/Pages/_LoadingPage.scss";

interface LoadingPageProps {
    progress: number;
}

export default function LoadingPage({ progress }: LoadingPageProps) {
    return (
        <div className="loading-page">
            <Logo className="logo-loading" href="/" />
            <LoadBar trackedProgress={progress} />
        </div>
    );
};