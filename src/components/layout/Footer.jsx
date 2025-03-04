import photo_rainbow from "../../images/libro-abierto-arcoiris-arcoiris_81048-7204.avif";

function Footer() {
  return (
    <div className="footer">
      <p className="footer_copy">El Aroiris de los cuento &copy; 2025</p>
      <img
        className="footer_img"
        src={photo_rainbow}
        alt="foto de arcoiris"
      ></img>
    </div>
  );
}

export default Footer;
