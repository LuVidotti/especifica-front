import "./MapaProfessores.css";
import Nav from "../../components/Nav";
import Subtitulo from "../../components/Subtitulo";
import Titulo from "../../components/Titulo";

function MapaProfessores() {
  return (
    <div className="nav-container">
      <Nav />
      <div className="mapa-professores">
        <div className="titulo-subtitulo">
          <Titulo>Mapa de professor</Titulo>
          <Subtitulo>
            Consulte o mapa de aulas e permanências de um professor.
          </Subtitulo>
        </div>
      </div>
    </div>
  );
}

export default MapaProfessores;
