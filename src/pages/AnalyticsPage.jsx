import Header from '../components/Header/Header';
import Analytics from '../components/Analytics/Analytics';
import Table from '../components/Analytics/Table';

const AnalyticsPage = () => (
  <div>
    <Header />
    <main className="flex flex-col items-center justify-center min-h-screen">
      <Analytics />
      <Table/>
    </main>
  </div>
);

export default AnalyticsPage;
