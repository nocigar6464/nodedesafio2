import React, { useState } from "react";

//importar componentes
import Registro from "./components/registro";
import Alert from "./components/alert";

//importar CSS
import "./components/css/App.css";

function App() {
  const [mensaje, setMensaje] = useState("");

  return (
    <div>
      <Registro setMensaje={setMensaje} />
    </div>
  );
}

export default App;
