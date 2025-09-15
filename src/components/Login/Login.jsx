import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../../api/api';
import { setToken } from '../../utils/auth/storage';
import TextInput from '../../utils/ui/TextInput';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleInput = (setter) => (e) => {
    setter(e.target.value);
    if (error) setError(false);
  };

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
      if (!token) throw new Error('Token not found');

      setToken(token);
      if (user) localStorage.setItem('user', JSON.stringify(user));

      navigate('/expenses');
    } catch (err) {
      console.error(err);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="flex flex-col gap-4 w-full max-w-xs"
    >
      <TextInput
        type="email"
        placeholder="Email"
        value={email}
        onChange={handleInput(setEmail)}
        hasError={error}
      />

      <TextInput
        type="password"
        placeholder="Пароль"
        value={password}
        onChange={handleInput(setPassword)}
        hasError={error}
      />

      {error && (
        <p className="text-red-600 text-[12px] font-montserrat">
          Упс! Введенные вами данные некорректны. Введите данные корректно и
          повторите попытку.
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
