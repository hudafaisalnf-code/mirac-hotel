import { ReactNode } from "react";

interface CardProps {
  title: string;
  description: string;
  badge?: string;
  imageUrl?: string;
  footer?: ReactNode;
  className?: string;
}

export default function Card({
  title,
  description,
  badge,
  imageUrl,
  footer,
  className = "",
}: CardProps) {
  return (
    <div
      className={`bg-navy-light border border-gold/20 overflow-hidden group hover:border-gold/50 transition-colors duration-300 ${className}`}
    >
      {imageUrl ? (
        <div className="relative h-52 overflow-hidden">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          {badge && (
            <span className="absolute top-4 right-4 bg-gold text-navy text-xs uppercase tracking-widest px-3 py-1 font-sans font-semibold">
              {badge}
            </span>
          )}
        </div>
      ) : (
        badge && (
          <div className="px-6 pt-6">
            <span className="inline-block bg-gold/10 text-gold text-xs uppercase tracking-widest px-3 py-1 font-sans border border-gold/20">
              {badge}
            </span>
          </div>
        )
      )}

      <div className="p-6">
        <h3 className="font-serif text-xl text-white mb-2">{title}</h3>
        <div className="w-8 h-px bg-gold mb-3 group-hover:w-12 transition-all duration-300" />
        <p className="text-white/50 text-sm leading-relaxed">{description}</p>
        {footer && (
          <div className="mt-5 pt-4 border-t border-gold/10">{footer}</div>
        )}
      </div>
    </div>
  );
}
