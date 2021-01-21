import React, { Component } from "react";
import API from "../utils/API";
import { Container, Row, Col } from "../components/Grid";
import SavedResult from "../components/SavedResult";
import Jumbotron from "../components/Jumbotron";

class SaveBooks extends Component {
  //sets the initial state
  state = {
    savedbooks: [],
  };

  //default method which executes when page loads
  componentDidMount() {
    this.fetchSavedBooks();
  }

  //fetches the savedbooks from db
  fetchSavedBooks() {
    API.savedbooks().then((res) => {
      this.setState({ savedbooks: res.data });
    });
  }

  //delets the saved book from database
  handleDeleteButton = (id) => {
    API.deleteBook(id)
      .then((res) => this.fetchSavedBooks())
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div>
        <Jumbotron>
          <h2>(React) Google Books Search</h2>
          <p>Search for and Save Books of Interest</p>
        </Jumbotron>
        <br></br>
        <Container>
          <Row>
            <Col size="12">
              <SavedResult
                savedbooks={this.state.savedbooks}
                handleDeleteButton={this.handleDeleteButton}
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default SaveBooks;
