interface SectionHeaderProps {
  badge?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export default function SectionHeader({
  badge,
  title,
  subtitle,
  centered = true,
}: SectionHeaderProps) {
  return (
    <div className={`mb-16 ${centered ? "text-center" : ""}`}>
      {badge && (
        <span className="inline-block text-gold text-xs uppercase tracking-[0.3em] mb-4 font-sans">
          {badge}
        </span>
      )}
      <h2 className="font-serif text-4xl md:text-5xl text-white mb-4">
        {title}
      </h2>
      <div
        className={`w-16 h-px bg-gold mb-6 ${centered ? "mx-auto" : ""}`}
      />
      {subtitle && (
        <p
          className={`text-white/50 text-lg max-w-2xl leading-relaxed ${centered ? "mx-auto" : ""}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
