import Header from '../components/Header/Header';
import Expenses from '../components/Expenses/Expenses';
import NewExpens from '../components/Expenses/NewExpens';



const ExpensesPage = () => (
  <div>
    <Header />
    <main className="flex items-center justify-center min-h-screen bg-background gap-[34px]">
      <Expenses />
      <NewExpens />
    </main>
  </div>
);

export default ExpensesPage;
