import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Quiz from "../Quiz/Quiz";
import ThemeChange from "../ThemeChange/ThemeChange";
import Home from "../Home/Home";
import Score from "../Score/Score";
import ThemeContext from "../ThemeContext/ThemeContext";

const App = () => {
  const [switchToggled, setSwitchToggled] = useState(false);

  return (
    <BrowserRouter>
      <ThemeContext.Provider value={{ switchToggled, setSwitchToggled }}>
        <div
          className={`${switchToggled ? "dark" : ""} relative min-h-screen w-full md:w-full  flex flex-col justify-center font-rubik text-center bg-[url('/assets/images/pattern-background-mobile-light.svg')] md:bg-[url('/assets/images/pattern-background-tablet-light.svg')] lg:bg-[url('/assets/images/pattern-background-desktop-light.svg')] dark:bg-[url('/assets/images/pattern-background-mobile-dark.svg')] dark:md:bg-[url('/assets/images/pattern-background-tablet-dark.svg')] dark:lg:bg-[url('/assets/images/pattern-background-desktop-dark.svg')] dark:bg-[var(--blue-900)] dark:md:bg-[var(--blue-900)] dark:lg:bg-[var(--blue-900)]}`}
        >
          <header className="absolute top-0 right-0 mt-4 mr-4">
            <ThemeChange />
          </header>
          <main className="flex flex-col mx-[var(--spacing-300)] md:max-w-[40rem] lg:max-w-[72.313rem] lg:flex lg:flex-row lg:items-center lg:gap-[8rem]">
            <Routes>
              <Route path="/" element={<Home />} />

              <Route path="/htmlquiz" element={<Quiz />} />

              <Route path="/cssquiz" element={<Quiz />} />

              <Route path="/jsquiz" element={<Quiz />} />

              <Route path="/accessibilityquiz" element={<Quiz />} />

              <Route path="/score" element={<Score />} />
            </Routes>
          </main>
        </div>
      </ThemeContext.Provider>
    </BrowserRouter>
  );
};

export default App;
