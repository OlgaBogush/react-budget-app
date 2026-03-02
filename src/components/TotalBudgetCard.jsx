import React, { useContext } from "react"

import { BudgetsContext } from "../contexts/BudgetsProvider"
import BudgetCard from "./BudgetCard"

const TotalBudgetCard = () => {
  const { budgets, expenses } = useContext(BudgetsContext)

  const max = budgets.reduce((acc, item) => acc + item.max, 0)
  const amount = expenses.reduce((acc, item) => acc + item.amount, 0)

  if (max === 0) return null

  return <BudgetCard name="Total" amount={amount} max={max} gray hideButtons />
}

export default TotalBudgetCard
