import "@/styles/components/_Header.scss";
import { SearchBar } from "../Addons/SearchBar";
import { Logo } from "../Logo";
import { ProfileMenu } from "../Profile/ProfileMenu";

interface HeaderProps {
    onSearch: (query: string) => void
}

export function Header({ onSearch }: HeaderProps) {
    return (
        <header className="header">
            <Logo className="logo-header" />
            <div className="header-actions">
                <SearchBar onSearch={onSearch} />
                <ProfileMenu />
            </div>
        </header>
    );
}
