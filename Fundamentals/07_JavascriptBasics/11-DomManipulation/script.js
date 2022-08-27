
const container = document.querySelector('.container');

const contentP = document.createElement('p');
contentP.textContent = "I’m a red p!";
contentP.setAttribute('style', 'color: red');
container.appendChild(contentP);

const contentH3 = document.createElement('h3');
contentH3.textContent = "I’m a blue h3!";
contentH3.setAttribute('style', 'color: blue');
container.appendChild(contentH3);

// DIV //
const contentDiv = document.createElement('div');
contentDiv.setAttribute('style', 'background: pink; border: 3px solid black; padding: 0px 15px');

const contentH1 = document.createElement('h1');
contentH1.textContent = "I’m in a div";
contentDiv.appendChild(contentH1);
const contentP2 = document.createElement('p');
contentP2.textContent = "Me too!";
contentDiv.appendChild(contentP2);


container.appendChild(contentDiv);

// Button

const btn = document.querySelector('#btn');

btn.addEventListener('click', function (e) {
    e.target.style.background = 'blue';
  });

  