import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./pages/Inicio";
import MapaSalas from "./pages/MapaSalas";
import "./App.css";
import Header from "./components/Header";
import MapaProfessores from "./pages/MapaProfessores";
import Horarios from "./pages/Horarios";
import Relatorios from "./pages/Relatorios";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Configuracoes from "./pages/Configuracoes";
import Notificacoes from "./pages/Notificacoes";
import { useAuthentication } from "./components/Context/AuthContext";
import Cookies from "js-cookie";
import { useEffect } from "react";

function App() {
  const { isAuthenticated, setIsAuthenticated } = useAuthentication();

  useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      setIsAuthenticated(true);
    }
  }, [setIsAuthenticated]);

  return (
    <BrowserRouter>
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" Component={isAuthenticated ? Inicio : Login} />
          <Route path="/mapa-de-salas" Component={MapaSalas} />
          <Route path="/mapa-de-professores" Component={MapaProfessores} />
          <Route path="/horarios" Component={Horarios} />
          <Route path="/horarios/:id" Component={Horarios} />
          <Route path="/relatorios" Component={Relatorios} />
          <Route path="/configuracoes" Component={Configuracoes} />
          <Route path="/notificacoes" Component={Notificacoes} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
