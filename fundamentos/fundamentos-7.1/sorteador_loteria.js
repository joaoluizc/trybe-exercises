const checkLottery = (bet, checkFunc) => {
  return checkFunc(bet) ? 'Parabéns, você ganhou' : 'Tente novamente';
};

function checkBet(bet) {
  const result = Math.ceil(Math.random() * 5);
  return bet === result ? true : false;
}


for (let i = 0; i < 50; i++) {
  console.log(checkLottery(1, checkBet));
}