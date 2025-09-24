import axios from 'axios';

const BASE_URL = 'https://wedev-api.sky.pro/api/transactions';

// Хелпер для токена
const getAuthHeader = () => {
  const token = localStorage.getItem('token');
  return token ? { Authorization: `Bearer ${token}` } : {};
};

// Получить список транзакций (сортировка/фильтрация опционально)
export const getTransactions = async (options = {}) => {
  const { sortBy, filterBy } = options;

  const params = {};
  if (sortBy) params.sortBy = sortBy;
  if (filterBy) {
    params.filterBy = Array.isArray(filterBy) ? filterBy.join(',') : filterBy;
  }

  const res = await axios.get(BASE_URL, {
    params,
    headers: {
      ...getAuthHeader(),
      'content-type': '',
    },
  });

  return res.data;
};

// Получить транзакции за период
export const getTransactionsByPeriod = async ({ start, end }) => {
  const res = await axios.post(
    `${BASE_URL}/period`,
    { start, end },
    {
      headers: {
        ...getAuthHeader(),
        'content-type': '',
      },
    },
  );

  return res.data;
};
