const rock = 0;
const paper = 1;
const scissors = 2;

const tie = 0;
const win = 1;
const lost = 2;

const rockBtn = document.getElementById('rock');
const paperBtn = document.getElementById('paper');
const scissorsBtn = document.getElementById('scissors');

rockBtn.addEventListener('click', () => {
  play(rock);
});
paperBtn.addEventListener('click', () => {
  play(paper);
});
scissorsBtn.addEventListener('click', () => {
  play(scissors );
});

const play = ( userOption ) => {
  const machineOpt = Math.floor( Math.random() * 3 );
  
  if ( userOption === machineOpt ){ 
    return tie;
  } else if( userOption === rock ){
    if ( machineOpt === paper ) return lost;
    if ( machineOpt === scissors ) return win;

  } else if( userOption === paper ){
    if ( machineOpt === scissors ) return lost;
    if ( machineOpt === rock ) return win;
  else if ( userOption === scissors ){
    if ( machineOpt === rock ) return lost;
    if ( machineOpt === paper ) return win;
  }
}
}