const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content';

const containerTwo = document.querySelector('#containerTwo');

const contentTwo = document.createElement('p');
contentTwo.classList.add('content');
contentTwo.textContent = 'Hey I\'\m Red!';
contentTwo.style.cssText = 'color: red;'

const containerThree = document.querySelector('#containerThree');

const contentThree = document.createElement('h3');
contentThree.classList.add('content');
contentThree.textContent = "I am a blue h3";

// Research what .add('content') is doing in these examples





container.appendChild(content);

containerTwo.appendChild(contentTwo);

containerThree.appendChild(contentThree);



// Tasks are written below
// a <p> with red text that says “Hey I’m red!”
// an <h3> with blue text that says “I’m a blue h3!”
// a <div> with a black border and pink background color with the following elements inside of it:
//     another <h1> that says “I’m in a div”
//     a <p> that says “ME TOO!”
//     Hint for this one: after creating the div with createElement, append the <h1> and <p> to it before adding it to the container.

