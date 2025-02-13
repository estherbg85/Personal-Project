import Header from '../layout/Header';
function HomePage () {
    return (
        <div>
          <Header/>
          <section>
            <h2 className="form">¿Buscas un libro en concreto?</h2>
            
            <p>Si no lo encuentras, ponte en contacto conmigo y lo solucionaremos</p>
          </section>
        </div>
    );
}

export default HomePage;