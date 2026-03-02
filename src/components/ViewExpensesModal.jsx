import React, { useContext } from "react"
import { Button, Modal, Stack } from "react-bootstrap"

import { BudgetsContext } from "../contexts/BudgetsProvider"
import { formatter } from "../utils"

const ViewExpensesModal = ({ expenseId, handleClose }) => {
  const { budgets, viewExpenses, deleteBudget, deleteExpense } =
    useContext(BudgetsContext)

  const budgetsItem =
    expenseId === "Uncategorized"
      ? { name: "Uncategorized", id: "Uncategorized" }
      : budgets.find((item) => item.id === expenseId)

  const curretnExpenses = viewExpenses(expenseId)

  return (
    <Modal show={expenseId != null} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>
          <Stack direction="horizontal" gap="2">
            <div>Expenses - {budgetsItem?.name}</div>
            {expenseId !== "Uncategorized" && (
              <Button
                onClick={() => {
                  deleteBudget(budgetsItem)
                  handleClose()
                }}
                variant="outline-danger"
              >
                Delete
              </Button>
            )}
          </Stack>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Stack direction="vertical" gap="3">
          {curretnExpenses.map((item) => (
            <Stack direction="horizontal" gap="2" key={item.id}>
              <div className="me-auto fs-4">{item.description}</div>
              <div className="fs-5">{formatter.format(item.amount)}</div>
              <Button
                onClick={() => deleteExpense(item)}
                size="sm"
                variant="outline-danger"
              >
                &times;
              </Button>
            </Stack>
          ))}
        </Stack>
      </Modal.Body>
    </Modal>
  )
}

export default ViewExpensesModal
