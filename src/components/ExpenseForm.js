import React, { Component } from "react";
import "./Expenseform.css";

export class ExpenseForm extends Component {
  render() {
    return (
      <form>
        <div className="form-center">
          <div className="form-group">
            <label htmlFor="charge">지출 항목</label>
            <input
              type="text"
              className="form-control"
              id="charge"
              name="charge"
              placeholder="ex)"
            />
          </div>
          <div className="form-group"></div>
          <div className="form-group">
            <label htmlFor="charge">지출 항목</label>
            <input
              type="number"
              className="form-control"
              id="charge"
              name="charge"
              placeholder="ex)"
            />
          </div>
        </div>
      </form>
    );
  }
}

export default ExpenseForm;
