import { useMemo, useState } from 'react';
import DatePicker from 'react-datepicker';
import ru from 'date-fns/locale/ru';
import { startOfMonth, endOfMonth } from 'date-fns';
import 'react-datepicker/dist/react-datepicker.css';
import './daypicker.css';

const monthStart = (d) => startOfMonth(new Date(d));
const monthEnd = (d) => endOfMonth(new Date(d));

export default function Calendar({ value, onChange, className }) {
  const [mode, setMode] = useState('month');
  const [range, setRange] = useState([value.start, value.end]);

  const year = useMemo(() => new Date().getFullYear(), []);
  const monthsOfYear = useMemo(
    () => Array.from({ length: 12 }, (_, i) => new Date(year, i, 1)),
    [year],
  );

  const initialDecadeStart = useMemo(
    () => Math.floor(new Date().getFullYear() / 10) * 10,
    [],
  );
  const [decadeStartYear, setDecadeStartYear] = useState(initialDecadeStart);
  const yearsInDecade = useMemo(
    () => Array.from({ length: 10 }, (_, i) => decadeStartYear + i),
    [decadeStartYear],
  );

  const apply = ([s, e]) => {
    setRange([s, e]);
    onChange({ start: s, end: e });
  };

  const setMonthRange = ([s, e]) => {
    const S = s ? monthStart(s) : null;
    const E = e ? monthEnd(e) : null;
    apply([S, E]);
  };

  return (
    <div className={`bg-white rounded-[30px] shadow-md p-6 ${className || ''}`}>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold">Период</h2>

        <div className="flex gap-4 text-[#2D2D2D]">
          <button
            type="button"
            className={
              mode === 'month'
                ? 'underline underline-offset-4'
                : 'text-[#7A7A7A]'
            }
            onClick={() => setMode('month')}
          >
            Месяц
          </button>
          <button
            type="button"
            className={
              mode === 'year'
                ? 'underline underline-offset-4'
                : 'text-[#7A7A7A]'
            }
            onClick={() => setMode('year')}
          >
            Год
          </button>
        </div>
      </div>

      {mode === 'month' && (
        <div className="max-h-[540px] overflow-auto pr-1.5 space-y-4">
          {monthsOfYear.map((m) => (
            <div key={m.toISOString()} className="space-y-2">
              <div className="font-semibold mx-2 mt-1 mb-1 capitalize">
                {m.toLocaleDateString('ru-RU', {
                  month: 'long',
                  year: 'numeric',
                })}
              </div>
              <DatePicker
                locale={ru}
                inline
                shouldCloseOnSelect={false}
                calendarStartDay={1}
                selected={range[0]}
                startDate={range[0]}
                endDate={range[1]}
                selectsRange
                openToDate={m}
                renderCustomHeader={() => <div style={{ height: 0 }} />}
                onChange={(dates) => apply(dates)}
                onMonthChange={() => {}}
                onYearChange={() => {}}
                minDate={new Date(m.getFullYear(), m.getMonth(), 1)}
                maxDate={new Date(m.getFullYear(), m.getMonth() + 1, 0)}
              />
            </div>
          ))}
        </div>
      )}

      {mode === 'year' && (
        <div>
          <div className="flex items-center justify-between px-2 py-2 mb-2">
            <button
              type="button"
              className="px-2 py-1 rounded-xl hover:bg-gray-100"
              onClick={() => setDecadeStartYear((y) => y - 10)}
            >
              ←
            </button>
            <div className="font-semibold">
              {decadeStartYear} – {decadeStartYear + 9}
            </div>
            <button
              type="button"
              className="px-2 py-1 rounded-xl hover:bg-gray-100"
              onClick={() => setDecadeStartYear((y) => y + 10)}
            >
              →
            </button>
          </div>

          <div className="max-h-[540px] overflow-auto pr-1.5 space-y-3">
            {yearsInDecade.map((y) => {
              const openTo = new Date(y, 0, 1);
              const minDate = new Date(y, 0, 1);
              const maxDate = new Date(y, 11, 31);

              return (
                <div key={y} className="space-y-1.5">
                  <div className="font-semibold mx-2 mb-1">{y}</div>
                  <DatePicker
                    locale={ru}
                    inline
                    showMonthYearPicker
                    selectsRange
                    selected={range[0]}
                    startDate={range[0]}
                    endDate={range[1]}
                    openToDate={openTo}
                    minDate={minDate}
                    maxDate={maxDate}
                    renderCustomHeader={() => <div style={{ height: 0 }} />}
                    onChange={(dates) => setMonthRange(dates)}
                  />
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
