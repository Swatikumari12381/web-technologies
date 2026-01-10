import { useState } from "react";
import "./toggle.css"

const Toggle= () => {
  const [dark, setDark] = useState(false);

  return (
    <div className={dark ? "dark" : "light"}>
      <button onClick={() => setDark(!dark)}>
        Toggle Background
      </button>
    </div>
  );
};

export default Toggle;
