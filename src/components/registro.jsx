import React from "react";

//importar compotentes
import Formulario from "./formulario";
import Alert from "./alert";
import SocialButton from "./socialButton";

//importar CSS
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";

function Registro({ setMensaje }) {
  return (
    <div className="d-flex  flex-column align-items-center justify-content-center">
      <Card
        className="card border border-success shadow-0 mb-3 align-items-center"
        style={{ padding: "30px" }}>
        <h1 className="card-title">Crea tu cuenta</h1>
        <SocialButton />
        <h4 className="text-center mt-4">o usa tu email para registrarte</h4>
        <Formulario setMensaje={setMensaje} />
        <Alert />
        {alert && <Alert message={alert.message} color={alert.color} />}
      </Card>
    </div>
  );
}

export default Registro;
