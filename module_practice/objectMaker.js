import { lineFour } from "./domElements.js";



const personFactory = (name, nickName) => {
    const phrase = () => {lineFour.textContent =`My name is ${name}, but you can call me ${nickName}`}
    return{name, nickName, phrase};
};

const sayPhrase = (obj) => {
    obj.phrase();
    personHolder.push(obj)
    console.log(personHolder)
}

const personHolder = [];

export { personFactory, sayPhrase, personHolder }
