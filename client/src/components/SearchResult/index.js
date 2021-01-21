import React from "react";
import {Row, Col} from "../Grid"
import { List, ListItem } from "../List";

function SearchResult(props) {
    console.log(props)
    return (props.googlebooks.length > 0) ?  
            (   <List>
                        {props.googlebooks.map(book => {
                            return (
                               <ListItem>
                                    <Row key={book.id}>
                                       
                                        <Col size="2">
                                            <img src={book.image} alt={book.title} />
                                        </Col>    
                                       
                                        <Col size="10">
                                            <Row>
                                                <h3>{book.title} by {book.author}</h3>
                                            </Row>
                                            <Row>
                                                <p>{book.description}</p>
                                            </Row>
                                        </Col>
                                        
                                    </Row>
                                    <br></br>
                                    <Row> 
                                        <a href={book.link} target="_blank">
                                            <button className="btn btn-info">
                                                View 
                                            </button>
                                        </a>
                                          
                                        <button className="btn btn-info ml-2" id={book.id} onClick={(event) => props.handleSaveButton(event)}>
                                            Save 
                                        </button>
                                        
                                    </Row>
                                </ListItem>
                            );
                        })}
                </List>
        ) : (
       
            <h3>No Results to Display</h3>
        
     ) 
}
export default SearchResult;