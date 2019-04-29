import React, { Component } from 'react';
import Search from '../components/Search';
import Results from '../components/Results';
import Saved from '../components/Saved';
import API from '../utils/API';
import { Link } from 'react-router-dom';
import {List} from '../components/List';
import { PromiseProvider } from "mongoose";


class Books extends Component {
	state = {
		books: [],
	};


componentDidMount(){
    API.getBooks()
    .then(res=>this.setState({books: res.data}))
    .catch(err=>console.log(err))
 }
    

 deleteBook = id => {
    API.deleteBook(id)
      .then(res => this.loadSaved())
      .catch(err => console.log(err));
  };

	render() {
		return (
            
			<div>
 	<nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      
      <Link to="/" className={window.location.pathname === "/" ? "nave-link active" : "nav-link"}> 
      <li className="navbar-brand">(React) Google Book Search</li></Link>

      <Link to="/Saved" type="button" className="nave-link active btn btn-primary yeet ">

      Saved Books <span className="badge badge-light">{this.state.books.length}</span>
			</Link>
</nav>
				<div style={{ height: 300, clear: 'both', paddingTop: 120, textAlign: 'center' }} className="jumbotron">
					<h1>My Saved Books</h1>
				</div>
				
				<List>
					{this.state.title ? (
						this.state.books.map((book, i) => {
							return (
								<Saved
									key={book.id}
                                    id={book.id}
                                    image={book.volumeInfo.imageLinks.thumbnail}
									title={book.volumeInfo.title}
									subtitle={book.volumeInfo.subtitle}
									authors={book.volumeInfo.authors[0]}
									description={book.volumeInfo.description}
                                    rating={book.volumeInfo.maturityRating}
                                    printType={book.volumeInfo.printType}
                                    infoLink = {book.volumeInfo.infoLink}
                                    pageCount = {book.volumeInfo.pageCount}
                                    lang = {book.volumeInfo.language}
                                    sale = {book.saleInfo.saleability}
                                    pub = {book.volumeInfo.publisher}
                                    delete={this.deleteBook}
								/>
							);
						})
					) : (
						<h3> You Have No Saved Books! </h3>
					)}
				</List>
			</div>
		);
	}
}


export default Books;