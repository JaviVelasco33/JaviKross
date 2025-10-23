import "@/styles/components/Addons/_LoadBar.scss";

interface LoadBarProps {
    trackedProgress: number;
}

const LoadBar = ({ trackedProgress }: LoadBarProps) => {
    return (
        <div className="loader"
            style={{ "--tracked-progress": `${trackedProgress}%` } as React.CSSProperties}
        />
    );
};

export default LoadBar;