(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,function(e,a,t){},,,,,,,,,,,,,,,,,,,,function(e,a,t){e.exports=t.p+"static/media/loading.d366fa40.svg"},function(e,a,t){e.exports=t.p+"static/media/x.bad4ae08.svg"},function(e,a,t){e.exports=t.p+"static/media/y.c4438677.svg"},function(e,a,t){e.exports=t.p+"static/media/z.57aa21bf.svg"},function(e,a,t){e.exports=t.p+"static/media/wu.cf290894.svg"},function(e,a,t){e.exports=t.p+"static/media/wb.136bffa0.svg"},function(e,a,t){e.exports=t.p+"static/media/br.2b1640a3.svg"},function(e,a,t){e.exports=t.p+"static/media/bg.511011a4.svg"},function(e,a,t){e.exports=t.p+"static/media/ub.20d31f02.svg"},function(e,a,t){e.exports=t.p+"static/media/ur.c570806f.svg"},function(e,a,t){e.exports=t.p+"static/media/rg.583cb9b2.svg"},function(e,a,t){e.exports=t.p+"static/media/rw.4b636248.svg"},function(e,a,t){e.exports=t.p+"static/media/gw.9b2f02d8.svg"},function(e,a,t){e.exports=t.p+"static/media/gu.9eb4bb1e.svg"},function(e,a,t){e.exports=t.p+"static/media/2w.fefb1a82.svg"},function(e,a,t){e.exports=t.p+"static/media/2u.3df5aab2.svg"},function(e,a,t){e.exports=t.p+"static/media/2b.7bc06341.svg"},function(e,a,t){e.exports=t.p+"static/media/2r.63270990.svg"},function(e,a,t){e.exports=t.p+"static/media/2g.710be677.svg"},function(e,a,t){e.exports=t.p+"static/media/cp.92e6d152.svg"},function(e,a,t){e.exports=t.p+"static/media/wp.8b732157.svg"},function(e,a,t){e.exports=t.p+"static/media/up.5ff0609e.svg"},function(e,a,t){e.exports=t.p+"static/media/bp.d4b3c9ed.svg"},function(e,a,t){e.exports=t.p+"static/media/rp.8155db08.svg"},function(e,a,t){e.exports=t.p+"static/media/gp.32c26bc0.svg"},function(e,a,t){e.exports=t.p+"static/media/w.d4f44b64.svg"},function(e,a,t){e.exports=t.p+"static/media/u.032bb0fa.svg"},function(e,a,t){e.exports=t.p+"static/media/b.7288e393.svg"},function(e,a,t){e.exports=t.p+"static/media/r.908f6c57.svg"},function(e,a,t){e.exports=t.p+"static/media/g.3c3d7c8c.svg"},function(e,a,t){e.exports=t.p+"static/media/s.5eeaced7.svg"},,,function(e,a,t){e.exports=t(106)},,,,,function(e,a,t){},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,a,t){"use strict";t.r(a);var n=t(1),r=t.n(n),c=t(7),l=t.n(c),s=(t(69),t(27)),m=t(28),o=t(63),i=t(29),d=t(62),u=t(4),h=t(3);function g(e){return r.a.createElement(h.e,{xs:"6",md:"4",className:"homeCardWrapper",style:{paddingLeft:"0.5vh",paddingRight:"0.5vh",marginTop:"1vh",marginBottom:"1vh"}},r.a.createElement(h.a,{className:"homeCard"},r.a.createElement("img",{className:"homeImage",src:e.image,onClick:function(a){return e.changePage(e.idx)},alt:""}),r.a.createElement("p",{className:"homeText"},e.name)))}function S(e){return r.a.createElement(h.f,{className:"homeWrapper"},r.a.createElement(h.o,null,r.a.createElement(g,{image:"https://img.scryfall.com/cards/art_crop/en/vma/70.jpg?1517813031",name:"Card Search",idx:2,changePage:e.changePage}),r.a.createElement(g,{image:"https://img.scryfall.com/cards/art_crop/en/c16/143.jpg?1517813031",name:"Planechase",idx:3,changePage:e.changePage}),r.a.createElement(g,{image:"https://img.scryfall.com/cards/art_crop/en/ust/127.jpg?1522207829",name:"Battlecounter",idx:4,changePage:e.changePage}),r.a.createElement(g,{image:"https://img.scryfall.com/cards/art_crop/en/hou/166.jpg?1517813031",name:"Set Search",idx:5,changePage:e.changePage})))}t(11);function p(e){return r.a.createElement(h.o,{className:"searchBox"},r.a.createElement(h.e,{xs:"12",className:"scale-in-center"},r.a.createElement(h.g,{className:"inputBox",onChange:e.handleSearchInputChange,onSubmit:e.handleSearch},r.a.createElement(h.i,null,r.a.createElement(h.h,{style:{borderRadius:"0"}}),r.a.createElement(h.j,{addonType:"append"},r.a.createElement(h.a,{color:"secondary",style:{borderRadius:"0"}},"Search"))))))}function f(e){return"legal"===e.legal?r.a.createElement(h.e,{xs:"6"},r.a.createElement(h.a,{color:"success",className:"legalButton"},e.game)):r.a.createElement(h.e,{xs:"6"},r.a.createElement(h.a,{color:"secondary",className:"legalButton"},e.game))}function y(e){var a=e.cardSearchState.selectedCard,t=e.cardSearchState.selectedCard.legalities;return r.a.createElement(h.k,{isOpen:e.cardSearchState.modalState,toggle:function(a){return e.removeModal()}},r.a.createElement(h.n,{toggle:function(a){return e.removeModal()}},r.a.createElement("p",null,a.name),r.a.createElement("p",null,a.type_line),e.cardSearchState.selectedMana),r.a.createElement(h.l,null,e.cardSearchState.selectedCard.oracle_text),r.a.createElement(h.m,null,r.a.createElement(h.o,null,r.a.createElement(f,{key:"1",legal:t?t.standard:"",game:"Standard"}),r.a.createElement(f,{key:"2",legal:t?t.future:"",game:"Future"}),r.a.createElement(f,{key:"3",legal:t?t.frontier:"",game:"Frontier"}),r.a.createElement(f,{key:"4",legal:t?t.modern:"",game:"Modern"}),r.a.createElement(f,{key:"5",legal:t?t.legacy:"",game:"Legacy"}),r.a.createElement(f,{key:"6",legal:t?t.pauper:"",game:"Pauper"}),r.a.createElement(f,{key:"7",legal:t?t.vintage:"",game:"Vintage"}),r.a.createElement(f,{key:"8",legal:t?t.penny:"",game:"Penny"}),r.a.createElement(f,{key:"9",legal:t?t.commander:"",game:"Commander"}),r.a.createElement(f,{key:"10",legal:t?t["1v1"]:"",game:"1v1"}),r.a.createElement(f,{key:"11",legal:t?t.duel:"",game:"Duel"}),r.a.createElement(f,{key:"12",legal:t?t.brawl:"",game:"Brawl"}))))}function E(e){return r.a.createElement(h.e,{xs:"6",md:"3",className:"searchResultsCard "},r.a.createElement(h.a,{className:"scale-in-center-2sDelay",onClick:function(a){return e.toggleSearchModal(e.card)}},r.a.createElement("img",{src:e.card.image_uris.border_crop,style:{width:"100%"},alt:""})))}function b(e){return r.a.createElement(h.f,{className:"CardSearchWrapper"},r.a.createElement(p,{handleSearchInputChange:e.handleSearchInputChange,handleSearch:e.handleNewSearch,searchSuccessNotify:e.searchSuccessNotify}),r.a.createElement(h.o,{style:{paddingLeft:"1vh",paddingRight:"1vh"}},e.cardSearchState.cardList.map(function(a,t){return r.a.createElement(E,{key:t,card:a,toggleSearchModal:e.toggleSearchModal})})),r.a.createElement(y,{cardSearchState:e.cardSearchState,removeModal:e.removeModal}))}function v(e){return r.a.createElement(h.e,{xs:"12",md:"4",className:"planeCardWrapper",style:{paddingLeft:"0.5vh",paddingRight:"0.5vh"}},r.a.createElement(h.a,{className:"cardButton scale-in-center-2sDelay",onClick:function(a){return e.addToPlanechaseDeck(e.card,e.idx)}},r.a.createElement("p",{className:"planeName"},e.card.name),r.a.createElement("img",{className:"planeCard",src:e.card.image_uris.border_crop,alt:""})))}function k(e){return r.a.createElement(h.e,{xs:"6"},r.a.createElement("p",{className:"deckCard"},r.a.createElement("i",{className:"far fa-times-circle removeButton",onClick:function(a){return e.removeCardFromGameDeck(e.card,e.idx)}}),e.card.name))}function C(e){return r.a.createElement(h.e,{xs:"12",md:"6",className:"scale-in-center-2sDelay"},r.a.createElement(h.e,{xs:"12",style:{paddingLeft:"0.5vh",paddingRight:"0.5vh"}},r.a.createElement(h.a,{className:"addAllButton",onClick:function(a){return e.addAll()},style:{borderRadius:"0"}},"Add All")),r.a.createElement(h.e,{xs:"12",style:{paddingLeft:"0.5vh",paddingRight:"0.5vh"}},r.a.createElement(h.a,{className:"clearAllButton",onClick:function(a){return e.removeAll()},style:{borderRadius:"0"}},"Clear Deck")),r.a.createElement(h.e,{xs:"12",style:{paddingLeft:"0.5vh",paddingRight:"0.5vh"}},r.a.createElement(h.a,{className:"startGameButton",onClick:function(a){return e.startGame()},style:{borderRadius:"0"},color:"success"},"Stard Game")))}function N(e){return e.planechaseState.gameDeck.length>0?r.a.createElement(h.o,{className:"scale-in-center-2sDelay"},r.a.createElement(h.e,{xs:"12"},r.a.createElement("img",{className:"planeCard currentCard",onClick:function(a){return e.nextCard()},src:e.planechaseState.gameDeck[0].image_uris.normal,alt:""})),r.a.createElement(h.a,{className:"endGameButton",style:{borderRadius:"0"},onClick:function(a){return e.endGame()}},"End Game")):""}function x(e){return r.a.createElement(h.f,{className:"PlanechaseWrapper"},r.a.createElement("div",{style:{display:e.planechaseState.gameGoing?"none":""}},r.a.createElement(h.o,null,r.a.createElement(h.e,{xs:"12",md:"6"},r.a.createElement("div",{className:"gameDeck scale-in-center-2sDelay"},r.a.createElement(h.o,null,e.planechaseState.gameDeck.map(function(a,t){return r.a.createElement(k,{card:a,idx:t,removeCardFromGameDeck:e.removeCardFromGameDeck})})))),r.a.createElement(C,{addAll:e.addAll,removeAll:e.removeAll,startGame:e.startGame})),r.a.createElement(h.o,null,e.planechaseState.allPlaneCards.map(function(a,t){return r.a.createElement(v,{card:a,key:t,addToPlanechaseDeck:e.addToPlanechaseDeck,idx:t})}))),r.a.createElement("div",{style:{display:e.planechaseState.gameGoing?"":"none"}},r.a.createElement(N,{planechaseState:e.planechaseState,nextCard:e.nextCard,endGame:e.endGame})))}function O(e){return r.a.createElement(h.e,{xs:"6",md:"4",style:{paddingLeft:"0.5vh",paddingRight:"0.5vh"}},r.a.createElement(h.b,{className:"playerCard scale-in-center",style:{borderRadius:"0"},key:e.idx},r.a.createElement(h.d,null,r.a.createElement("input",{className:"playerName",placeholder:"Player "+e.playerNumber})),r.a.createElement(h.c,{style:{padding:"1vh"}},r.a.createElement(h.o,null,e.player.map(function(a,t){return r.a.createElement(h.e,{xs:"12",key:t},r.a.createElement(h.o,{className:"counterNumber"},r.a.createElement(h.e,{xs:"4",className:"plusContainer"},r.a.createElement("i",{className:"far fa-plus-square",onClick:function(a){return e.plusOne(e.idx,t)},style:{cursor:"pointer"}})),r.a.createElement(h.e,{xs:"4",style:{padding:"0"}},r.a.createElement("p",{style:{marginBottom:"0"}},a)),r.a.createElement(h.e,{xs:"4",className:"minusContainer"},r.a.createElement("i",{className:"far fa-minus-square",onClick:function(a){return e.minusOne(e.idx,t)},style:{cursor:"pointer"}}))))}))),r.a.createElement(h.a,{onClick:function(a){return e.addCounter(e.idx)},style:{borderRadius:"0"}},"Add Counter")))}function D(e){return r.a.createElement(h.f,{className:"BattleCounterWrapper scale-in-center"},r.a.createElement(h.o,null,r.a.createElement(h.e,{xs:"6",style:{paddingLeft:"0.5vh",paddingRight:"0.5vh"}},r.a.createElement(h.a,{onClick:function(a){return e.addPlayer()},style:{width:"100%",borderRadius:"0"}},"Add Player")),r.a.createElement(h.e,{xs:"6",style:{paddingLeft:"0.5vh",paddingRight:"0.5vh"}},r.a.createElement(h.a,{onClick:function(a){return e.removeAllPlayers()},style:{width:"100%",borderRadius:"0"}},"Remove All Players"))),r.a.createElement(h.o,null,e.battleCounterState.players.map(function(a,t){return r.a.createElement(O,{player:a,playerNumber:t+1,idx:t,addCounter:e.addCounter,plusOne:e.plusOne,minusOne:e.minusOne,key:t})})))}var j=t(31),P=t.n(j);function M(e){return r.a.createElement("tr",{className:"setRow",key:e.idx,onClick:function(a){return e.selectSet(e.set)}},r.a.createElement("td",{style:{paddingLeft:"token"===e.set.set_type?"2rem":""}},r.a.createElement("img",{className:"setIcon",src:e.set.icon_svg_uri,alt:""})),r.a.createElement("td",{style:{paddingLeft:"token"===e.set.set_type?"2rem":""}},e.set.name),r.a.createElement("td",null,e.set.card_count),r.a.createElement("td",null,e.set.released_at?e.set.released_at:"-"),r.a.createElement("td",null,e.set.set_type))}function A(e){return r.a.createElement(h.o,null,r.a.createElement(h.e,{xs:{size:"10",offset:"1"}},r.a.createElement(h.p,{hover:!0,size:"sm",className:"setsTable",responsive:!0},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null),r.a.createElement("th",null,"Set"),r.a.createElement("th",null,"Card Count"),r.a.createElement("th",null,"Release Date"),r.a.createElement("th",null,"Set Type"))),r.a.createElement("tbody",null,e.setSearchState.allSets.map(function(a,t){return r.a.createElement(M,{set:a,idx:t,key:t,selectSet:e.selectSet})})))))}function w(e){return"legal"===e.legal?r.a.createElement(h.e,{xs:"6"},r.a.createElement(h.a,{color:"success",className:"legalButton"},e.game)):r.a.createElement(h.e,{xs:"6"},r.a.createElement(h.a,{color:"secondary",className:"legalButton"},e.game))}function G(e){var a=e.setSearchState.selectedCard,t=e.setSearchState.selectedCard.legalities;return r.a.createElement(h.k,{isOpen:e.setSearchState.modalState,toggle:function(a){return e.removeSetModal()}},r.a.createElement(h.n,{toggle:function(a){return e.removeSetModal()}},r.a.createElement("p",null,a.name),r.a.createElement("p",null,a.type_line),e.setSearchState.selectedMana),r.a.createElement(h.l,null,e.setSearchState.selectedCard.oracle_text),r.a.createElement(h.m,null,r.a.createElement(h.o,null,r.a.createElement(w,{key:"1",legal:t?t.standard:"",game:"Standard"}),r.a.createElement(w,{key:"2",legal:t?t.future:"",game:"Future"}),r.a.createElement(w,{key:"3",legal:t?t.frontier:"",game:"Frontier"}),r.a.createElement(w,{key:"4",legal:t?t.modern:"",game:"Modern"}),r.a.createElement(w,{key:"5",legal:t?t.legacy:"",game:"Legacy"}),r.a.createElement(w,{key:"6",legal:t?t.pauper:"",game:"Pauper"}),r.a.createElement(w,{key:"7",legal:t?t.vintage:"",game:"Vintage"}),r.a.createElement(w,{key:"8",legal:t?t.penny:"",game:"Penny"}),r.a.createElement(w,{key:"9",legal:t?t.commander:"",game:"Commander"}),r.a.createElement(w,{key:"10",legal:t?t["1v1"]:"",game:"1v1"}),r.a.createElement(w,{key:"11",legal:t?t.duel:"",game:"Duel"}),r.a.createElement(w,{key:"12",legal:t?t.brawl:"",game:"Brawl"}))))}function R(e){return r.a.createElement(h.e,{xs:"6",md:"3",className:"searchResultsCard "},r.a.createElement(h.a,{className:"scale-in-center-2sDelay",onClick:function(a){return e.toggleSetSearchModal(e.card)}},r.a.createElement("img",{src:e.card.image_uris.border_crop,style:{width:"100%"},alt:""})))}function _(e){return!e.setSearchState.loading&&e.setSearchState.showSet?r.a.createElement(h.o,null,r.a.createElement(h.e,{xs:"12"},r.a.createElement(h.a,{onClick:function(a){return e.returnToSets()},className:"returnButton"},"Return to Sets ")),e.setSearchState.setData.map(function(a,t){return a.image_uris?r.a.createElement(R,{key:t,card:a,toggleSetSearchModal:e.toggleSetSearchModal}):console.log(a.name+" omited from results because of an error")})):""}function B(e){return r.a.createElement(h.f,null,r.a.createElement(h.o,null,r.a.createElement(h.e,{xs:{size:"4",offset:"4"}},e.setSearchState.loading?r.a.createElement("img",{src:P.a,alt:"",className:"loadingImage rotate-scale-up"}):"")),e.setSearchState.loading||e.setSearchState.showSet?"":r.a.createElement(A,{setSearchState:e.setSearchState,selectSet:e.selectSet}),r.a.createElement(_,{setSearchState:e.setSearchState,toggleSetSearchModal:e.toggleSetSearchModal,returnToSets:e.returnToSets}),r.a.createElement(G,{removeSetModal:e.removeSetModal,setSearchState:e.setSearchState}))}var L=t(32),T=t.n(L),I=t(33),F=t.n(I),U=t(34),W=t.n(U),V=t(35),z=t.n(V),q=t(36),J=t.n(q),Y=t(37),X=t.n(Y),Z=t(38),$=t.n(Z),H=t(39),K=t.n(H),Q=t(40),ee=t.n(Q),ae=t(41),te=t.n(ae),ne=t(42),re=t.n(ne),ce=t(43),le=t.n(ce),se=t(44),me=t.n(se),oe=t(45),ie=t.n(oe),de=t(46),ue=t.n(de),he=t(47),ge=t.n(he),Se=t(48),pe=t.n(Se),fe=t(49),ye=t.n(fe),Ee=t(50),be=t.n(Ee),ve=t(51),ke=t.n(ve),Ce=t(52),Ne=t.n(Ce),xe=t(53),Oe=t.n(xe),De=t(54),je=t.n(De),Pe=t(55),Me=t.n(Pe),Ae=t(56),we=t.n(Ae),Ge=t(57),Re=t.n(Ge),_e=t(58),Be=t.n(_e),Le=t(59),Te=t.n(Le),Ie=t(60),Fe=t.n(Ie),Ue=t(61),We=t.n(Ue);function Ve(e){return e.split("{").map(function(e){return"{"+e}).filter(function(e){return 1<e.length}).map(function(e,a){return function(e,a){switch(e){case"{X}":return r.a.createElement("img",{key:a,className:"manaSymbol",src:T.a,alt:""});case"{Y}":return r.a.createElement("img",{key:a,className:"manaSymbol",src:F.a,alt:""});case"{Z}":return r.a.createElement("img",{key:a,className:"manaSymbol",src:W.a,alt:""});case"{W/U}":return r.a.createElement("img",{key:a,className:"manaSymbol",src:z.a,alt:""});case"{W/B}":return r.a.createElement("img",{key:a,className:"manaSymbol",src:J.a,alt:""});case"{B/R}":return r.a.createElement("img",{key:a,className:"manaSymbol",src:X.a,alt:""});case"{B/G}":return r.a.createElement("img",{key:a,className:"manaSymbol",src:$.a,alt:""});case"{U/B}":return r.a.createElement("img",{key:a,className:"manaSymbol",src:K.a,alt:""});case"{U/R}":return r.a.createElement("img",{key:a,className:"manaSymbol",src:ee.a,alt:""});case"{R/G}":return r.a.createElement("img",{key:a,className:"manaSymbol",src:te.a,alt:""});case"{R/W}":return r.a.createElement("img",{key:a,className:"manaSymbol",src:re.a,alt:""});case"{G/W}":return r.a.createElement("img",{key:a,className:"manaSymbol",src:le.a,alt:""});case"{G/U}":return r.a.createElement("img",{key:a,className:"manaSymbol",src:me.a,alt:""});case"{2/W}":return r.a.createElement("img",{key:a,className:"manaSymbol",src:ie.a,alt:""});case"{2/U}":return r.a.createElement("img",{key:a,className:"manaSymbol",src:ue.a,alt:""});case"{2/B}":return r.a.createElement("img",{key:a,className:"manaSymbol",src:ge.a,alt:""});case"{2/R}":return r.a.createElement("img",{key:a,className:"manaSymbol",src:pe.a,alt:""});case"{2/G}":return r.a.createElement("img",{key:a,className:"manaSymbol",src:ye.a,alt:""});case"{P}":return r.a.createElement("img",{key:a,className:"manaSymbol",src:be.a,alt:""});case"{W/P}":return r.a.createElement("img",{key:a,className:"manaSymbol",src:ke.a,alt:""});case"{U/P}":return r.a.createElement("img",{key:a,className:"manaSymbol",src:Ne.a,alt:""});case"{B/P}":return r.a.createElement("img",{key:a,className:"manaSymbol",src:Oe.a,alt:""});case"{R/P}":return r.a.createElement("img",{key:a,className:"manaSymbol",src:je.a,alt:""});case"{G/P}":return r.a.createElement("img",{key:a,className:"manaSymbol",src:Me.a,alt:""});case"{W}":return r.a.createElement("img",{key:a,className:"manaSymbol",src:we.a,alt:""});case"{U}":return r.a.createElement("img",{key:a,className:"manaSymbol",src:Re.a,alt:""});case"{B}":return r.a.createElement("img",{key:a,className:"manaSymbol",src:Be.a,alt:""});case"{R}":return r.a.createElement("img",{key:a,className:"manaSymbol",src:Te.a,alt:""});case"{G}":return r.a.createElement("img",{key:a,className:"manaSymbol",src:Fe.a,alt:""});case"{S}":return r.a.createElement("img",{key:a,className:"manaSymbol",src:We.a,alt:""});default:return r.a.createElement("span",{key:a,className:"anyManaSymbol"},e.split("{")[1].split("}")[0])}}(e,a)})}var ze=t(9),qe=t.n(ze),Je=t(6),Ye=(t(102),t(104),function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(o.a)(this,Object(i.a)(a).call(this,e))).state={pageView:1,planechaseState:{planeSearchUrl:"https://api.scryfall.com/cards/search?q=t=plane",allPlaneCards:[],gameDeck:[],currentCardIdx:1,gameGoing:!1},cardSearchState:{inputValueCardName:"",autocompleteUrl:"https://api.scryfall.com/cards/autocomplete?q=",fuzzyUrl:"https://api.scryfall.com/cards/named?fuzzy=",searchUrl:"https://api.scryfall.com/cards/search?q=",cardList:[],selectedCard:{},selectedMana:[],badSearch:!1,modalState:!1},battleCounterState:{players:[]},setSearchState:{allSets:[],setSearchUrl:"https://api.scryfall.com/sets",selectedSet:{},showSet:!1,setData:[],loading:!1,selectedCard:[],selectedMana:[],modalState:!1}},t.changePage=t.changePage.bind(Object(u.a)(Object(u.a)(t))),t.removeModal=t.removeModal.bind(Object(u.a)(Object(u.a)(t))),t.toggleSearchModal=t.toggleSearchModal.bind(Object(u.a)(Object(u.a)(t))),t.handleSearchInputChange=t.handleSearchInputChange.bind(Object(u.a)(Object(u.a)(t))),t.handleNewSearch=t.handleNewSearch.bind(Object(u.a)(Object(u.a)(t))),t.addAll=t.addAll.bind(Object(u.a)(Object(u.a)(t))),t.endGame=t.endGame.bind(Object(u.a)(Object(u.a)(t))),t.nextCard=t.nextCard.bind(Object(u.a)(Object(u.a)(t))),t.removeAll=t.removeAll.bind(Object(u.a)(Object(u.a)(t))),t.startGame=t.startGame.bind(Object(u.a)(Object(u.a)(t))),t.findAllPlaneCards=t.findAllPlaneCards.bind(Object(u.a)(Object(u.a)(t))),t.addToPlanechaseDeck=t.addToPlanechaseDeck.bind(Object(u.a)(Object(u.a)(t))),t.removeCardFromGameDeck=t.removeCardFromGameDeck.bind(Object(u.a)(Object(u.a)(t))),t.addPlayer=t.addPlayer.bind(Object(u.a)(Object(u.a)(t))),t.removeAllPlayers=t.removeAllPlayers.bind(Object(u.a)(Object(u.a)(t))),t.addCounter=t.addCounter.bind(Object(u.a)(Object(u.a)(t))),t.plusOne=t.plusOne.bind(Object(u.a)(Object(u.a)(t))),t.minusOne=t.minusOne.bind(Object(u.a)(Object(u.a)(t))),t.findAllSets=t.findAllSets.bind(Object(u.a)(Object(u.a)(t))),t.selectSet=t.selectSet.bind(Object(u.a)(Object(u.a)(t))),t.setSearch=t.setSearch.bind(Object(u.a)(Object(u.a)(t))),t.toggleSetSearchModal=t.toggleSetSearchModal.bind(Object(u.a)(Object(u.a)(t))),t.removeSetModal=t.removeSetModal.bind(Object(u.a)(Object(u.a)(t))),t.returnToSets=t.returnToSets.bind(Object(u.a)(Object(u.a)(t))),t}return Object(d.a)(a,e),Object(m.a)(a,[{key:"changePage",value:function(e){this.setState({pageView:e})}},{key:"handleSearchInputChange",value:function(e){var a=this.state.cardSearchState;a.inputValueCardName=e.target.value,a.badSearch=!1,this.setState({cardSearchState:a})}},{key:"handleNewSearch",value:function(e){var a=this.state.cardSearchState,t=a.searchUrl,n=this;a.cardList=[],a.inputValueCardName.length>0?(t+=a.inputValueCardName.split(" ").join("+"),qe.a.get(t).then(function(e){var t=e.data.data;t.length>0?(Je.toast.success("\ud83d\ude0e Found something!"),t.forEach(function(e){e.image_uris?(a.cardList.push(e),a.badSearch=!1,n.setState({cardSearchState:a})):console.log(e.name+" omited from results because of an error")})):(Je.toast.error("\ud83d\ude2d Found nothing "),a.cardList=[],a.badSearch=!0,n.setState({cardSearchState:a}),console.log("No Similar Cards"))}).catch(function(e){console.log(e)})):Je.toast.error("\ud83d\ude2d Found nothing "),e.preventDefault()}},{key:"toggleSearchModal",value:function(e){var a=this.state.cardSearchState;a.selectedCard=e,a.selectedMana=Ve(e.mana_cost),a.modalState=!a.modalState,this.setState({cardSearchState:a})}},{key:"removeModal",value:function(){var e=this.state.cardSearchState;e.selectedCard={},e.selectedMana=[],e.modalState=!e.modalState,this.setState({cardSearchState:e})}},{key:"findAllPlaneCards",value:function(e){var a=this.state.planechaseState,t=this;0===a.allPlaneCards.length&&qe.a.get(a.planeSearchUrl).then(function(e){a.allPlaneCards=e.data.data,t.setState({planechaseState:a})}).catch(function(e){console.log(e)})}},{key:"addToPlanechaseDeck",value:function(e,a){var t=this.state.planechaseState;t.gameDeck.push(e),Je.toast.info("\ud83d\udc4c "+e.name+" added to deck ("+t.gameDeck.length+" in Deck)"),this.setState({planechaseState:t})}},{key:"addAll",value:function(){var e=this.state.planechaseState;e.gameDeck=e.gameDeck.concat(e.allPlaneCards),Je.toast.info("\ud83d\udd25 ALL CARDS ADDED ("+e.gameDeck.length+" in Deck) \ud83d\udd25"),this.setState({planechaseState:e})}},{key:"removeAll",value:function(){var e=this.state.planechaseState;e.gameDeck=[],Je.toast.info("\ud83d\udc80 ALL CARDS REMOVED \ud83d\udc80"),this.setState({planechaseState:e})}},{key:"removeCardFromGameDeck",value:function(e,a){var t=this.state.planechaseState;t.gameDeck.splice(a,1),Je.toast.info("\ud83d\udc80 "+e.name+" removed from deck ("+t.gameDeck.length+" in Deck)"),this.setState({planechaseState:t})}},{key:"startGame",value:function(){var e=this.state.planechaseState;e.gameDeck.length>0?(e.gameDeck=function(e){for(var a=e.length-1;a>0;a--){var t=Math.floor(Math.random()*(a+1)),n=[e[t],e[a]];e[a]=n[0],e[t]=n[1]}return e}(e.gameDeck),e.gameGoing=!0):Je.toast.info("You need to add some cards first!"),this.setState({planechaseState:e})}},{key:"nextCard",value:function(){var e=this.state.planechaseState;e.gameDeck.push(e.gameDeck.shift()),e.currentCardIdx++,e.currentCardIdx===e.gameDeck.length&&(!function(e){for(var a=e.length-1;a>0;a--){var t=Math.floor(Math.random()*(a+1)),n=[e[t],e[a]];e[a]=n[0],e[t]=n[1]}}(e.gameDeck),Je.toast.info("Deck shuffled!"),e.currentCardIdx=1),this.setState({planechaseState:e})}},{key:"endGame",value:function(){var e=this.state.planechaseState;e.gameGoing=!1,e.currentCardIdx=1,this.setState({planechaseState:e})}},{key:"addPlayer",value:function(){var e=this.state.battleCounterState;e.players.push([20]),this.setState({battleCounterState:e})}},{key:"removeAllPlayers",value:function(){var e=this.state.battleCounterState;e.players=[],this.setState({battleCounterState:e})}},{key:"addCounter",value:function(e){var a=this.state.battleCounterState;a.players[e].push(0),this.setState({battleCounterState:a})}},{key:"plusOne",value:function(e,a){var t=this.state.battleCounterState;t.players[e][a]++,this.setState({battleCounterState:t})}},{key:"minusOne",value:function(e,a){var t=this.state.battleCounterState;t.players[e][a]--,this.setState({battleCounterState:t})}},{key:"findAllSets",value:function(){var e=this.state.setSearchState,a=this;0===e.allSets.length&&qe.a.get(e.setSearchUrl).then(function(t){e.allSets=t.data.data,a.setState({setSearchState:e})}).catch(function(e){console.log(e)})}},{key:"selectSet",value:function(e){var a=this.state.setSearchState;a.selectedSet=e,a.setData=[],this.setSearch(e.search_uri),this.setState({setSearchState:a})}},{key:"setSearch",value:function(e){var a=this.state.setSearchState,t=this;a.loading=!0,qe.a.get(e).then(function(e){e.data.has_more?(e.data.data.forEach(function(e){return a.setData.push(e)}),a.loading=!0,t.setState({setSearchState:a}),t.setSearch(e.data.next_page),console.log(a.setData)):(e.data.data.forEach(function(e){return a.setData.push(e)}),a.loading=!1,a.showSet=!0,t.setState({setSearchState:a}),console.log(a.setData))})}},{key:"toggleSetSearchModal",value:function(e){var a=this.state.setSearchState;a.selectedCard=e,a.selectedMana=Ve(e.mana_cost),a.modalState=!a.modalState,this.setState({setSearchState:a})}},{key:"removeSetModal",value:function(){var e=this.state.setSearchState;e.selectedCard={},e.selectedMana=[],e.modalState=!e.modalState,this.setState({setSearchState:e})}},{key:"returnToSets",value:function(){var e=this.state.setSearchState;e.showSet=!1,e.setData=[],this.setState({setSearchState:e})}},{key:"render",value:function(){var e=this,a=["",r.a.createElement(S,{changePage:this.changePage}),r.a.createElement(b,{handleNewSearch:this.handleNewSearch,handleSearchInputChange:this.handleSearchInputChange,cardSearchState:this.state.cardSearchState,toggleSearchModal:this.toggleSearchModal,removeModal:this.removeModal}),r.a.createElement(x,{planechaseState:this.state.planechaseState,addToPlanechaseDeck:this.addToPlanechaseDeck,addAll:this.addAll,removeAll:this.removeAll,removeCardFromGameDeck:this.removeCardFromGameDeck,startGame:this.startGame,nextCard:this.nextCard,endGame:this.endGame}),r.a.createElement(D,{battleCounterState:this.state.battleCounterState,addPlayer:this.addPlayer,removeAllPlayers:this.removeAllPlayers,addCounter:this.addCounter,plusOne:this.plusOne,minusOne:this.minusOne}),r.a.createElement(B,{setSearchState:this.state.setSearchState,selectSet:this.selectSet,setSearch:this.setSearch,toggleSetSearchModal:this.toggleSetSearchModal,removeSetModal:this.removeSetModal,returnToSets:this.returnToSets})];return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement(h.a,{onClick:function(a){return e.changePage(1)}})),this.findAllPlaneCards(),this.findAllSets(),r.a.createElement(Je.ToastContainer,null),a[this.state.pageView])}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(Ye,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[64,2,1]]]);
//# sourceMappingURL=main.0723c539.chunk.js.map