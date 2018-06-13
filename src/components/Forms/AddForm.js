import React from "react";
import { Field, reduxForm } from "redux-form";
import "./FormStyles.css";

let AddForm = props => {
  const { handleSubmit } = props;
  return (
    <form className="form" onSubmit={handleSubmit}>
      <Field
        name="text"
        component="input"
        type="text"
        placeholder="Add animal"
        className="form__input"
      />
      <button className="form__btn" type="submit">
        &#128584;
      </button>
    </form>
  );
};
AddForm = reduxForm({
  form: "form"
})(AddForm);

export default AddForm;
