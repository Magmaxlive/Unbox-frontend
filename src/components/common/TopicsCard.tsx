import React from "react";
import Link from "next/link";

type cardProps = {
  eyebrow: string;
  title: string;
  description: string;
  bgColor?: string;
  eyebrowColor?: string;
  titleColor?: string;
  descriptionColor?: string;
  link?:string;
};

function TopicsCard({
  eyebrow,
  title,
  description,
  bgColor = "#000000",
  eyebrowColor = "#ffffff",
  titleColor = "#ffffff",
  descriptionColor = "#ffffff",
  link = "#"
}: cardProps) {
  return (
    <Link href={link}
      style={{ backgroundColor: bgColor, color: titleColor }}
      className="group relative overflow-hidden flex flex-col justify-between gap-5 p-5 min-h-[190px] cursor-pointer"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-[30px] -bottom-[30px] w-[110px] h-[110px] opacity-[0.13] bg-current transition-transform duration-400 group-hover:rotate-90"
        style={{
          clipPath:
            "polygon(0 0, 100% 0, 50% 50%, 100% 100%, 0 100%, 50% 50%)",
        }}
      />

      <h6 style={{ color: eyebrowColor }} className="relative uppercase tracking-widest font-bold text-xs">
        {eyebrow}
      </h6>

      <div className="relative flex flex-col gap-3">
        <h2 style={{ color: titleColor }} className="text-xl lg:text-2xl font-heading uppercase">
          {title}
        </h2>

        <p style={{ color: descriptionColor }} className="text font-medium">
          {description}
        </p>
      </div>
    </Link>
  );
}

export default TopicsCard;
