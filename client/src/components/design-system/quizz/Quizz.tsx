import { useEffect, useReducer, useState } from "react";
import { questionData } from "../../../data/quizzData";

import type { Question } from "../../../data/quizzData";

const answerSuccess = {
  color: "green",
  fontWeight: "bold",
};

const answerWrong = {
  color: "red",
  fontWeight: "bold",
};
const defaultColor = {
  color: "black",
};

interface State {
  questions: Question[];
  currentStep: number;
  totalQuestions: number;
  answeredQuestions: Answer[];
}

interface Answer {
  questionId: number;
  answerId: number;
  isCorrect: boolean;
}

const initialState = {
  questions: [],
  currentStep: 0,
  totalQuestions: 0,
  answeredQuestions: [],
};

type Action =
  | { type: "loadQuestion"; questions: Question[] }
  | { type: "selectanswer"; questionId: number; answerId: number }
  | { type: "moveNext" };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "loadQuestion": {
      return { ...state, questions: action.questions };
    }

    case "moveNext": {
      const nextStep = state.currentStep + 1;
      const updatedState = { ...state, currentStep: nextStep };
      return updatedState;
    }
    case "selectanswer": {
      const questId = action.questionId;
      const currentQuestion = state.questions.find((quest) => quest.id === questId);
      const ansId = action.answerId + 1;
      console.log("questId", questId, "ansId", ansId);
      console.log(currentQuestion);

      const correctConser = currentQuestion?.correctOption === ansId;

      const isAnsweringSameQuestion = state.answeredQuestions.some((item) => item.questionId === questId);

      const answeredQuest = {
        questionId: questId,
        answerId: ansId,
        isCorrect: correctConser ? true : false,
      };

      console.log("🟢", answeredQuest);

      return {
        ...state,
        answeredQuestions: !isAnsweringSameQuestion
          ? [...state.answeredQuestions, answeredQuest]
          : state.answeredQuestions,
      };
    }

    default:
      return state;
  }
}

export default function Quizz() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const totalQuestions = 0;
  console.log(state);

  console.log(state.questions[state.currentStep]);

  useEffect(function () {
    async function getQUestions() {
      const questionsData: Question[] = await questionData();

      dispatch({ type: "loadQuestion", questions: questionsData });
    }

    getQUestions();
  }, []);

  return (
    <div>
      <h3>{state.questions[state.currentStep]?.question}</h3>
      {state.questions[state.currentStep]?.options.map((option, index) => (
        <h5
          style={
            state.answeredQuestions.find((answer) => answer.questionId === state.questions[state.currentStep]?.id)
              ?.answerId ===
            index + 1
              ? state.answeredQuestions.find((answer) => answer.questionId === state.questions[state.currentStep]?.id)
                  ?.isCorrect
                ? answerSuccess
                : answerWrong
              : defaultColor
          }
          key={index}
          onClick={() =>
            dispatch({ type: "selectanswer", questionId: state.questions[state.currentStep].id, answerId: index })
          }
        >
          {" "}
          {option}{" "}
        </h5>
      ))}

      <button onClick={() => dispatch({ type: "moveNext" })}>Next</button>
    </div>
  );
}
