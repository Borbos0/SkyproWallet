import { NavLink, useNavigate } from 'react-router-dom';
import Logo from '../../assets/Logo.png';
import { useAuth } from '../../utils/auth/useAuth';
import { setToken } from '../../utils/auth/storage';

const Header = () => {
  const isAuth = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    setToken(null);
    localStorage.removeItem('user');
    navigate('/login', { replace: true });
  };

  return (
    <header className="bg-white py-3.5 px-6">
      <div className="max-w-7xl mx-auto flex items-center gap-[320px]">
        <img src={Logo} alt="Skypro Wallet Logo" className="pl-[120px]" />

        {isAuth && (
          <nav className="flex items-center gap-[48px]">
            <NavLink
              to="/expenses"
              className={({ isActive }) =>
                `px-3 py-2 rounded-[6px] text-sm transition text-black font-montserrat font-normal
                 ${isActive ? 'text-green underline decoration-green font-semibold' : 'hover:text-green hover:underline hover:decoration-green'}`
              }
            >
              Расходы
            </NavLink>

            <NavLink
              to="/analytics"
              className={({ isActive }) =>
                `px-3 py-2 rounded-[6px] text-sm transition text-black font-montserrat font-normal
                 ${isActive ? 'text-green underline decoration-green font-semibold' : 'hover:text-green hover:underline hover:decoration-green'}`
              }
            >
              Аналитика
            </NavLink>
            <div className="pl-[100%]">
              <button
                onClick={handleLogout}
                className="px-3 py-2 text-sm hover:underline text-black font-bold font-montserrat"
              >
                Выйти
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
