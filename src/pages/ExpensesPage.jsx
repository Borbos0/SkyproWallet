import Header from '../components/Header/Header';
import Expenses from '../components/Expenses/Expenses';
import NewExpens from '../components/Expenses/NewExpens';



const ExpensesPage = () => (
  <div>
    <Header />
    <div className="flex flex-col min-h-screen bg-background">
      <h1 className="text-black font-montserrat text-3xl font-bold leading-[150%] text-left ml-[120px] mt-[36px]">Мои расходы</h1>
      <main className="flex items-center gap-[34px] ml-[120px]">
        <Expenses />
        <NewExpens />
      </main>
    </div>
  </div>
);

export default ExpensesPage;
