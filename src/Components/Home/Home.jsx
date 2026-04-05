import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="flex flex-col lg:flex lg:flex-row lg:mt-0 lg:pt-[6rem] justify-between items-start w-full">
        <header className="flex flex-col items-start w-full">
          <h1 className="text-[2.5rem] text-[var(--blue-900)] dark:text-[var(--standard-white)] leading-[2.5rem] text-left font-rubik font-light md:text-[4rem] md:leading-[4rem] lg:leading-[4rem]">
            Welcome to the <br />
            <span className="font-rubik font-medium md:text-[4rem] md:mt-[var(--spacing-100)]">
              Frontend Quiz!
            </span>
          </h1>

          <p className="text-[0.875rem] text-[var(--grey-500)] dark:text-[var(--blue-300)] mt-4 text-left italic lg:text-[1.25rem]">
            Pick a subject to get started
          </p>
        </header>
        <main className="flex flex-col gap-4 mt-8 lg:mt-0 lg:ml-8 w-full"> 
          <Link to="/htmlquiz" state={{ subject: "HTML" }} className="block w-full">
            <div className="bg-[var(--standard-white)] dark:text-[var(--standard-white)] dark:bg-[var(--blue-850)] py-4 px-4 rounded-lg flex items-center md:rounded-2xl">
              <figure className="bg-[var(--orange-50)] rounded-lg w-[2.5rem] h-[2.5rem] flex items-center justify-center">
                <img src="/assets/images/icon-html.svg" alt="html icon" />
              </figure>
              <span className="text-[1.125rem] leading-[1.125rem] text-[var(--blue-900)] dark:text-[var(--standard-white)] self-center font-medium ml-4 md:ml-8 cursor-pointer">
                HTML
              </span>
            </div>
          </Link>
          <Link to="/cssquiz" state={{ subject: "CSS" }} className="block w-full">
            <div className="bg-[var(--standard-white)] dark:text-[var(--standard-white)] dark:bg-[var(--blue-850)] py-4 px-4 rounded-lg flex items-center md:rounded-2xl">
              <figure className="bg-[var(--green-100)] rounded-lg w-[2.5rem] h-[2.5rem] flex items-center justify-center">
                <img
                  src="/assets/images/icon-css.svg"
                  alt="CSS Logo"
                  className="w-[1.786rem]"
                />
              </figure>
              <span className="text-[1.125rem] text-[var(--blue-900)] dark:text-[var(--standard-white)] leading-[1.125rem] self-center font-medium ml-4 md:ml-8 cursor-pointer">
                CSS
              </span>
            </div>
          </Link>
          <Link to="/jsquiz" state={{ subject: "JavaScript" }} className="block w-full">
            <div className="bg-[var(--standard-white)] dark:text-[var(--standard-white)] dark:bg-[var(--blue-850)] py-4 px-4 rounded-lg flex items-center md:rounded-2xl">
              <figure className="bg-[var(--blue-50)] rounded-lg w-[2.5rem] h-[2.5rem] flex items-center justify-center">
                <img
                  src="/assets/images/icon-js.svg"
                  alt="JS Logo"
                  className="w-[1.786rem]"
                />
              </figure>
              <span className="text-[1.125rem] text-[var(--blue-900)] leading-[1.125rem] dark:text-[var(--standard-white)] self-center font-medium ml-4 md:ml-8 cursor-pointer">
                JavaScript
              </span>
            </div>
          </Link>
          <Link to="/accessibilityquiz" state={{ subject: "Accessibility" }} className="block w-full">
            <div className="bg-[var(--standard-white)] dark:text-[var(--standard-white)] dark:bg-[var(--blue-850)] py-4 px-4 rounded-lg flex items-center md:rounded-2xl">
              <figure className="bg-[var(--purple-100)] rounded-lg w-[2.5rem] h-[2.5rem] flex items-center justify-center">
                <img
                  src="/assets/images/icon-accessibility.svg"
                  alt="Accessibility Logo"
                  className="w-[1.786rem]"
                />
              </figure>
              <span className="text-[1.125rem] leading-[1.125rem] text-[var(--blue-900)] dark:text-[var(--standard-white)] self-center font-medium ml-4 md:ml-8 cursor-pointer">
                Accessibility
              </span>
            </div>
          </Link>
        </main>
      </div>
    </>
  );
};

export default Home;
