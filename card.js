import './card.css'


const card = document.getElementById('card1-1');
card.onclick = function discoverCard() {
  let className = document.getElementById('card1-1').className
  if (className != 'discovered') {
    document.getElementById('card1-1').className = 'discovered'
    document.getElementById('card1-1').getElementsByClassName('background')[0].remove()
    document.getElementById('card1-1').getElementsByClassName('board-text')[0].remove()
  }
}
