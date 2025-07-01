import { ArrowDownIcon, ArrowLeftIcon, ArrowRightIcon } from 'lucide-react';
import React from 'react';

interface ButtonProps {
    children: React.ReactNode;
    className?: string;
    iconPosition?: 'left' | 'right' | 'none' | 'down';
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    onClick?: () => void;
    disabled?: boolean;
    type?: 'button' | 'submit' | 'reset';
}

const Button = ({
    children,
    className = '',
    iconPosition = 'none',
    variant = 'primary',
    size = 'md',
    onClick,
    disabled = false,
    type = 'button'
}: ButtonProps) => {

    // Icon component based on position
    const getIcon = () => {
        switch (iconPosition) {
            case 'left':
                return <ArrowLeftIcon className="w-4 h-4" />;
            case 'right':
                return <ArrowRightIcon className="w-4 h-4" />;
            case 'down':
                return <ArrowDownIcon className="w-4 h-4" />;
            default:
                return null;
        }
    };

    // Base styles
    const baseStyles = "inline-flex items-center justify-center gap-2 font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

    // Variant styles
    const variantStyles = {
        primary: "bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-500",
        secondary: "bg-gray-600 hover:bg-gray-700 text-white focus:ring-gray-500",
        outline: "border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white focus:ring-blue-500",
        ghost: "text-blue-600 hover:bg-blue-50 focus:ring-blue-500"
    };

    // Size styles
    const sizeStyles = {
        sm: "px-3 py-1.5 text-sm rounded-md",
        md: "px-4 py-2 text-base rounded-lg",
        lg: "px-6 py-3 text-lg rounded-xl"
    };

    // Combine all styles
    const buttonClasses = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

    return (
        <button
            type={type}
            className={buttonClasses}
            onClick={onClick}
            disabled={disabled}
        >
            {iconPosition === 'left' && getIcon()}
            <span>{children}</span>
            {iconPosition === 'right' && getIcon()}
            {iconPosition === 'down' && getIcon()}
        </button>
    );
};

export default Button;
