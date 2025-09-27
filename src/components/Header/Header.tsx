import "@/styles/components/_Header.scss";
import { SearchBar } from "../Bars/SearchBar";
import { Logo } from "./Logo";
import { ProfileMenu } from "../Profile/ProfileMenu";

interface HeaderProps {
    onSearch: (query: string) => void
}

export function Header({ onSearch }: HeaderProps) {
    return (
        <header className="header">
            <div className="header-logo">
                <Logo />
            </div>
            <div className="header-actions">
                <SearchBar onSearch={onSearch} />
                <ProfileMenu />
            </div>
        </header>
    );
}
