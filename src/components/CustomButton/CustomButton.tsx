import React from "react";
import "../../styles/components/CustomButton/_CustomButton.scss";

interface CustomButtonProps {
    className: string;
    label?: string;
    onClick?: () => void;
    type?: "button" | "submit" | "reset";
    disabled?: boolean;
}

const CustomButton: React.FC<CustomButtonProps> = ({
    className = "",
    label,
    onClick,
    type = "button",
    disabled = false,
}) => {
    return (
        <button
            className={`custom-button ${className}`}
            type={type}
            onClick={onClick}
            disabled={disabled}
        >
            {label}
        </button>
    );
};

export default CustomButton;
