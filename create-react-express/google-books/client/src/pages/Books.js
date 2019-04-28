import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import Search from "../components/Search"
import Results from "../components/Search"
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
import axios from "axios";

class Books extends Component {
  state = {
    books: [],
    title: "",
    author: "",

  };

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    API.getBooks()
      .then(res =>{
        console.log("load books: "+ res)
        this.setState({ books: res.data, title: "", author: "" })}
      )
      .catch(err => console.log(err));
  };

  deleteBook = id => {
    API.deleteBook(id)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();

    const titlesearch = this.state.title
    const authsearch = this.state.author
    console.log(authsearch + "authsearch")
    console.log(titlesearch)
    if (titlesearch) {

      axios.get("https://www.googleapis.com/books/v1/volumes?q="+ titlesearch +"+inauthor:"+ authsearch + "&key=AIzaSyAspRS4dGPy0chMnNbfZM8UmQrfEP_S7N0")
        .then(res => {
          console.log("res" +res) 
          console.log("data  " + res) 

          const bookdata = res

         this.setState(
           {
             books: bookdata
           }
         )
        }
     )
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      // <Container fluid>
  <div>
            <Jumbotron>
              <h1>(React) Google Books Search</h1>
            </Jumbotron>
            
              <Search>

              <Input
                name="title"
                value={this.state.title}
                onChange={this.handleInputChange}
                placeholder="Title (required)"
                />    
              <Input
                name="author"
                value={this.state.author}
                onChange={this.handleInputChange}
                placeholder="Author (optional)"
                /> 
                <FormBtn
                disabled={!(this.state.author)}
                onClick={this.handleFormSubmit}
                />
    
                </Search>

              
               {this.state.books.map((book)=>(
 <Results
   key={book.id}
   id={book.id}
   title= {book.title}
   author= {book.author}
   text= {book.synopsis}
   year= {book.year}
   />
               )
              )}

</div>

        
    );
  }
}

export default Books;
