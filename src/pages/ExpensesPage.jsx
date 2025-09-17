import Header from '../components/Header/Header';
import Expenses from '../components/Expenses/Expenses';

const ExpensesPage = () => (
  <div>
    <Header />
    <main className="flex flex-col items-center justify-center min-h-screen bg-background">
      <Expenses />
    </main>
  </div>
);

export default ExpensesPage;
