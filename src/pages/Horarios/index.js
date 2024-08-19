import Nav from "../../components/Nav";
import Subtitulo from "../../components/Subtitulo";
import Titulo from "../../components/Titulo";
import BotaoBuscar from "../../components/BotaoBuscar";
import TableHeader from "../../components/TableHeader/TableHeader";
import TableRow from "../../components/TableRow/TableRow";
import { getClassroomByName } from "../../api/classroom/getClassroomByName";
import { useQuery } from "react-query";
import Cookies from "js-cookie";
import { useParams } from "react-router-dom";
import { getClassByClassroom } from "../../api/class/getClassByClassroom";
import { useEffect, useState } from "react";
import { getClassroom } from "../../api/classroom/getClassroom";
import Table from "../../components/Table/Table";

function Horarios() {
  const token = Cookies.get("token");
  const { id } = useParams();
  const safeId = id ? id.replace(/:/g, "") : "P005";

  const [classFilter, setClassFilter] = useState(safeId);

  useEffect(() => {
    setClassFilter(safeId);
  }, [safeId]);

  const dataAllClassroom = useQuery({
    queryKey: "getClassroom",
    queryFn: () => getClassroom(token),
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  });

  const dataClass = useQuery({
    queryKey: "getClassByClassroom",
    queryFn: () => getClassByClassroom(token, safeId),
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  });

  return (
    <div className="nav-container">
      <Nav />
      <div className="mapa-professores" style={{ overflowY: "scroll" }}>
        <div className="titulo-subtitulo">
          <Titulo>Horários</Titulo>
          <Subtitulo>
            Consulte o horário das aulas de uma sala especifíca.
          </Subtitulo>
        </div>
        <div>
          <form>
            <div>
              <label>Bloco</label>
              <select>
                {dataAllClassroom.data?.map((e) => (
                  <option key={e.id} value={e.name.substring(0, 1)}>
                    {e.name.substring(0, 1)}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label>Sala</label>
              <select
                value={classFilter}
                onChange={(e) => setClassFilter(e.target.value)}
              >
                {dataAllClassroom.data?.map((e) => (
                  <option key={e.id} value={e.name}>
                    {e.name}
                  </option>
                ))}
              </select>
            </div>
            <BotaoBuscar />
          </form>
        </div>
        <Table data={dataClass.data} />
        {/*

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
          */}
      </div>
    </div>
  );
}

export default Horarios;
