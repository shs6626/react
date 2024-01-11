import { Component } from "react";
import ExpenseForm from "./components/ExpenseForm";

class App extends Component {
  render() {
    return (
      <main className="main-container">
        <h1>예산 게산기</h1>
        <div
          style={{ width: "100%", backgroundColor: "white", padding: "1rem" }}
        >
          <ExpenseForm />
        </div>
        <div
          style={{ width: "100%", backgroundColor: "white", padding: "1rem" }}
        >
          {/* Expens List */}
        </div>

        <div style={{ display: "flex", justifyContent: "end", margin: "1rem" }}>
          <p style={{ fontSize: "2rem" }}>
            {/* Total: */}
            <span>원</span>
          </p>
        </div>
      </main>
    );
  }
}

export default App;
