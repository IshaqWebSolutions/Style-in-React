import { useState } from "react";
import image2 from "./assets/images.png";

function Dynamic() {
  const [cardStyle, setCardStyle] = useState({
    backgroundColor: "lightgrey",
    border: "1px solid black",
    borderRadius: "5px",
    width: "200px",
    padding: "10px",
    margin: "20px",
    boxShadow: "2px 3px 4px black",
    textAlign: "center",
  });

  // Boolean value
  const [grid, setGrid] = useState(true);

  const updateTheme = (bgColor, textColor) => {
    setCardStyle({
      ...cardStyle,
      backgroundColor: bgColor,
      color: textColor,
    });
  };

  return (
    <div>
      <hr />

      <button onClick={() => updateTheme("grey", "white")}>Grey Theme</button>

      <button onClick={() => updateTheme("white", "green")}>
        Default Theme
      </button>

      <button onClick={() => setGrid(!grid)}>Toggle Layout</button>

      <br />
      <br />

      <div
        style={{
          display: grid ? "flex" : "block",
          gap: "10px",
        }}
      >
        <div style={cardStyle}>
          <img src={image2} alt="img" width="180px" height="180px" />
          <h5>Muhammad Ishaq</h5>
          <p>I am a programmer</p>
        </div>

        <div style={cardStyle}>
          <img src={image2} alt="img" width="180px" height="180px" />
          <h5>Muhammad Ishaq</h5>
          <p>I am a programmer</p>
        </div>

        <div style={cardStyle}>
          <img src={image2} alt="img" width="180px" height="180px" />
          <h5>Muhammad Ishaq</h5>
          <p>I am a programmer</p>
        </div>

        <div style={cardStyle}>
          <img src={image2} alt="img" width="180px" height="180px" />
          <h5>Muhammad Ishaq</h5>
          <p>I am a programmer</p>
        </div>
      </div>
    </div>
  );
}

export default Dynamic;
