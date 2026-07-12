import type { ButtonHTMLAttributes, ReactNode } from "react";
import Link from "next/link";

type ButtonVariant = "primary" | "secondary" | "success" | "text";

interface BaseButtonProps {
  variant?: ButtonVariant;
  children: ReactNode;
  className?: string;
  href?: string;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
}

type ButtonProps = BaseButtonProps & ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
  variant = "primary",
  children,
  className = "",
  href,
  icon,
  iconPosition = "right",
  ...props
}: ButtonProps) {
  const getVariantClass = (v: ButtonVariant) => {
    switch (v) {
      case "primary":
        return "btn-primary";
      case "secondary":
        return "btn-secondary";
      case "success":
        return "btn-success";
      case "text":
        return "btn-text";
    }
  };

  const buttonClasses = `${getVariantClass(variant)} ${className}`.trim();

  const content = (
    <>
      {icon && iconPosition === "left" && <span className="mr-1.5 flex items-center">{icon}</span>}
      {children}
      {icon && iconPosition === "right" && <span className="ml-1.5 flex items-center">{icon}</span>}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={buttonClasses}>
        {content}
      </Link>
    );
  }

  return (
    <button className={buttonClasses} {...props}>
      {content}
    </button>
  );
}
