import React, { useContext, useState } from "react"
import { Button, Container, Stack } from "react-bootstrap"

import BudgetCard from "./components/BudgetCard"
import AddBudgetModal from "./components/AddBudgetModal"
import { BudgetsContext } from "./contexts/BudgetsProvider"

const App = () => {
  const [showAddModal, setShowAddModal] = useState(false)
  const { budgets, viewExpenses } = useContext(BudgetsContext)

  return (
    <>
      <Container className="my-4">
        <Stack direction="horizontal" gap="2" className="mb-4">
          <h1 className="me-auto">Budgets</h1>
          <Button onClick={() => setShowAddModal(true)} variant="primary">
            Add Budget
          </Button>
          <Button variant="outline-primary">Add Expense</Button>
        </Stack>
        <div className="wrapper">
          {budgets.map(({ id, name, max }) => {
            const array = viewExpenses(id)
            const amount = array.reduce((acc, item) => acc + item.amount, 0)

            return <BudgetCard key={id} name={name} amount={amount} max={max} />
          })}
        </div>
      </Container>
      <AddBudgetModal
        show={showAddModal}
        handleClose={() => setShowAddModal(false)}
      />
    </>
  )
}

export default App
