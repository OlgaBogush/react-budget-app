import React, { createContext } from "react"
import { v4 as uuidv4 } from "uuid"

import useLocaleStorage from "../hooks/useLocalStorage"

export const BudgetsContext = createContext()

// const budget = {
//   id,
//   name,
//   max,
// }

// const expense = {
//   id,
//   expenseId,
//   amount,
//   description,
// }

export const BudgetsProvider = ({ children }) => {
  const [budgets, setBudgets] = useLocaleStorage("budgets", [])
  const [expenses, setExpenses] = useLocaleStorage("expenses", [])

  const viewExpenses = (lololo) => {
    return expenses.filter((item) => item.expenseId === lololo)
  }

  const addExpense = ({ description, amount, expenseId }) => {
    setExpenses((prev) => {
      return [...prev, { id: uuidv4(), description, amount, expenseId }]
    })
  }

  const addBudget = ({ name, max }) => {
    setBudgets((prev) => {
      if (prev.find((item) => item.name === name)) {
        return prev
      }
      return [...prev, { id: uuidv4(), name, max }]
    })
  }

  const deleteBudget = ({ id }) => {
    // implement deletion for expenses
    setBudgets((prev) => prev.filter((item) => item.id !== id))
  }

  const deleteExpese = ({ id }) => {
    setExpenses((prev) => prev.filter((item) => item.id !== id))
  }

  return (
    <BudgetsContext.Provider
      value={{
        budgets,
        expenses,
        viewExpenses,
        addExpense,
        addBudget,
        deleteBudget,
        deleteExpese,
      }}
    >
      {children}
    </BudgetsContext.Provider>
  )
}
