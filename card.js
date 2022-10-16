import './card.css'


const card = document.getElementById('card1-1');
card.onclick = function discoverCard() {
  let className = document.getElementById('card1-1').className
  if (className != 'discovered') {
    document.getElementById('card1-1').className = 'discovered'
  }
}
