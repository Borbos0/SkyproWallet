import { useEffect, useMemo, useState } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LabelList,
} from 'recharts';
import { getTransactionsByPeriod } from '../../api/transactions';

const CATEGORY_ORDER = [
  'food',
  'transport',
  'housing',
  'joy',
  'education',
  'others',
];

const CATEGORY_LABELS_RU = {
  food: 'Еда',
  transport: 'Транспорт',
  housing: 'Жилье',
  joy: 'Развлечения',
  education: 'Образование',
  others: 'Другое',
};

const COLOR_BY_CATEGORY = {
  food: '#D9B6FF',
  transport: '#FFB53D',
  housing: '#6EE4FE',
  joy: '#B0AEFF',
  education: '#BCEC30',
  others: '#FFB9B8',
};

const RU_MONTHS = [
  'января',
  'февраля',
  'марта',
  'апреля',
  'мая',
  'июня',
  'июля',
  'августа',
  'сентября',
  'октября',
  'ноября',
  'декабря',
];

const toMDY = (d) => {
  const date = new Date(d);
  return `${date.getMonth() + 1}-${date.getDate()}-${date.getFullYear()}`;
};
const formatRuDate = (d) => {
  const date = new Date(d);
  return `${date.getDate()} ${RU_MONTHS[date.getMonth()]} ${date.getFullYear()}`;
};

export default function Table({ range }) {
  const [chartData, setChartData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(null);

  const nf = useMemo(() => new Intl.NumberFormat('ru-RU'), []);

  useEffect(() => {
    const load = async () => {
      if (!range?.start || !range?.end) return;
      try {
        setLoading(true);
        setErr(null);

        const transactions = await getTransactionsByPeriod({
          start: toMDY(range.start),
          end: toMDY(range.end),
        });

        const sums = transactions.reduce((acc, t) => {
          const cat = t?.category;
          const sum = Number(t?.sum) || 0;
          if (!cat) return acc;
          acc[cat] = (acc[cat] || 0) + sum;
          return acc;
        }, {});

        const prepared = CATEGORY_ORDER.map((key) => ({
          key,
          name: CATEGORY_LABELS_RU[key],
          value: sums[key] || 0,
          color: COLOR_BY_CATEGORY[key],
        })).filter((x) => x.value > 0);

        setChartData(prepared);
      } catch (e) {
        console.error(e);
        setErr(e);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, [range?.start, range?.end]);

  const total = useMemo(
    () => chartData.reduce((acc, item) => acc + item.value, 0),
    [chartData],
  );

  const rangeTitle = useMemo(() => {
    if (!range?.start || !range?.end) return '';
    const s = new Date(range.start);
    const e = new Date(range.end);
    if (s.getMonth() === e.getMonth() && s.getFullYear() === e.getFullYear()) {
      return `${s.getDate()}—${e.getDate()} ${RU_MONTHS[e.getMonth()]} ${e.getFullYear()}`;
    }
    return `${formatRuDate(range.start)} — ${formatRuDate(range.end)}`;
  }, [range]);

  const CustomBar = (props) => {
    const { x, y, width, height, payload } = props;
    const minH = 6;
    const h = Math.max(height, minH);
    const y0 = y - (h - height);
    const RADIUS = 8;
    const r = Math.min(RADIUS, h / 2);
    return (
      <rect
        x={x}
        y={y0}
        rx={r}
        ry={r}
        width={width}
        height={h}
        fill={payload.color}
      />
    );
  };

  const renderLabel = (props) => {
    const { x, y, width, height, value } = props;
    const minH = 6;
    const h = Math.max(height, minH);
    const yTop = y - (h - height);
    return (
      <text
        x={x + width / 2}
        y={yTop - 10}
        fill="#2D2D2D"
        fontWeight="bold"
        fontSize="18"
        textAnchor="middle"
      >
        {nf.format(value)} ₽
      </text>
    );
  };

  if (loading) {
    return (
      <div className="bg-white p-8 w-[789px] mx-auto shadow-md rounded-[30px]">
        <div className="text-[16px] text-gray-500">Загружаем данные…</div>
      </div>
    );
  }

  if (err) {
    return (
      <div className="bg-white p-8 w-[789px] mx-auto shadow-md rounded-[30px]">
        <div className="text-[16px] text-red-600">
          Ошибка загрузки транзакций
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white p-8 w-[789px] mx-auto shadow-md rounded-[30px]">
      <div className="text-[24px] font-bold font-montserrat">
        {nf.format(total)} ₽
      </div>
      <div className="text-gray-500 text-[12px] mb-4">
        Расходы за <b>{rangeTitle}</b>
      </div>

      {chartData.length === 0 ? (
        <div className="text-gray-500 text-[14px]">
          За выбранный период расходов нет
        </div>
      ) : (
        <ResponsiveContainer width="100%" height={387}>
          <BarChart
            data={chartData}
            barSize={60}
            margin={{ top: 36, right: 16, left: 0, bottom: 8 }}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="name" tick={{ fontSize: 16, fill: '#2D2D2D' }} />
            <YAxis
              hide
              domain={[
                0,
                (dataMax) => (dataMax ? Math.ceil(dataMax * 1.15) : 100),
              ]}
            />
            <Tooltip formatter={(v) => `${nf.format(v)} ₽`} />
            <Bar dataKey="value" shape={<CustomBar />} barCategoryGap={28}>
              <LabelList dataKey="value" content={renderLabel} />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      )}
    </div>
  );
}
