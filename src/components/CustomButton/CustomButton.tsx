import React from "react";
import "../../styles/components/CustomButton/_CustomButton.scss";

interface CustomButtonProps {
    className: string;
    ref?: React.ForwardedRef<HTMLButtonElement>;
    label?: React.ReactNode;
    onClick?: () => void;
    type?: "button" | "submit" | "reset";
    disabled?: boolean;
}

const CustomButton: React.FC<CustomButtonProps> = ({
    className = "",
    ref,
    label,
    onClick,
    type = "button",
    disabled = false,
}) => {
    return (
        <button
            className={`custom-button ${className}`}
            ref={ref}
            type={type}
            onClick={onClick}
            disabled={disabled}
        >
            {label}
        </button>
    );
};

export default CustomButton;
