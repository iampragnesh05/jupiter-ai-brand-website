import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  href?: string;
  onClick?: () => void;
  target?: string;
  rel?: string;
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
}

export default function Button({
  children,
  variant = "primary",
  href,
  onClick,
  target,
  rel,
  className = "",
  type = "button",
  disabled = false,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center px-6 py-3 text-sm font-medium rounded-lg transition-colors";

  const variantStyles = {
    primary: "bg-purple hover:bg-purple/90 text-white disabled:opacity-50",
    secondary:
      "bg-transparent border border-border hover:border-purple/50 text-white",
    ghost: "bg-transparent text-muted hover:text-white",
  };

  const combinedStyles = `${baseStyles} ${variantStyles[variant]} ${className}`;

  if (href) {
    const isExternal = href.startsWith("http") || href.startsWith("mailto:");
    if (isExternal) {
      return (
        <a
          href={href}
          target={target}
          rel={rel}
          className={combinedStyles}
          onClick={onClick}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} scroll={true} className={combinedStyles} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedStyles}
    >
      {children}
    </button>
  );
}
