import { useLocation, useNavigate } from "react-router-dom";
import questionData from "../../data.json";

const Score = () => {
  const navigate = useNavigate();
  const { state: locationState } = useLocation();
  const { subject, userScore } = locationState;
  const currentQuiz = questionData.quizzes.find(
    (quiz) => quiz.title === subject,
  );

  const subjectColors = {
    HTML: "bg-[var(--orange-50)]",
    CSS: "bg-[var(--green-100)]",
    JavaScript: "bg-[var(--blue-50)]",
    Accessibility: "bg-[var(--purple-100)]",
  };

  return (
    <div className="font-rubik text-[var(--blue-900)] flex flex-col">
        <section className="flex flex-row justify-start items-center absolute top-0 left-0 ml-[var(--spacing-300) mt-4 px-[var(--spacing-300)]">
          <figure
            className={`${subjectColors[subject]} w-[2.5rem] h-[2.5rem] rounded-lg flex items-center justify-center`}
          >
            <img
              src={currentQuiz?.icon}
              alt={`${subject} icon`}
              className="w-[1.786rem] h-[1.786rem]"
            />
          </figure>

          <p className="text-[var(--blue-900)] dark:text-[var(--standard-white)] dark:text-[var(--standard-white)] ml-4">
            {currentQuiz?.title}
          </p>
        </section>
        <section className="dark:text-[var(--standard-white)">
          <h1 className="text-[2.5rem] leading-[2.5rem] font-light dark:text-[var(--standard-white)] leading-[2.5rem] text-left font-rubik font-light md:text-[4rem] md:leading-[4rem] lg:leading-[4rem]">
            Quiz Completed <br />
            <span className="font-rubik font-medium">You Scored...</span>
          </h1>
        </section>

      <main className="w-full flex flex-col left-0 ml-[var(--spacing-300) mt-[var(--spacing-500)] px-[var(--spacing-300)] bg-[var(--standard-white)] dark:bg-[var(--blue-850)] py-4 px-4 mt-[var(--spacing-200)] rounded-lg flex items-center md:rounded-2xl">
        <section className="flex justify-start items-start mt-8">
          <figure
            className={`${subjectColors[subject]} rounded-lg w-[2.5rem] h-[2.5rem] flex items-center justify-center`}
          >
            <img
              src={currentQuiz?.icon}
              alt="quiz icon"
              className="w-[1.786rem] h-[1.786rem]"
            />
          </figure>

          <span className="font-rubik font-medium ml-4 text-[1.125rem] leading-[1.125rem] py-4 text-[var(--blue-900)] dark:text-[var(--standard-white)]">
            {currentQuiz?.title}
          </span>
        </section>
        <section className="dark:text-[var(--standard-white)]">
          <span className="text-[5.5rem]">{`${userScore}`}</span>
          <p className="text-[1.125rem] mb-8">{`out of ${currentQuiz?.questions.length}`}</p>
        </section>
      </main>
      <footer className="bg-[var(--purple-600)] text-[var(--standard-white)] mt-4 p-4 rounded-lg">
        <button onClick={() => navigate("/")}>Play Again</button>
      </footer>
    </div>
  );
};

export default Score;
