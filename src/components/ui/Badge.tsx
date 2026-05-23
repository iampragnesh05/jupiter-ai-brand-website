interface BadgeProps {
  label: string;
  variant: "live" | "coming" | "exploring";
}

export default function Badge({ label, variant }: BadgeProps) {
  const variantStyles = {
    live: "bg-purple text-white",
    coming: "bg-surface-2 text-muted",
    exploring: "bg-transparent border border-muted text-muted",
  };

  return (
    <span
      className={`inline-block px-3 py-1 text-xs font-medium rounded-full tracking-wide ${variantStyles[variant]}`}
    >
      {label}
    </span>
  );
}
