import React from "react";
import { Field, reduxForm } from "redux-form";
import "./FormStyles.css";

let SearchForm = props => {
  const { handleSearch } = props;
  return (
    <form className="form search-form" onSubmit={handleSearch}>
      <Field
        name="text"
        component="input"
        type="text"
        placeholder="Search for animal"
        className="form__input"
        onChange={handleSearch}
      />
      <button type="submit" className="form__btn">
        &#128270;
      </button>
    </form>
  );
};
SearchForm = reduxForm({
  form: "search-form"
})(SearchForm);

export default SearchForm;
