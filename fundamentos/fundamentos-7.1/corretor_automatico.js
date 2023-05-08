//Esses exercícios não tão fazendo mt sentido pra mim... To só #TrustTheProcess.

const corretor = (corrAnswArr, givenAnswArr, checkAnswersFunc) => {
  let score = 0;
  givenAnswArr.forEach((givenAnswer, index) => {
    score += checkAnswersFunc(corrAnswArr[index], givenAnswer);
  })
  return score;
}

const checkAnswers = (correctAnswer, givenAnswer) => {
  if (givenAnswer === correctAnswer) return 1;
  if (givenAnswer === 'N.A') return 0;
  if (givenAnswer !== correctAnswer) return -0.5;
}

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

console.log(corretor(RIGHT_ANSWERS, STUDENT_ANSWERS, checkAnswers));