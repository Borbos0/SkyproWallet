// App.jsx
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ExpensesPage from './pages/ExpensesPage';
import AnalyticsPage from './pages/AnalyticsPage';
import { useAuth } from './utils/auth/useAuth';

function App() {
  const isAuth = useAuth();

  return (
    <BrowserRouter>
      <Routes>
        {/* Публичные роуты */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        {/* Приватные роуты */}
        <Route
          path="/expenses"
          element={isAuth ? <ExpensesPage /> : <Navigate to="/login" replace />}
        />
        <Route
          path="/analytics"
          element={
            isAuth ? <AnalyticsPage /> : <Navigate to="/login" replace />
          }
        />

        {/* По умолчанию */}
        <Route
          path="/"
          element={<Navigate to={isAuth ? '/expenses' : '/login'} replace />}
        />

        <Route
          path="*"
          element={<Navigate to={isAuth ? '/expenses' : '/login'} replace />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
