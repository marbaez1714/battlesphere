import React, { Component } from 'react';
import { Button } from 'reactstrap';
import Home from './pages/home';
import CardSearch from './pages/cardSearch';
import Planechase from './pages/planechase';
import BattleCounter from './pages/battleCounter';
import converText from './utilities/symbolSwitch';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      pageView: 1,
      planechaseState: {
        planeSearchUrl: "https://api.scryfall.com/cards/search?q=t=plane",
        allPlaneCards: [],
        gameDeck: [],
        currentCardIdx: 1,
        gameGoing: false,

      },
      cardSearchState: {
        inputValueCardName: '',
        autocompleteUrl: 'https://api.scryfall.com/cards/autocomplete?q=',
        fuzzyUrl: 'https://api.scryfall.com/cards/named?fuzzy=',
        cardList: [],
        selectedCard: {},
        selectedMana: [],
        badSearch: false,
        modalState: false,
      },
      battleCounterState: {
        players: [],

      }
    }

    // Card Search Functions 
    this.removeModal = this.removeModal.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.toggleSearchModal = this.toggleSearchModal.bind(this);
    this.handleSearchInputChange = this.handleSearchInputChange.bind(this);

    // Planechase Functions
    this.addAll = this.addAll.bind(this);
    this.endGame = this.endGame.bind(this);
    this.nextCard = this.nextCard.bind(this);
    this.removeAll = this.removeAll.bind(this);
    this.startGame = this.startGame.bind(this);
    this.findAllPlaneCards = this.findAllPlaneCards.bind(this);
    this.addToPlanechaseDeck = this.addToPlanechaseDeck.bind(this);
    this.removeCardFromGameDeck = this.removeCardFromGameDeck.bind(this);

    // Battle Counter Functions
    this.addPlayer = this.addPlayer.bind(this);
    this.removeAllPlayers = this.removeAllPlayers.bind(this);
    this.addCounter = this.addCounter.bind(this);
    this.plusOne = this.plusOne.bind(this);
    this.minusOne = this.minusOne.bind(this);

    // Home Page Functions
    this.changePage = this.changePage.bind(this);
  }


  // Card Search Functions 
  handleSearchInputChange(event) {
    let cardSearchState = this.state.cardSearchState;
    cardSearchState.inputValueCardName = event.target.value;
    cardSearchState.badSearch = false;
    this.setState({ cardSearchState: cardSearchState });
  }
  handleSearch(event) {
    let cardSearchState = this.state.cardSearchState,
      searchAutoUrl = cardSearchState.autocompleteUrl,
      searchFuzzyUrl = cardSearchState.fuzzyUrl,
      self = this;
    // Reset card list
    cardSearchState.cardList = [];
    if (cardSearchState.inputValueCardName.length > 0) {
      searchAutoUrl = searchAutoUrl + cardSearchState.inputValueCardName.split(' ').join('+');
      // First axios search to find all the cards with that name
      axios.get(searchAutoUrl)
        .then(function (response) {
          let autocompleteName = response.data.data;
          if (response.data.data.length > 0) {
            toast.success("😎 Found something!")
            // If there are cards in the list
            // For each card returned, it will search for that card          
            let urlsToSearch = autocompleteName.map(name => searchFuzzyUrl + name.split(' ').join('+'));
            urlsToSearch.forEach(url =>
              axios.get(url)
                .then(function (response) {
                  cardSearchState.cardList.push(response.data)
                  cardSearchState.badSearch = false;
                  self.setState({ cardSearchState: cardSearchState })
                }).catch(function (error) {
                  console.log(error);
                }))
          } else {
            toast.error("😭 Found nothing ")

            cardSearchState.cardList = [];
            cardSearchState.badSearch = true;
            self.setState({ cardSearchState: cardSearchState })
            console.log("No Similar Cards")
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    } else {
      toast.error("😭 Found nothing ")
    }
    event.preventDefault();
  }
  toggleSearchModal(card) {
    let cardSearchState = this.state.cardSearchState;
    cardSearchState.selectedCard = card
    cardSearchState.selectedMana = converText(card.mana_cost)
    cardSearchState.modalState = !cardSearchState.modalState;
    this.setState({ cardSearchState: cardSearchState });
  }
  removeModal() {
    let cardSearchState = this.state.cardSearchState;
    cardSearchState.selectedCard = {};
    cardSearchState.selectedMana = [];
    cardSearchState.modalState = !cardSearchState.modalState;
    this.setState({ cardSearchState: cardSearchState });
  }

  // Planchase Functions
  findAllPlaneCards(props) {
    let planechaseState = this.state.planechaseState,
      self = this;
    if (planechaseState.allPlaneCards.length === 0) {
      axios.get(planechaseState.planeSearchUrl)
        .then(function (response) {
          planechaseState.allPlaneCards = response.data.data
          self.setState({ planechaseState: planechaseState })
          console.log(response.data.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    }

  }
  addToPlanechaseDeck(card, idx) {
    let planechaseState = this.state.planechaseState;
    planechaseState.gameDeck.push(card)
    toast.info("👌 " + card.name + " added to deck (" + planechaseState.gameDeck.length + " in Deck)")
    this.setState({ planechaseState: planechaseState })
    console.log(card.name, idx)
  }
  addAll() {
    let planechaseState = this.state.planechaseState;
    planechaseState.gameDeck = planechaseState.gameDeck.concat(planechaseState.allPlaneCards)
    toast.info("🔥 ALL CARDS ADDED (" + planechaseState.gameDeck.length + " in Deck) 🔥")
    this.setState({ planechaseState: planechaseState })
  }
  removeAll() {
    let planechaseState = this.state.planechaseState;
    planechaseState.gameDeck = [];
    toast.info("💀 ALL CARDS REMOVED 💀");
    this.setState({ planechaseState: planechaseState })
  }
  removeCardFromGameDeck(card, idx) {
    // remove specific card based on the index of the card in the deck
    let planechaseState = this.state.planechaseState;
    planechaseState.gameDeck.splice(idx, 1)
    toast.info("💀 " + card.name + " removed from deck (" + planechaseState.gameDeck.length + " in Deck)")

    this.setState({ planechaseState: planechaseState })

  }
  startGame() {
    let planechaseState = this.state.planechaseState;
    function shuffle(deck) {
      for (let i = deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]];
      }
      return deck;
    }
    if (planechaseState.gameDeck.length > 0) {
      planechaseState.gameDeck = shuffle(planechaseState.gameDeck);
      planechaseState.gameGoing = true;
    } else {
      toast.info("You need to add some cards first!")

    }
    this.setState({ planechaseState: planechaseState })

  }
  nextCard() {
    let planechaseState = this.state.planechaseState;
    planechaseState.gameDeck.push(planechaseState.gameDeck.shift());
    planechaseState.currentCardIdx++;
    function shuffle(deck) {
      for (let i = deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]];
      }
      return deck;
    }
    if (planechaseState.currentCardIdx === planechaseState.gameDeck.length) {
      shuffle(planechaseState.gameDeck);
      toast.info("Deck shuffled!")

      planechaseState.currentCardIdx = 1;
    }
    this.setState({ planechaseState: planechaseState });


  }
  endGame() {
    let planechaseState = this.state.planechaseState;
    planechaseState.gameGoing = false;
    planechaseState.currentCardIdx = 1;
    this.setState({ planechaseState: planechaseState });
  }

  // Battle Counter Functions 
  addPlayer() {
    let battleCounterState = this.state.battleCounterState;
    battleCounterState.players.push([20])
    this.setState({ battleCounterState: battleCounterState })
  }
  removeAllPlayers() {
    let battleCounterState = this.state.battleCounterState;
    battleCounterState.players = [];
    this.setState({ battleCounterState: battleCounterState })
  }
  addCounter(idx) {
    let battleCounterState = this.state.battleCounterState;
    battleCounterState.players[idx].push(0)
    this.setState({ battleCounterState: battleCounterState })
  }
  plusOne(playerIdx, idx) {
    let battleCounterState = this.state.battleCounterState;
    battleCounterState.players[playerIdx][idx]++;
    this.setState({ battleCounterState: battleCounterState })

  }
  minusOne(playerIdx, idx) {
    let battleCounterState = this.state.battleCounterState;
    battleCounterState.players[playerIdx][idx]--;
    this.setState({ battleCounterState: battleCounterState })

  }

  // Home Page Functions
  changePage(index) {
    this.setState({ pageView: index })
  }

  render() {

    let pages = [
      "",
      <Home changePage={this.changePage} />,
      <CardSearch handleSearchInputChange={this.handleSearchInputChange} handleSearch={this.handleSearch} cardSearchState={this.state.cardSearchState} toggleSearchModal={this.toggleSearchModal} removeModal={this.removeModal} />,
      <Planechase planechaseState={this.state.planechaseState} addToPlanechaseDeck={this.addToPlanechaseDeck} addAll={this.addAll} removeAll={this.removeAll} removeCardFromGameDeck={this.removeCardFromGameDeck} startGame={this.startGame} nextCard={this.nextCard} endGame={this.endGame} />,
      <BattleCounter battleCounterState={this.state.battleCounterState} addPlayer={this.addPlayer} removeAllPlayers={this.removeAllPlayers} addCounter={this.addCounter} plusOne={this.plusOne} minusOne={this.minusOne} />,
    ]



    return (
      <div className="App">
        <header className="App-header">
          <Button onClick={event => this.changePage(1)} />
        </header>
        {this.findAllPlaneCards()}
        <ToastContainer />
        {pages[this.state.pageView]}
      </div>
    );
  }
}

export default App;
