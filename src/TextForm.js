import React, { useState } from 'react';

const TextForm = (props) => {
  const [text, setText] = useState('');
  const [chars, setChars] = useState(0);
  const [words, setWords] = useState(0);

  const onchangeHandler = (e) => {
    console.log(e.target.value);
    setText(e.target.value);
    setChars(e.target.value.length);
    setWords(e.target.value.split(' ').length);
  };
  const upperCaseHandler = () => {
    let upperText = text.toUpperCase();
    setText(upperText);
  };
  const lowerCaseHandler = () => {
    let lowerText = text.toLowerCase();
    setText(lowerText);
  };

  const capitalizeHandler = () => {
    let capitalizeText =
      text.substr(0, 1).toUpperCase() + text.substr(1).toLowerCase();
    setText(capitalizeText);
  };
  return (
    <div className="container my-3">
      <h2 className="display-5 mb-3">{props.header}</h2>
      <span className="d-inline-block mx-3">Total Words: {words}</span>
      <span className="d-inline-block">Total Characters: {chars}</span>
      <div className="mb-3">
        <textarea
          onChange={onchangeHandler}
          value={text}
          placeholder="Enter Something here"
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
        ></textarea>
      </div>
      <button onClick={upperCaseHandler} className="btn btn-primary mx-2">
        Uppercase
      </button>
      <button onClick={lowerCaseHandler} className="btn btn-primary mx-2">
        Lowercase
      </button>
      <button onClick={capitalizeHandler} className="btn btn-primary mx-2">
        Capitalize
      </button>
    </div>
  );
};

export default TextForm;
