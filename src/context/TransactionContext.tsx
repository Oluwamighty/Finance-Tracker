import { createContext } from "react";
import { Transaction } from "../types";

type TransactionContextType = {
  transaction: Transaction[];
  setTransaction: React.Dispatch<React.SetStateAction<Transaction[]>>;
}

const TransactionContext = createContext<TransactionContextType | undefined>(undefined);

export default TransactionContext;
export { TransactionContextType };