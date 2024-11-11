interface ColorBlockProps {
  color: string;
  name: string;
}

const ColorBlock = ({ color, name }: ColorBlockProps) => (
  <div className="flex items-start gap-2 p-2">
    <div
      className="w-16 h-16 rounded shadow-sm"
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
  title?: string;
}

export const ColorPalette = ({ colors, title }: ColorPaletteProps) => (
  <div className="space-y-4">
    {title && <h5 className="text-[34px] font-bold">{title}</h5>}
    <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-3 gap-4">
      {Object.entries(colors).map(([name, value]) => (
        <ColorBlock key={name} color={value} name={`${name}`} />
      ))}
    </div>
  </div>
);
