import "./MapaProfessores.css";
import Nav from "../../components/Nav";
import Subtitulo from "../../components/Subtitulo";
import Titulo from "../../components/Titulo";
import TableHeader from "../../components/TableHeader/TableHeader";
import TableRow from "../../components/TableRow/TableRow";
import BotaoBuscar from "../../components/BotaoBuscar";

function MapaProfessores() {
  return (
    <div className="nav-container">
      <Nav />
      <div className="mapa-professores" style={{ overflowY: "scroll" }}>
        <div className="titulo-subtitulo">
          <Titulo>Mapa de professor</Titulo>
          <Subtitulo>
            Consulte o mapa de aulas e permanências de um professor.
          </Subtitulo>
        </div>
        <div>
          <form>
            <div>
              <label>Nome</label>
              <select>
                <option value="">-</option>
                <option value="p">P</option>
                <option value="a">A</option>
              </select>
            </div>
            <div>
              <label>Professor</label>
              <select>
                <option value="">-</option>
                <option value="segunda">Segunda-feira</option>
                <option value="terça">Terça-feira</option>
                <option value="quarta">Quarta-feira</option>
                <option value="quinta">Quinta-feira</option>
                <option value="sexta">Sexta-feira</option>
                <option value="sabado">Sábado</option>
                <option value="domingo">Domingo</option>
              </select>
            </div>
            <BotaoBuscar />
          </form>
        </div>
        <div>
          <div style={{ display: "flex" }}>
            <strong>
              <p>P:</p>
            </strong>
            <p style={{ marginLeft: 5 }}>Permanências</p>
          </div>
          <div style={{ display: "flex" }}>
            <strong>
              <p>ME:</p>
            </strong>
            <p style={{ marginLeft: 5 }}>Manutenção de ensino</p>
          </div>
          <div style={{ display: "flex" }}>
            <strong>
              <p>Paluno:</p>
            </strong>
            <p style={{ marginLeft: 5 }}>
              Permanências para atendimento aos alunos
            </p>
          </div>
        </div>
        <TableHeader />
        <div
          style={{
            display: "flex",
            padding: 5,
            justifyContent: "center",
            backgroundColor: "grey",
          }}
        >
          <strong>
            <p>Manhã</p>
          </strong>
        </div>
        <TableRow id={"M1"} horario={"07:30"} />
        <TableRow id={"M2"} horario={"08:20"} cinza={true} />
        <TableRow id={"M3"} horario={"09:10"} />
        <TableRow id={"M4"} horario={"10:20"} cinza={true} />
        <TableRow id={"M5"} horario={"11:10"} />
        <TableRow id={"M6"} horario={"12:00"} cinza={true} />
        <div
          style={{
            display: "flex",
            padding: 5,
            justifyContent: "center",
            backgroundColor: "grey",
          }}
        >
          <strong>
            <p>Tarde</p>
          </strong>
        </div>
        <TableRow id={"T1"} horario={"13:00"} />
        <TableRow id={"T2"} horario={"13:50"} cinza={true} />
        <TableRow id={"T3"} horario={"14:40"} />
        <TableRow id={"T4"} horario={"15:50"} cinza={true} />
        <TableRow id={"T5"} horario={"16:40"} />
        <TableRow id={"T6"} horario={"17:50"} cinza={true} />
        <div
          style={{
            display: "flex",
            padding: 5,
            justifyContent: "center",
            backgroundColor: "grey",
          }}
        >
          <strong>
            <p>Noite</p>
          </strong>
        </div>
        <TableRow id={"N1"} horario={"18:40"} />
        <TableRow id={"N2"} horario={"19:30"} cinza={true} />
        <TableRow id={"N3"} horario={"20:20"} />
        <TableRow id={"N4"} horario={"21:20"} cinza={true} />
        <TableRow id={"N5"} horario={"22:10"} />
      </div>
    </div>
  );
}

export default MapaProfessores;
