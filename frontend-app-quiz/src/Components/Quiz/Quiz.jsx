import { Link, useLocation, Navigate, useNavigate } from "react-router-dom";
import { useReducer } from "react";
import questionData from "../../data.json";
import checkIcon from "../../../public/assets/images/icon-correct.svg";
import errorIcon from "../../../public/assets/images/icon-error.svg";

const initialState = {
  currentQuestion: 0,
  subject: null,
  isSubmitted: false,
  userScore: 0,
  selectedAnswer: null,
  showError: false,
  progress: 0,
};

const subjectColors = {
  HTML: "bg-[var(--orange-50)]",
  CSS: "bg-[var(--green-100)]",
  JavaScript: "bg-[var(--blue-50)]",
  Accessibility: "bg-[var(--purple-100)]",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SELECT_SUBJECT":
      return { ...state, subject: action.payload };
    case "SELECT_ANSWER":
      return { ...state, selectedAnswer: action.payload, showError: false };
    case "SUBMIT_ANSWER":
      if (state.selectedAnswer === null) {
        return { ...state, showError: true };
      }
      return {
        ...state,
        isSubmitted: true,
        userScore:
          state.selectedAnswer === action.payload
            ? state.userScore + 1
            : state.userScore,
      };
    case "NEXT_QUESTION":
      return {
        ...state,
        currentQuestion: state.currentQuestion + 1,
        isSubmitted: false,
        selectedAnswer: null,
        progress: state.progress + 10,
      };
    case "RESET_GAME":
      return initialState;
    default:
      return state;
  }
};

const Quiz = () => {
  const { state: locationState } = useLocation();
  const [state, dispatch] = useReducer(reducer, {
    ...initialState,
    subject: locationState?.subject,
  });

  const navigate = useNavigate();

  const { subject, userScore } = state;
  const currentQuiz = questionData.quizzes.find(
    (quiz) => quiz.title === state.subject,
  );

  const currentQuestionData = currentQuiz?.questions[state.currentQuestion];

  const handleButtonClick = () => {
    if (state.isSubmitted) {
      if (state.currentQuestion === currentQuiz?.questions.length - 1) {
        navigate("/score", { state: { subject, userScore } });
      } else {
        dispatch({ type: "NEXT_QUESTION" });
      }
    } else {
      dispatch({ type: "SUBMIT_ANSWER", payload: currentQuestionData.answer });
    }
  };

  if (!locationState?.subject) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="w-full md:w-full flex flex-col flex-wrap justify-center font-rubik font-medium text-center">
      <header className="w-1/2 fixed top-[0.5rem] left-0 flex flex-row ml-[var(--spacing-300) mt-4 px-[var(--spacing-300)]">
        <figure
          className={`${subjectColors[subject]} rounded-lg flex items-center justify-center`}
        >
          <img
            src={currentQuiz?.icon}
            alt={`${subject} icon`}
            className="w-full h-[2.5rem]"
          />
        </figure>
        <section className="font-rubik font-medium ml-4 text-[1.125rem] leading-[1.125rem] py-4">
          <p className="text-[var(--blue-900)] dark:text-[var(--standard-white)]">
            {currentQuiz?.title}
          </p>
        </section>
      </header>
      <main className="flex flex-col lg:flex-row justify-start mt-0 md:justify-start lg:justify-center mx-[var(--spacing-300) lg:gap-[var(--spacing-1600)]">
        <section>
          <p className="text-[0.875rem] leading-[1.313rem] text-[var(--grey-500)] font-rubik italic text-left">{`Question ${state.currentQuestion + 1} of ${currentQuiz?.questions.length}`}</p>
          <p className="text-[1.25rem] leading-[1.5rem] text-left mt-4 dark:text-[var(--standard-white)]">
            {currentQuestionData?.question}
          </p>
          <div className="w-full mt-4 mb-[2.5rem] md:my-[2.5rem] lg:mt-[11.5rem] h-4 bg-[var(--standard-white)] rounded-lg mt-4">
            <div
              className="bg-[var(--purple-600)] h-full rounded-lg"
              style={{ width: `${state.progress}%` }}
            ></div>
          </div>
        </section>
        <section>
          <ul className="w-full ">
            {currentQuestionData?.options.map((option, index) => {
              const isSelected = option === state.selectedAnswer;
              const isCorrect = option === currentQuestionData.answer;

              const getOptionClass = () => {
                if (state.isSubmitted && isCorrect)
                  return "border-[var(--green-500)] border-2 bg-[var(--standard-white)]";
                if (state.isSubmitted && isSelected && !isCorrect)
                  return "border-2 border-[var(--red-500)] bg-[var(--standard-white)]";
                if (!state.isSubmitted && isSelected)
                  return "border-[var(--purple-600)] bg-[var(--standard-white)] border-2";
                return "bg-[var(--standard-white)]";
              };

              const getLetterClass = () => {
                if (state.isSubmitted && isCorrect)
                  return "bg-[var(--green-500)] text-[var(--standard-white)]";
                if (state.isSubmitted && isSelected && !isCorrect)
                  return "bg-[var(--red-500)] text-[var(--standard-white)]";
                if (!state.isSubmitted && isSelected)
                  return "bg-[var(--purple-600)] text-[var(--standard-white)]";
                return "bg-[var(--grey-50)] text-[var(--grey-500)]";
              };

              return (
                <li
                  key={index}
                  className={`${getOptionClass()} w-full lg:w-[35.25rem] text-[1.125rem] leading-[1.125rem] md:text-[1.75rem] md:leading-[1.75rem] text-[var(--blue-900)] bg-[var(--standard-white)] dark:text-[var(--standard-white)] dark:bg-[var(--blue-850)] py-4 px-4 mt-[var(--spacing-200)] rounded-lg flex items-center md:rounded-2xl cursor-pointer`}
                  onClick={() => {
                    if (!state.isSubmitted)
                      dispatch({ type: "SELECT_ANSWER", payload: option });
                  }}
                >
                  <span
                    className={`w-[2.5rem] h-[2.5rem] md:w-[3.5rem] md:h-[3.5rem] lg:w-[3.5rem] lg:h-[3.5rem] ${getLetterClass()} rounded-lg flex items-center justify-center`}
                  >
                    {["A ", "B ", "C ", "D "][index]}
                  </span>
                  <p className="ml-4 text-[var(--blue-900)] dark:text-[var(--standard-white)]">
                    {option}
                  </p>

                  {isCorrect && state.isSubmitted && (
                    <img src={checkIcon} alt="check icon" className="ml-4" />
                  )}
                  {!isCorrect && state.isSubmitted && isSelected && (
                    <img src={errorIcon} alt="error icon" className="ml-4" />
                  )}
                </li>
              );
            })}
          </ul>
          <button
            className="w-full p-4 mt-4 lg:my-8 rounded-lg text-[1.125rem] md:text-[1.75rem] text-[var(--standard-white)] bg-[var(--purple-600)]"
            onClick={handleButtonClick}
          >
            {state.isSubmitted ? "Next Question" : "Submit Answer"}
          </button>
          {state.showError && (
            <footer className="w-auto flex items-center lg:justify-start xl:justify-start md:justify-start mt-4 lg:mt-0 lg:ml-0 text-[var(--red-500)]">
              <img src={errorIcon} alt="Error icon" />
              <p className="ml-4">Please select an answer</p>
            </footer>
          )}
        </section>
      </main>
    </div>
  );
};

export default Quiz;
