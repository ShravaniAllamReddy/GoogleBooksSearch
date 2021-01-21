import React, { Component } from "react";
import API from "../utils/API";
import { Container, Row, Col } from "../components/Grid";
import SavedResult from "../components/SavedResult"
import Jumbotron from "../components/Jumbotron";

class SaveBooks extends Component {
    //create state
    state = {
        savedbooks: [],
    };
    
    componentDidMount(){
        this.fetchSavedBooks();
    }

    fetchSavedBooks() {
        API.savedbooks().then(res => {
            this.setState({ savedbooks: res.data })
        })
    }

    handleDeleteButton = id => {             
              API.deleteBook(id)
                  .then( res => this.fetchSavedBooks())
                  .catch(err => console.log(err))
          }

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
                            handleDeleteButton= {this.handleDeleteButton}
                          />
                        </Col>
                    </Row>
                </Container>
           </div>
        )
    }

}

export default SaveBooks;