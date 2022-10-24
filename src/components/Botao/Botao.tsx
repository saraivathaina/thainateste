import React from "react";
import "./Botao.scss";

export interface BotaoProps {
  label: string;
}

const Botao = (props: BotaoProps) => {
  return <button> Botao {props.label}</button>;
};

export default Botao;
