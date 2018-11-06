import React, { Component } from 'react';
import HomePage from './pages/home/home';
import CardSearch from './pages/card-search/card-search'
import OopsPage from './pages/oops';
import axios from 'axios';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
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
			}
		}
		this.handleSearchChange = this.handleSearchChange.bind(this);
		this.handleFuzzySearch = this.handleFuzzySearch.bind(this);
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
			searchUrl = fuzzyUrl + searchState.inputValue.split(' ').join('+'),
			cardLegal = searchState.legalities;
		axios.get(searchUrl).then(function (response) {
			let cardData = response.data;
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
			searchState.cardName = "Can't find a card by that name :(";
			searchState.cardPrice = "$ 3.50";
			searchState.cardType = "Please try again! ";
			searchState.cardUri = "https://mtgcardsmith.com/view/complete/full/2015/6/13/1434239168168075.png";
			self.setState({ cardSearchState: searchState })
			console.log("Opps! Something went wront!: ", error);
		});
		console.log(searchUrl)
		event.preventDefault();
	}


	render() {
		return (
			<div className="App" >
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
				</header>
				<HomePage />
				{/* <CardSearch handleSearchChange={this.handleSearchChange}
					handleFuzzySearch={this.handleFuzzySearch}
					cardSearchState={this.state.cardSearchState} /> */}
			</div>
		);
	}
}

export default App;


// 6c757d