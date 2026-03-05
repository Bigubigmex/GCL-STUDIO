import { ButtonHTMLAttributes, forwardRef } from 'react';
import { motion } from 'motion/react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = '', variant = 'primary', size = 'md', children, ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center rounded-full font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#050511] disabled:opacity-50 disabled:pointer-events-none cursor-pointer";
    
    const variants = {
      primary: "bg-blue-600 hover:bg-blue-500 text-white shadow-[0_0_20px_rgba(37,99,235,0.5)] hover:shadow-[0_0_30px_rgba(37,99,235,0.7)] border border-transparent",
      secondary: "bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm border border-white/10",
      outline: "bg-transparent border border-white/20 hover:border-blue-500 hover:text-blue-400 text-gray-300"
    };

    const sizes = {
      sm: "h-9 px-4 text-sm",
      md: "h-11 px-6 text-base",
      lg: "h-14 px-8 text-lg"
    };

    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
        {...props}
      >
        {children}
      </motion.button>
    );
  }
);

Button.displayName = "Button";

export { Button };
