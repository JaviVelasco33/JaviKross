import { useState, useRef, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "@/styles/components/Addons/_SearchBar.scss";
import CustomButton from "../CustomButton/CustomButton";

interface SearchBarProps {
    initialQuery: string;
}

export function SearchBar({ initialQuery = "" }: SearchBarProps) {
    const [query, setQuery] = useState(initialQuery);
    const [isOpen, setIsOpen] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);
    const iconRef = useRef<HTMLButtonElement>(null);
    const navigate = useNavigate();
    const location = useLocation();

    // Keep input if we back from another page
    useEffect(() => {
        if (location.state && location.state.query) {
            setQuery(location.state.query);
        }
    }, [location.state]);

    // Navigate on search
    const handleSearch = () => {
        if (query.trim() !== "") {
            navigate("/home", { state: { query }, replace: location.pathname === "/home" });
        }
    };

    // Manage Enter Key Down
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") handleSearch();
    };

    // Manage Icon Click
    const handleIconClick = () => {
        if (isOpen && query.trim() !== "") {
            handleSearch();
        } else {
            setIsOpen((prev) => !prev);
            if (!isOpen) {
                setTimeout(() => inputRef.current?.focus(), 100);
            }
        }
    };

    // Clear input
    const handleClear = () => {
        setQuery("");
        inputRef.current?.focus();
        navigate("/home", { state: { query: "" }, replace: location.pathname === "/home" });
    };

    // Close if click outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                isOpen &&
                inputRef.current &&
                !inputRef.current.contains(event.target as Node) &&
                iconRef.current &&
                !iconRef.current.contains(event.target as Node) &&
                query === ""
            ) {
                setIsOpen(false);
            }
        };

        // Add event listener for clicks outside
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
        }, [isOpen, query]);

    return (
        <div className='search-container'>
            <input
                ref={inputRef}
                type="text"
                placeholder="Buscar..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                className={`search-input ${isOpen ? "open" : ""}`}
            />
            {isOpen && query && (
                <CustomButton className="clear-icon" 
                label={
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-x"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 6l-12 12" /><path d="M6 6l12 12" /></svg>
                }
                onClick={handleClear}/>
            )}
            <CustomButton ref={iconRef} className="search-button" 
            label={
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-search"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" /><path d="M21 21l-6 -6" /></svg>
            } 
            onClick={handleIconClick} />
        </div>
    );
}
