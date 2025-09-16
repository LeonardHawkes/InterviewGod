import { useState } from "react";

type Color = { name: string };

interface Props {
  colors: Color[];
}

const ColorList = ({ colors }: Props) => {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
      <div style={{ display: "flex", gap: "0.5rem" }}>
        {colors.map((color) => (
          <button key={color.name} onClick={() => setSelected(color.name)}>
            {color.name}
          </button>
        ))}
      </div>

      {selected && <p>Selected: {selected}</p>}

      {selected && (
        <button onClick={() => setSelected(null)}>
          Clear
        </button>
      )}
    </div>
  );
};

export default ColorList;
