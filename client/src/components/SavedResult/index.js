import React from "react";
import {Row, Col} from "../Grid"


function SavedResult(props) {
    console.log(props)
    return  (    
               <div className="card">
                       <div className="card-body">
                        {props.savedbooks.map(book => {
                            return (
                            <div className="card">
                                <div className="card-body">
                                    <Row key={book._id}>
                                       
                                        <Col size="2">
                                            <img src={book.image} alt={book.title} />
                                        </Col>    
                                       
                                        <Col size="10">
                                            <Row>
                                                <h3>{book.title}</h3>
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
                                          
                                        <button className="btn btn-info ml-2" id={book._id} onClick={() => props.handleDeleteButton(book._id)}>
                                            Delete
                                        </button>
                                        
                                    </Row>
                                </div>
                              </div>
                            );
                        })}
                        </div>
                   </div> 
   )
}

export default SavedResult;