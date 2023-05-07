//Esses exercícios não tão fazendo mt sentido pra mim... To só #TrustTheProcess.

const corretor = (corrAnswArr, givenAnswArr, checkAnswersFunc) => {
  return checkAnswersFunc(corrAnswArr, givenAnswArr);
}

const checkAnswers = (correctAnswers, givenAnswers) => {
  let score = 0;
  correctAnswers.forEach((item, index) => {
    if (item === givenAnswers[index]) score += 1;
  })
  return score;
}

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

console.log(corretor(RIGHT_ANSWERS, STUDENT_ANSWERS, checkAnswers));