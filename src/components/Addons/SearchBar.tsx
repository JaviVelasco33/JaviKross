import { useState, useRef, useEffect } from "react";
import "@/styles/components/Addons/_SearchBar.scss";
import CustomButton from "../CustomButton/CustomButton";

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
            <CustomButton ref={iconRef} className="search-button" 
            label={
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-search"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" /><path d="M21 21l-6 -6" /></svg>
            } 
            onClick={toggleSearch} />
        </div>
    );
}
