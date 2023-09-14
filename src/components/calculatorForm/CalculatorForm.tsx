import { useState } from "react";
import { useForm } from "react-hook-form";
import { MortgageFormData, amortizationData } from "../../types";
import { calculateSchedule } from "../../util/calculateSchedule";
import { calculateMonthlyPayment } from "../../util/monthlyPayment";

export const CalculatorForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<MortgageFormData>();

  const [payment, setPayment] = useState<number>(0);
  const [amortizationData, setAmortizationData] = useState<amortizationData[]>(
    [],
  );

  const onSubmit = (data: MortgageFormData) => {
    const monthlyPayment = calculateMonthlyPayment(data);
    const amortizationTable = calculateSchedule(data);
    setAmortizationData(amortizationTable);
    setPayment(monthlyPayment);
    console.log("test", amortizationData);
  };

  return (
    <div className="p-4">
      <h1>Mortgage Calculator</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Loan Amount ($)</span>
          </label>
          <input
            className={`input input-bordered w-full max-w-xs ${
              errors.loanAmount && "input-accent"
            }`}
            type="number"
            {...register("loanAmount", { required: true })}
          />
          <label>
            {errors.loanAmount && (
              <span className="label-text-alt text-red-500">
                Loan Amount is required
              </span>
            )}
          </label>
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Interest Rate (%)</span>
          </label>
          <input
            className={`input input-bordered w-full max-w-xs ${
              errors.loanAmount && "input-accent"
            }`}
            type="number"
            step={0.01}
            {...register("interestRate", { required: true })}
          />
          <label>
            {errors.interestRate && (
              <span className="label-text-alt text-red-500">
                Interest Rate is required
              </span>
            )}
          </label>
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Loan Term</span>
          </label>
          <input
            className={`input input-bordered w-full max-w-xs ${
              errors.loanAmount && "input-accent"
            }`}
            type="number"
            {...register("loanTerm", { required: true })}
          />
          <label>
            {errors.loanTerm && (
              <span className="label-text-alt text-red-500">
                Loan Term is required
              </span>
            )}
          </label>
        </div>
        <button className="btn btn-primary mt-4" type="submit">
          Calculate
        </button>
      </form>
      {payment > 0 && (
        <div className="mt-4">
          <h2>Monthly Payment</h2>
          <p className="text-2xl">${payment.toFixed(2)}</p>
        </div>
      )}
    </div>
  );
};
