import './style.css'



let input = document.getElementById('username');
input.addEventListener('keypress', function(event) {
  if (event.key === 'Enter') {
    sessionStorage.setItem('user', document.getElementById('username').value);
    console.log(sessionStorage.getItem('user'), sessionStorage.getItem('role'));
    document.getElementById('overlay').style.display="none";
    document.getElementById('overlaybox').style.display="none";
    event.preventDefault();
  }
  if (sessionStorage.getItem('user') == sessionStorage.getItem('user') && sessionStorage.getItem('role') != null) {
    const addperson = document.createElement('li');
    addperson.textContent = sessionStorage.getItem('user');
    if (sessionStorage.getItem('role') == 'p1crew') {
      let crew = document.getElementById('addedp1');
      crew.appendChild(addperson);
      console.log(sessionStorage.getItem('role'));
    }
    if (sessionStorage.getItem('role') == 'p1cap') {
      let crew = document.getElementById('addedp1c');
      crew.appendChild(addperson);
    }
    if (sessionStorage.getItem('role') == 'p2crew') {
      let crew = document.getElementById('addedp2');
      crew.appendChild(addperson);
      console.log('player 2 crew running successfully');
    }
    if (sessionStorage.getItem('role') == 'p2cap') {
      let crew = document.getElementById('addedp2c');
      crew.appendChild(addperson);
    }
  }
});


const p1crew = document.getElementById('player1crewmate');
p1crew.onclick=function addCrewmate() {
  sessionStorage.setItem('role', 'p1crew');
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
  document.querySelector('#clues').innerHTML = `
    <h1 id="showClue"></h1>
  `
  console.log(sessionStorage.getItem('clueValue'));
  document.getElementById('showClue').innerHTML = sessionStorage.getItem('clueValue');
}

const p1cap = document.getElementById('player1captain');
p1cap.onclick=function addCaptain() {
  sessionStorage.setItem('role', 'p1cap');
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
  p2cap.remove();
  document.querySelector('#clues').innerHTML = `
    <form>
      <h1>Enter a word followed by the number of words that apply to it! (Ex: blue 2)</h1>
      <input type="text" id="textClue">
    </form>
  `
  let textClue = document.getElementById('textClue');
  textClue.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
      sessionStorage.setItem('clueValue', document.getElementById('textClue').value);
      console.log(sessionStorage.getItem('clueValue'));
      document.getElementById('overlay').style.display="none";
      event.preventDefault();
    }
  });
}

const p2crew = document.getElementById('player2crewmate');
p2crew.onclick=function addCrewmate() {
  sessionStorage.setItem('role', 'p2crew');
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
  document.querySelector('#clues').innerHTML = `
    <h1 id="showClue"></h1>
  `
  console.log(sessionStorage.getItem('clueValue'));
  document.getElementById('showClue').innerHTML = sessionStorage.getItem('clueValue');
}

const p2cap = document.getElementById('player2captain');
p2cap.onclick=function addCaptain() {
  sessionStorage.setItem('role', 'p2cap');
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
  document.querySelector('#clues').innerHTML = `
    <form>
      <h1>Enter a word followed by the number of words that apply to it! (Ex: blue 2)</h1>
      <input type="text" id="textClue">
    </form>
  `
  let textClue = document.getElementById('textClue');
  textClue.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
      sessionStorage.setItem('clueValue', document.getElementById('textClue').value);
      console.log(sessionStorage.getItem('clueValue'));
      document.getElementById('overlay').style.display="none";
      event.preventDefault();
    }
  });
}
