import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../../api/api';
import { setToken } from '../../utils/auth/storage';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email.trim() || !password.trim()) {
      setError(true);
      return;
    }

    try {
      setLoading(true);
      setError(false);

      const { token, user } = await loginUser(email, password);

      if (!token) {
        console.warn('Unexpected auth response shape');
        throw new Error('Token not found');
      }

      setToken(token);
      if (user) localStorage.setItem('user', JSON.stringify(user));

      navigate('/expenses');
    } catch (e) {
      console.error(e);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const handleInput = (setter) => (e) => {
    setter(e.target.value);
    if (error) setError(false);
    if (error) setError(false);
  };

  const baseClasses = `box-border rounded-[6px] text-[12px] leading-[15px] tracking-[0px] text-left font-montserrat px-4 py-3 w-full`;
  const normalBorder = `border-[0.5px] border-[#999999] placeholder-[#999999] text-black`;
  const errorBorder = `bg-red-100 border-[1px] border-red-600 text-red-600`;

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="flex flex-col gap-4 w-full max-w-xs"
    >
      <div className="relative w-full">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={handleInput(setEmail)}
          className={`${baseClasses} ${error ? errorBorder : normalBorder}`}
        />
        {error && (
          <span className="absolute right-2 top-1/2 transform -translate-y-1/2 text-red-600">
            *
          </span>
        )}
      </div>

      <div className="relative w-full">
        <input
          type="password"
          placeholder="Пароль"
          value={password}
          onChange={handleInput(setPassword)}
          className={`${baseClasses} ${error ? errorBorder : normalBorder}`}
        />
        {error && (
          <span className="absolute right-2 top-1/2 transform -translate-y-1/2 text-red-600">
            *
          </span>
        )}
      </div>

      {error && (
        <p className="text-red-600 text-[12px] font-montserrat">
          Упс! Введенные вами данные некорректны. Введите данные корректно и
          повторите попытку. Упс! Введенные вами данные некорректны. Введите
          данные корректно и повторите попытку.
        </p>
      )}

      <button
        type="submit"
        disabled={loading}
        className={`rounded-[6px] bg-[#1FA46C] hover:bg-[#168455] text-white text-[12px] font-semibold leading-[15px] text-center font-montserrat py-[12px] transition
        ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
      >
        {loading ? 'Входим…' : 'Войти'}
      </button>
    </form>
  );
};

export default Login;
