import {lineTwo} from "./domElements.js";
import { count } from "./changelineone.js"

const changeLineTwo = () => {
    lineTwo.textContent = 'This is line Two'
}

const buttonPressTwo = () => {
    lineTwo.textContent = `${count} X 2 = ${count * 2}`
}

export { changeLineTwo, buttonPressTwo }