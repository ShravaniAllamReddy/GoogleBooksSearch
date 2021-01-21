import React from "react";

function SearchForm(props) {
    return (
        <form>
            <div className="form-group">
                <label><h3 className="mt-5">Search For a Book</h3></label>
                <br></br>
                <input className="col-12 form-control"
                    value={props.search}
                    type="text"
                    name="search"
                    placeholder="Search for your favorite book which loads from googlebooksapi"
                    onChange={props.handleInputChange}
                />
            </div>
            <button type="submit" className="btn btn-primary" onClick={props.handleFormSubmit}>
                Submit
            </button>
        </form>
    )
}



export default SearchForm;