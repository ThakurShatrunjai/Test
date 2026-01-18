import * as React from "react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost";
  size?: "default" | "sm" | "lg";
}

export function Button({
  className = "",
  variant = "default",
  size = "default",
  ...props
}: ButtonProps) {
  let variantClasses = "";
  let sizeClasses = "";

  switch (variant) {
    case "outline":
      variantClasses =
        "border-2 border-primary text-primary bg-transparent hover:bg-primary/10";
      break;
    case "ghost":
      variantClasses =
        "bg-transparent text-foreground hover:bg-accent";
      break;
    default:
      // ⭐ MAIN FIX: visible primary button
      variantClasses =
        "bg-primary text-white hover:bg-primary/90 shadow-lg hover:shadow-xl";
  }

  switch (size) {
    case "sm":
      sizeClasses = "px-4 py-2 text-sm";
      break;
    case "lg":
      sizeClasses = "px-8 py-4 text-lg font-semibold";
      break;
    default:
      sizeClasses = "px-6 py-3";
  }

  return (
    <button
      className={`inline-flex items-center justify-center rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/50 disabled:opacity-60 disabled:cursor-not-allowed ${variantClasses} ${sizeClasses} ${className}`}
      {...props}
    />
  );
}
