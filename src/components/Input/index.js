//Iniciando o formulário Input

//importação do React e use Context para o contexto
import React, { useContext } from "react";
//Chamando o contexto
import { Form } from "../../Form";

//Pegando os Atributos Id, Label e Name do Json
const Input = ({ id, label, name }) => {
  //Criando a constante do contexto
  const { handleChange } = useContext(Form);
  return (
    //Container Component Criado no styles.js
    <div className="container" style={{textAlign:'center',backgroundColor:'#666'}}>
    <input style={{padding:5,margin:10}}
      name={name}
      //Atributo placeholder responsával pelo nome dentro do Input
      placeholder={label ? label : ""}
      //Evento de ponta partida para o Input Funcionar
      onChange={(event) => handleChange(id, event)}
    />
    
  </div>
  );
};

export default Input;
