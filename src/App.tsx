import { useState } from "react";
import { CalculatorForm } from "./components/calculatorForm/CalculatorForm";
import { DataTable } from "./components/dataTable/DataTable";
import { Navigation } from "./components/navigation/Navigation";
import { amortizationData } from "./types";

function App() {
  const [amortizationData, setAmortizationData] = useState<amortizationData[]>(
    [],
  );

  return (
    <>
      <Navigation title="Mortgage Calculator" />
      <CalculatorForm setAmortizationData={setAmortizationData} />
      <DataTable amortizationData={amortizationData} />
    </>
  );
}

export default App;
