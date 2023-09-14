import { flexRender, useReactTable } from "@tanstack/react-table";
import { useMemo } from "react";
import { amortizationData } from "../../types";
interface DataTableProps {
  amortizationData: amortizationData[];
}

export const DataTable = ({ amortizationData }: DataTableProps) => {
  const tableData = useMemo(() => {
    return amortizationData.map((row) => {
      return {
        ...row,
        month: row.month,
        payment: row.payment,
        principal: row.principal,
        interest: row.interest,
        balance: row.balance,
      };
    });
  }, [amortizationData]);

  const columns = [
    {
      header: "Month",
      accessor: "month",
    },
    {
      header: "Payment",
      accessor: "payment",
    },
    {
      header: "Principal",
      accessor: "principal",
    },
    {
      header: "Interest",
      accessor: "interest",
    },
    {
      header: "Balance",
      accessor: "balance",
    },
  ];

  const dataTable = useReactTable({
    columns,
    data: tableData,
  });

  console.log(dataTable);

  if (amortizationData.length === 0) {
    return <div>Fill out the form to display table</div>;
  }

  return (
    <div>
      <h1>Table</h1>
      <table className="table w-full">
        <thead>
          {dataTable.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id}>
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext(),
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody></tbody>
      </table>
    </div>
  );
};
