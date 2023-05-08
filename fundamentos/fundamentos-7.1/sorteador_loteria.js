const checkLottery = (bet, checkFunc) => {
  const result = Math.ceil(Math.random() * 5);
  return checkFunc(bet, result) ? 'Parabéns, você ganhou' : 'Tente novamente';
};

function checkBet(bet, result) {
  return bet === result ? true : false;
}


for (let i = 0; i < 50; i++) {
  console.log(checkLottery(1, checkBet));
}