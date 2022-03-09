const questionTypeGuard = (question: any): question is Question => {
  if (
    typeof question.question === 'string' &&
    typeof question.rightAnswer === 'string' &&
    typeof question.wrongAnswers === 'object' &&
    question.wrongAnswers.length === 3
  ) {
    return true;
  }
  return false;
};

export default questionTypeGuard;
