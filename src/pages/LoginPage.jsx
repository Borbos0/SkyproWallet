import Header from '../components/Header/Header';
import Login from '../components/Login/Login';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  return (
    <div>
      <Header />
      <main className="flex flex-col items-center justify-center min-h-screen">
        <h2 className="text-black font-bold text-[24px] leading-[29px] tracking-[0px] text-center font-montserratpb-[24px]">
          Вход
        </h2>
        <Login />
        <h3 className="text-[#999999] font-normal text-[12px] leading-[150%] tracking-[0px] text-center font-montserratpb-[4px]pt-[24px]">
          Нужно зарегистрироваться?
        </h3>
        <Link to="/register">
          <p
            className="text-[#999999] font-normal text-[12px] leading-[150%] tracking-[0px] text-center font-montserratunderlinecursor-pointer
          "
          >
            Регистрируйтесь здесь
          </p>
        </Link>
      </main>
    </div>
  );
};

export default LoginPage;
