import "./css/style.css";
import image3 from "./assets/images.png";

function External() {
  return (
    <div>
      <hr />
      <h1 className="heading">External Style</h1>

      <div className="container">
        <div className="user-card">
          <div className="img-style">
            <img src={image3} alt="" />
          </div>
          <div className="text-wrap">
            <h4>Sur Khan</h4>
            <p>Software Developer</p>
          </div>
        </div>
        <div className="user-card">
          <div className="img-style">
            <img src={image3} alt="" />
          </div>
          <div className="text-wrap">
            <h4>Sur Khan</h4>
            <p>Software Developer</p>
          </div>
        </div>
        <div className="user-card">
          <div className="img-style">
            <img src={image3} alt="" />
          </div>
          <div className="text-wrap">
            <h4>Sur Khan</h4>
            <p>Software Developer</p>
          </div>
        </div>
        <div className="user-card">
          <div className="img-style">
            <img src={image3} alt="" />
          </div>
          <div className="text-wrap">
            <h4>Sur Khan</h4>
            <p>Software Developer</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default External;
