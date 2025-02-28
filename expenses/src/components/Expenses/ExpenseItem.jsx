import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import { useState } from "react";

const ExpenseItem = ({ title, amount, date }) => {
    const [newTitle, setNewTitle] = useState(title);
    const [newAmount, setNewAmount] = useState(amount);

    const clickHandler = () => {
        console.log("newTitle value:" + newTitle);
        setNewTitle("Updated");
        console.log("clicked");
        console.log("newTitle value:" + newTitle);
    }

    const increaseAmount = () => {
        setNewAmount(prevAmount = () => prevAmount + 10);
    }

    const decreaseAmount = () => {
        setNewAmount(prevAmount = () => prevAmount - 10);
    }

    return (
        <Card className="expense-item">
            <ExpenseDate date={date} />

            <div className="expense-item__description">
                <h2>{newTitle}</h2>
                <div className="expense-item__price">${newAmount.toFixed(2)}</div>
            </div>
            <button onClick={clickHandler}>Change Title</button>
            <button onClick={increaseAmount}>+</button>
            <button onClick={decreaseAmount}>-</button>
        </Card>
    )
}

export default ExpenseItem;