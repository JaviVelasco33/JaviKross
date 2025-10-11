import "@/styles/components/Home/_HeroHome.scss";

const HeroHome = () => {
    return (
        <div className="hero-section">
            <div className="hero-bg">
                <img src="/public/images/background/GV3.png" alt="" />
            </div>
            <h1>Welcome Home, userName</h1>
            <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="arrow-down icon icon-tabler icons-tabler-outline icon-tabler-chevrons-down"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 7l5 5l5 -5" /><path d="M7 13l5 5l5 -5" /></svg>
        </div>
    );
};

export default HeroHome;
