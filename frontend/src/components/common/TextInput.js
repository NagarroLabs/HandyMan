import React from "react";
import PropTypes from "prop-types";
import "../index.css";

function TextInput(props) {
  let wrapperClass = "form-group";

  return (
    <div className={wrapperClass}>
      <div className="field">
        <label className="lettering">{props.label}: </label>

        <input
          id={props.id}
          type="text"
          onChange={props.onChange}
          name={props.name}
          className="inputField"
          value={props.value}
        />
      </div>
      {props.error && <div className="alert alert-danger">{props.error}</div>}
    </div>
  );
}

TextInput.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
  error: PropTypes.string,
};

TextInput.defaultProps = {
  error: "",
};

export default TextInput;
