let Options = [
  {
    name: 'Rock',
    weakness: 'Paper'
  },
  {
    name: 'Paper',
    weakness: 'Scissors'
  },
  {
    name: 'Scissors',
    weakness: 'Rock'
  }]


function Run(name) {
  let character = Options.find(character => character.name === name)
  document.getElementById("player-response").innerText = `You Chose ${character.name}!`
  let Opponent = OpponentTurn()
  document.getElementById("computer-response").innerText = `Your Opponent Chose ${Opponent.name}!`
  if (Opponent.name == character.weakness) {
    window.alert('You Lost')
  } else if (character.name == Opponent.weakness) {
    window.alert('You Won')
  } else if (character.name == Opponent.name) {
    window.alert('It Was A Draw')
  } else {
    window.alert('Something Went Wrong')
  }
}

function OpponentTurn() {
  let Rando = Math.floor(Math.random() * Options.length)
  let OpponentChoice = Options[Rando]
  return OpponentChoice
}