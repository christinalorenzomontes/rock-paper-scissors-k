const rock = 0;
const paper = 1;
const scissors = 2;

const tie = 0;
const win = 1;
const lost = 2;

let isPlaying = false;

const rockBtn = document.getElementById('rock');
const paperBtn = document.getElementById('paper');
const scissorsBtn = document.getElementById('scissors');
const resultText = document.getElementById("start-text");
const userImg = document.getElementById("user-img");
const machineImg = document.getElementById("machine-img");

rockBtn.addEventListener( 'click', () => { play(rock) });
paperBtn.addEventListener( 'click', () => { play(paper) });
scissorsBtn.addEventListener( 'click', () => { play(scissors ) });

const play = ( userOption ) => {
  if(isPlaying) return;

  isPlaying = true;

  userImg.src = "img/" + userOption + ".svg";

  resultText.innerHTML = "Eligiendo";

  const interval = setInterval(function(){
      const machineOption = calcMachineOption();
      machineImg.src = "img/" + machineOption + ".svg";
  }, 200);

  setTimeout(function () {

    clearInterval(interval);

    const machineOption = calcMachineOption();
    const result = calcResult(userOption, machineOption);

    machineImg.src = "img/" + machineOption + ".svg";

    switch (result) {
      case tie:
        resultText.innerHTML = "Empate";
        break;
      case win:
        resultText.innerHTML = "Ganaste";
        break;
      case lost:
        resultText.innerHTML = "Perdiste";
        break;
    }
    isPlaying = false;
  }, 2000);
}

const  calcMachineOption = () => {
  const number = Math.floor(Math.random() * 3);
  switch (number) {
    case 0:
      return rock;
    case 1:
      return paper;
    case 2:
      return scissors;
  }
}

const calcResult =(userOption, machineOption) => {
  if (userOption === machineOption) {
    return tie;

  } else if (userOption === rock) {
    if (machineOption === paper) return lost;
    if (machineOption === scissors) return win;

  } else if (userOption === paper) {
    if (machineOption === scissors) return lost;
    if (machineOption === rock) return win;

  } else if (userOption === scissors) {
    if (machineOption === rock) return lost;
    if (machineOption === paper) return win;
  }
}