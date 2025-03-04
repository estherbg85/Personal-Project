import Header from "../layout/Header";
import Footer from "../layout/Footer";

function Contact() {
  return (
    <div>
      <Header />
      <p>
        Si buscas información sobre un libro en concreto, y no aparece en el
        listado, por favor, rellena el siguiente formulario.
      </p>
      <p>Me pondre en contacto contigo, lo más rápido posible.</p>
      <form className="contact">
        <label className="contact_label" htmlFor="name">
          Nombre
        </label>
        <input
          className="contact_name"
          name="name"
          type="text"
          id="name"
          placeholder="Nombre..."
        />

        <label className="contact_label" htmlFor="email">
          Email
        </label>
        <input
          className="contact_email"
          type="email"
          name="email"
          id="email"
          placeholder="Rjx@..."
        />

        <label className="contact_label" htmlFor="title">
          Título
        </label>
        <input
          className="contact_title"
          type="text"
          name="tile"
          id="title"
          placeholder="Cuento"
        />

        <label className="contact_label" htmlFor="information">
          Información
        </label>
        <textarea
          className="contact_information"
          type="text"
          name="information"
          id="information"
          placeholder="Información que necesitas"
          rows="5"
        ></textarea>
      </form>
      <Footer></Footer>
    </div>
  );
}

export default Contact;
