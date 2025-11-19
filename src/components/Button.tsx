import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'glass';
  children: React.ReactNode;
}

export function Button({ 
  children, 
  variant = 'primary', 
  className = '',
  ...props 
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full transition-all duration-300 cursor-pointer border";
  
  const variants = {
    primary: "bg-white text-black border-white hover:shadow-[0px_0px_40px_rgba(255,255,255,0.6)] hover:scale-105",
    glass: "bg-white/[0.06] text-white border-white/20 backdrop-blur-[24px] hover:bg-white/[0.12] hover:border-white/30"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}