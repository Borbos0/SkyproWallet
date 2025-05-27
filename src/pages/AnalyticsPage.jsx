import Header from '../components/Header/Header';
import Analytics from '../components/Analytics/Analytics';

const AnalyticsPage = () => (
  <div>
    <Header />
    <main className="flex flex-col items-center justify-center min-h-screen">
      <Analytics />
    </main>
  </div>
);

export default AnalyticsPage;
