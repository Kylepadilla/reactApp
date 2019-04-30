import React from "react";

// This file exports the Input, TextArea, and FormBtn components

export function Input(props) {
  return (
  
    <div className="input-group mb-3">
      <input {...props}
      className="form-control" 
      aria-describedby="button-addon2"
       />
       </div>
  );
}

export function TextArea(props) {
  return (
    <div className="form-group">
      <textarea className="form-control" rows="20" {...props} />
    </div>
  );
}

 export function FormBtn(props) {
  return (
    <button {...props} className="btn btn-outline-secondary">
      Search
    </button>
  );
 }
