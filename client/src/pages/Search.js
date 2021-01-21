import React, { Component } from "react";
import API from "../utils/API";
import { Container, Row, Col } from "../components/Grid";
import SearchForm from "../components/SearchForm";
import SearchResult from "../components/SearchResult";
import Jumbotron from "../components/Jumbotron";

class SearchBooks extends Component {
  //sets the initial state
  state = {
    search: "",
    googlebooks: [],
  };

  // Handles updating component state when the user types into the input field
  handleInputChange = (event) => {
    this.setState({ search: event.target.value });
  };

  // When the form is submitted,it uses the API.getGoogleBooks method to get the book data
  // and resets the state of the googlebooks with the response
  handleFormSubmit = (event) => {
    event.preventDefault();
    API.getGoogleBooks(this.state.search).then((res) => {
      let books = res.data.items.map((result) => {
        result = {
          key: result.id,
          id: result.id,
          title: result.volumeInfo.title,
          author: result.volumeInfo.authors,
          description: result.volumeInfo.description,
          image: result.volumeInfo.imageLinks.thumbnail,
          link: result.volumeInfo.infoLink,
        };
        return result;
      });
      this.setState({ googlebooks: books });
    });
  };

  //uses saveBook to save the matched book in the database
  handleSaveButton = (event) => {
    event.preventDefault();
    let bookData = this.state.googlebooks.filter(
      (book) => book.id === event.target.id
    );
    // console.log(bookData);
    API.saveBook(bookData)
      .then(this.setState({ message: alert("Your book is saved") }))
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div>
        <Jumbotron>
          <h2>(React) Google Books Search</h2>
          <p>Search for and Save Books of Interest</p>
        </Jumbotron>
        <Container>
          <Row>
            <Col size="12">
              <SearchForm
                handleFormSubmit={this.handleFormSubmit}
                handleInputChange={this.handleInputChange}
              />
            </Col>
          </Row>
        </Container>
        <br></br>
        <Container>
          <SearchResult
            googlebooks={this.state.googlebooks}
            handleSaveButton={this.handleSaveButton}
          />
        </Container>
      </div>
    );
  }
}

export default SearchBooks;
