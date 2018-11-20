import React, { Component } from 'react';
import { Button } from 'reactstrap';
import HomePage from './pages/home/home';
import CardSearch from './pages/card-search/card-search';
import Planechase from './pages/planechase/planechase';
import BattleCounter from './pages/battle-counter/battle-counter'
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			renderStates: {
				about: false,
				deckBuilder: false,
				cardSearch: false,
				setLists: false,
				planechase: false,
				battleCounter: false,
				home: true,


			},
			cardSearchState: {
				inputValue: '',
				cardName: 'Card Name',
				cardType: '',
				cardUri: 'https://d1u5p3l4wpay3k.cloudfront.net/mtgsalvation_gamepedia/thumb/f/f8/Magic_card_back.jpg/400px-Magic_card_back.jpg?version=4f6a80129fc99f07b7723141b122def4',
				cardPrice: '',
				legalities: {
					standard: "",
					future: "",
					frontier: "",
					modern: "",
					legacy: "",
					pauper: "",
					vintage: "",
					penny: "",
					commander: "",
					oneVone: "",
					duel: "",
					brawl: ""
				}
			},
			planechaseState: {
				gameStart: false,
				urlForSearch: "https://api.scryfall.com/cards/search?q=t=plane",
				planechaseCards: [],
				playDeck: [],
				playCounter: 1,
			},
			battleCounterState: {
				numberOfPlayers: 0,
				players: []
			}
		}
		// Functions for the card search
		this.handleSearchChange = this.handleSearchChange.bind(this);
		this.handleFuzzySearch = this.handleFuzzySearch.bind(this);

		// Functions for Planechase
		this.addAll = this.addAll.bind(this);
		this.addCard = this.addCard.bind(this);
		this.clearAll = this.clearAll.bind(this);
		this.nextCard = this.nextCard.bind(this);
		this.startGame = this.startGame.bind(this);
		this.removeCard = this.removeCard.bind(this);
		this.restartGame = this.restartGame.bind(this);

		// Functions for Battle Counter 
		this.addPlayer = this.addPlayer.bind(this);
		this.removePlayer = this.removePlayer.bind(this);
		this.removeAllPlayers = this.removeAllPlayers.bind(this);

		// Render functions for each app
		this.renderHome = this.renderHome.bind(this);
		this.renderCardSearch = this.renderCardSearch.bind(this);
		this.renderPlanechase = this.renderPlanechase.bind(this);
		this.renderBattleCounter = this.renderBattleCounter.bind(this);
	}

	// Functions for the card search
	handleSearchChange(event) {
		let newValue = this.state.cardSearchState;
		newValue.inputValue = event.target.value;
		this.setState({ cardSearchState: newValue });
	}
	handleFuzzySearch(event) {
		let self = this;
		let searchState = this.state.cardSearchState,
			fuzzyUrl = 'https://api.scryfall.com/cards/named?fuzzy=',
			searchUrl = fuzzyUrl + searchState.inputValue.split(' ').join('+')
		axios.get(searchUrl).then(function (response) {
			let cardData = response.data;
			console.log(cardData)
			searchState.cardPrice = '$ ' + cardData.usd;
			searchState.cardName = cardData.name;
			searchState.cardType = cardData.type_line;
			searchState.cardUri = cardData.image_uris.png;
			searchState.legalities.standard = cardData.legalities.standard
			searchState.legalities.future = cardData.legalities.future
			searchState.legalities.frontier = cardData.legalities.frontier
			searchState.legalities.modern = cardData.legalities.modern
			searchState.legalities.legacy = cardData.legalities.legacy
			searchState.legalities.pauper = cardData.legalities.pauper
			searchState.legalities.vintage = cardData.legalities.vintage
			searchState.legalities.penny = cardData.legalities.penny
			searchState.legalities.commander = cardData.legalities.commander
			searchState.legalities.oneVone = cardData.legalities["1v1"]
			searchState.legalities.duel = cardData.legalities.duel
			searchState.legalities.brawl = cardData.legalities.brawl
			self.setState({ cardSearchState: searchState })
			console.log(searchState);
		}).catch(function (error) {
			searchState.legalities.standard = "not_legal"
			searchState.legalities.future = "not_legal"
			searchState.legalities.frontier = "not_legal"
			searchState.legalities.modern = "not_legal"
			searchState.legalities.legacy = "not_legal"
			searchState.legalities.pauper = "not_legal"
			searchState.legalities.vintage = "not_legal"
			searchState.legalities.penny = "not_legal"
			searchState.legalities.commander = "not_legal"
			searchState.legalities.oneVone = "not_legal"
			searchState.legalities.duel = "not_legal"
			searchState.legalities.brawl = "not_legal"
			searchState.cardName = "Can't find a card by that name :(";
			searchState.cardPrice = "$ 3.50";
			searchState.cardType = "Please try again! ";
			searchState.cardUri = "https://img.scryfall.com/cards/large/en/unh/120a.jpg?1517813031";
			self.setState({ cardSearchState: searchState })
			console.log("Opps! Something went wront!: ", error);
		});
		console.log(searchUrl)
		event.preventDefault();
	}
	// Functions for Planechase
	getAllPlaneCards(event) {
		let planechaseState = this.state.planechaseState,
			self = this;
		if (planechaseState.planechaseCards.length <= 0) {
			axios.get(planechaseState.urlForSearch)
				.then(function (response) {
					let allPlanesData = response.data.data;
					allPlanesData.forEach((card, idx) => planechaseState.planechaseCards.push({ key: idx, name: card.name, image: card.image_uris.normal, text: card.oracle_text }))
					console.log(planechaseState.planechaseCards);
					self.setState({ planechaseState: planechaseState })
				})
				.catch(function (error) {
					console.log("Opps! Something went wront!: ", error);
				})
		}
	}
	addCard(card) {
		let planechaseState = this.state.planechaseState;
		planechaseState.playDeck.push(card)
		this.setState({ planechaseState: planechaseState })
		console.log(this.state.planechaseState.playDeck)
	}
	addAll(card) {
		let planechaseState = this.state.planechaseState;
		planechaseState.planechaseCards.forEach(card => planechaseState.playDeck.push(card));
		this.setState({ planechaseState: planechaseState })
		console.log(this.state.planechaseState.playDeck)
	}
	removeCard(index) {
		let planechaseState = this.state.planechaseState;
		planechaseState.playDeck.splice(index, 1)
		this.setState({ planechaseState: planechaseState })
		console.log(this.state.planechaseState.playDeck)
	}
	clearAll(event) {
		let planechaseState = this.state.planechaseState;
		planechaseState.playDeck = [];
		this.setState({ planechaseState: planechaseState })
		console.log(this.state.planechaseState.playDeck)
	}
	shuffle(deck) {
		for (let i = deck.length - 1; i > 0; i--) {
			let j = Math.floor(Math.random() * (i + 1));
			[deck[i], deck[j]] = [deck[j], deck[i]];
		}
		return deck
	}
	startGame(event) {
		let planechaseState = this.state.planechaseState;

		if (planechaseState.playDeck.length > 0) {
			planechaseState.gameStart = true;
			this.shuffle(planechaseState.playDeck)
			this.setState({ planechaseState: planechaseState })
		} else {
			alert('You need to make a deck first!')
		}
	}
	restartGame(event) {
		let planechaseState = this.state.planechaseState;
		planechaseState.gameStart = false;
		this.setState({ planechaseState: planechaseState })
	}
	nextCard(event) {
		let planechaseState = this.state.planechaseState;
		planechaseState.playDeck.push(planechaseState.playDeck.shift());
		planechaseState.playCounter++;
		if (planechaseState.playCounter > planechaseState.playDeck.length) {
			this.shuffle(planechaseState.playDeck);
			planechaseState.playCounter = 1;
		}
		this.setState({ planechaseState: planechaseState })

	}

	// Functions for Battle Counter

	addPlayer(event) {
		let battleCounterState = this.state.battleCounterState;
		battleCounterState.players.push([battleCounterState.numberOfPlayers, 20])
		battleCounterState.numberOfPlayers++;
		this.setState({ battleCounterState: battleCounterState })
	}

	removeAllPlayers(event) {
		let battleCounterState = this.state.battleCounterState;
		battleCounterState.players = [];
		battleCounterState.numberOfPlayers = 0;
		this.setState({ battleCounterState: battleCounterState })

	}

	removePlayer(index) {
		let battleCounterState = this.state.battleCounterState;
		battleCounterState.players.splice(index, 1)
		battleCounterState.numberOfPlayers--;
		this.setState({ battleCounterState: battleCounterState })


	}

	// Render functions for each app
	renderCardSearch(event) {
		let renderStates = this.state.renderStates
		Object.keys(renderStates).forEach(key => renderStates[key] = false);
		renderStates.cardSearch = true;
		this.setState({ renderStates: renderStates })
	}
	renderAbout(event) {
		let renderStates = this.state.renderStates
		Object.keys(renderStates).forEach(key => renderStates[key] = false);
		renderStates.about = true;
		this.setState({ renderStates: renderStates })
	}
	renderPlanechase(event) {
		let renderStates = this.state.renderStates
		Object.keys(renderStates).forEach(key => renderStates[key] = false);
		renderStates.planechase = true;
		this.setState({ renderStates: renderStates });
	}
	renderDeckBuilder(event) {
		let renderStates = this.state.renderStates
		Object.keys(renderStates).forEach(key => renderStates[key] = false);
		renderStates.deckBuilder = true;
		this.setState({ renderStates: renderStates });
	}
	renderBattleCounter(event) {
		let renderStates = this.state.renderStates
		Object.keys(renderStates).forEach(key => renderStates[key] = false);
		renderStates.battleCounter = true;
		this.setState({ renderStates: renderStates });
	}
	renderHome(event) {
		let renderStates = this.state.renderStates
		Object.keys(renderStates).forEach(key => renderStates[key] = false);
		renderStates.home = true;
		this.setState({ renderStates: renderStates });
	}


	render() {
		let home = <HomePage renderCardSearch={this.renderCardSearch} renderPlanechase={this.renderPlanechase} renderBattleCounter={this.renderBattleCounter} />,
			cardSearch = <CardSearch handleSearchChange={this.handleSearchChange} handleFuzzySearch={this.handleFuzzySearch} cardSearchState={this.state.cardSearchState} />,
			planechase = <Planechase planechaseState={this.state.planechaseState} startGame={this.startGame} restartGame={this.restartGame} nextCard={this.nextCard} addCard={this.addCard} addAll={this.addAll} removeCard={this.removeCard} clearAll={this.clearAll} />,
			battleCounter = <BattleCounter battleCounterState={this.state.battleCounterState} addPlayer={this.addPlayer} removePlayer={this.removePlayer} removeAllPlayers={this.removeAllPlayers} />
		this.getAllPlaneCards()
		return (
			<div className="App" >
				<header className="App-header">
					{/* <img src={logo} className="App-logo" alt="logo" /> */}
					<Button onClick={this.renderHome}>Close!</Button>
				</header>

				{this.state.renderStates.home ? home : ''}
				{/* {this.state.renderStates.about ? about : ''} */}
				{this.state.renderStates.cardSearch ? cardSearch : ''}
				{this.state.renderStates.planechase ? planechase : ''}
				{this.state.renderStates.battleCounter ? battleCounter : ''}

			</div>
		);
	}
}

export default App;


// 6c757d