export interface Question {
  id: number;
  question: string;
  options: string[];
  correctOption: number;
  points: number;
}

export const questions: Question[] = [
  {
    id: 1,
    question: "What is React?",
    options: [
      "A database",
      "A JavaScript library for building user interfaces",
      "A programming language",
      "A CSS framework",
    ],
    correctOption: 1,
    points: 10,
  },
  {
    id: 2,
    question: "Which Hook is used to manage state in a functional component?",
    options: ["useEffect", "useRef", "useState", "useMemo"],
    correctOption: 2,
    points: 10,
  },
  {
    id: 3,
    question: "What is the purpose of the useReducer Hook?",
    options: [
      "To style React components",
      "To manage state using a reducer function",
      "To fetch data automatically",
      "To create routes",
    ],
    correctOption: 1,
    points: 10,
  },
  {
    id: 4,
    question: "What does JSX stand for?",
    options: ["JavaScript XML", "Java Syntax Extension", "JSON XML", "JavaScript Extra"],
    correctOption: 0,
    points: 10,
  },
  {
    id: 5,
    question: "Why do React lists need a key prop?",
    options: [
      "To apply CSS styles",
      "To identify list items between renders",
      "To make components load faster automatically",
      "To store component state",
    ],
    correctOption: 1,
    points: 10,
  },
  {
    id: 6,
    question: "What does useEffect commonly help you perform?",
    options: [
      "Side effects such as fetching data",
      "TypeScript type checking",
      "CSS animations only",
      "Creating interfaces",
    ],
    correctOption: 0,
    points: 10,
  },
  {
    id: 7,
    question: "What happens when you call a React state setter?",
    options: [
      "The state variable changes immediately in the current render",
      "React schedules an update and renders with the new state",
      "The entire browser reloads",
      "The component is permanently destroyed",
    ],
    correctOption: 1,
    points: 10,
  },
  {
    id: 8,
    question: "Which method is commonly used to render an array of items in React?",
    options: ["filter()", "reduce()", "map()", "find()"],
    correctOption: 2,
    points: 10,
  },
  {
    id: 9,
    question: "What should a reducer function return?",
    options: ["The next state", "A JSX element", "A promise in every case", "A React component"],
    correctOption: 0,
    points: 10,
  },
  {
    id: 10,
    question: "What is the purpose of the dependency array in useEffect?",
    options: [
      "To define component styles",
      "To control when the effect runs again",
      "To store previous JSX",
      "To define TypeScript interfaces",
    ],
    correctOption: 1,
    points: 10,
  },
];

export const questionData = function (): Promise<Question[]> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(questions);
    }, 1000);
    // reject("❌ Data could not be loading");
  });
};
