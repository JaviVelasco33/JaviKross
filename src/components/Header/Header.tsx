import "@/styles/components/_Header.scss";
import SearchBar from "../Addons/SearchBar";
import { Logo } from "../Logo";
import { ProfileMenu } from "../Profile/ProfileMenu";

interface HeaderProps {
    query: string;
    setQuery: React.Dispatch<React.SetStateAction<string>>;
}

const Header = ({ query, setQuery }: HeaderProps) => {
    return (
        <header className="header">
            <Logo className="logo-header" href="/home" />
            <div className="header-actions">
                <SearchBar query={query} setQuery={setQuery} />
                <ProfileMenu />
            </div>
        </header>
    );
};

export default Header;