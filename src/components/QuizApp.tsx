import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, XCircle, RotateCcw } from 'lucide-react';

interface Question {
  id: number;
  question: string;
  options: string[];
  answer: string;
}

const questions: Question[] = [
  {
    id: 1,
    question: "What is React?",
    options: ["A JavaScript framework", "A JavaScript library for building UI", "A database management system", "A CSS preprocessor"],
    answer: "A JavaScript library for building UI"
  },
  {
    id: 2,
    question: "Who developed React?",
    options: ["Google", "Microsoft", "Facebook (Meta)", "Twitter"],
    answer: "Facebook (Meta)"
  },
  {
    id: 3,
    question: "What is JSX?",
    options: ["A type of CSS", "A JavaScript extension that allows writing HTML-like code", "A new version of Java", "A database query language"],
    answer: "A JavaScript extension that allows writing HTML-like code"
  },
  {
    id: 4,
    question: "What is the Virtual DOM?",
    options: ["A direct copy of the real DOM", "A lightweight representation of the real DOM in memory", "A physical hardware component", "A browser extension"],
    answer: "A lightweight representation of the real DOM in memory"
  },
  {
    id: 5,
    question: "What are components in React?",
    options: ["Global variables", "Reusable pieces of UI", "Database tables", "CSS selectors"],
    answer: "Reusable pieces of UI"
  },
  {
    id: 6,
    question: "What is 'state' in React?",
    options: ["A global variable", "Internal data of a component that can change over time", "A CSS property", "A type of prop"],
    answer: "Internal data of a component that can change over time"
  },
  {
    id: 7,
    question: "What are 'props' in React?",
    options: ["Internal component data", "External data passed to a component", "Functions only", "Styles only"],
    answer: "External data passed to a component"
  },
  {
    id: 8,
    question: "Which hook is used to manage state in functional components?",
    options: ["useEffect", "useContext", "useState", "useReducer"],
    answer: "useState"
  },
  {
    id: 9,
    question: "Which hook is used for side effects in functional components?",
    options: ["useState", "useEffect", "useMemo", "useCallback"],
    answer: "useEffect"
  },
  {
    id: 10,
    question: "What is the purpose of the 'key' prop in lists?",
    options: ["To style elements", "To uniquely identify elements for efficient updates", "To set the index", "To hide elements"],
    answer: "To uniquely identify elements for efficient updates"
  },
  {
    id: 11,
    question: "How do you pass data from a parent to a child component?",
    options: ["Using state", "Using props", "Using context only", "Using refs"],
    answer: "Using props"
  },
  {
    id: 12,
    question: "What is a Higher-Order Component (HOC)?",
    options: ["A component with many children", "A function that takes a component and returns a new component", "A component that uses hooks", "A class component"],
    answer: "A function that takes a component and returns a new component"
  },
  {
    id: 13,
    question: "What is the purpose of React Router?",
    options: ["To manage state", "To handle navigation and routing in a React app", "To fetch data", "To style components"],
    answer: "To handle navigation and routing in a React app"
  },
  {
    id: 14,
    question: "What is Redux?",
    options: ["A CSS framework", "A state management library", "A testing tool", "A database"],
    answer: "A state management library"
  },
  {
    id: 15,
    question: "Which hook is used to consume a Context?",
    options: ["useContext", "useState", "useReducer", "useRef"],
    answer: "useContext"
  },
  {
    id: 16,
    question: "What is the purpose of 'useRef'?",
    options: ["To trigger re-renders", "To access DOM elements directly or persist values between renders", "To manage complex state", "To perform API calls"],
    answer: "To access DOM elements directly or persist values between renders"
  },
  {
    id: 17,
    question: "What is 'useMemo' used for?",
    options: ["To memoize a function", "To memoize a calculated value to avoid expensive re-calculations", "To manage state", "To handle effects"],
    answer: "To memoize a calculated value to avoid expensive re-calculations"
  },
  {
    id: 18,
    question: "What is 'useCallback' used for?",
    options: ["To memoize a value", "To memoize a function definition to prevent unnecessary re-renders", "To call an API", "To update state"],
    answer: "To memoize a function definition to prevent unnecessary re-renders"
  },
  {
    id: 19,
    question: "What is a React Fragment?",
    options: ["A broken component", "A way to group elements without adding extra nodes to the DOM", "A CSS layout", "A type of hook"],
    answer: "A way to group elements without adding extra nodes to the DOM"
  },
  {
    id: 20,
    question: "What are the three main phases of a component lifecycle?",
    options: ["Start, Middle, End", "Mounting, Updating, Unmounting", "Loading, Success, Error", "Input, Process, Output"],
    answer: "Mounting, Updating, Unmounting"
  },
  {
    id: 21,
    question: "Which lifecycle method is called after a component is mounted (class components)?",
    options: ["componentWillMount", "componentDidMount", "render", "componentDidUpdate"],
    answer: "componentDidMount"
  },
  {
    id: 22,
    question: "What is the purpose of 'shouldComponentUpdate'?",
    options: ["To force an update", "To determine if a component should re-render for performance optimization", "To set initial state", "To handle errors"],
    answer: "To determine if a component should re-render for performance optimization"
  },
  {
    id: 23,
    question: "What must every class component have?",
    options: ["A constructor", "A render() method", "A state object", "Hooks"],
    answer: "A render() method"
  },
  {
    id: 24,
    question: "What is 'create-react-app'?",
    options: ["A React hook", "A command-line tool to set up a new React project with zero configuration", "A styling library", "A deployment tool"],
    answer: "A command-line tool to set up a new React project with zero configuration"
  },
  {
    id: 25,
    question: "What does 'npm start' do in a React project?",
    options: ["Builds the app for production", "Runs the app in development mode", "Installs dependencies", "Tests the app"],
    answer: "Runs the app in development mode"
  },
  {
    id: 26,
    question: "What does 'npm run build' do?",
    options: ["Starts the dev server", "Creates an optimized production build in the 'build' folder", "Deletes the project", "Updates React"],
    answer: "Creates an optimized production build in the 'build' folder"
  },
  {
    id: 27,
    question: "What is 'React.StrictMode'?",
    options: ["A tool for highlighting potential problems in an application", "A way to make the app run faster", "A CSS mode", "A security feature"],
    answer: "A tool for highlighting potential problems in an application"
  },
  {
    id: 28,
    question: "What is 'prop-types' used for?",
    options: ["To style props", "To document and validate the types of props passed to a component", "To hide props", "To delete props"],
    answer: "To document and validate the types of props passed to a component"
  },
  {
    id: 29,
    question: "What is 'React.lazy' used for?",
    options: ["To make components slower", "To load components lazily (code-splitting)", "To manage state", "To handle events"],
    answer: "To load components lazily (code-splitting)"
  },
  {
    id: 30,
    question: "What is the purpose of the 'Suspense' component?",
    options: ["To pause the app", "To display a fallback UI while waiting for lazy components to load", "To handle errors", "To manage routing"],
    answer: "To display a fallback UI while waiting for lazy components to load"
  }
];

