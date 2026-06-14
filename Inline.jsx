import image1 from "./assets/image.jpg";

function Inline() {
  const cardStyle = {
    border: "1px solid black",
    backgroundColor: "lightgrey",
    width: "300px",
    padding: "5px",
    margin: "10px",
    boxShadow: "2px 4px 5px grey",
  };
  const containerStyle = {
    display: "flex",
    flexWrap: "wrap",
  };
  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <img src={image1} alt="Description" width={"300px"} height={"300px"} />
        <div
          style={{
            textAlign: "center",
          }}
        >
          <h4>Muhammad Ishaq</h4>
          <p>Web Development</p>
        </div>
      </div>
      <div style={cardStyle}>
        <img src={image1} alt="Description" width={"300px"} height={"300px"} />
        <div
          style={{
            textAlign: "center",
          }}
        >
          <h4>Muhammad Ishaq</h4>
          <p>Web Development</p>
        </div>
      </div>
      <div style={cardStyle}>
        <img src={image1} alt="Description" width={"300px"} height={"300px"} />
        <div
          style={{
            textAlign: "center",
          }}
        >
          <h4>Muhammad Ishaq</h4>
          <p>Web Development</p>
        </div>
      </div>
      <div style={cardStyle}>
        <img src={image1} alt="Description" width={"300px"} height={"300px"} />
        <div
          style={{
            textAlign: "center",
          }}
        >
          <h4>Muhammad Ishaq</h4>
          <p>Web Development</p>
        </div>
      </div>
      <div style={cardStyle}>
        <img src={image1} alt="Description" width={"300px"} height={"300px"} />
        <div style={{ textAlign: "center" }}>
          <h4>Muhammad Ishaq</h4>
          <p>Web Development</p>
        </div>
      </div>
    </div>
  );
}

export default Inline;
