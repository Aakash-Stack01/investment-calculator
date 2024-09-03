import { useState } from "react";
import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Results from "./components/Results";
function App() {
  const [getDetails, setDetails] = useState({
    initialInvestment: 15000,
    annualInvestment: 12000,
    expReturn: 6,
    duration: 10,
  });

  const isValid = getDetails.duration > 0
  const setInvestmentDetails = (inputIdentifier, newValue) => {
    setDetails((prev) => {
      return {
        ...prev,
        [inputIdentifier]: +newValue,
      };
    });
  };
  return (
    <>
      <Header />
      <UserInput getDetails={getDetails} setInvestmentDetails ={setInvestmentDetails}></UserInput>
      { isValid && <Results userInput={getDetails}></Results>}
      { !isValid && <p> Enter duration greater than zero</p>}
    </>
  );
}

export default App;
