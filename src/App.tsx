import { useEffect } from "react";
import { useRoutes } from "react-router-dom";
import "./App.css";
import { useAuth } from "./core/provider/AuthProvider";
import { routes } from "./routes";

function App() {
  const element = useRoutes(routes);
  const { getUserInfoByToken } = useAuth();

  useEffect(() => {
    getUserInfoByToken();
  }, []);

  return <div className="h-screen">{element}</div>;
}

export default App;
