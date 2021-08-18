import React, { useState } from "react";

import useInput from "../hooks/useInput";
import useCheckbox from "../hooks/useCheckbox";

import Button from "../_general/Button";
import Textarea from "../_general/Textarea";
import Input from "../_general/Input";
import Checkbox from "../_general/Checkbox";

export default function PersonForm() {
  const [name, handleName] = useInput("");
  const [email, handleEmail] = useInput("");
  const [bio, handleBio] = useInput("");
  const [regAcceptance, handleRegulationAcceptance] = useCheckbox("");
  const [valid, setValid] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleFormValidation = (e) => {
    validation ? setValid(true) : setValid(false);
  };

  const validateName = (input) => {
    if (input !== "" && isNaN(input) === true) {
      return true;
    } else {
      return false;
    }
  };

  const ValidateEmail = (input) => {
    // let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+\.+[a-zA-Z0-9-]*$/;

    if (input.match(validRegex)) {
      return true;
    } else {
      return false;
    }
  };

  const validation =
    validateName(name) && email !== "" && bio !== "" && regAcceptance === true;
  return (
    <div>
      <p className="header">
          Formularz z własną walidacją
      </p>
      <form onSubmit={handleSubmit}>
        <Input
          style={validateName(name) ? "validated" : "not-validated"}
          type="text"
          placeholder="Write your name"
          handleOnChange={handleName}
          required={false}
        />
        <Input
          style={ValidateEmail(email) ? "validated" : "not-validated"}
          type="text"
          placeholder="Write your e-mail"
          handleOnChange={handleEmail}
          required={true}
        />
        <Textarea
          style={validateName(bio) ? "validated" : "not-validated"}
          placeholder="Short bio..."
          handleOnChange={handleBio}
        />
        <Checkbox
          label="Accept the regulations"
          handleOnChange={handleRegulationAcceptance}
        />
        <p className="paragraph" style={{ maxWidth: 200 }}>
          {valid
            ? "Thanks for sending the data!"
            : "Please fill the form properly!"}
        </p>
        <Button label="Validate Form" handleClick={handleFormValidation} />
      </form>
    </div>
  );
}
