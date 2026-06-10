import type { ReactNode, AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";
import { motion } from "framer-motion";

// ─── Types ────────────────────────────────────────────────────────────────────

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface BaseButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: ReactNode;
  fullWidth?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}

type ButtonAsButton = BaseButtonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { as?: "button"; href?: never };

type ButtonAsAnchor = BaseButtonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { as: "a"; href: string };

type ButtonProps = ButtonAsButton | ButtonAsAnchor;

// ─── Style Helpers ────────────────────────────────────────────────────────────

const sizeStyles: Record<ButtonSize, React.CSSProperties> = {
  sm: { fontSize: "13px", padding: "8px 16px", borderRadius: "8px" },
  md: { fontSize: "14px", padding: "11px 22px", borderRadius: "12px" },
  lg: { fontSize: "16px", padding: "14px 28px", borderRadius: "12px" },
};

const variantStyles: Record<ButtonVariant, React.CSSProperties> = {
  primary: {
    backgroundColor: "#D4AF37",
    color: "#0F172A",
    border: "2px solid #D4AF37",
    boxShadow: "0 4px 20px rgba(212, 175, 55, 0.30)",
  },
  secondary: {
    backgroundColor: "transparent",
    color: "#0F172A",
    border: "2px solid #0F172A",
  },
  ghost: {
    backgroundColor: "transparent",
    color: "#64748B",
    border: "2px solid transparent",
  },
};

// ─── Component ────────────────────────────────────────────────────────────────

const Button = (props: ButtonProps) => {
  const {
    variant = "primary",
    size = "md",
    children,
    fullWidth = false,
    leftIcon,
    rightIcon,
    as,
    ...rest
  } = props;

  const baseStyles: React.CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    fontFamily: "'Poppins', sans-serif",
    fontWeight: 600,
    cursor: "pointer",
    textDecoration: "none",
    transition: "all 0.22s ease",
    letterSpacing: "0.01em",
    width: fullWidth ? "100%" : "auto",
    ...sizeStyles[size],
    ...variantStyles[variant],
  };

  const content = (
    <>
      {leftIcon && <span aria-hidden="true">{leftIcon}</span>}
      {children}
      {rightIcon && <span aria-hidden="true">{rightIcon}</span>}
    </>
  );

  const motionProps = {
    whileHover: { y: -2, boxShadow: "0 8px 28px rgba(212, 175, 55, 0.40)" },
    whileTap: { y: 0, scale: 0.98 },
    transition: { duration: 0.18 },
  };

  if (as === "a") {
    const { href, ...anchorRest } = rest as ButtonAsAnchor;
    return (
      <motion.a
        href={href}
        style={baseStyles}
        {...motionProps}
        {...(anchorRest as object)}
      >
        {content}
      </motion.a>
    );
  }

  const { onClick, type, disabled, ...btnRest } = rest as ButtonAsButton;
  return (
    <motion.button
      type={type ?? "button"}
      onClick={onClick}
      disabled={disabled}
      style={{
        ...baseStyles,
        opacity: disabled ? 0.5 : 1,
        cursor: disabled ? "not-allowed" : "pointer",
      }}
      {...motionProps}
      {...(btnRest as object)}
    >
      {content}
    </motion.button>
  );
};

export default Button;
