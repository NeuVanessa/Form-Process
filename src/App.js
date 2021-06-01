import { useState, useEffect } from "react";
import formulario from "./formulario.json";
import Element from "./components/Element";
import { Form } from "./Form";
function App() {
  const [array, setArray] = useState(null);
  useEffect(() => {
    setArray(formulario[0]);
    //console.log("DADOS DO FORMULÁRIO RETORNO ======>",formulario)
  }, []);
  const { campos, titulo } = array ?? {};

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("NOVO ITEM==>", array);
  };

  const handleChange = (_id, event) => {
    const newArrayList = { ...array };
    newArrayList.campos.forEach((campo) => {
      const { id } = campo;
      if (_id === id) {
        campo["name"] = event.target.value;
      }
      setArray(newArrayList);
    });

    console.log("MOSTRANDO OS DADOS ==>", array);
  };

  //estilização do titulo
  const title = {
    position: "relative",
    textAlign: "center",
    fontSize: 30,
    fontFamily: "monospace",
    color: "#999",
  };

  //estilização do Botão
  const _container = {
    position: "relative",
    textAlign: "center",
    fontSize: 30,
    fontFamily: "monospace",
  };

  //estilzando botão
  const _button = {
    position: "relative",
    textAlign: "center",
    fontSize: 30,
    fontFamily: "monospace",
    color: "white",
    backgroundColor: "#999",
  };
  return (
    <Form.Provider value={{ handleChange }}>
      <div className="container">
        <h3 style={title}>{titulo}</h3>
        {/* Formulário com map pegando os campos do json */}
        <form>
          {campos
            ? campos.map((campo, i) => <Element key={i} campo={campo} />)
            : null}
    {/* Div Container com a estilização */}
          <div style={_container}>
            <button
              style={_button}
              type="submit"
              className="btn btn-primary"
              onClick={(e) => handleSubmit(e)}
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
    </Form.Provider>
  );
}

export default App;
