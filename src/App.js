import React, { Component } from 'react';
import { Button } from 'reactstrap';
import Home from './pages/home';
import SetSearch from './pages/setSearch';
import CardSearch from './pages/cardSearch';
import Planechase from './pages/planechase';
import DeckBuilder from './pages/deckBuilder';
import BattleCounter from './pages/battleCounter';
import converText from './utilities/symbolSwitch';
import { splitMana } from './utilities/countMana';
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
      pageViewTop: 2,
      pageViewBottom: 6,
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
        deck: [],
        allMana: "",
        allManaArray: [],
        deckColors: {
          white: 0,
          blue: 0,
          red: 0,
          black: 0,
          green: 0,
          colorless: 0,
        },
        deckLegal: {
          standard: "",
          future: "",
          frontier: "",
          modern: "",
          legacy: "",
          pauper: "",
          vintage: "",
          penny: "",
          commander: "",
          oneVOne: "",
          duel: "",
          brawl: "",
        },
        manaTotals: {
          xMana: 0,
          yMana: 0,
          zMana: 0,
          whiteOrBlueMana: 0,
          whiteOrBlackMana: 0,
          blackOrRedMana: 0,
          blackOrGreenMana: 0,
          blueOrBlackMana: 0,
          blueOrRedMana: 0,
          redOrGreenMana: 0,
          redOrWhiteMana: 0,
          greenOrWhiteMana: 0,
          greenOrBlueMana: 0,
          genericMana: 0,
          whiteMana: 0,
          blueMana: 0,
          blackMana: 0,
          redMana: 0,
          greenMana: 0,
          coloredOrLife: 0,
          whiteOrLife: 0,
          blueOrLife: 0,
          blackOrLife: 0,
          redOrLife: 0,
          greenOrLife: 0,
          colorlessMana: 0,
          snowMana: 0,
          twoGenericOrWhite: 0,
          twoGenericOrBlue: 0,
          twoGenericOrRed: 0,
          twoGenericOrGreen: 0,
          twoGenericOrBlack: 0,
        }

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
    this.addManaCost = this.addManaCost.bind(this);
    this.checkLegal = this.checkLegal.bind(this);
    this.removeFromDeck = this.removeFromDeck.bind(this);
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
      searchUrl = cardSearchState.searchUrl;
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
                this.setState({ cardSearchState: cardSearchState })
              } else {
                console.log(card.name + " omited from results because of an error")
              }
            })
          } else {
            toast.error("😭 Found nothing ")
            cardSearchState.cardList = [];
            cardSearchState.badSearch = true;
            this.setState({ cardSearchState: cardSearchState })
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
    let planechaseState = this.state.planechaseState;
    if (planechaseState.allPlaneCards.length === 0) {
      axios.get(planechaseState.planeSearchUrl)
        .then(response => {
          planechaseState.allPlaneCards = response.data.data
          this.setState({ planechaseState: planechaseState })
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
    let setSearchState = this.state.setSearchState;
    if (setSearchState.allSets.length === 0) {
      axios.get(setSearchState.setSearchUrl)
        .then(response => {
          setSearchState.allSets = response.data.data;
          this.setState({ setSearchState: setSearchState });

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
    let setSearchState = this.state.setSearchState;
    setSearchState.loading = true;

    axios.get(uri)
      .then(response => {
        if (response.data.has_more) {
          response.data.data.forEach(card => setSearchState.setData.push(card));
          setSearchState.loading = true;
          this.setState({ setSearchState: setSearchState });
          this.setSearch(response.data.next_page)
          console.log(setSearchState.setData)
        } else {
          response.data.data.forEach(card => setSearchState.setData.push(card));
          setSearchState.loading = false;
          setSearchState.showSet = true;
          this.setState({ setSearchState: setSearchState });
          console.log(setSearchState.setData)
        }
      })
      .catch(function (error) {
        console.log(error)
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
    deckBuilderState.deck.push(card);
    deckBuilderState.allMana = "";
    deckBuilderState.manaTotals = {
      xMana: 0,
      yMana: 0,
      zMana: 0,
      whiteOrBlueMana: 0,
      whiteOrBlackMana: 0,
      blackOrRedMana: 0,
      blackOrGreenMana: 0,
      blueOrBlackMana: 0,
      blueOrRedMana: 0,
      redOrGreenMana: 0,
      redOrWhiteMana: 0,
      greenOrWhiteMana: 0,
      greenOrBlueMana: 0,
      genericMana: 0,
      whiteMana: 0,
      blueMana: 0,
      blackMana: 0,
      redMana: 0,
      greenMana: 0,
      coloredOrLife: 0,
      whiteOrLife: 0,
      blueOrLife: 0,
      blackOrLife: 0,
      redOrLife: 0,
      greenOrLife: 0,
      colorlessMana: 0,
      snowMana: 0,
      twoGenericOrWhite: 0,
      twoGenericOrBlue: 0,
      twoGenericOrRed: 0,
      twoGenericOrGreen: 0,
      twoGenericOrBlack: 0,
    }
    deckBuilderState.deckColors = {
      white: 0,
      blue: 0,
      red: 0,
      black: 0,
      green: 0,
      colorless: 0,
    }
    this.getDeckColors(deckBuilderState.deck);
    deckBuilderState.deck.forEach(card => this.checkLegal(card))
    deckBuilderState.deck.forEach(card => deckBuilderState.allMana = deckBuilderState.allMana + card.mana_cost);
    deckBuilderState.allManaArray = splitMana(deckBuilderState.allMana);
    deckBuilderState.allManaArray.forEach(mana => this.addManaCost(mana))
    toast.info(card.name + " added to deck (" + deckBuilderState.deck.length + " in deck)");
    this.setState({ deckBuilderState: deckBuilderState });
  }
  addManaCost(mana) {
    let deckBuilderState = this.state.deckBuilderState,
      manaTotals = deckBuilderState.manaTotals;
    switch (mana) {
      case "{W}":
        // white mana
        manaTotals.whiteMana++;
        break;
      case "{U}":
        // blue mana
        manaTotals.blueMana++;
        break;
      case "{B}":
        // black mana
        manaTotals.blackMana++;
        break;
      case "{R}":
        // red mana
        manaTotals.redMana++;
        break;
      case "{G}":
        // green mana
        manaTotals.greenMana++;
        break;
      case "{C}":
        // colorless mana
        manaTotals.colorlessMana++;
        break;
      case "{W/U}":
        // white or blue mana
        manaTotals.whiteOrBlueMana++;
        // manaTotals.whiteMana++;
        // manaTotals.blueMana++;
        break;
      case "{W/B}":
        // white or black mana
        manaTotals.whiteOrBlackMana++;
        // manaTotals.whiteMana++;
        // manaTotals.blackMana++;
        break;
      case "{B/R}":
        // black or red mana
        manaTotals.blackOrRedMana++;
        // manaTotals.blackMana++;
        // manaTotals.redMana++;
        break;
      case "{B/G}":
        // black or green mana
        manaTotals.blackOrGreenMana++;
        // manaTotals.blackMana++;
        // manaTotals.greenMana++;
        break;
      case "{U/B}":
        // blue or black mana
        manaTotals.blueOrBlackMana++;
        // manaTotals.blueMana++;
        // manaTotals.blackMana++;
        break;
      case "{U/R}":
        // blue or red mana
        manaTotals.blueOrRedMana++;
        // manaTotals.blueMana++;
        // manaTotals.redMana++;
        break;
      case "{R/G}":
        // red or green mana
        manaTotals.redOrGreenMana++;
        // manaTotals.redMana++;
        // manaTotals.greenMana++;
        break;
      case "{R/W}":
        // red or white mana
        manaTotals.redOrWhiteMana++;
        // manaTotals.whiteMana++;
        // manaTotals.redMana++;
        break;
      case "{G/W}":
        // green or white mana
        manaTotals.greenOrWhiteMana++;
        // manaTotals.greenMana++;
        // manaTotals.whiteMana++;
        break;
      case "{G/U}":
        // green or blue mana
        manaTotals.greenOrBlueMana++;
        // manaTotals.greenMana++;
        // manaTotals.blueMana++;
        break;
      case "{2/W}":
        // generic mana or one white mana
        manaTotals.twoGenericOrWhite++;
        break;
      case "{2/U}":
        // generic mana or one blue mana
        manaTotals.twoGenericOrBlue++;
        break;
      case "{2/B}":
        // generic mana or one black mana
        manaTotals.twoGenericOrBlack++;
        break;
      case "{2/R}":
        // generic mana or one red mana
        manaTotals.twoGenericOrRed++;
        break;
      case "{2/G}":
        // generic mana or one green mana
        manaTotals.twoGenericOrGreen++;
        break;
      case "{HW}":
        // half white mana
        manaTotals.whiteMana = manaTotals.whiteMana + 0.5;
        break;
      case "{HR}":
        // half red mana
        manaTotals.redMana = manaTotals.redMana + 0.5;
        break;
      case "{S}":
        // snow mana
        manaTotals.snowMana++;
        break;
      case "{P}":
        // colored mana or two life
        manaTotals.coloredOrLife++;
        break;
      case "{W/P}":
        // white mana or two life
        manaTotals.whiteOrLife++;
        // manaTotals.whiteMana++;
        break;
      case "{U/P}":
        // blue mana or two life
        manaTotals.blueOrLife++;
        // manaTotals.blueMana++;
        break;
      case "{B/P}":
        // black mana or two life
        manaTotals.blackOrLife++;
        // manaTotals.blackMana++;
        break;
      case "{R/P}":
        // red mana or two life
        manaTotals.redOrLife++;
        // manaTotals.redMana++;
        break;
      case "{G/P}":
        // green mana or two life
        manaTotals.greenOrLife++;
        // manaTotals.greenMana++;
        break;
      case "{X}":
        manaTotals.xMana++;
        break;
      case "{Y}":
        manaTotals.yMana++;
        break;
      case "{Z}":
        manaTotals.zMana++;
        break;
      case "{½}":
        manaTotals.genericMana = manaTotals.genericMana + 0.5;
        break;
      case "{0}":
        console.log("zero mana ignored")
        break;
      default:
        manaTotals.genericMana = manaTotals.genericMana + parseInt(mana.split("{")[1].split("}")[0]);
    }
  }
  checkLegal(card) {
    let deckBuilderState = this.state.deckBuilderState,
      deckLegal = deckBuilderState.deckLegal;
    deckLegal.standard = (deckLegal.standard === "not_legal" ? "not_legal" : (card.legalities.standard === "legal" ? "legal" : "not_legal"));
    deckLegal.future = (deckLegal.future === "not_legal" ? "not_legal" : (card.legalities.future === "legal" ? "legal" : "not_legal"));
    deckLegal.frontier = (deckLegal.frontier === "not_legal" ? "not_legal" : (card.legalities.frontier === "legal" ? "legal" : "not_legal"));
    deckLegal.modern = (deckLegal.modern === "not_legal" ? "not_legal" : (card.legalities.modern === "legal" ? "legal" : "not_legal"));
    deckLegal.legacy = (deckLegal.legacy === "not_legal" ? "not_legal" : (card.legalities.legacy === "legal" ? "legal" : "not_legal"));
    deckLegal.pauper = (deckLegal.pauper === "not_legal" ? "not_legal" : (card.legalities.pauper === "legal" ? "legal" : "not_legal"));
    deckLegal.vintage = (deckLegal.vintage === "not_legal" ? "not_legal" : (card.legalities.vintage === "legal" ? "legal" : "not_legal"));
    deckLegal.penny = (deckLegal.penny === "not_legal" ? "not_legal" : (card.legalities.penny === "legal" ? "legal" : "not_legal"));
    deckLegal.commander = (deckLegal.commander === "not_legal" ? "not_legal" : (card.legalities.commander === "legal" ? "legal" : "not_legal"));
    deckLegal.oneVOne = (deckLegal.oneVOne === "not_legal" ? "not_legal" : (card.legalities["1v1"] === "legal" ? "legal" : "not_legal"));
    deckLegal.duel = (deckLegal.duel === "not_legal" ? "not_legal" : (card.legalities.duel === "legal" ? "legal" : "not_legal"));
    deckLegal.brawl = (deckLegal.brawl === "not_legal" ? "not_legal" : (card.legalities.brawl === "legal" ? "legal" : "not_legal"));
  }
  removeFromDeck(idx) {
    let deckBuilderState = this.state.deckBuilderState;
    deckBuilderState.deck.splice(idx, 1);
    deckBuilderState.allMana = "";
    deckBuilderState.deckLegal = {
      standard: "",
      future: "",
      frontier: "",
      modern: "",
      legacy: "",
      pauper: "",
      vintage: "",
      penny: "",
      commander: "",
      oneVOne: "",
      duel: "",
      brawl: "",
    }
    deckBuilderState.manaTotals = {
      xMana: 0,
      yMana: 0,
      zMana: 0,
      whiteOrBlueMana: 0,
      whiteOrBlackMana: 0,
      blackOrRedMana: 0,
      blackOrGreenMana: 0,
      blueOrBlackMana: 0,
      blueOrRedMana: 0,
      redOrGreenMana: 0,
      redOrWhiteMana: 0,
      greenOrWhiteMana: 0,
      greenOrBlueMana: 0,
      genericMana: 0,
      whiteMana: 0,
      blueMana: 0,
      blackMana: 0,
      redMana: 0,
      greenMana: 0,
      coloredOrLife: 0,
      whiteOrLife: 0,
      blueOrLife: 0,
      blackOrLife: 0,
      redOrLife: 0,
      greenOrLife: 0,
      colorlessMana: 0,
      snowMana: 0,
      twoGenericOrWhite: 0,
      twoGenericOrBlue: 0,
      twoGenericOrRed: 0,
      twoGenericOrGreen: 0,
      twoGenericOrBlack: 0,
    }
    deckBuilderState.deckColors = {
      white: 0,
      blue: 0,
      red: 0,
      black: 0,
      green: 0,
      colorless: 0,
    }
    this.getDeckColors(deckBuilderState.deck);
    deckBuilderState.deck.forEach(card => this.checkLegal(card))
    deckBuilderState.deck.forEach(card => deckBuilderState.allMana = deckBuilderState.allMana + card.mana_cost);
    deckBuilderState.allManaArray = splitMana(deckBuilderState.allMana);
    deckBuilderState.allManaArray.forEach(mana => this.addManaCost(mana))
    console.log(this.state.deckBuilderState.allMana)
    this.setState({ deckBuilderState: deckBuilderState });

  }
  getDeckColors(props) {
    let deckBuilderState = this.state.deckBuilderState,
      deck = deckBuilderState.deck;
    deck.forEach(card => card.color_identity.length === 0 ? deckBuilderState.deckColors.colorless++ : card.color_identity.forEach(color => {
      switch (color) {
        case "W":
          deckBuilderState.deckColors.white++;
          break;
        case "U":
          deckBuilderState.deckColors.blue++;
          break;
        case "R":
          deckBuilderState.deckColors.red++;
          break;
        case "B":
          deckBuilderState.deckColors.black++;
          break;
        case "G":
          deckBuilderState.deckColors.green++;
          break;
        default:
          deckBuilderState.deckColors.colorless++;
          break;
      }
    }))

  }

  render() {

    let pages = [
      "",
      <Home changePage={this.changePage} />,
      <CardSearch addToDeck={this.addToDeck} handleNewSearch={this.handleNewSearch} handleSearchInputChange={this.handleSearchInputChange} cardSearchState={this.state.cardSearchState} toggleSearchModal={this.toggleSearchModal} removeModal={this.removeModal} />,
      <Planechase planechaseState={this.state.planechaseState} addToPlanechaseDeck={this.addToPlanechaseDeck} addAll={this.addAll} removeAll={this.removeAll} removeCardFromGameDeck={this.removeCardFromGameDeck} startGame={this.startGame} nextCard={this.nextCard} endGame={this.endGame} />,
      <BattleCounter battleCounterState={this.state.battleCounterState} addPlayer={this.addPlayer} removeAllPlayers={this.removeAllPlayers} addCounter={this.addCounter} plusOne={this.plusOne} minusOne={this.minusOne} />,
      <SetSearch addToDeck={this.addToDeck} setSearchState={this.state.setSearchState} selectSet={this.selectSet} setSearch={this.setSearch} toggleSetSearchModal={this.toggleSetSearchModal} removeSetModal={this.removeSetModal} returnToSets={this.returnToSets} />,
      <DeckBuilder deckBuilderState={this.state.deckBuilderState} removeFromDeck={this.removeFromDeck} />
    ]

    return (
      <div className="App">
        <header className="App-header">
          <Button onClick={event => this.changePage(1)}>Home</Button>
        </header>
        {this.findAllPlaneCards()}
        {this.findAllSets()}
        <ToastContainer />
        {pages[this.state.pageView]}
        {/* <div className="splitTopPage">
          {pages[this.state.pageViewTop]}
        </div>
        <div className="splitBottomPage">
          {pages[this.state.pageViewBottom]}
        </div> */}
      </div>
    );
  }
}

export default App;
