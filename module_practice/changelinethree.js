import { lineThree } from "./domElements.js";
import { personHolder } from "./objectMaker.js";

const changeLineThree = () => {
    lineThree.textContent = 'This is line Three'
}

const nameHolder = () => {
    lineThree.textContent = ''
    for (let i = 0; i < personHolder.length; i++) {
        lineThree.textContent += personHolder[i].name + ' '
    }
}

export { changeLineThree, nameHolder }