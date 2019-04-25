import React from 'react';
import cards from "./cards.json"
import Carddeck from './components/Cards';
import Wrapper from './components/Wrapper';

class App extends React.Component {

  state= {
    cards,
    cardsClicked: [],
    score: 0,
    errrr: false
  }

  // shuffleBuddy takes in the deck and sorts the deck in a random order
 shuffleBuddy = cardDeck=> {
   this.setState({
    cards: this.state.cards.sort((x,y)=> {
      return 0.5 - Math.random();
    }),
  })
}

// clickHandler handle the event when a card out of the deck is clicked on
 clickHandler = event =>{ 

//  first I set my variables:
  // variable for the current card that was clicked
  const cardChosen = event.target

  // variable for the cards that have already been chosen
  const cardsClicked = this.state.cardsClicked.indexOf(cardChosen) > -1;

  //  variable for a fresh shuffled deck that we put through the shufflebuddy function
  const shuffledDeck = this.shuffleBuddy(cards)

//by clicking a card that already been selected, the game is reset and the cards are reordered
  if (cardsClicked) {

    this.setState({
      card: shuffledDeck,
      cardsClicked: [],
      score: 0,
      errrr: true
    });
      alert("you lost. gg");
// if you click a card that hasnt been clicked yet:
//    1. deck is reshuffled, 
//    2. the card chosen is added to the cardsClicked array,
//    3. score increases by one point
  } else {
    this.setState(
      {
        cards: shuffledDeck,
        cardsClicked: this.state.cardsClicked.concat(cardChosen),
        score: this.state.score + 1,
        errrr: false
      },
//if you click all 52 cards corrent you get a congrats message and the game resets        
      () => {
        if (this.state.score === 52) {
          alert("holy mother of clubs! Are you Rainman?");
          this.setState({
            cards: shuffledDeck,
            cardsClicked: [],
            score: 0,
            errrr: false
          });
        }
      }
    );
  }
};
     
     


render(){
  return (
   <Wrapper
      shouldShake = {this.state.errr}
      cardsShown = {this.state.cards.map(cards =>(
         <Carddeck
          key={cards.id}
          id={cards.id}
          image={cards.image}
          onclick={this.clickHandler}
          />
          ))}
 />
)
}
}
export default App;
