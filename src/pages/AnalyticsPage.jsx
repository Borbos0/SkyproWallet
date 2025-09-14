import Header from '../components/Header/Header';
import Analytics from '../components/Analytics/Analytics';
import Table from '../components/Analytics/Table';

const AnalyticsPage = () => (
  <div>
    <Header />
    <main className="flex flex-col items-center justify-center min-h-screen">
      <div className="grid grid-cols-[380px_1fr] w-full px-[120px]">
        <Analytics />
        <Table />
      </div>
    </main>
  </div>
);

export default AnalyticsPage;
