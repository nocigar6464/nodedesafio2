import React, { useState } from "react";
//no supe como mostrar el mensaje desde el registro y no uniendolo desde aca
import Alert from "./alert";

//importar CSS
import "./css/formulario.css";

function Formulario({ setMensaje }) {
  // Definimos los estados para las variables del formulario
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorEmail, setErrorEmail] = useState(""); // estado para mail con error
  const [errorPassword, setErrorPassword] = useState(""); // estado para la contraseña con error

  // Defino las funciones para manejar los cambios en los input
  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    if (errorEmail) {
      setErrorEmail(""); // Resetea el mensaje de error
    }
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    if (errorPassword) {
      setErrorPassword(""); // Resetea el mensaje de error
    }
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  // Funcion que maneja el envio del formulario
  const validarDatos = (event) => {
    //evita que se recargue la pagina
    event.preventDefault();

    //validacion 1 el formato del email
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setMensaje({
        mensaje: "El correo no tiene un formato valido",
        color: "red",
      });
      return;
    }

    // Validacion 2 en password sea igual a confirm password
    if (password !== confirmPassword) {
      setMensaje({
        mensaje: "Las contraseñas no coinciden",
        color: "red",
      });
      return;
    }

    //validacion 3 de si hay algun input vacio
    if (!name || !email || !password || !confirmPassword) {
      setMensaje({
        mensaje: "faltan campos que completar",
        color: "red",
      });
      return;
    }
    setMensaje({ mensaje: "Enviado con exito", color: "green" });

    setName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");

    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Confirm Password:", confirmPassword);
  };

  //Formulario
  return (
    <form onSubmit={validarDatos}>
      <div>
        <input
          id="name"
          name="name"
          className="input"
          type="text"
          value={name}
          onChange={handleNameChange}
          placeholder="Name"
          autoComplete="off"
          minLength="3"
          required
        />
      </div>
      <div>
        <input
          id="email"
          name="email"
          className="input"
          type="email"
          value={email}
          onChange={handleEmailChange}
          placeholder="Email"
          autoComplete="off" //esto no se si sirvio para algo solo no lo rellena automatico
          required
        />
      </div>

      <div>
        <input
          id="password"
          name="password"
          className="input"
          type="password"
          value={password}
          onChange={handlePasswordChange}
          placeholder="Password"
          autoComplete="off"
          required
        />
      </div>
      <div>
        <input
          id="confirmPassword"
          name="confirmPassword"
          className="input"
          type="password"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
          placeholder="Confirm Password"
          autoComplete="off"
          required
        />
      </div>

      <button id="register" type="submit">
        Registrarse
      </button>

      {/* esto quiero piden que se muestre desde el alert, no se puede manejar hacer un onSumit desde otro componente
       */}
      {
        <div className="error">
          {errorEmail && <span className="error">{errorEmail}</span>}
          {errorPassword && <span className="error">{errorPassword}</span>}
        </div>
      }
    </form>
  );
}

export default Formulario;
