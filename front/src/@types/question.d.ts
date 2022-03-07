declare interface Question {
  question: string;
  rightAnswer: string;
  wrongAnswers: [string, string, string];
}
declare interface LocationImg {
  img: string;
  alt: string;
  hint?: string;
}

declare interface QuestionsContext {
  questionArr: (Question | LocationImg)[];
  setQuestionArr: React.Dispatch<
    React.SetStateAction<(Question | LocationImg)[]>
  >;
}
