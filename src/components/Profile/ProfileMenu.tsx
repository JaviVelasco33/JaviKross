import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "@/styles/components/Profile/_ProfileMenu.scss";

export function ProfileMenu() {
    const [open, setOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);
    const navigate = useNavigate();

    const toggleMenu = () => {
        setOpen(!open);
    };

    const handleLogout = () => {
        console.log("Logging out...");
        navigate("/login");
        
    };

    const handleEditProfile = () => {
        navigate("/profile");
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (open && menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setOpen(false);
            }
        };

        document.addEventListener("click", handleClickOutside);
        return () => document.removeEventListener("click", handleClickOutside);
    }, [open]);
    
    return (
        <div ref={menuRef} className="profile-container">
            <button className='profile-button' onClick={toggleMenu}>
                👤
            </button>

            {open && (
                <div className="dropdown-menu">
                    <button onClick={handleEditProfile}>Edit Profile</button>
                    <button onClick={handleLogout}>Logout</button>
                </div>
            )}
        </div>
    );
};