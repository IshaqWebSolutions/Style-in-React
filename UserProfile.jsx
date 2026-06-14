import style from "./css/user.module.css";
import image3 from "./assets/images.png";

function UserProfile() {
  return (
    <div>
      <h1 className={style.heading}>Style with css module</h1>

      <div className={style.container}>
        <div className={style.card}>
          <div className={style.img}>
            <img src={image3} alt="" />
          </div>
          <div className={style.text}>
            <h4>Sur Khan</h4>
            <p>Software Developer</p>
          </div>
        </div>
        <div className={style.card}>
          <div className={style.img}>
            <img src={image3} alt="" />
          </div>
          <div className={style.text}>
            <h4>Sur Khan</h4>
            <p>Software Developer</p>
          </div>
        </div>
        <div className={style.card}>
          <div className={style.img}>
            <img src={image3} alt="" />
          </div>
          <div className={style.text}>
            <h4>Sur Khan</h4>
            <p>Software Developer</p>
          </div>
        </div>
        <div className={style.card}>
          <div className={style.img}>
            <img src={image3} alt="" />
          </div>
          <div className={style.text}>
            <h4>Sur Khan</h4>
            <p>Software Developer</p>
          </div>
        </div>
        <div className={style.card}>
          <div className={style.img}>
            <img src={image3} alt="" />
          </div>
          <div className={style.text}>
            <h4>Sur Khan</h4>
            <p>Software Developer</p>
          </div>
        </div>
        <div className={style.card}>
          <div className={style.img}>
            <img src={image3} alt="" />
          </div>
          <div className={style.text}>
            <h4>Sur Khan</h4>
            <p>Software Developer</p>
          </div>
        </div>
        <div className={style.card}>
          <div className={style.img}>
            <img src={image3} alt="" />
          </div>
          <div className={style.text}>
            <h4>Sur Khan</h4>
            <p>Software Developer</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
