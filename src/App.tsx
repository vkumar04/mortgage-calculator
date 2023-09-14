import { CalculatorForm } from "./components/calculatorForm/CalculatorForm";
import { Navigation } from "./components/navigation/Navigation";

function App() {
  return (
    <>
      <Navigation title="Mortgage Calculator" />
      <CalculatorForm />
    </>
  );
}

export default App;
