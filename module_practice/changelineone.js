import { lineOne } from "./domElements";

const changeLineOne = function testOne() {
    lineOne.textContent = 'Did this Export and import work?'
}

export { changeLineOne }