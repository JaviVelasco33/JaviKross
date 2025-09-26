import { Logo } from './Logo';
import { SearchBar } from './Bars/SearchBar';
import { ProfileMenu } from './Profile/ProfileMenu';
import '@/styles/components/_Header.scss';

interface HeaderProps {
    onSearch: (query: string) => void
}

export function Header({ onSearch }: HeaderProps) {
    return (
        <header className="header">
            <Logo />
            <div className="header-actions">
                <SearchBar onSearch={onSearch} />
                <ProfileMenu />
            </div>
        </header>
    );
}
