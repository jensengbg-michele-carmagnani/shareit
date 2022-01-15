import React from 'react';
import './Input.css';
const Input = (props) => {
  const element =
    props.element === 'input' ? (
      <input
        id={props.id}
        type={props.type}
        placeholder={props.placeholder}
        onChange={props.onChange}
      />
    ) : (
      <textarea id={props.id} rows={props.rows || 3} />
    );
  return (
    <div className={`form-control`}>
      <label htmlFor={props.id}>{props.lable}</label>
      {element}
    </div>
  );
};

export default Input;
