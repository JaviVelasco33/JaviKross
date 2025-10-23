import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "@/styles/components/Profile/_ProfileMenu.scss";
import CustomButton from "../CustomButton/CustomButton";

const ProfileMenu = () => {
    const [open, setOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);
    const navigate = useNavigate();

    function toggleMenu() {
        setOpen(!open);
    };

    function handleLogout() {
        console.log("Logging out...");
        navigate("/login");
        
    };

    function handleEditProfile() {
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
            <CustomButton className={`profile-button ${open ? "open" : ""}`}
            label={<img src="/src/assets/images/profilePics/user1.webp" />}
            onClick={toggleMenu} />

            {open && (
                <div className="dropdown-menu">
                    <CustomButton className="dropdown-item" label="Edit Profile" onClick={handleEditProfile} />
                    <CustomButton className="dropdown-item" label="Logout" onClick={handleLogout} />
                </div>
            )}
        </div>
    );
};

export default ProfileMenu;