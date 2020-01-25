import { lineOne } from "./domElements.js";

let count = 0;

const changeLineOne = function testOne() {
    lineOne.textContent = 'This is line one'
}

const buttonPress = () => {
    count++
    lineOne.textContent = `The button has been pressed ${count} times`
}

export { changeLineOne, buttonPress, count }