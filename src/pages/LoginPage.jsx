import Header from '../components/Header/Header';
import Login from '../components/Login/Login';

const LoginPage = () => (
  <div>
    <Header />
    <main className="flex flex-col items-center justify-center min-h-screen">
      <h2 className="text-2xl font-bold mb-4">Вход в аккаунт</h2>
      <Login />
    </main>
  </div>
);

export default LoginPage;
