import React from "react";
import Input from "./Input/index";
import Select from "./Selector/index";

//Criando e passando props do elemento da lista
const Element = ({ campo: { type, id, label, name, options, value } }) => {
  switch (type) {
    case "email":
      return <Input id={id} label={label} name={name} type={type} />;
    case "password":
      return <Input id={id} label={label} name={name} type={type} />;
    case "number":
      return <Input id={id} label={label} name={name} type={type} />;

    case "select":
      return (
        <Select
          id={id}
          label={label}
          name={name}
          options={options}
          value={value}
        />
      );
    case "number":
      return <Input id={id} label={label} value={value} />;

    default:
      return null;
  }
};
export default Element;
