import { Link } from 'react-router-dom';
import photo_rainbow from '../../images/libro-abierto-arcoiris-arcoiris_81048-7204.avif';
import photo_cloud from '../../images/clouds-transparent-background-91.png';

function LandingPage () {

    return (
        
        <section className="landing">
            <h1 className="landing_title">EL ARCOIRIS DE LOS SUEÑOS</h1>
            <img className="landing_img" src={photo_rainbow} alt="foto de arcoiris"></img>
            <h3 className="landing_titleSub">Disfruta de la magia de la lectura</h3>
            <Link to="/HomePage">
                <img className="landing_cloud" src={photo_cloud}></img>
            </Link>
        </section>


    );
}

export default LandingPage;