import React from "react";

function SearchForm(props) {
  return (
    <form>
      <div className="form-group">
        <label>
          <h3 className="mt-5">Book Search</h3>
        </label>
        <br></br>
        <input
          className="col-12 form-control"
          value={props.search}
          type="text"
          name="search"
          placeholder="Search for your favorite book"
          onChange={props.handleInputChange}
        />
      </div>
      <button
        type="submit"
        className="btn btn-primary"
        onClick={props.handleFormSubmit}
      >
        Submit
      </button>
    </form>
  );
}

export default SearchForm;
