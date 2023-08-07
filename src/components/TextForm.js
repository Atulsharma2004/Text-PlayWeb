import React, { useState } from "react";

export default function TextForm(props) {
  const upClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase", "success");
  };
  const loClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase", "success");
  };
  const clrTxt = () => {
    let newText = " ";
    setText(newText);
    props.showAlert("Text cleared", "danger");
  };
  const remSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Space matained", "primary");
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const [text, setText] = useState();
  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            rows="8"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor:
                props.mode === "dark" ? "rgb(58 98 159)" : "white",
              color: props.mode === "dark" ? "white" : "black",
              border:
                props.mode === "dark"
                  ? "1px solid rgb(110 146 202)"
                  : "solid 1px black",
            }}
          ></textarea>
        </div>
        <button
          disabled={text?.length === 0}
          className="btn btn-primary me-1 mb-1"
          onClick={upClick}
        >
          ConvertToUppercase
        </button>
        <button
          disabled={text?.length === 0}
          className="btn btn-primary me-1 mb-1"
          onClick={loClick}
        >
          ConvertToLowercase
        </button>
        <button
          disabled={text?.length === 0}
          className="btn btn-primary me-1 mb-1"
          onClick={clrTxt}
        >
          Clear Text
        </button>
        <button
          disabled={text?.length === 0}
          className="btn btn-primary me-1 mb-1"
          onClick={remSpace}
        >
          Remove Extra Spaces
        </button>
      </div>
      <div className="container my-3">
        <h2>Your Text Summary</h2>
        <p>
          {
            (text || "").split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words and {text?.length}characters
        </p>
        <p>
          {" "}
          {0.008 *
            (text || "").split("/s+/").filter((element) => {
              return element.length !== 0;
            }).length}{" "}
          Minutes to read
        </p>
        <h3>Preview</h3>
        <p>{text?.length > 0 ? text : "Enter somrthing to preview it here"}</p>
      </div>
    </>
  );
}
