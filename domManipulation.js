

const buttonOne = document.getElementById('1');

buttonOne.addEventListener('click', function (e){
  contentTwo.appendChild(alterTwo);
  buttonOne.classList.add('buttonChange')
});

const buttonTwo = document.getElementById('2');

buttonTwo.addEventListener('click', function (e){
  title.classList.toggle('buttonChange');
})

const buttonThree = document.getElementById('3');

buttonThree.addEventListener('click', function (e){
  buttonThree.classList.add('buttonChange')
});

const title = document.getElementById('title')


const alterTwo = document.createElement('p');

alterTwo.textContent = "adding a new line!"

// const container = document.querySelector('#container');

// const content = document.createElement('div');
// content.classList.add('content');
// content.textContent = 'This is the glorious text-content';

const containerTwo = document.querySelector('#containerTwo');

const contentTwo = document.createElement('p');
contentTwo.classList.add('content');
contentTwo.textContent = 'Hey I\'\m Red!';
contentTwo.style.cssText = 'color: red;'

const containerThree = document.querySelector('#containerThree');

const contentThree = document.createElement('h3');
// contentThree.classList.add('content');
contentThree.textContent = "I am a blue h3";
// contentThree.style.cssText = 'color: blue;'



const lineOneChange = document.querySelector('.lineOneChange');
const buttonFour = document.getElementById('4');

buttonFour.addEventListener('click', function(){
  const newLi = document.createElement('marquee');
  const liContent = document.createTextNode(lineOneChange.value);

  newLi.appendChild(liContent);

  title.appendChild(newLi);

});



let sumField = document.querySelector('.sumField')

 
let score = 0;

const scoreLine = document.querySelector('.scoreLine');

scoreLine.textContent = "Your score is: " + score;

const sumButton = document.querySelector('.sumButton');

sumButton.addEventListener('click', function(){
  score += sumField.valueAsNumber;
  scoreLine.textContent = "Your score is: " + score;
});

const multiplicationButton = document.getElementById('multiplicationButton');
const multiplicationField = document.getElementById('multiplicationField');

multiplicationButton.addEventListener('click', function () {
  score = score * multiplicationField.valueAsNumber;
  scoreLine.textContent = "Your score is: " + score;
 });

function divideThis(){
  score = score / multiplicationField.valueAsNumber;
  scoreLine.textContent = "Your score is: " + score;
}


// const hOneTest = document.createElement('h1');
// hOneTest.textContent = "I'm a div";

// const pTest = document.createElement('li');
// pTest.textContent = "ME TOO!";


// const containerFour = document.querySelector('#containerThree');

// const contentFour = document.createElement('div');
// contentFour.textContent = "This is a pink box with a black border";
// contentFour.style.cssText = "background: pink; border-style: solid; border-color: black; font-size: 40px;"
// contentFour.appendChild(hOneTest);
// contentFour.appendChild(pTest);



// btn.addEventListener('click', function (e) {
//     e.target.style.cssText= 'color: blue; font-Size: 40px; background: yellow;';
//     content.appendChild(pTest);
//     contentTwo.appendChild(pTest);
//   });


// container.appendChild(content);

containerTwo.appendChild(contentTwo);

containerThree.appendChild(contentThree);

// containerFour.appendChild(contentFour);


// // buttons is a node list. It looks and acts much like an array.
// const buttons = document.querySelectorAll('button');

// // we use the .forEach method to iterate through each button
// buttons.forEach((button) => {

//   // and for each one we add a 'click' listener
//   button.addEventListener('click', (e) => {
//     contentFour.appendChild(3);
//   });
// });



// Tasks are written below
// a <p> with red text that says “Hey I’m red!”
// an <h3> with blue text that says “I’m a blue h3!”
// a <div> with a black border and pink background color with the following elements inside of it:
//     another <h1> that says “I’m in a div”
//     a <p> that says “ME TOO!”
//     Hint for this one: after creating the div with createElement, append the <h1> and <p> to it before adding it to the container.

