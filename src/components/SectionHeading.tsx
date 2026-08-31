import type { LucideIcon } from "lucide-react";
import Reveal from "./Reveal";

type SectionHeadingProps = {
  label: string;
  icon?: LucideIcon;
  title: React.ReactNode;
  description?: string;
  align?: "center" | "start";
};

export default function SectionHeading({
  label,
  icon: Icon,
  title,
  description,
  align = "center",
}: SectionHeadingProps) {
  const alignCls =
    align === "center" ? "items-center text-center" : "items-start text-start";

  return (
    <div className={`flex flex-col gap-4 ${alignCls}`}>
      <Reveal>
        <span className="inline-flex items-center gap-2 rounded-full border border-lilac-200 bg-white px-4 py-1.5 text-xs font-bold text-lilac-700 shadow-sm shadow-lilac-100">
          {Icon && <Icon className="h-3.5 w-3.5 text-lilac-500" />}
          {label}
        </span>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className="max-w-2xl text-3xl font-black leading-[1.25] tracking-tight sm:text-4xl lg:text-[2.75rem]">
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.16}>
          <p className="max-w-xl text-sm leading-7 text-mist sm:text-base sm:leading-8">
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
