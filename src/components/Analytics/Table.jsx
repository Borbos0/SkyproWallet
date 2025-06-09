import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    { name: 'Еда', value: 12345 },
    { name: 'Транспорт', value: 5000 },
    { name: 'Жилье', value: 3000 },
    { name: 'Развлечения', value: 1550 },
    { name: 'Образование', value: 10000 },
    { name: 'Другое', value: 2891 },
    { name: 'Test', value: 4214 },
];

const Table = () => (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data} barSize={60}>
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="value" fill="#a78bfa" radius={[20, 20, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
  
export default Table;
  