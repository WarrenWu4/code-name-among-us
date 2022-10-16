import './style.css';


let input = document.getElementById('username');
input.addEventListener('keypress', function(event) {
  if (event.key === 'Enter') {
    localStorage.setItem('user', document.getElementById('username').value);
    console.log(localStorage.getItem('user'), localStorage.getItem('role'));
    document.getElementById('overlay').style.display="none";
    document.getElementById('overlaybox').style.display="none";
    event.preventDefault();
    loadWords();
  }
  if (localStorage.getItem('user') != null && sessionStorage.getItem('role') != null) {
    const addperson = document.createElement('li');
    addperson.textContent = localStorage.getItem('user');
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
    const p1crew = document.getElementById('player1crewmate');
    p1crew.remove();
    const p1cap = document.getElementById('player1captain');
    p1cap.remove();
    const p2crew = document.getElementById('player2crewmate');
    p2crew.remove();
    const p2cap = document.getElementById('player2captain');
    p2cap.remove();
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
  console.log(localStorage.getItem('clueValue'));
  document.getElementById('showClue').innerHTML = localStorage.getItem('clueValue');
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
      localStorage.setItem('clueValue', document.getElementById('textClue').value);
      console.log(localStorage.getItem('clueValue'));
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
  console.log(localStorage.getItem('clueValue'));
  document.getElementById('showClue').innerHTML = localStorage.getItem('clueValue');
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
      localStorage.setItem('clueValue', document.getElementById('textClue').value);
      console.log(localStorage.getItem('clueValue'));
      document.getElementById('overlay').style.display="none";
      event.preventDefault();
    }
  });
}

