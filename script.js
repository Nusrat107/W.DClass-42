let pElement = document.createElement('p'); //<p></p>
pElement.innerHTML = "This is a prepend tag!" //<p>This is a p tag!</p>

document.body.prepend(pElement);


let body = document.querySelector('#body');
let btag = document.querySelector('#btag');

let hElement = document.createElement('h3');
hElement.innerHTML = "This is html tag from javascript file";

body.insertBefore(hElement, btag);



let testDiv = document.querySelector('#testDiv');
let btag2 = document.querySelector('#btag-2');

let sElement = document.createElement('s');
sElement.innerHTML = "This is strong tag from javascript file!";

testDiv.insertBefore(sElement, btag2);

let bElement = document.createElement('a'); //<b></b>
bElement.innerHTML = "This is a appendchild tag!" //<b>This is a p tag!</b>

document.body.appendChild(bElement);