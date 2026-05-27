export type Transaction = {
  id: number;
  description: string;
  amount: number;
  category: "Income" | "Expenses";
  date: string;
}

export type TransactionForm = {
    description: string;
    amount: number;
    category: "Income" | "Expenses" | "";
    date: string;
    descriptionError: string,
    amountError: string,
    categoryError: string,
    dateError: string
}