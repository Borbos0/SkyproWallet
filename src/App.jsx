import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ExpensesPage from './pages/ExpensesPage';
import AnalyticsPage from './pages/AnalyticsPage';

function App() {
  const isAuth = true;

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

        {/* Редирект по умолчанию */}
        <Route
          path="/"
          element={
            isAuth ? (
              <Navigate to="/analytics" replace />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />

        {/* Страница 404 */}
        <Route path="*" element={<Navigate to="/error" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
