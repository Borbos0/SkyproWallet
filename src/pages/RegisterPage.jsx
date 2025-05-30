import Header from '../components/Header/Header';
import Register from '../components/Register/Register';
import { Link } from 'react-router-dom';

const RegisterPage = () => (
  <div>
    <Header />
    <main className="flex flex-col items-center justify-center min-h-screen">
      <h2 className="text-black font-montserrat text-2xl font-bold leading-[29px] tracking-[0px] text-center mb-4">
        Регистрация
      </h2>
      <Register />
      <h3 className="pt-6 text-[#999999] font-montserrat text-[12px] font-normal leading-[150%] tracking-[0px] text-center">
        У вас уже есть аккаунт?
      </h3>

      <Link
        to="/login"
        className="pt-1 underline text-[#999999] font-montserrat text-[12px] font-normal leading-[150%] tracking-[0px] text-center"
      >
        Войдите здесь
      </Link>
    </main>
  </div>
);

export default RegisterPage;
