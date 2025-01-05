import React from "react";

interface TypographyProps {
  variant: "muted" | "primary" | "info" | "success" | "warning" | "danger";
  text: string;
}

const RestTypography: React.FC<TypographyProps> = ({ variant, text }) => {
  // Map variants to Tailwind CSS classes
  const colorClasses = {
    muted: "text-gray-500",
    primary: "text-blue-500",
    info: "text-cyan-500",
    success: "text-green-500",
    warning: "text-yellow-500",
    danger: "text-red-500",
  };

  return (
    <p className={`text-lg font-medium ${colorClasses[variant]}`}>{text}</p>
  );
};

export default RestTypography;
