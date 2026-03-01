import { StrictMode } from "react"
import { createRoot } from "react-dom/client"

import "./index.css"
import "bootstrap/dist/css/bootstrap.min.css"

import { BudgetsProvider } from "./contexts/BudgetsProvider.jsx"
import App from "./App.jsx"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BudgetsProvider>
      <App />
    </BudgetsProvider>
  </StrictMode>
)
