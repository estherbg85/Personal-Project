import photo_aboutme from "../../images/1728998786112.jpg";

function AboutMe() {
  return (
    <div>
      <img
        className="aboutme_img"
        src={photo_aboutme}
        alt="foto de arcoiris"
      ></img>
      <p>
        Mi nombre es Esther, mamá de 2 principes que me han dado la vida y
        sobretodo me han sumergido en esta gran pasión por la literatura, y en
        concreto en la literatura infantil
      </p>
    </div>
  );
}

export default AboutMe;
