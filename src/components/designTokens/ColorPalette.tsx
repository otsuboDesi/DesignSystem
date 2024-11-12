import { semanticColors } from './colors';

interface ColorBlockProps {
  color: string;
  name: string;
}

const ColorBlock = ({ color, name }: ColorBlockProps) => (
  <div className="flex items-start gap-2 p-2">
    <div
      className={`w-16 h-16 min-w-16 rounded border border-[${semanticColors.border.default}] `}
      style={{ backgroundColor: color }}
    />

    <div className="flex flex-col">
      <span className="text-[14px] font-bold">{name}</span>
      <code className="text-[11px]">{color}</code>
    </div>
  </div>
);

export interface ColorPaletteProps {
  colors: Record<string, string>;
}

export const ColorPalette = ({ colors }: ColorPaletteProps) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
    {Object.entries(colors).map(([name, value]) => (
      <ColorBlock key={name} color={value} name={`${name}`} />
    ))}
  </div>
);
