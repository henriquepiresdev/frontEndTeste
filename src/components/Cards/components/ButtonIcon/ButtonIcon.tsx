import React from "react";

type ButtonIconProps = {
  Icon: React.ElementType;
  className: string;
  onClick: () => void;
};

export function ButtonIcon({ Icon, className, onClick }: ButtonIconProps) {
  return (
    <button onClick={onClick} className={className}>
      <Icon className="w-[20px] h-[20px]" />
    </button>
  );
}
