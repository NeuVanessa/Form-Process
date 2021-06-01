import React from "react";


export default function Form() {
    
  return (
    <div className="container">
      <form>
        <div className="group-form">
          <label>
            Email:
            <input type="email" name="email" />
          </label>
        </div>
     
  

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}


