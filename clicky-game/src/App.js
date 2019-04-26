import React, {Component} from 'react';
import cards from "./cards.json"
import Carddeck from './components/Card_Deck';
import Wrapper from './components/Wrapper';
import DealerTable from './components/Dealer_Table'
import Jumbotron from './components/Jumbotron'
import Nav from './components/Nav'
import Footer from './components/Footer'

class App extends Component {

  state= {
    cards,
    cardsClicked: [],
    score: 0,
    errrr: false
  }

                           // GAME RESET
 // The gameReset constructor resets the game back to the original state and shakes the page
 //  the shuffledDeck variable for a fresh shuffled deck that we put through the shufflebuddy function
// ===========================================================================================

 gameReset = ()=>{

  let shuffledDeck = this.shuffleBuddy()
  
  this.setState({
    cards: shuffledDeck,
    cardsClicked: [],
    score: 0,
    errrr: true
  });
 }
                                   // SHUFFLER
// shuffleBuddy takes in the deck and sorts the deck in a random order
// ===========================================================================================
 shuffleBuddy = () => {
   this.setState({
    cards: this.state.cards.sort((x,y)=> {
      return 0.5 - Math.random();
    }),
  })
}

                             // ****CLICK HANDLER***
// ===========================================================================================
// clickHandler handle the event when a card out of the deck is clicked on;
// by clicking a card that already been selected, the game is reset and the cards are reordered
// if you click a card that hasnt been clicked yet:
//    1. deck is reshuffled, 
//    2. the card chosen is added to the cardsClicked array,
//    3. score increases by one point
 clickHandler = id =>{ 

//  ===================================SHUFFLE DECK========================================================
  let shuffledDeck = this.shuffleBuddy()
//  ===================================IF GAMEOVER========================================================
  if (this.state.cardsClicked.includes(id)) { alert("you lost. gg");}
//  =================================IF VICTORY========================================================
  else {
    this.setState(
      {
        cards: shuffledDeck,
        cardsClicked: this.state.cardsClicked.concat([id]),
        score: this.state.score + 1,
        errrr: false
      },
//  =================================IF SUPREME VICTORY========================================================

      () => {
        if (this.state.score === 52) {
          alert("SUPREME VICTORY");
          this.gameReset()
        }
      }
    );
  }
};
     
     
// ========================================RENDER HTML===================================================
// Nav: nav is the navbar that links to my github
// Jumbotron: displays the instructions to the screen
// DealerTable: this is where the playing cards are delt to the player
// Wrapper: wraps each card for formating  and the shaking the screen if incorrect 
// Carddeck: displays the card
// Footer: dispays the sticky footer to the page
                                
render(){
  return (
    <div>
   <Nav />
   <Jumbotron />
   <DealerTable score = {this.state.score}>
       <Wrapper class = {this.state.errrr}>
          {this.state.cards.map(cardRender => (
              <Carddeck 
                key = {cardRender.id}
                id = {cardRender.id}
                image = {cardRender.image}
                clickHandler = {this.clickHandler}
                />)
            )}
        </Wrapper>
      </DealerTable>
   <Footer/>
   </div>
)
}

}
export default App;
