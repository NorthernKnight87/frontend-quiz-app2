import { useState } from 'react'
import HtmlQuiz from '../HtmlQuiz/HtmlQuiz';
import CSSQuiz from '../CSSQuiz/CSSQuiz';
import JSQuiz from '../JSQuiz/JSQuiz';
import AccessQuiz from '../AccessQuiz/AccessQuiz';

const App = () => {


  return (
  <>
  <header>
    <h1>Welcome to the Frontend Quiz!</h1>
    <p>Pick a subject to get started</p>
  </header>
  <main>
    <HtmlQuiz />
    <CSSQuiz />
    <JSQuiz />
    <AccessQuiz />
  </main>
  </>
  )
}

export default App;
