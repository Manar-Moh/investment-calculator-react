import { Fragment, useState } from "react";
import { Header } from "./components/Header";
import { Calculator } from "./components/Calculator";
import { Results } from "./components/Results";

function App() {
  const [userInput, setUserInput] = useState({
    Initial: 10000,
    Annual: 1200,
    Return: 6,
    Duration: 10,
  });

  const inputIsValid = Object.values(userInput).every((value) => value > 0 && value !== "") && userInput.Duration >= 1;
  function handleChange(inputId, value) {
    setUserInput((input) => ({
      ...input,
      [inputId]: +value,
    }));
  }

  return (
    <Fragment>
      <Header />
      <Calculator handleChange={handleChange} userInput={userInput} />
      {inputIsValid || <p className="center">Please enter valid input</p>}
      {inputIsValid && <Results userInput={userInput} />}
    </Fragment>
  );
}

export default App;
