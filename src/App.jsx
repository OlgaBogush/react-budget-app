import React from "react"
import { Button, Container, Stack } from "react-bootstrap"

import BudgetCard from "./components/BudgetCard"

const App = () => {
  return (
    <Container className="my-4">
      <Stack direction="horizontal" gap="2" className="mb-4">
        <h1 className="me-auto">Budgets</h1>
        <Button variant="primary">Add Budget</Button>
        <Button variant="outline-primary">Add Expense</Button>
      </Stack>
      <div className="wrapper">
        <BudgetCard name="Entertainment" amount={100} max={2000} />
      </div>
    </Container>
  )
}

export default App
