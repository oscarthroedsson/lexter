import { getAllIcons, IconProps, IconsType } from "@/assets/Icons";

// Hämtar alla ikoner som ett objekt
const icons = getAllIcons();

export function Icon({
  className,
  color,
  size,
  stroke,
  onClick,
  type,
}: IconProps & { type: IconsType }): JSX.Element | null {
  const SelectedIcon = icons[type as IconsType];

  function handleClick(e: React.MouseEvent<SVGSVGElement>) {
    if (onClick && e) {
      onClick(e);
    }
  }

  if (!SelectedIcon) {
    throw new Error(`Icon ${type} not found`);
  }

  // Render the selected icon
  return <SelectedIcon className={className} color={color} size={size} stroke={stroke} onClick={handleClick} />;
}
