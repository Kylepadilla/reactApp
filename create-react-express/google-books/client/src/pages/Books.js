import React, { Component } from 'react';
// import DeleteBtn from "../components/DeleteBtn";
// import Jumbotron from "../components/Jumbotron";
import Search from '../components/Search';
import Results from '../components/Results';
import API from '../utils/API';
import { Link } from 'react-router-dom';
// import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from '../components/List';
import { Input, FormBtn } from '../components/Form';
import axios from 'axios';

class Books extends Component {
	state = {
		books: [],
		title: '',
		author: ''
	};
	// api key = AIzaSyAspRS4dGPy0chMnNbfZM8UmQrfEP_S7N0
	handleInputChange = (event) => {
		const { name, value } = event.target;
		this.setState({
			[name]: value
		});
	};

	handleFormSubmit = (event) => {
		event.preventDefault();

		if (this.state.title) {
			const titlesearch = this.state.title.replace(/([()[{*+.$^\\|?])/g, '\\$1');
			const authsearch = this.state.author.replace(/([()[{*+.$^\\|?])/g, '\\$1');
			// console.log('state: ' + this.state.books);
			console.log(titlesearch + '  title-Search');
			console.log(authsearch + '  auth-Search');

			axios
				.get(
					'https://www.googleapis.com/books/v1/volumes?q=' +
						titlesearch +
						'+inauthor:' +
						authsearch +
						'&key=AIzaSyAspRS4dGPy0chMnNbfZM8UmQrfEP_S7N0'
				)
				.then((res) => {
					const bookdata = res.data.items;
          console.log(bookdata)
					this.setState({
						books: bookdata
					});
				})
				.catch((err) => console.log(err));
		}
  };
  
  clickHandler = event =>{
      const book_Id = event.target.id
      console.log(book_Id)
  }

	render() {
		return (
			<div>
				<div style={{ height: 300, clear: 'both', paddingTop: 120, textAlign: 'center' }} className="jumbotron">
					<h1>(React) Google Books Search</h1>
				</div>
				<div>
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
						<FormBtn disabled={!this.state.title} onClick={this.handleFormSubmit} />
					</Search>
				</div>
				<List>
					{this.state.title ? (
						this.state.books.map((book, i) => {
							return (
								<Results
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
                  lag = {book.volumeInfo.language}
                  sale = {book.saleInfo.saleability}
                  pub = {book.volumeInfo.publisher}
                  save={this.clickHandler}
								/>
							);
						})
					) : (
						<h3>you can search for books above </h3>
					)}
				</List>
			</div>
		);
	}
}
// 				<List>
// 					{this.state.title ? (
// 						this.state.books.map((book) => {
// 							return (
// 								<Results
// 									key={book._id}
// 									id={book._id}
// 									title={book.volumeInfo.title}
// 									authors={'book.volumeInfo.authors[0]'}
// 									description={book.volumeInfo.description}
// 									year={book.volumeInfo.date}
// 								/>
// 							);
// 						})
// 					) : (
// 						<h3>you can search for books above </h3>
// 					)}
// 				</List>
// 			</div>
// 		);
// 	}
// }

export default Books;
