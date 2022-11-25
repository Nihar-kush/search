import { useState } from "react";
import ColorList from "./ColorList";
import DropDown from "./DropDown";

function App() {
  const [input, setInput] = useState("");
  const [active, setActive] = useState(false);
  const [colors, setColors] = useState([]);
  const toggleActive = () => {
    setActive(!active);
  };

  return (
    <div className="App">
      <div className="mainContainer">
        <DropDown
          setActive={setActive}
          colors={colors}
          setColors={setColors}
          toggleActive={toggleActive}
          input={input}
          setInput={setInput}
        />
        {active && (
          <ColorList
            active={active}
            colors={colors}
            setColors={setColors}
            setInput={setInput}
            input={input}
          />
        )}
      </div>
    </div>
  );
}

export default App;
