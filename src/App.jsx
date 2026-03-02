import React, { useContext, useState } from "react"
import { Button, Container, Stack } from "react-bootstrap"

import { BudgetsContext } from "./contexts/BudgetsProvider"
import BudgetCard from "./components/BudgetCard"
import AddBudgetModal from "./components/AddBudgetModal"
import AddExpenseModal from "./components/AddExpenseModal"
import UncategorizedBudgetCard from "./components/UncategorizedBudgetCard"
import TotalBudgetCard from "./components/TotalBudgetCard"

const App = () => {
  const [showAddBudgetModal, setShowAddBudgetModal] = useState(false)
  const [showAddExpenseModal, setShowAddExpenseModal] = useState(false)
  const [expenseId, setExpenseId] = useState()
  const { budgets, viewExpenses } = useContext(BudgetsContext)

  const openExpenseModal = (expenseId) => {
    setShowAddExpenseModal(true)
    setExpenseId(expenseId)
  }

  return (
    <>
      <Container className="my-4">
        <Stack direction="horizontal" gap="2" className="mb-4">
          <h1 className="me-auto">Budgets</h1>
          <Button onClick={() => setShowAddBudgetModal(true)} variant="primary">
            Add Budget
          </Button>
          <Button onClick={openExpenseModal} variant="outline-primary">
            Add Expense
          </Button>
        </Stack>
        <div className="wrapper">
          {budgets.map(({ id, name, max }) => {
            const array = viewExpenses(id)
            const amount = array.reduce((acc, item) => acc + item.amount, 0)

            return (
              <BudgetCard
                key={id}
                name={name}
                amount={amount}
                max={max}
                onAddExpenseClick={() => openExpenseModal(id)}
              />
            )
          })}
          <UncategorizedBudgetCard onAddExpenseClick={openExpenseModal} />
          <TotalBudgetCard />
        </div>
      </Container>
      <AddBudgetModal
        show={showAddBudgetModal}
        handleClose={() => setShowAddBudgetModal(false)}
      />
      <AddExpenseModal
        show={showAddExpenseModal}
        handleClose={() => setShowAddExpenseModal(false)}
        defaultBudgetId={expenseId}
      />
    </>
  )
}

export default App
