import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  isLoading,
  className = '',
  ...props 
}) => {
  // Brutalist / Terminal Styles
  const baseStyles = "relative inline-flex items-center justify-center font-bold tracking-wider uppercase transition-all duration-100 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed group active:translate-y-1 active:shadow-none";
  
  const variants = {
    primary: "bg-primary text-black border-2 border-primary hover:bg-transparent hover:text-primary shadow-[4px_4px_0px_0px_rgba(0,255,65,0.3)] hover:shadow-[2px_2px_0px_0px_rgba(0,255,65,0.5)]",
    secondary: "bg-surfaceHighlight text-white border-2 border-dim hover:border-white hover:text-white shadow-[4px_4px_0px_0px_rgba(255,255,255,0.1)]",
    outline: "bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-black",
    ghost: "bg-transparent text-dim hover:text-primary hover:bg-surfaceHighlight/50",
  };

  const sizes = {
    sm: "px-4 py-1 text-xs",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      disabled={isLoading || props.disabled}
      {...props}
    >
      {isLoading && (
        <span className="mr-2 animate-spin">/</span>
      )}
      {children}
      {/* Corner decorations */}
      <span className="absolute top-0 left-0 w-1 h-1 bg-current opacity-0 group-hover:opacity-100"></span>
      <span className="absolute bottom-0 right-0 w-1 h-1 bg-current opacity-0 group-hover:opacity-100"></span>
    </button>
  );
};

export default Button;
