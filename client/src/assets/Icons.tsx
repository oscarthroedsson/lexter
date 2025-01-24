export type IconProps = {
  className?: string;
  color?: string;
  size?: number;
  stroke?: number;
  onClick?: (e: React.MouseEvent<SVGSVGElement>) => void;
};

export type IconsType = keyof Icons;

export type Icons = {
  Send: ({ className, color, size, stroke, onClick }: IconProps) => JSX.Element;
  Message: ({ className, color, size, stroke, onClick }: IconProps) => JSX.Element;
};

export const getAllIcons = (): Icons => ({
  Send,
  Message,
});

import { SendHorizontal, MessageSquareMore } from "lucide-react";

export function Message({ className, color, size, stroke, onClick }: IconProps) {
  return (
    <MessageSquareMore
      className={`${className}`}
      color={`${color || "text-primary"}`}
      size={size || 64}
      strokeWidth={stroke || 1}
      absoluteStrokeWidth={false}
      onClick={onClick}
    />
  );
}

export function Send({ className, color, size, stroke, onClick }: IconProps) {
  return (
    <SendHorizontal
      className={`${className}`}
      color={`${color || "text-primary"}`}
      size={size || 64}
      strokeWidth={stroke || 1}
      absoluteStrokeWidth={false}
      onClick={onClick}
    />
  );
}
