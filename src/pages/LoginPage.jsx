import Header from '../components/Header/Header';
import Login from '../components/Login/Login';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  return (
    <div>
      <Header />
      <main className="flex flex-col items-center justify-center min-h-screen bg-background">
        <div className="min-w-[379px] p-[32px] flex flex-col items-center bg-white shadow-[0px_20px_67px_-12px_#00000021] rounded-[30px]">
          <h2 className="text-black font-bold text-2xl leading-[29px] tracking-[0px] text-center font-montserrat pb-[24px]">
            Вход
          </h2>
          <Login />
          <h3 className="text-grey font-normal text-xs leading-[150%] tracking-[0px] text-center font-montserrat pb-[4px] pt-[24px]">
            Нужно зарегистрироваться?
          </h3>
          <Link to="/register">
            <p className="text-grey font-normal text-xs leading-[150%] tracking-[0px] text-center font-montserrat underlinecursor-pointer">
              Регистрируйтесь здесь
            </p>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default LoginPage;
