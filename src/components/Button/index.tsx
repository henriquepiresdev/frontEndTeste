import { cn } from "../../utills/tailwind/cn";
import React, { ComponentProps } from "react";
import { When } from "../When";

type ButtonProps = ComponentProps<"button"> & {
  width?: string;
  height?: string;
  padding?: string;
  loading?: boolean;
  className?: string;
};

export function ButtonCustom({
  width = "120px",
  height = "40px",
  onClick,
  children,
  loading,
  disabled,
  className = "",
  type = "button",
  ...buttonProps
}: ButtonProps) {
  const playClickSound = () => {
    const audio = new Audio("/click.mp3");
    audio.play();
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    playClickSound();
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <button
      {...buttonProps}
      disabled={loading || disabled}
      type={type}
      className={cn(
        `flex items-center justify-center text-white bg-orange- font-semibold font-sans transition-all duration-150 ease-in-out transform active:scale-95`,
        className,
        {
          "cursor-not-allowed bg-gray-600": disabled,
        }
      )}
      onClick={handleClick}
    >
      <When value={loading} elseRender={children} />
    </button>
  );
}
