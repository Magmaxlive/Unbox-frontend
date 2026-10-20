import React from "react";

type cardProps = {
  eyebrow: string;
  title: string;
  description: string;
  bgColor?: string;
  eyebrowColor?: string;
  titleColor?: string;
  descriptionColor?: string;
};

function TopicsCard({
  eyebrow,
  title,
  description,
  bgColor = "#000000",
  eyebrowColor = "#ffffff",
  titleColor = "#ffffff",
  descriptionColor = "#ffffff",
}: cardProps) {
  return (
    <div
      style={{ backgroundColor: bgColor }}
      className="flex flex-col justify-between gap-5 p-5 min-h-[190px]"
    >
      <h6 style={{ color: eyebrowColor }} className="uppercase font-bold text-xs">
        {eyebrow}
      </h6>

      <div className="flex flex-col gap-2">
        <h2 style={{ color: titleColor }} className="text-2xl font-heading uppercase">
          {title}
        </h2>

        <p style={{ color: descriptionColor }} className="text-sm">
          {description}
        </p>
      </div>
    </div>
  );
}

export default TopicsCard;
