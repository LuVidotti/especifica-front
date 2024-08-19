import "./MapaSalas.css";
import Subtitulo from "../../components/Subtitulo";
import Titulo from "../../components/Titulo";
import CardSala from "../../components/CardSala";
import Nav from "../../components/Nav";
import { ClassMap } from "../../controllers/horarios";
import { useState } from "react";
import { useQuery } from "react-query";
import { getClassroom } from "../../api/classroom/getClassroom";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

function MapaSalas() {
  const navigate = useNavigate();
  const token = Cookies.get("token");
  const classMap = new ClassMap();

  const state = {
    block: "p",
    day: "segunda",
    period: "m1",
  };

  const { data } = useQuery({
    queryKey: "getClassroom",
    queryFn: () => getClassroom(token),
  });

  const [classes, classesState] = useState(
    classMap.getFilteredClasses("segunda", "m1", "p")
  );
  const handleClick = (id) => {
    navigate(`/horarios/:${id}`);
  };
  return (
    <div className="nav-container">
      <Nav />
      <div className="mapa-salas">
        <div className="titulo-subtitulo">
          <Titulo>Mapa de salas</Titulo>
          <Subtitulo>
            Consulte o status das salas utilizadas pelos cursos do DACOM
          </Subtitulo>
        </div>

        <form>
          <div>
            <label>Bloco</label>
            <select onChange={handleBlockState}>
              <option value="p">P</option>
              <option value="a">A</option>
            </select>
          </div>

          <div>
            <label>Dia da semana</label>
            <select onChange={handleDayState}>
              <option value="segunda">Segunda-feira</option>
              <option value="terca">Terça-feira</option>
              <option value="quarta">Quarta-feira</option>
              <option value="quinta">Quinta-feira</option>
              <option value="sexta">Sexta-feira</option>
              <option value="sabado">Sábado</option>
              <option value="domingo">Domingo</option>
            </select>
          </div>

          <div>
            <label>Período</label>
            <select onChange={handlePeriodState}>
              <option value="m1">M1</option>
              <option value="m2">M2</option>
              <option value="m3">M3</option>
              <option value="m4">M4</option>
              <option value="m5">M5</option>
              <option value="m6">M6</option>
              <option value="t1">T1</option>
              <option value="t2">T2</option>
              <option value="t3">T3</option>
              <option value="t4">T4</option>
              <option value="t5">T5</option>
              <option value="t6">T6</option>
              <option value="n1">N1</option>
              <option value="n2">N2</option>
              <option value="n3">N3</option>
              <option value="n4">N4</option>
              <option value="n5">N5</option>
            </select>
          </div>
        </form>

        <div className="caixa-salas">
          <h4>Selecione uma sala para checar seus Horários</h4>
          <div className="salas">
            {data?.map((c, i) => (
              <div key={c.id} onClick={() => handleClick(c.name)}>
                <CardSala
                  key={c.id}
                  sala={c.name}
                  capacidade={c.capacity}
                  //disciplina={c.class.getClassCode()}
                  //docente={c.class.getProfessor()}
                  //alunos={c.class.getStudents()}
                  //status="Em uso"
                ></CardSala>
              </div>
            ))}
          </div>
        </div>

        <div className="legendas">
          <div className="legendas__em-uso">
            <div></div>
            <p>Em uso</p>
          </div>
          <div className="legendas__disponiveis">
            <div></div>
            <p>Disponível</p>
          </div>
        </div>
      </div>
    </div>
  );

  function handleBlockState(e) {
    state.block = e.target.value;
    filterClasses();
  }
  function handleDayState(e) {
    state.day = e.target.value;
    filterClasses();
  }
  function handlePeriodState(e) {
    state.period = e.target.value;
    filterClasses();
  }
  function filterClasses() {
    classesState(
      (s) =>
        (s = classMap.getFilteredClasses(state.day, state.period, state.block))
    );
  }
}

export default MapaSalas;
