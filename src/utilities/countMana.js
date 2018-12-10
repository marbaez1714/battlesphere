export function splitMana(mana) {
    let manaCostArray = mana
        .split("{")
        .map(element => "{" + element)
        .filter(element => 1 < element.length);
    return manaCostArray
}
