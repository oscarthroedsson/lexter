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
  PaperclipIcon: ({ className, color, size, stroke, onClick }: IconProps) => JSX.Element;
  MicIcon: ({ className, color, size, stroke, onClick }: IconProps) => JSX.Element;
};

export const getAllIcons = (): Icons => ({
  Send,
  Message,
  PaperclipIcon,
  MicIcon,
});

import { SendHorizontal, MessageSquareMore, Paperclip, Mic } from "lucide-react";

export function MicIcon({ className, color, size, stroke, onClick }: IconProps) {
  return (
    <Mic
      className={`${className}`}
      color={`${color || "text-primary"}`}
      size={size || 64}
      strokeWidth={stroke || 1}
      absoluteStrokeWidth={false}
      onClick={onClick}
    />
  );
}
export function PaperclipIcon({ className, color, size, stroke, onClick }: IconProps) {
  return (
    <Paperclip
      className={`${className}`}
      color={`${color || "text-primary"}`}
      size={size || 64}
      strokeWidth={stroke || 1}
      absoluteStrokeWidth={false}
      onClick={onClick}
    />
  );
}
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
