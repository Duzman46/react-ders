import './App.css'
import Expenses from './components/Expenses/Expenses'
import NewExpense from './components/NewExpense/NewExpense'

const App = () => {
  const expenses = [
    { title: 'Car Insurance', amount: 294.67, date: new Date(2021, 2, 28) },
    { title: 'Toilet Paper', amount: 94.12, date: new Date(2020, 7, 14) },
    { title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    { title: 'New Desk (Wooden)', amount: 450, date: new Date(2021, 5, 12) }
  ]
  return (
    <div>
      <NewExpense />
      <Expenses expenses={expenses} />
    </div>
  )
}

export default App
