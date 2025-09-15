import Header from '../components/Header/Header';
import Register from '../components/Register/Register';
import { Link } from 'react-router-dom';

const RegisterPage = () => (
  <div>
    <Header />
    <main className="flex flex-col items-center justify-center min-h-screen bg-background">
      <div className="min-w-[379px] p-[32px] flex flex-col items-center bg-white shadow-[0px_20px_67px_-12px_#00000021] rounded-[30px]">
        <h2 className="text-black font-bold text-2xl leading-[29px] tracking-[0px] text-center font-montserrat pb-[24px]">
          Регистрация
        </h2>

        <Register />

        <h3 className="text-grey font-normal text-xs leading-[150%] tracking-[0px] text-center font-montserrat pb-[4px] pt-[24px]">
          У вас уже есть аккаунт?
        </h3>

        <Link to="/login">
          <p className="text-grey font-normal text-xs leading-[150%] tracking-[0px] text-center font-montserrat underline cursor-pointer">
            Войдите здесь
          </p>
        </Link>
      </div>
    </main>
  </div>
);

export default RegisterPage;
