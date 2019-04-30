    
import React, { Component } from 'react';
import Savedbooks from '../components/Savedbooks';
import API from '../utils/API';
import { Link } from 'react-router-dom';
import {List} from '../components/List';


class Saved extends Component {
	state = {
		books: [],
	};


componentDidMount(){
    API.getBooks()
    .then(res=>this.setState({books: res.data}))
    .catch(err=>console.log(err))
 }
 

 loadSaved (){
    API.getBooks()
    .then(res=>this.setState({books: res.data}))
    .catch(err=>console.log(err))
 }

 deleteBook = i => {

    const testthis =  this.state.books[i]._id
            
    console.log(testthis)
    API.deleteBook(testthis)
      .then( res => this.loadSaved())
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
					{this.state.books.length > 0  ? (
						this.state.books.map((book, i) => {
							return (
								<Savedbooks
									key={book.id}
                                    id={i}
                                    image={book.image}
									title={book.title}
									subtitle={book.subtitle}
									authors={book.authors}
									description={book.rating}
                                    rating={book.rating}
                                    printType={book.printType}
                                    infoLink = {book.infoLink}
                                    pageCount = {book.pageCount}
                                    lang = {book.lang}
                                    sale = {book.sale}
                                    pub = {book.publisher}
                                    deleteB={this.deleteBook}
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


export default Saved;