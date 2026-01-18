import * as React from "react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost";
  size?: "default" | "sm" | "lg";
}

export function Button({
  className,
  variant = "default",
  size = "default",
  ...props
}: ButtonProps) {
  let variantClasses = "";
  let sizeClasses = "";

  switch (variant) {
    case "outline":
      variantClasses = "border border-gray-300 bg-white text-gray-900";
      break;
    case "ghost":
      variantClasses = "bg-transparent text-gray-900";
      break;
    default:
      variantClasses = "bg-black text-white";
  }

  switch (size) {
    case "sm":
      sizeClasses = "px-3 py-1.5 text-sm";
      break;
    case "lg":
      sizeClasses = "px-6 py-3 text-lg";
      break;
    default:
      sizeClasses = "px-4 py-2";
  }

  return (
    <button
      className={`rounded-md font-medium ${variantClasses} ${sizeClasses} ${
        className ?? ""
      }`}
      {...props}
    />
  );
}
