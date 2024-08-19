import "./CardSala.css";

function CardSala({
  sala,
  capacidade,
  disciplina,
  alunos,
  turma,
  docente,
  status,
}) {
  return (
    <div className="card-sala">
      <div className="sala-capacidade">
        <div
          className="numero-sala"
          style={{
            backgroundColor:
              status === "Disponível"
                ? "#79FF6D"
                : status === "Em uso"
                ? "#FFF962"
                : "#E0E0E0",
          }}
        >
          {sala}
        </div>
        <div>Capacidade: {capacidade}</div>
      </div>

      {/*
      <div className="sala-info">
        <div className="sala-info__div sala-info__left">
          <p>
            <strong>Disciplina:</strong> {disciplina}
          </p>
          <p>
            <strong>Docente: </strong>
            {docente}
          </p>
        </div>
        <div className="sala-info__div sala-info__right">
          <p>
            <strong>Turma: </strong>
            {turma}
          </p>
          <p>
            <strong>Alunos:</strong>
            {alunos}
          </p>
        </div>
      </div>
      */}
    </div>
  );
}

export default CardSala;