const QuizApp = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [isAnswered, setIsAnswered] = useState(false);

  const handleOptionSelect = (option: string) => {
    if (isAnswered) return;
    setSelectedOption(option);
  };

  const handleNext = () => {
    if (selectedOption === questions[currentQuestion].answer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedOption(null);
    setScore(0);
    setShowResult(false);
    setIsAnswered(false);
  };

  const currentQ = questions[currentQuestion];

  return (
    <div className="min-h-screen bg-[#a855f7] flex items-center justify-center p-4 font-sans">
      <div className="w-full max-w-md bg-white rounded-xl shadow-2xl overflow-hidden">
        <div className="p-6">
          {!showResult ? (
            <>
              <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-bold text-gray-800">Quiz App</h1>
              </div>
              <div className="h-[1px] bg-gray-200 w-full mb-6" />
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentQuestion}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <h2 className="text-lg font-semibold text-gray-700 mb-6">
                    {currentQ.id}. {currentQ.question}
                  </h2>

                  <div className="space-y-3">
                    {currentQ.options.map((option, index) => {
                      const isSelected = selectedOption === option;
                      const isCorrect = option === currentQ.answer;
                      
                      let optionStyle = "border-gray-300 hover:bg-gray-50";
                      if (selectedOption) {
                        if (isCorrect) {
                          optionStyle = "bg-green-100 border-green-500 text-green-700";
                        } else if (isSelected) {
                          optionStyle = "bg-red-100 border-red-500 text-red-700";
                        }
                      }

                      return (
                        <button
                          key={index}
                          onClick={() => handleOptionSelect(option)}
                          disabled={!!selectedOption}
                          className={`w-full text-left p-4 rounded-lg border-2 transition-all duration-200 flex justify-between items-center ${optionStyle}`}
                        >
                          <span className="font-medium">{option}</span>
                          {selectedOption && isCorrect && <CheckCircle2 className="text-green-600" size={20} />}
                          {selectedOption && isSelected && !isCorrect && <XCircle className="text-red-600" size={20} />}
                        </button>
                      );
                    })}
                  </div>
                </motion.div>
              </AnimatePresence>

              <div className="mt-8 flex flex-col items-center gap-4">
                <button
                  onClick={handleNext}
                  disabled={!selectedOption}
                  className={`w-32 py-3 rounded-lg font-bold text-white transition-all duration-200 ${
                    selectedOption 
                      ? "bg-[#5b21b6] hover:bg-[#4c1d95] shadow-lg" 
                      : "bg-gray-300 cursor-not-allowed"
                  }`}
                >
                  {currentQuestion === questions.length - 1 ? "Finish" : "Next"}
                </button>
                
                <p className="text-sm font-medium text-gray-500">
                  {currentQuestion + 1} of {questions.length} questions
                </p>
              </div>
            </>
          ) : (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-8"
            >
              <div className="mb-6 flex justify-center">
                <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center">
                  <CheckCircle2 className="text-purple-600" size={48} />
                </div>
              </div>
              <h2 className="text-3xl font-bold text-gray-800 mb-2">Quiz Completed!</h2>
              <p className="text-gray-600 mb-8">You scored {score} out of {questions.length}</p>
              
              <div className="w-full bg-gray-100 rounded-full h-4 mb-8">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${(score / questions.length) * 100}%` }}
                  className="bg-purple-600 h-4 rounded-full"
                />
              </div>

              <button
                onClick={resetQuiz}
                className="flex items-center justify-center gap-2 w-full py-4 bg-[#5b21b6] text-white rounded-lg font-bold hover:bg-[#4c1d95] transition-colors"
              >
                <RotateCcw size={20} />
                Try Again
              </button>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuizApp;