function loadWords() {
  const listofwords = [
      "Acne", "Acre", "Addendum", "Advertise", "Aircraft", "Aisle", "Alligator", "Alphabetize", "America", "Ankle", "Apathy", "Applause", "Applesauc", "Application", "Archaeologist", "Aristocrat", "Arm", "Armada", "Asleep", "Astronaut", "Athlete", "Atlantis", "Aunt", "Avocado", "Baby-Sitter", "Backbone", "Bag", "Baguette", "Bald", "Balloon", "Banana", "Banister", "Baseball", "Baseboards", "Basketball", "Bat", "Battery", "Beach", "Beanstalk", "Bedbug", "Beer", "Beethoven", "Belt", "Bib", "Bicycle", "Big", "Bike", "Billboard", "Bird", "Birthday", "Bite", "Blacksmith", "Blanket", "Bleach", "Blimp", "Blossom", "Blueprint", "Blunt", "Blur", "Boa", "Boat", "Bob", "Bobsled", "Body", "Bomb", "Bonnet", "Book", "Booth", "Bowtie", "Box", "Boy", "Brainstorm", "Brand", "Brave", "Bride", "Bridge", "Broccoli", "Broken", "Broom", "Bruise", "Brunette", "Bubble", "Buddy", "Buffalo", "Bulb", "Bunny", "Bus", "Buy", "Cabin", "Cafeteria", "Cake", "Calculator", "Campsite", "Can", "Canada", "Candle", "Candy", "Cape", "Capitalism", "Car", "Cardboard", "Cartography", "Cat", "Cd", "Ceiling", "Cell", "Century", "Chair", "Chalk", "Champion", "Charger", "Cheerleader", "Chef", "Chess", "Chew", "Chicken", "Chime", "China", "Chocolate", "Church", "Circus", "Clay", "Cliff", "Cloak", "Clockwork", "Clown", "Clue", "Coach", "Coal", "Coaster", "Cog", "Cold", "College", "Comfort", "Computer", "Cone", "Constrictor", "Continuum", "Conversation", "Cook", "Coop", "Cord", "Corduroy", "Cot", "Cough", "Cow", "Cowboy", "Crayon", "Cream", "Crisp", "Criticize", "Crow", "Cruise", "Crumb", "Crust", "Cuff", "Curtain", "Cuticle", "Czar", "Dad", "Dart", "Dawn", "Day", "Deep", "Defect", "Dent", "Dentist", "Desk", "Dictionary", "Dimple", "Dirty", "Dismantle", "Ditch", "Diver", "Doctor", "Dog", "Doghouse", "Doll", "Dominoes", "Door", "Dot", "Drain", "Draw", "Dream", "Dress", "Drink", "Drip", "Drums", "Dryer", "Duck", "Dump", "Dunk", "Dust", "Ear", "Eat", "Ebony", "Elbow", "Electricity", "Elephant", "Elevator", "Elf", "Elm", "Engine", "England", "Ergonomic", "Escalator", "Eureka", "Europe", "Evolution", "Extension", "Eyebrow", "Fan", "Fancy", "Fast", "Feast", "Fence", "Feudalism", "Fiddle", "Figment", "Finger", "Fire", "First", "Fishing", "Fix", "Fizz", "Flagpole", "Flannel", "Flashlight", "Flock", "Flotsam", "Flower", "Flu", "Flush", "Flutter", "Fog", "Foil", "Football", "Forehead", "Forever", "Fortnight", "France", "Freckle", "Freight", "Fringe", "Frog", "Frown", "Gallop", "Game", "Garbage", "Garden", "Gasoline", "Gem", "Ginger", "Gingerbread", "Girl", "Glasses", "Goblin", "Gold", "Goodbye", "Grandpa", "Grape", "Grass", "Gratitude", "Gray", "Green", "Guitar", "Gum", "Gumball", "Hair", "Half", "Handle", "Handwriting", "Hang", "Happy", "Hat", "Hatch", "Headache", "Heart", "Hedge", "Helicopter", "Hem", "Hide", "Hill", "Hockey", "Homework", "Honk", "Hopscotch", "Horse", "Hose", "Hot", "House", "Houseboat", "Hug", "Humidifier", "Hungry", "Hurdle", "Hurt", "Hut", "Ice", "Implode", "Inn", "Inquisition", "Intern", "Internet", "Invitation", "Ironic", "Ivory", "Ivy", "Jade", "Japan", "Jeans", "Jelly", "Jet", "Jig", "Jog", "Journal", "Jump", "Key", "Killer", "Kilogram", "King", "Kitchen", "Kite", "Knee", "Kneel", "Knife", "Knight", "Koala", "Lace", "Ladder", "Ladybug", "Lag", "Landfill", "Lap", "Laugh", "Laundry", "Law", "Lawn", "Lawnmower", "Leak", "Leg", "Letter", "Level", "Lifestyle", "Ligament", "Light", "Lightsaber", "Lime", "Lion", "Lizard", "Log", "Loiterer", "Lollipop", "Loveseat", "Loyalty", "Lunch", "Lunchbox", "Lyrics", "Machine", "Macho", "Mailbox", "Mammoth", "Mark", "Mars", "Mascot", "Mast", "Matchstick", "Mate", "Mattress", "Mess", "Mexico", "Midsummer", "Mine", "Mistake", "Modern", "Mold", "Mom", "Monday", "Money", "Monitor", "Monster", "Mooch", "Moon", "Mop", "Moth", "Motorcycle", "Mountain", "Mouse", "Mower", "Mud", "Music", "Mute", "Nature", "Negotiate", "Neighbor", "Nest", "Neutron", "Niece", "Night", "Nightmare", "Nose", "Oar", "Observatory", "Office", "Oil", "Old", "Olympian", "Opaque", "Opener", "Orbit", "Organ", "Organize", "Outer", "Outside", "Ovation", "Overture", "Pail", "Paint", "Pajamas", "Palace", "Pants", "Paper", "Paper", "Park", "Parody", "Party", "Password", "Pastry", "Pawn", "Pear", "Pen", "Pencil", "Pendulum", "Penis", "Penny", "Pepper", "Personal", "Philosopher", "Phone", "Photograph", "Piano", "Picnic", "Pigpen", "Pillow", "Pilot", "Pinch", "Ping", "Pinwheel", "Pirate", "Plaid", "Plan", "Plank", "Plate", "Platypus", "Playground", "Plow", "Plumber", "Pocket", "Poem", "Point", "Pole", "Pomp", "Pong", "Pool", "Popsicle", "Population", "Portfolio", "Positive", "Post", "Princess", "Procrastinate", "Protestant", "Psychologist", "Publisher", "Punk", "Puppet", "Puppy", "Push", "Puzzle", "Quarantine", "Queen", "Quicksand", "Quiet", "Race", "Radio", "Raft", "Rag", "Rainbow", "Rainwater", "Random", "Ray", "Recycle", "Red", "Regret", "Reimbursement", "Retaliate", "Rib", "Riddle", "Rim", "Rink", "Roller", "Room", "Rose", "Round", "Roundabout", "Rung", "Runt", "Rut", "Sad", "Safe", "Salmon", "Salt", "Sandbox", "Sandcastle", "Sandwich", "Sash", "Satellite", "Scar", "Scared", "School", "Scoundrel", "Scramble", "Scuff", "Seashell", "Season", "Sentence", "Sequins", "Set", "Shaft", "Shallow", "Shampoo", "Shark", "Sheep", "Sheets", "Sheriff", "Shipwreck", "Shirt", "Shoelace", "Short", "Shower", "Shrink", "Sick", "Siesta", "Silhouette", "Singer", "Sip", "Skate", "Skating", "Ski", "Slam", "Sleep", "Sling", "Slow", "Slump", "Smith", "Sneeze", "Snow", "Snuggle", "Song", "Space", "Spare", "Speakers", "Spider", "Spit", "Sponge", "Spool", "Spoon", "Spring", "Sprinkler", "Spy", "Square", "Squint", "Stairs", "Standing", "Star", "State", "Stick", "Stockholder", "Stoplight", "Stout", "Stove", "Stowaway", "Straw", "Stream", "Streamline", "Stripe", "Student", "Sun", "Sunburn", "Sushi", "Swamp", "Swarm", "Sweater", "Swimming", "Swing", "Tachometer", "Talk", "Taxi", "Teacher", "Teapot", "Teenager", "Telephone", "Ten", "Tennis", "Thief", "Think", "Throne", "Through", "Thunder", "Tide", "Tiger", "Time", "Tinting", "Tiptoe", "Tiptop", "Tired", "Tissue", "Toast", "Toilet", "Tool", "Toothbrush", "Tornado", "Tournament", "Tractor", "Train", "Trash", "Treasure", "Tree", "Triangle", "Trip", "Truck", "Tub", "Tuba", "Tutor", "Television", "Twang", "Twig", "Twitterpated", "Type", "Unemployed", "Upgrade", "Vest", "Vision", "Wag", "Water", "Watermelon", "Wax", "Wedding", "Weed", "Welder", "Whatever", "Wheelchair", "Whiplash", "Whisk", "Whistle", "White", "Wig", "Will", "Windmill", "Winter", "Wish", "Wolf", "Wool", "World", "Worm", "Wristwatch", "Yardstick", "Zamboni", "Zen", "Zero", "Zipper", "Zone", "Zoo"
  ]
  
  function getRandomItem(arr) {
      // get random index value
      const randomIndex = Math.floor(Math.random() * arr.length);
  
      // get random item
      const item = arr[randomIndex];
  
      return item;
  }

  
  let words = [
      [],
      [],
      [],
      [],
      []
      ];
  for (let i = 0; i < 5 ; i+=1){
      for (let j = 0; j <5; j+=1){
          words[i].push(getRandomItem(listofwords));
      words[i] = words[i].filter((c, index) => {
      return words[i].indexOf(c) === index;
      while (words[i].length < 5) {
          words[i].push(getRandomItem(listofwords))
          words[i] = words[i].filter((c, index) => {
          return words[i].indexOf(c) === index;
          });
      }
  });
      }
      
  }

  for (let i = 0; i < 5; i++) {
      for(let j = 0; j < 5; j++) {
          console.log(words[i][j], typeof words[i][j]);
          document.getElementById('card' + (i + 1).toString() + '-' + (j + 1).toString()).getElementsByClassName('board-text')[0].innerHTML = words[i][j];
      }
  }
}