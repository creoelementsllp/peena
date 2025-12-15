import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, className = '', ...props }) => {
  // Switched to rounded-full for softer edges
  const baseStyle = "px-8 py-3 transition-all duration-500 ease-out font-sans text-xs tracking-[0.2em] uppercase font-bold rounded-full";
  
  const variants = {
    primary: "bg-peena-black text-white hover:bg-peena-red hover:shadow-lg border border-transparent",
    outline: "bg-transparent text-peena-black border border-peena-black/30 hover:border-peena-black hover:bg-peena-black hover:text-white",
    ghost: "bg-transparent text-white border border-white/30 hover:bg-white hover:text-peena-black hover:border-white"
  };

  return (
    <button className={`${baseStyle} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};