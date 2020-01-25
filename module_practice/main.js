
import { btnTest, nickName, name } from "./domElements.js";
import { changeLineOne, buttonPress } from "./changelineone.js";
import { changeLineTwo, buttonPressTwo } from "./changelinetwo.js";
import { changeLineThree, nameHolder } from "./changelinethree.js";
import { changeLineFour } from "./changelinefour.js";
import { personFactory, sayPhrase, personHolder } from "./objectMaker.js";

changeLineOne();
changeLineTwo();
changeLineThree();
changeLineFour();

btnTest.addEventListener('click', function (){
    buttonPress();
    buttonPressTwo();
    const testPerson = personFactory(name.value, nickName.value);
    sayPhrase(testPerson)
    nameHolder();
});


