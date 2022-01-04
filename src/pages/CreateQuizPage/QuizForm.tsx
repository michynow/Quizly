import { TextInput } from "../../components/shared/TextInput";
import React, { useEffect, useState, useRef } from "react";
import { QuestionWrapper, QuizFormWrapper } from "./QuizForm.style";
import { InputLabel } from "../../components/shared/InputLabel";
import { ButtonSubmit } from "../../components/shared/ButtonSubmit";
import { Textarea } from "../../components/shared/Textarea";
import Answers from "../../components/shared/Answers";
import DeleteQuestionBtn from "../../components/shared/DeleteQuestionHandler";
type quizState = {
  id: number;
  question: string;
  answers: string[];
  correctAnswer: string;
};
interface State {
  questionNumber: number;
  quizTitle: string;
  quizImage: string;
  questionList: quizState[];
}
const initialState: State = {
  questionNumber: 5,
  quizTitle: "",
  quizImage: "",
  questionList: [
    {
      id: 1,
      question: "",
      answers: [],
      correctAnswer: "",
    },
  ],
};
const populateInitialQuestions = (state: State) => {
  for (
    let i = state.questionList.length;
    i < state.questionNumber;
    i++
  ) {
    state.questionList.push({
      id: i + 1,
      question: "",
      answers: [],
      correctAnswer: "",
    });
  }
};
export default function QuizForm(): JSX.Element {
  const [quizFormState, setQuizFormState] =
    useState<State>(initialState);
  const questionRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (
      quizFormState.questionNumber !== initialState.questionNumber
    ) {
      const parentDiv = document.querySelector(
        `textarea[name="question-${quizFormState.questionNumber}"]`
      )?.parentElement;
      parentDiv?.setAttribute("tabindex", "-1");
      parentDiv?.focus();
    }
  }, [quizFormState.questionNumber]);
  initialState === quizFormState &&
    populateInitialQuestions(initialState);
  const handleQuestionAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    const copiedState = quizFormState;
    copiedState.questionNumber++;
    populateInitialQuestions(copiedState);
    setQuizFormState({ ...copiedState });
  };
  const handleQuestionRemove = (e: React.MouseEvent) => {
    e.preventDefault();
    const targetNumber: number = parseInt(
      questionRef?.current?.getAttribute("data-number") as string
    );
    const copiedState: State = quizFormState;
    copiedState.questionList.splice(
      copiedState.questionList[targetNumber - 1] as any,
      1
    );
    copiedState.questionNumber--;
    for (let i = 0; i < copiedState.questionList.length; i++) {
      copiedState.questionList[i].id = i + 1;
    }
    setQuizFormState({ ...copiedState });
  };
  return (
    <QuizFormWrapper action="/" method="POST" autoComplete="off">
      <InputLabel htmlFor="quiz-title">
        First, start off with typing below a title of your new quiz.
      </InputLabel>
      <TextInput
        background="white"
        placeholder="Title of the quiz"
        name="quiz-title"
        id="quiz-title"
      />
      {quizFormState.questionList.map(
        ({ question, id, answers, correctAnswer }, index) => {
          return (
            <QuestionWrapper
              key={(Math.random() * 214274).toFixed(0)}
              ref={questionRef}
              data-number={id}
            >
              {index >= 5 && (
                <DeleteQuestionBtn
                  handleQuestionRemove={handleQuestionRemove}
                  title={`Delete question number ${id}`}
                />
              )}
              <InputLabel htmlFor={`question-${id}`}>
                Question {id}.{" "}
              </InputLabel>
              <Textarea id={`${id}`} name={`question-${id}`} />
              <Answers />
            </QuestionWrapper>
          );
        }
      )}
      <ButtonSubmit onClick={handleQuestionAdd}>
        Add new question
      </ButtonSubmit>
    </QuizFormWrapper>
  );
}
