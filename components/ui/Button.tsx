import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

export default function Button({
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center uppercase tracking-widest font-sans transition-all duration-200 focus:outline-none disabled:opacity-50";

  const variants = {
    primary: "bg-gold text-navy hover:bg-gold-light",
    outline: "border border-gold text-gold hover:bg-gold hover:text-navy",
    ghost:
      "text-gold hover:text-gold-light underline-offset-4 hover:underline",
  };

  const sizes = {
    sm: "text-xs px-4 py-2",
    md: "text-xs px-6 py-3",
    lg: "text-sm px-8 py-4",
  };

  return (
    <button
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
