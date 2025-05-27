import Header from '../components/Header/Header';
import Register from '../components/Register/Register';

const RegisterPage = () => (
  <div>
    <Header />
    <main className="flex flex-col items-center justify-center min-h-screen">
      <h2 className="text-2xl font-bold mb-4">Регистрация</h2>
      <Register />
    </main>
  </div>
);

export default RegisterPage;
