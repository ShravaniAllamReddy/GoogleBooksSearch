import React, { Component } from "react";
import API from "../utils/API";
import { Container, Row, Col } from "../components/Grid";
import SearchForm from "../components/SearchForm";
import SearchResult from "../components/SearchResult"

class SearchBooks extends Component {
    //create state
    state = {
        search: "",
        googlebooks: [],
    };


    handleInputChange = event => {
        this.setState({ search: event.target.value })
    }

  
    handleFormSubmit = event => {
        event.preventDefault();
        API.getGoogleBooks(this.state.search)
            .then(res => {
                   let books = res.data.items.map(result => {
                        result = {
                            key: result.id,
                            id: result.id,
                            title: result.volumeInfo.title,
                            author: result.volumeInfo.authors,
                            description: result.volumeInfo.description,
                            image: result.volumeInfo.imageLinks.thumbnail,
                            link: result.volumeInfo.infoLink
                        }
                        return result;
                    })
                   
                    this.setState({ googlebooks: books })
                })
            }
            

    render() {
        return (
           <div>
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
      
                    <SearchResult googlebooks={this.state.googlebooks} />
                   
                </Container>
           </div>
        )
    }

}

export default SearchBooks