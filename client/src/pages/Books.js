import React, { Component } from 'react';
import Search from '../components/Search';
import Results from '../components/Results';
import API from '../utils/API';
import { Link } from 'react-router-dom';
import {List} from '../components/List';
import { Input, FormBtn } from '../components/Form';
import Nav from '../components/Nav';
import axios from 'axios';
import { PromiseProvider } from "mongoose";

class Books extends Component {
	state = {
		books: [],
		title: '',
		author: '',
		numSaved: 0
	};
// ===========================================handles the input change==========================================

componentDidMount(){

	API.getBooks()
    .then(res=>{
		console.log(res.length)
		this.setState({numSaved: res.data.length})})
    .catch(err=>console.log(err))
}
	
	handleInputChange = (event) => {
		const { name, value } = event.target;
		this.setState({
			[name]: value
		});
	};
// =======================================Handle the google Books API GET request================================================
	handleFormSubmit = (event) => {
		event.preventDefault();

		if (this.state.title) {

			const titlesearch = this.state.title.replace(/([()[{*+.$^\\|?])/g, '\\$1');
			const authsearch = this.state.author.replace(/([()[{*+.$^\\|?])/g, '\\$1');

			axios
				.get(
					'https://www.googleapis.com/books/v1/volumes?q=' +
						titlesearch +
						'+inauthor:' +
						authsearch +
						'&key=AIzaSyAspRS4dGPy0chMnNbfZM8UmQrfEP_S7N0'
				)
				.then(res => {
					const bookdata = res.data.items;
					this.setState({
						books: bookdata
					});
				})
				.catch((err) => console.log(err));
		}
  };
  // =================================================On Click Save to DB==============================================

  clickHandler = i =>{

		this.setState({numSaved: this.state.numSaved + 1})

		const bookarrID = this.state.books[i]

	  console.log(bookarrID)
	
		// console.log({
		// 	title: this.state.books[i].volumeInfo.title,
		// 	image: this.state.books[i].volumeInfo.imageLinks.thumbnail,
		// 	subtitle: this.state.books[i].volumeInfo.subtitle,
		// 	authors: this.state.books[i].volumeInfo.authors[0],
		// 	rating: this.state.books[i].volumeInfo.maturityRating,
		// 	printType: this.state.books[i].volumeInfo.printType,
		// 	infoLink: this.state.books[i].volumeInfo.infoLink,
		// 	pageCount: this.state.books[i].volumeInfo.pageCount.toString(),
		// 	lang: this.state.books[i].volumeInfo.language,
		// 	description: this.state.books[i].volumeInfo.description,
		// 	publishedDate: this.state.books[i].volumeInfo.publishedDate,
		// 	sale: this.state.books[i].saleInfo.saleability,
		// 	publisher: this.state.books[i].volumeInfo.publisher
		// });

			API.saveBook({
        title: this.state.books[i].volumeInfo.title,
        image: this.state.books[i].volumeInfo.imageLinks.thumbnail,
        subtitle: this.state.books[i].volumeInfo.subtitle,
        authors: this.state.books[i].volumeInfo.authors[0],
        rating: this.state.books[i].volumeInfo.maturityRating,
        printType: this.state.books[i].volumeInfo.printType,
        infoLink: this.state.books[i].volumeInfo.infoLink,
        pageCount: this.state.books[i].volumeInfo.pageCount.toString(),
        lang: this.state.books[i].volumeInfo.language,
        description: this.state.books[i].volumeInfo.description,
        publishedDate: this.state.books[i].volumeInfo.publishedDate,
        sale: this.state.books[i].saleInfo.saleability,
        publisher: this.state.books[i].volumeInfo.publisher
			})
			.then(res=> alert(this.state.books[i].volumeInfo.title + "has been added to saved books!"))
			.catch(err=> console.log(err))
  }
// ================================================================================================
// ================================================================================================

	render() {
		return (
			<div>
	
	<nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      
			<Link to="/" className={window.location.pathname === "/" ? "nave-link active" : "nav-link"}> 
			<li className="navbar-brand">(React) Google Book Search</li></Link>
      
			<Link to="/Saved" type="button" className="nave-link active btn btn-primary yeet ">

			Saved Books <span className="badge badge-light">{this.state.numSaved}</span>
			</Link>

    </nav>

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
                  id={i}
                  image={book.volumeInfo.imageLinks.thumbnail}
				  title={book.volumeInfo.title}
				  subtitle={book.volumeInfo.subtitle}
				  authors={book.volumeInfo.authors}
				  description={book.volumeInfo.description}
                  rating={book.volumeInfo.maturityRating}
                  printType={book.volumeInfo.printType}
                  infoLink = {book.volumeInfo.infoLink}
                  pageCount = {book.volumeInfo.pageCount}
                  lang = {book.volumeInfo.language}
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


export default Books;
