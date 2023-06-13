import React, { useState } from 'react';

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("Clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert('Converted to upper case', 'success');
  };
  const handleLowClick = () => {
    // console.log("Clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert('Converted to lower case', 'success');
  };
  const handleClrClick = () => {
    let newText = '';
    setText(newText);
    props.showAlert('Field cleared', 'success');
  };
  const handleUpfClick = () => {
    // for (var i = 0; i < text.length; i++) {
    //   let newTextt = [];
    //   newTextt[i] = text[i].charAt(0).toUpperCase() + text[i].slice(1);
    // }
    // const newTextt = newTextt.join(" ");

    let newText = text.charAt(0).toUpperCase() + text.slice(1);
    setText(newText);
    props.showAlert('Characters changed', 'success');
  };
  const handleCopy = () => {
    console.log('I am copy');
    var text = document.getElementById('myBox');
    text.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(text.value);
    props.showAlert('Copyed value', 'success');
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(' '));
    props.showAlert('Extra spaces removed', 'success');
  };

  const handleOnChange = event => {
    // console.log("On change");
    setText(event.target.value);
  };
  const [text, setText] = useState('');

  return (
    <>
      <div
        className="container"
        style={{
          color: props.mode === 'dark' ? 'white' : 'back',
        }}
      >
        <h1> {props.heading}</h1> <div className="mb-3"></div>{' '}
        <div className="mb-3">
          {' '}
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === 'dark' ? 'grey' : 'white',
              color: props.mode === 'dark' ? 'white' : 'black',
            }}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLowClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleClrClick}>
          Clear text
        </button>
        <button className="btn btn-primary mx-2" onClick={handleUpfClick}>
          Capatilize
        </button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>
          Copy
        </button>
        <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>
          Handle Spaces
        </button>
      </div>
      <div
        className="container my-2"
        style={{
          color: props.mode === 'dark' ? 'white' : 'black',
        }}
      >
        <h2>Your text summary</h2>
        <p>
          {text.split(' ').length} and {text.length} characters
        </p>
        <p>{0.008 * text.split(' ').length} minutes required</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : 'Enter something above'}</p>
      </div>
    </>
  );
}
