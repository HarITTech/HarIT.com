import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  withArrow?: boolean;
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  withArrow = false, 
  fullWidth = false,
  className = '',
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center font-medium transition-all duration-300 rounded-full px-6 py-3 text-sm tracking-wide focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-orange disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-brand-orange text-white hover:bg-brand-orangeHover shadow-lg hover:shadow-xl hover:-translate-y-0.5",
    secondary: "bg-brand-dark text-white hover:bg-gray-800 shadow-md hover:shadow-lg hover:-translate-y-0.5",
    outline: "border-2 border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-white bg-transparent",
    ghost: "text-brand-dark hover:text-brand-orange hover:bg-gray-100/50"
  };

  const widthStyle = fullWidth ? "w-full" : "";

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${widthStyle} ${className}`}
      {...props}
    >
      {children}
      {withArrow && <ArrowRight className="ml-2 w-4 h-4" />}
    </button>
  );
};

export default Button;