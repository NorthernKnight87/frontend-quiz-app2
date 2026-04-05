import { useContext } from "react";
import ThemeContext from "../ThemeContext/ThemeContext";

const ThemeChange = () => {
  const { switchToggled, setSwitchToggled } = useContext(ThemeContext);
  const handleChange = () => {
    setSwitchToggled((prev) => !prev);
  };
  return (
    <main className="flex flex-row items-end">
      <figure>
        <img
          src={
            switchToggled
              ? "/assets/images/icon-sun-light.svg"
              : "/assets/images/icon-sun-dark.svg"
          }
          alt="Dark Mode On"
          className="w-4 h-4 md:w-5 md:h-5 lg:w-[1.313rem] lg:h-[1.313rem] top-1 md:top-1 lg:top-1 mr-[var(--spacing-100)] md:mr-[1rem] lg:mr-[1rem]"
        />
      </figure>
      <label
        htmlFor="theme"
        className="relative inline-block w-[2.5rem] h-[1.875rem] top-[0.313rem]"
      >
        <input
          type="checkbox"
          id="theme"
          onChange={handleChange}
          checked={switchToggled}
          className="relative sr-only peer bg-[var(--purple-600)] rounded-full cursor-pointer "
        />
        <span className="top-1 w-[2rem] h-[1.25rem] md:w-[3rem] md:h-[1.75rem] lg:w-[3rem] lg:h-[1.75rem] bg-[var(--purple-600)] absolute cursor-pointer top-0 left-0 right-0 bottom-0 rounded-full after:content-[''] after:absolute after:top-1 after:left-1 after:w-3 after:h-3 md:after:w-5 md:after:h-5 lg:after:w-5 lg:after:h-5 after:rounded-full after:bg-[var(--standard-white)] after:transition-all peer-checked:after:translate-x-4 lg:peer-checked:after:translate-x-6 peer-checked:bg-[var(--purple-600)]"></span>
      </label>
      <figure>
        <img
          src={
            switchToggled
              ? "/assets/images/icon-moon-light.svg"
              : "/assets/images/icon-moon-dark.svg"
          }
          alt="Dark Mode off"
          className="w-4 h-4 md:w-5 md:h-5 lg:w-[1.313rem] lg:h-[1.313rem] top-1 md:top-1 lg:top-1 ml-[var(--spacing-100)] md:ml-[1rem] lg:ml-[1rem]"
        />
      </figure>
    </main>
  );
};

export default ThemeChange;
