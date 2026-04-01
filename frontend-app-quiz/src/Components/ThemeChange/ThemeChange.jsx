import { useState, useContext } from "react";
import ThemeContext from "../ThemeContext/ThemeContext";

const ThemeChange = () => {
  const { switchToggled, setSwitchToggled } = useContext(ThemeContext);
  const handleChange = () => {
    setSwitchToggled((prev) => !prev);
  };
  return (
    <main className="flex flex-row items-end justify-end">
      <figure>
        <img
          src={
            switchToggled
              ? "/assets/images/icon-sun-light.svg"
              : "/assets/images/icon-sun-dark.svg"
          }
          alt="Dark Mode On"
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
        />
        <span className="absolute cursor-pointer top-0 left-0 right-0 bottom-0 rounded-lg h-[1.25rem] w-[2.625rem]"></span>
      </label>
      <figure>
        <img
          src={
            switchToggled
              ? "/assets/images/icon-moon-light.svg"
              : "/assets/images/icon-moon-dark.svg"
          }
          alt="Dark Mode off"
        />
      </figure>
    </main>
  );
};

export default ThemeChange;
