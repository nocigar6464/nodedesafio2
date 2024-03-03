import React from "react";
import "./css/Alert.css";

const Alert = ({ mensaje, color }) => {
  return <p style={{ color }}>{mensaje}</p>;
};

export default Alert;

//llevo muchos dias tratando de que me funcione el tema del mensaje de alerta y no se porque no se muestra, he probado escribiendolo de distintas formas no se si es porque se confunda xq Alert tambien es un componente de bootstrap o que pero bueno lo intente
