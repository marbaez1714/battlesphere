import React from 'react';
import xMana from "../images/mana symbols/x.svg";
import yMana from "../images/mana symbols/y.svg";
import zMana from "../images/mana symbols/z.svg";
import whiteOrBlue from "../images/mana symbols/wu.svg";
import whiteOrBlack from "../images/mana symbols/wb.svg";
import blackOrRed from "../images/mana symbols/br.svg";
import blackOrGreen from "../images/mana symbols/bg.svg";
import blueOrBlack from "../images/mana symbols/ub.svg";
import blueOrRed from "../images/mana symbols/ur.svg";
import redOrGreen from "../images/mana symbols/rg.svg";
import redOrWhite from "../images/mana symbols/rw.svg";
import greenOrWhite from "../images/mana symbols/gw.svg";
import greenOrBlue from "../images/mana symbols/gu.svg";
import twoOrWhite from "../images/mana symbols/2w.svg";
import twoOrBlue from "../images/mana symbols/2u.svg";
import twoOrBlack from "../images/mana symbols/2b.svg";
import twoOrRed from "../images/mana symbols/2r.svg";
import twoOrGreen from "../images/mana symbols/2g.svg";
import colorOrLife from "../images/mana symbols/cp.svg";
import whiteOrLife from "../images/mana symbols/wp.svg";
import blueOrLife from "../images/mana symbols/up.svg";
import blackOrLife from "../images/mana symbols/bp.svg";
import redOrLife from "../images/mana symbols/rp.svg";
import greenOrLife from "../images/mana symbols/gp.svg";
import whiteMana from "../images/mana symbols/w.svg";
import blueMana from "../images/mana symbols/u.svg";
import blackMana from "../images/mana symbols/b.svg";
import redMana from "../images/mana symbols/r.svg";
import greenMana from "../images/mana symbols/g.svg";
import snowMana from "../images/mana symbols/s.svg";



export default function converText(manaText) {
    let manaCostArray = manaText
        .split("{")
        .map(element => "{" + element)
        .filter(element => 1 < element.length);
    let symbolCost = manaCostArray.map((mana, idx) => findSymbol(mana, idx))

    return symbolCost

}

function removeBrackets(text) {
    var mana = text.split("{")[1].split("}")[0];
    return mana;
}

function findSymbol(mana, idx) {
    switch (mana) {

        case "{X}":
            return (<img key={idx} className="manaSymbol" src={xMana} alt="" />)
        case "{Y}":
            return (<img key={idx} className="manaSymbol" src={yMana} alt="" />)
        case "{Z}":
            return (<img key={idx} className="manaSymbol" src={zMana} alt="" />)
        case "{W/U}":
            return (<img key={idx} className="manaSymbol" src={whiteOrBlue} alt="" />)
        case "{W/B}":
            return (<img key={idx} className="manaSymbol" src={whiteOrBlack} alt="" />)
        case "{B/R}":
            return (<img key={idx} className="manaSymbol" src={blackOrRed} alt="" />)
        case "{B/G}":
            return (<img key={idx} className="manaSymbol" src={blackOrGreen} alt="" />)
        case "{U/B}":
            return (<img key={idx} className="manaSymbol" src={blueOrBlack} alt="" />)
        case "{U/R}":
            return (<img key={idx} className="manaSymbol" src={blueOrRed} alt="" />)
        case "{R/G}":
            return (<img key={idx} className="manaSymbol" src={redOrGreen} alt="" />)
        case "{R/W}":
            return (<img key={idx} className="manaSymbol" src={redOrWhite} alt="" />)
        case "{G/W}":
            return (<img key={idx} className="manaSymbol" src={greenOrWhite} alt="" />)
        case "{G/U}":
            return (<img key={idx} className="manaSymbol" src={greenOrBlue} alt="" />)
        case "{2/W}":
            return (<img key={idx} className="manaSymbol" src={twoOrWhite} alt="" />)
        case "{2/U}":
            return (<img key={idx} className="manaSymbol" src={twoOrBlue} alt="" />)
        case "{2/B}":
            return (<img key={idx} className="manaSymbol" src={twoOrBlack} alt="" />)
        case "{2/R}":
            return (<img key={idx} className="manaSymbol" src={twoOrRed} alt="" />)
        case "{2/G}":
            return (<img key={idx} className="manaSymbol" src={twoOrGreen} alt="" />)
        case "{P}":
            return (<img key={idx} className="manaSymbol" src={colorOrLife} alt="" />)
        case "{W/P}":
            return (<img key={idx} className="manaSymbol" src={whiteOrLife} alt="" />)
        case "{U/P}":
            return (<img key={idx} className="manaSymbol" src={blueOrLife} alt="" />)
        case "{B/P}":
            return (<img key={idx} className="manaSymbol" src={blackOrLife} alt="" />)
        case "{R/P}":
            return (<img key={idx} className="manaSymbol" src={redOrLife} alt="" />)
        case "{G/P}":
            return (<img key={idx} className="manaSymbol" src={greenOrLife} alt="" />)
        case "{W}":
            return (<img key={idx} className="manaSymbol" src={whiteMana} alt="" />)
        case "{U}":
            return (<img key={idx} className="manaSymbol" src={blueMana} alt="" />)
        case "{B}":
            return (<img key={idx} className="manaSymbol" src={blackMana} alt="" />)
        case "{R}":
            return (<img key={idx} className="manaSymbol" src={redMana} alt="" />)
        case "{G}":
            return (<img key={idx} className="manaSymbol" src={greenMana} alt="" />)
        case "{S}":
            return (<img key={idx} className="manaSymbol" src={snowMana} alt="" />)
        default:
            return (<span key={idx} className="anyManaSymbol">{removeBrackets(mana)}</span>)

    }
}