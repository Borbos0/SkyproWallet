import React, { useMemo } from 'react';
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

const AVAILABLE_COLORS = [
  '#d1aaff',
  '#ffba45',
  '#32d8fb',
  '#a7aaff',
  '#d7ff45',
  '#ffb6b6',
  '#e8b7ff',
  '#b0f2c2',
];

const data = [
  { name: 'Еда', value: 3590 },
  { name: 'Транспорт', value: 1835 },
  { name: 'Жилье', value: 500 },
  { name: 'Развлечения', value: 1250 },
  { name: 'Образование', value: 600 },
  { name: 'Другое', value: 2306 },
];

function shuffle(array) {
  const arr = array.slice();
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

const Table = () => {
  const colorMap = useMemo(() => {
    const shuffled = shuffle(AVAILABLE_COLORS);
    const map = {};
    data.forEach((item, idx) => {
      map[item.name] = shuffled[idx % shuffled.length];
    });
    return map;
  }, []);

  const total = useMemo(
    () => data.reduce((acc, item) => acc + item.value, 0),
    [],
  );

  const CustomBar = (props) => {
    const { x, y, width, height, name } = props;
    return (
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        rx={20}
        fill={colorMap[name]}
      />
    );
  };

  const renderLabel = (props) => {
    const { x, y, value } = props;
    return (
      <text
        x={x + 30}
        y={y - 10}
        fill="#2D2D2D"
        fontWeight="bold"
        fontSize="18"
        textAnchor="middle"
        className="font-bold"
      >
        {value.toLocaleString('ru-RU')} ₽
      </text>
    );
  };

  return (
    <div className="bg-white p-8 w-[600px] mx-auto shadow-md rounded-[30px]">
      <div className="text-[24px] font-bold font-montserrat">
        {total.toLocaleString('ru-RU')} ₽
      </div>
      <div className="text-gray-500 text-[12px] mb-4">
        Расходы за <b>10 июля 2024</b>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} barSize={60}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="name" tick={{ fontSize: 16, fill: '#2D2D2D' }} />
          <YAxis hide />
          <Tooltip />
          <Bar dataKey="value" shape={<CustomBar />} radius={[20, 20, 0, 0]}>
            <LabelList dataKey="value" content={renderLabel} />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Table;
