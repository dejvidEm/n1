// Line-art style icons inspired by iemspa.sk
import { SVGProps } from "react";



interface IconProps extends SVGProps<SVGSVGElement> {
  className?: string;
}

export const AestheticMedicineIcon = ({ className, ...props }: IconProps) => (
  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.2" className={className} {...props}>
    <circle cx="32" cy="20" r="12" />
    <path d="M20 20c0-6.627 5.373-12 12-12s12 5.373 12 12" />
    <path d="M26 38v18M38 38v18" />
    <path d="M20 44h24M20 50h24" />
    <circle cx="32" cy="20" r="4" />
  </svg>
);

export const CosmetologyIcon = ({ className, ...props }: IconProps) => (
  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.2" className={className} {...props}>
    <ellipse cx="32" cy="24" rx="16" ry="12" />
    <path d="M20 32c-4 4-6 10-6 16 0 4 8 8 18 8s18-4 18-8c0-6-2-12-6-16" />
    <path d="M28 20c0 2.2 1.8 4 4 4s4-1.8 4-4" />
    <path d="M26 28h12" />
  </svg>
);

export const LaserIcon = ({ className, ...props }: IconProps) => (
  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.2" className={className} {...props}>
    <rect x="12" y="24" width="40" height="20" rx="4" />
    <path d="M52 34h8" />
    <path d="M56 28l4 6-4 6" />
    <circle cx="24" cy="34" r="4" />
    <circle cx="36" cy="34" r="4" />
    <path d="M12 30h-4M12 38h-4" />
  </svg>
);

export const PermanentMakeupIcon = ({ className, ...props }: IconProps) => (
  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.2" className={className} {...props}>
    <path d="M16 48l6-32h4l6 32" />
    <path d="M18 36h12" />
    <ellipse cx="44" cy="24" rx="8" ry="6" />
    <path d="M36 24c0-6 4-12 8-12s8 6 8 12" />
    <path d="M40 48c0-8 8-16 8-16s8 8 8 16" />
    <path d="M44 32v8" />
  </svg>
);

export const BodyTreatmentIcon = ({ className, ...props }: IconProps) => (
  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.2" className={className} {...props}>
    <circle cx="32" cy="14" r="6" />
    <path d="M32 20v8" />
    <path d="M24 28h16" />
    <path d="M26 28c-2 8-4 16-4 24M38 28c2 8 4 16 4 24" />
    <path d="M28 52h8" />
    <ellipse cx="32" cy="36" rx="8" ry="10" />
  </svg>
);

export const HairCareIcon = ({ className, ...props }: IconProps) => (
  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.2" className={className} {...props}>
    <circle cx="32" cy="28" r="12" />
    <path d="M20 28c0-10 5-18 12-18" />
    <path d="M24 16c4-4 12-4 16 0" />
    <path d="M44 28c0-10-5-18-12-18" />
    <path d="M28 40v16M36 40v16" />
    <path d="M24 48h16" />
    <path d="M26 24c0 3 6 6 12 0" />
  </svg>
);

export const PedicureIcon = ({ className, ...props }: IconProps) => (
  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.2" className={className} {...props}>
    <path d="M16 16c0 8 4 16 16 16s16-8 16-16" />
    <ellipse cx="32" cy="40" rx="16" ry="8" />
    <path d="M16 40v8c0 4 7 8 16 8s16-4 16-8v-8" />
    <circle cx="24" cy="24" r="2" />
    <circle cx="32" cy="22" r="2" />
    <circle cx="40" cy="24" r="2" />
  </svg>
);

export const WellnessIcon = ({ className, ...props }: IconProps) => (
  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.2" className={className} {...props}>
    <path d="M32 8c-8 8-16 16-16 28 0 8 7 16 16 16s16-8 16-16c0-12-8-20-16-28z" />
    <path d="M32 16c-4 4-8 8-8 16 0 4 4 8 8 8s8-4 8-8c0-8-4-12-8-16z" />
    <circle cx="32" cy="32" r="4" />
    <path d="M28 44l4 8 4-8" />
  </svg>
);

export const CoursesIcon = ({ className, ...props }: IconProps) => (
  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.2" className={className} {...props}>
    {/* Graduation cap / certificate icon */}
    <path d="M8 24l24-12 24 12-24 12-24-12z" />
    <path d="M16 28v12c0 4 7 8 16 8s16-4 16-8V28" />
    <path d="M32 36v16" />
    <circle cx="32" cy="54" r="2" />
    <path d="M52 24v16" />
    <path d="M50 42h4l-2 4-2-4z" />
  </svg>
);
