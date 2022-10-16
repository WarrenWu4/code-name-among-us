import './style.css'

let input = document.getElementById('username');
input.addEventListener('keypress', function(event) {
  if (event.key === 'Enter') {
    document.getElementById('overlay').style.display="none";
    document.getElementById('overlaybox').style.display="none";
    event.preventDefault();
  }
});


const p1crew = document.getElementById('player1crewmate');
p1crew.onclick=function addCrewmate() {
  const addperson = document.createElement('li');
  addperson.textContent = document.getElementById('username').value;
  const crew = document.getElementById('addedp1');
  crew.appendChild(addperson);
  const p1crew = document.getElementById('player1crewmate');
  p1crew.remove();
  const p1cap = document.getElementById('player1captain');
  p1cap.remove();
  const p2crew = document.getElementById('player2crewmate');
  p2crew.remove();
  const p2cap = document.getElementById('player2captain');
  p2cap.remove();
}

const p1cap = document.getElementById('player1captain');
p1cap.onclick=function addCaptain() {
  const addperson = document.createElement('li');
  addperson.textContent=document.getElementById('username').value;
  const crew = document.getElementById('addedp1c');
  crew.appendChild(addperson);
  const p1crew = document.getElementById('player1crewmate');
  p1crew.remove();
  const p1cap = document.getElementById('player1captain');
  p1cap.remove();
  const p2crew = document.getElementById('player2crewmate');
  p2crew.remove();
  const p2cap = document.getElementById('player2captain');
  p2cap.remove();/*
  document.querySelector('#clues').innerHTML = `
    <form>
      <h1>Enter a word followed by the number of words that apply to it! (Ex: blue 2)</h1>
      <input type="text" id="textClue">
    </form>
  `
  let textClue = document.getElementById('textClue');
  textClue.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
      document.getElementById('overlay').style.display="none";
      let fs = require('fs');
      fs.writeFile("data.txt", document.getElementById('textClue').value, function (err) {
        if (err) {
          return console.error(err);
        }
      });
      event.preventDefault();
    }
  });*/
}

const p2crew = document.getElementById('player2crewmate');
p2crew.onclick=function addCrewmate() {
  const addperson = document.createElement('li');
  addperson.textContent = document.getElementById('username').value;
  const crew = document.getElementById('addedp2');
  crew.appendChild(addperson);
  const p1crew = document.getElementById('player1crewmate');
  p1crew.remove();
  const p1cap = document.getElementById('player1captain');
  p1cap.remove();
  const p2crew = document.getElementById('player2crewmate');
  p2crew.remove();
  const p2cap = document.getElementById('player2captain');
  p2cap.remove();
}

const p2cap = document.getElementById('player2captain');
p2cap.onclick=function addCaptain() {
  const addperson = document.createElement('li');
  addperson.textContent=document.getElementById('username').value;
  const crew = document.getElementById('addedp2c');
  crew.appendChild(addperson);
  const p1crew = document.getElementById('player1crewmate');
  p1crew.remove();
  const p1cap = document.getElementById('player1captain');
  p1cap.remove();
  const p2crew = document.getElementById('player2crewmate');
  p2crew.remove();
  const p2cap = document.getElementById('player2captain');
  p2cap.remove();
}
