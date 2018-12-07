import React, { Component } from 'react';
import { Button } from 'reactstrap';
import Home from './pages/home';
import SetSearch from './pages/setSearch';
import CardSearch from './pages/cardSearch';
import Planechase from './pages/planechase';
import DeckBuilder from './pages/deckBuilder';
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
        searchUrl: "https://api.scryfall.com/cards/search?q=",
        cardList: [],
        selectedCard: {},
        selectedMana: [],
        badSearch: false,
        modalState: false,
      },
      battleCounterState: {
        players: [],

      },
      setSearchState: {
        allSets: [],
        setSearchUrl: 'https://api.scryfall.com/sets',
        selectedSet: {},
        showSet: false,
        setData: [],
        loading: false,
        selectedCard: [],
        selectedMana: [],
        modalState: false,

      },
      deckBuilderState: {
        deck: []
      }
    }

    // Home Page Functions
    this.changePage = this.changePage.bind(this);
    // Card Search Functions 
    this.removeModal = this.removeModal.bind(this);
    this.toggleSearchModal = this.toggleSearchModal.bind(this);
    this.handleSearchInputChange = this.handleSearchInputChange.bind(this);
    this.handleNewSearch = this.handleNewSearch.bind(this)
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
    // Set Search Functions
    this.findAllSets = this.findAllSets.bind(this);
    this.selectSet = this.selectSet.bind(this);
    this.setSearch = this.setSearch.bind(this);
    this.toggleSetSearchModal = this.toggleSetSearchModal.bind(this);
    this.removeSetModal = this.removeSetModal.bind(this);
    this.returnToSets = this.returnToSets.bind(this);

    // Deck Builder Functions
    this.addToDeck = this.addToDeck.bind(this);
  }

  // Home Page Functions
  changePage(index) {
    this.setState({ pageView: index })
  }
  // Card Search Functions 
  handleSearchInputChange(event) {
    let cardSearchState = this.state.cardSearchState;
    cardSearchState.inputValueCardName = event.target.value;
    cardSearchState.badSearch = false;
    this.setState({ cardSearchState: cardSearchState });
  }
  handleNewSearch(event) {
    let cardSearchState = this.state.cardSearchState,
      searchUrl = cardSearchState.searchUrl,
      self = this;
    cardSearchState.cardList = [];
    // only search if there is a value in the search field
    if (cardSearchState.inputValueCardName.length > 0) {
      // create the search url
      searchUrl = searchUrl + cardSearchState.inputValueCardName.split(' ').join('+');
      // create axios request
      axios.get(searchUrl)
        .then(function (response) {
          let searchData = response.data.data
          // if the response ha something in it
          if (searchData.length > 0) {
            toast.success("😎 Found something!")
            searchData.forEach(card => {
              if (card.image_uris) {
                cardSearchState.cardList.push(card)
                cardSearchState.badSearch = false;
                self.setState({ cardSearchState: cardSearchState })
              } else {
                console.log(card.name + " omited from results because of an error")
              }
            })
          } else {
            toast.error("😭 Found nothing ")
            cardSearchState.cardList = [];
            cardSearchState.badSearch = true;
            self.setState({ cardSearchState: cardSearchState })
            console.log("No Similar Cards")
          }
        }
        )
        .catch(function (error) {
          console.log(error);
        });
    } else {
      toast.error("😭 Found nothing ")
    }
    event.preventDefault()
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
  // Set Search Functions
  findAllSets() {
    let setSearchState = this.state.setSearchState,
      self = this;
    if (setSearchState.allSets.length === 0) {
      axios.get(setSearchState.setSearchUrl)
        .then(function (response) {
          setSearchState.allSets = response.data.data;
          self.setState({ setSearchState: setSearchState });

        })
        .catch(function (error) {
          console.log(error);
        });
    }

  }
  selectSet(set) {
    let setSearchState = this.state.setSearchState;
    setSearchState.selectedSet = set;
    setSearchState.setData = [];
    this.setSearch(set.search_uri)
    this.setState({ setSearchState: setSearchState });

  }
  setSearch(uri) {
    let setSearchState = this.state.setSearchState,
      self = this;
    setSearchState.loading = true;

    axios.get(uri)
      .then(function (response) {
        if (response.data.has_more) {
          response.data.data.forEach(card => setSearchState.setData.push(card));
          setSearchState.loading = true;
          self.setState({ setSearchState: setSearchState });
          self.setSearch(response.data.next_page)
          console.log(setSearchState.setData)
        } else {
          response.data.data.forEach(card => setSearchState.setData.push(card));
          setSearchState.loading = false;
          setSearchState.showSet = true;
          self.setState({ setSearchState: setSearchState });
          console.log(setSearchState.setData)
        }
      })
  }
  toggleSetSearchModal(card) {
    let setSearchState = this.state.setSearchState;
    setSearchState.selectedCard = card
    setSearchState.selectedMana = converText(card.mana_cost)
    setSearchState.modalState = !setSearchState.modalState;
    this.setState({ setSearchState: setSearchState });
  }
  removeSetModal() {
    let setSearchState = this.state.setSearchState;
    setSearchState.selectedCard = {};
    setSearchState.selectedMana = [];
    setSearchState.modalState = !setSearchState.modalState;
    this.setState({ setSearchState: setSearchState });
  }
  returnToSets() {
    let setSearchState = this.state.setSearchState;
    setSearchState.showSet = false;
    setSearchState.setData = [];
    this.setState({ setSearchState: setSearchState });


  }
  // Deck Builder Functions
  addToDeck(card) {
    let deckBuilderState = this.state.deckBuilderState;
    deckBuilderState.deck.push(card)
    toast.info(card.name + " added to deck (" + deckBuilderState.deck.length + " in deck)")
    this.setSearch({ deckBuilderState: deckBuilderState })
  }


  render() {

    let pages = [
      "",
      <Home changePage={this.changePage} />,
      <CardSearch addToDeck={this.addToDeck} handleNewSearch={this.handleNewSearch} handleSearchInputChange={this.handleSearchInputChange} cardSearchState={this.state.cardSearchState} toggleSearchModal={this.toggleSearchModal} removeModal={this.removeModal} />,
      <Planechase planechaseState={this.state.planechaseState} addToPlanechaseDeck={this.addToPlanechaseDeck} addAll={this.addAll} removeAll={this.removeAll} removeCardFromGameDeck={this.removeCardFromGameDeck} startGame={this.startGame} nextCard={this.nextCard} endGame={this.endGame} />,
      <BattleCounter battleCounterState={this.state.battleCounterState} addPlayer={this.addPlayer} removeAllPlayers={this.removeAllPlayers} addCounter={this.addCounter} plusOne={this.plusOne} minusOne={this.minusOne} />,
      <SetSearch setSearchState={this.state.setSearchState} selectSet={this.selectSet} setSearch={this.setSearch} toggleSetSearchModal={this.toggleSetSearchModal} removeSetModal={this.removeSetModal} returnToSets={this.returnToSets} />,
      <DeckBuilder />
    ]

    return (
      <div className="App">
        <header className="App-header">
          <Button onClick={event => this.changePage(1)} />
        </header>
        {this.findAllPlaneCards()}
        {this.findAllSets()}
        <ToastContainer />
        {pages[this.state.pageView]}
      </div>
    );
  }
}

export default App;
