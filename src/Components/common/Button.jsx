import React from "react";
import "./Button.css";

export function Button({
  children,
  variant = "primary",
  size = "md",
  disabled = false,
  as = "button",
  className = "",
  ...props
}) {
  const Component = as;
  const buttonClass = `premium-button premium-button--${variant} premium-button--${size} ${className}`;
  
  if (as === "a") {
    return (
      <a
        className={buttonClass}
        {...props}
      >
        {children}
      </a>
    );
  }
  
  return (
    <button
      className={buttonClass}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}

export function IconButton({ children, size = "md", className = "", ...props }) {
  return (
    <button
      className={`icon-btn icon-btn--${size} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
