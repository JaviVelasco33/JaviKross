import { useState, useRef, useEffect } from "react";
import "@/styles/components/Bars/_SearchBar.scss";

interface SearchBarProps {
    onSearch: (query: string) => void
}

export function SearchBar({ onSearch }: SearchBarProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [value, setValue] = useState("");
    const inputRef = useRef<HTMLInputElement>(null);
    const iconRef = useRef<HTMLButtonElement>(null);

    // Toggle at click on icon
    const toggleSearch = () => {
        // If it's open and empty, close it
        if (isOpen && value === "") {
            setIsOpen(false);
        } else {
            setIsOpen(true);
            setTimeout(() => {
                inputRef.current?.focus();
            }, 100);
        }
    };

    // Close if click outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                isOpen &&
                value === "" &&
                inputRef.current &&
                !inputRef.current.contains(event.target as Node) &&
                iconRef.current &&
                !iconRef.current.contains(event.target as Node)
            ) {
                setIsOpen(false);
            }
        };

        document.addEventListener("click", handleClickOutside);
        return () => document.removeEventListener("click", handleClickOutside);
        }, [isOpen, value]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const query = e.target.value;
        setValue(query);
        onSearch(query); 
    };

    return (
        <div className='search-container'>
            <input
                ref={inputRef}
                type="text"
                placeholder="Buscar..."
                value={value}
                onChange={handleChange}
                className={`search-input ${isOpen ? "open" : ""}`}
            />
            <button ref={iconRef} className="search-icon" onClick={toggleSearch}>
                🔍
            </button>
        </div>
    );
}
