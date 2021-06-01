import React, { useContext } from "react";
import { Form } from "../../Form";
const Select = ({ id, label, name, options }) => {
  const { handleChange } = useContext(Form);
  return (
    <>
      {/* <label className="form" >{name}</label> */}
      <select className="select" onChange={(event) => handleChange(id, event)}>
        <option>{label}</option>
        {options.length > 0 &&
          options.map((option, i) => (
            <option value={option.value} key={i}>
              {option.value}
            </option>
          ))}
      </select>
    </>
  );
};

export default Select;
