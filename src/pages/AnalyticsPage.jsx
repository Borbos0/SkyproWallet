import { useMemo, useState } from 'react';
import Header from '../components/Header/Header';
import Table from '../components/Analytics/Table';
import Calendar from '../components/Analytics/Calendar';

export default function AnalyticsPage() {
  const initial = useMemo(() => {
    const end = new Date();
    const start = new Date(end);
    start.setDate(end.getDate() - 120);
    return { start, end };
  }, []);

  const [range, setRange] = useState(initial);

  return (
    <div>
      <Header />
      <main className="flex flex-col items-center justify-center min-h-screen bg-background">
        <div className="grid grid-cols-[379px_789px] w-full px-[120px] gap-8">
          <div className="flex flex-col gap-6">
            <Calendar value={range} onChange={setRange} />
          </div>

          <Table range={range} />
        </div>
      </main>
    </div>
  );
}
