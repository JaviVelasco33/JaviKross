import React, { useState, useRef, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "@/styles/components/Addons/_SearchBar.scss";
import CustomButton from "../CustomButton/CustomButton";

interface SearchBarProps {
    query: string;
    setQuery: React.Dispatch<React.SetStateAction<string>>;
}

const SearchBar = ({ query, setQuery }: SearchBarProps) => {
    const [localQuery, setLocalQuery] = useState<string>(query);
    const [isOpen, setIsOpen] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);
    const iconRef = useRef<HTMLButtonElement>(null);
    const navigate = useNavigate();
    const location = useLocation();
    const formRef = useRef<HTMLFormElement>(null);

    // Keep input if we back from another page
    useEffect(() => {
        if (location.state && location.state.query) {
            setQuery(location.state.query);
            setIsOpen(location.state.query.trim() !== "");
        }
    }, [location.state, setQuery]);

    // Always open if its not empty
    useEffect(() => {
        const emptyInputTimer = setTimeout(() => {
            setIsOpen(localQuery.trim() !== "");
        }, 3000);
        return () => clearTimeout(emptyInputTimer);
    }, [localQuery]);

    // Sync local query with prop query
    useEffect(() => {
        setLocalQuery(query);
    }, [query]);

    // Navigate on search
    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const trimmed = localQuery.trim();
        if (trimmed !== "") {
            setQuery(trimmed);
            navigate("/home", { state: { query }, replace: location.pathname === "/home" });
            setIsOpen(true);
        }
    };

    // Manage Icon Click
    function handleIconClick() {
        if (isOpen && localQuery.trim() !== "") {
            formRef.current?.requestSubmit();
        } else {
            setIsOpen((prev) => !prev);
            if (!isOpen) {
                setTimeout(() => inputRef.current?.focus(), 100);
            }
        }
    };

    // Clear input
    function handleClear() {
        setLocalQuery("");
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
                query.trim() === ""
            ) {
                setIsOpen(false);
            }
        };

        // Add event listener for clicks outside
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [isOpen, query]);

    return (
        <form onSubmit={handleSearch} ref={formRef} className="search-container">
            <input
                ref={inputRef}
                type="text"
                placeholder="Buscar..."
                value={localQuery}
                onChange={(e) => setLocalQuery(e.target.value)}
                className={`search-input ${isOpen ? "open" : ""}`}
            />
            {/* Clear X Button  */}
            {isOpen && query && (
                <CustomButton className="clear-icon"
                    label={
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-x"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M18 6l-12 12" /><path d="M6 6l12 12" /></svg>
                    }
                    onClick={handleClear} />
            )}

            {/* Search Icon Button  */}
            <CustomButton ref={iconRef} className="search-button" type="submit"
                label={
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-search"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" /><path d="M21 21l-6 -6" /></svg>
                }
                onClick={handleIconClick} />
        </form>
    );
};

export default SearchBar;