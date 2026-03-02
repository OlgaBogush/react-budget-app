import React, { useContext } from "react"

import { BudgetsContext } from "../contexts/BudgetsProvider"
import BudgetCard from "./BudgetCard"

const UncategorizedBudgetCard = (props) => {
  const { viewExpenses } = useContext(BudgetsContext)

  const array = viewExpenses("Uncategorized")
  const amount = array.reduce((acc, item) => acc + item.amount, 0)

  if (amount === 0) return null

  return <BudgetCard name="Uncategorized" amount={amount} gray {...props} />
}

export default UncategorizedBudgetCard
