import { Link } from "react-router-dom";

const Public = () => {
  const content = (
    <section className="public">
      <header>
        <h1>
          Bienvenido a <span className="nowrap">Juan D.¡Reparaciones!</span>
        </h1>
      </header>
      <main className="public__main">
        <p>
        Ubicado en el hermoso centro de Córdoba, Juan D. Reparaciones ofrece un
        Personal capacitado listo para satisfacer sus necesidades de reparación tecnológica.
        </p>
        <address className="public__addr">
        Juan D.¡Reparaciones!
          <br />
          555 San Martín
          <br />
          Córdoba Capital-Argentina
          <br />
          <a href="tel:+15555555555">(555) 555-5555</a>
        </address>
        <br />
        <p>Dueño : Juan D</p>
      </main>
      <footer>
        <Link to="login">Inicio de Sesion</Link>
      </footer>
    </section>
  );
  return content;
};

export default Public;
