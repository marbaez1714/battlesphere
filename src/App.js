import React, { Component } from 'react';
import CardSearch from './pages/cardSearch'
import Planechase from './pages/planechase'
import converText from './utilities/symbolSwitch'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      planechaseState: {
        planeSearchUrl: "https://api.scryfall.com/cards/search?q=t=plane",
        allPlaneCards: [],
        gameDeck: [],
      },
      cardSearchState: {
        inputValueCardName: '',
        autocompleteUrl: 'https://api.scryfall.com/cards/autocomplete?q=',
        fuzzyUrl: 'https://api.scryfall.com/cards/named?fuzzy=',
        cardList: [],
        selectedCard: {},
        selectedMana: [],
        badSearch: false,
        modalState: false
      }
    }

    // Card Search Functions 
    this.handleSearchInputChange = this.handleSearchInputChange.bind(this);
    this.toggleSearchModal = this.toggleSearchModal.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.removeModal = this.removeModal.bind(this);

    // Planechase Functions
    this.findAllPlaneCards = this.findAllPlaneCards.bind(this);
    this.addToPlanechaseDeck = this.addToPlanechaseDeck.bind(this);
    this.addAll = this.addAll.bind(this);
    this.removeAll = this.removeAll.bind(this);
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


  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>
        {this.findAllPlaneCards()}
        <ToastContainer />
        <CardSearch handleSearchInputChange={this.handleSearchInputChange} handleSearch={this.handleSearch} cardSearchState={this.state.cardSearchState} toggleSearchModal={this.toggleSearchModal} removeModal={this.removeModal} />
        {/* <Planechase planechaseState={this.state.planechaseState} addToPlanechaseDeck={this.addToPlanechaseDeck} addAll={this.addAll} removeAll={this.removeAll} /> */}
      </div>
    );
  }
}

export default App;
