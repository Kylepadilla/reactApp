import React, { Component } from 'react';
import cards from './cards.json';
import Carddeck from './components/Card_Deck';
import Wrapper from './components/Wrapper';
import DealerTable from './components/Dealer_Table';
import Jumbotron from './components/Jumbotron';
import Nav from './components/Nav';
import Footer from './components/Footer';

class App extends Component {
	state = {
		cards,
		cardsClicked: [],
		score: 0,
		errrr: false
	};
	// GAME RESET
	// The gameReset constructor resets the game back to the original state and shakes the page
	//  the shuffledDeck variable for a fresh shuffled deck that we put through the shufflebuddy function
	// ===========================================================================================
	gameReset = () => {
		this.shuffleBuddy();

		this.setState({
			cards,
			cardsClicked: [],
			score: 0,
			errrr: true
		});
	};
	// SHUFFLER
	// shuffleBuddy takes in the deck and sorts the deck in a random order
	// ===========================================================================================
	shuffleBuddy = () => {
		const shufflecard = this.state.cards.sort((x, y) => {
			return 0.5 - Math.random();
		});

		this.setState({
			cards: shufflecard
		});
	};
	// ****CLICK HANDLER***
	// ===========================================================================================
	clickHandler = id => {
		// clickHandler handle the event when a card out of the deck is clicked on;
		// by clicking a card that already been selected, the game is reset and the cards are reordered
		// if you click a card that hasnt been clicked yet:
		//    1. deck is reshuffled,
		//    2. the card chosen is added to the cardsClicked array,
		//    3. score increases by one point
		console.log(id);
		console.log(this.state.cardsClicked);
		// onClick DO THIS:

		// SHUFFLE DECK
		this.shuffleBuddy();

		// IF GAMEOVER
		if (false) {
			alert('you lost. gg');
			this.gameReset();
		} else {
			// IF CLICKED CORRECTLY
			this.setState(
				{
					cardsClicked: [ ...this.state.cardsClicked, id ],
					score: this.state.score + 1,
					errrr: false
				},
				// IF SUPREME VICTORY
				() => {
					if (this.state.score === 52) {
						alert('SUPREME VICTORY');
						this.gameReset();
					}
				}
			);
		}
	};

	Jumboclick = event =>{

	}


	// ========================================RENDER HTML===================================================
	// Nav: nav is the navbar that links to my github
	// Jumbotron: displays the instructions to the screen
	// DealerTable: this is where the playing cards are delt to the player
	// Wrapper: wraps each card for formating  and the shaking the screen if incorrect
	// Carddeck: displays the card
	// Footer: dispays the sticky footer to the page

	render() {
		return (
			<div>
				<Nav />
				<Jumbotron />
				<DealerTable scoreTitle={this.state.score}>
					<Wrapper class={this.state.errrr}>
						{this.state.cards.map((cardRender) => (
							<Carddeck
								key={cardRender.id}
								id={cardRender.id}
								images={cardRender.image}
								clickHandler={this.clickHandler}
							/>
						))}
					</Wrapper>
				</DealerTable>
				<Footer />
			</div>
		);
	}
}
export default App;
