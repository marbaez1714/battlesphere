import React, { Component } from 'react';
import { Button } from 'reactstrap';
import HomePage from './pages/home/home';
import About from './pages/about/about';
import BattleCounter from './pages/battle-counter/battle-counter';
import CardSearch from './pages/card-search/card-search';
import Planechase from './pages/planechase/planechase';
import axios from 'axios';
import logo from './logo.svg';
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
				builderVisibility: true,
				gameVisibility: false,
				seachDone: false,
				gameData: [],
				playDeck: [],
				planeCards: [],
				formattedCards: [],
				cardBack: "https://humpheh.com/magic/p/res/W500/Planechase%20Back-W500.jpg"
			}
		}

		this.handleSearchChange = this.handleSearchChange.bind(this);
		this.handleFuzzySearch = this.handleFuzzySearch.bind(this);
		this.renderCardSearch = this.renderCardSearch.bind(this);
		this.renderPlanechase = this.renderPlanechase.bind(this);
		this.getAllPlaneCards = this.getAllPlaneCards.bind(this);
		this.renderHome = this.renderHome.bind(this);
		this.clearPlanechaseDeck = this.clearPlanechaseDeck.bind(this);
		this.changePlanechaseView = this.changePlanechaseView.bind(this);
	}

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

	getAllPlaneCards(event) {
		let searchUrl = "https://api.scryfall.com/cards/search?q=t:plane",
			planechaseState = this.state.planechaseState,
			self = this;

		if (planechaseState.seachDone === false) {
			axios.get(searchUrl)
				.then(function (response) {
					let cardData = response.data.data;
					cardData.forEach((card, idx) => planechaseState.planeCards.push({ key: idx, name: card.name, image: card.image_uris.normal, text: card.oracle_text }))
					planechaseState.planeCards.forEach(card => planechaseState.formattedCards.push(
						<tr key={card.key}>
							<th scope="row"><Button onClick={event => {
								planechaseState.playDeck.push(<li key={card.key}>{card.name}</li>)
								planechaseState.gameData.push({ key: card.key, name: card.name, image: card.image, text: card.text })
								self.setState({ planechaseState: planechaseState })
							}} ><i className="far fa-check-square"></i></Button></th>
							<td>{card.name}</td>
							<td>{card.text}</td>
						</tr>
					))
					planechaseState.seachDone = true;
					self.setState({ planechaseState: planechaseState })
				})
				.catch(function (error) {
					console.log(error);
				});
		}
	}

	clearPlanechaseDeck(event) {
		if (this.state.planechaseState.playDeck.length > 0) {
			let playState = this.state.planechaseState;
			playState.playDeck = [];
			this.setState({ planechaseState: playState })
		}
	}

	changePlanechaseView(event) {
		let planechaseState = this.state.planechaseState,
			self = this;
		if (planechaseState.builderVisibility === true) {
			planechaseState.builderVisibility = false;
			planechaseState.gameVisibility = true;
			console.log(self.state.planechaseState.gameData)
			self.setState({ planechaseState: planechaseState })
		} else {
			planechaseState.builderVisibility = true;
			planechaseState.gameVisibility = false;
			self.setState({ planechaseState: planechaseState })
		}
	}

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

	renderHome(event) {
		let renderStates = this.state.renderStates
		Object.keys(renderStates).forEach(key => renderStates[key] = false);
		renderStates.home = true;
		this.setState({ renderStates: renderStates });
	}

	render() {
		let home = <HomePage renderCardSearch={this.renderCardSearch} renderPlanechase={this.renderPlanechase} />,
			cardSearch = <CardSearch handleSearchChange={this.handleSearchChange} handleFuzzySearch={this.handleFuzzySearch} cardSearchState={this.state.cardSearchState} />,
			planechase = <Planechase planechaseState={this.state.planechaseState} clearPlanechaseDeck={this.clearPlanechaseDeck} changePlanechaseView={this.changePlanechaseView} />
		this.getAllPlaneCards();


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
				{/* <BattleCounter battleCounterState={this.state.battleCounterState} /> */}
			</div>
		);
	}
}

export default App;


// 6c757d