export default function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}) {
  const baseStyles =
    "inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium transition focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variants = {
    primary:
      "bg-[color:var(--color-primary)] text-[color:var(--color-background)] hover:opacity-90 focus:ring-[color:var(--color-primary)]",

    secondary:
      "border border-[color:var(--color-border)] text-white hover:bg-[color:var(--color-surface)] focus:ring-[color:var(--color-primary)]",
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
