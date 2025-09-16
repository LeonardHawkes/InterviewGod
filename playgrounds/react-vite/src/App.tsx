import { useState } from "react";
import ColorList from "../../../week-01/react-microbuilds/ColorList";

const App = () => {
  const [colors] = useState([{ name: "Red" }, { name: "Blue" }, { name: "Green" }]);

  return (
    <div style={{ fontFamily: "system-ui", padding: 24 }}>
      <h1>InterviewGod Playground</h1>
      <p>Point components here while practicing.</p>

      {/* When you build ColorList.tsx, import it and render here */}
      <ColorList colors={colors} />
    </div>
  );
};

export default App;
