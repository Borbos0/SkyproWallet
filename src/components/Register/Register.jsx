import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { isEmailValid, isMinLength, isRequired } from '../../utils/validation';
import { registerUser } from '../../api/api';
import TextInput from '../../utils/ui/TextInput';

const Register = () => {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState('');

  const nameOk = isRequired(name);
  const emailOk = isEmailValid(email);
  const passOk = isMinLength(pass, 5);

  const anyError = submitted && (!nameOk || !emailOk || !passOk);

  const handleInput = (setter) => (e) => {
    setter(e.target.value);
    if (submitted) setServerError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true);
    setServerError('');

    if (!nameOk || !emailOk || !passOk) return;

    try {
      setLoading(true);

      await registerUser(email, name, pass);

      navigate('/login');
    } catch (err) {
      console.error(err);
      const apiMsg =
        err?.response?.data?.message ||
        err?.response?.data?.error ||
        'Не удалось завершить регистрацию';
      setServerError(apiMsg);
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
        type="text"
        placeholder="Имя"
        value={name}
        onChange={handleInput(setName)}
        hasError={submitted && !nameOk}
      />

      <TextInput
        type="email"
        placeholder="Email"
        value={email}
        onChange={handleInput(setEmail)}
        hasError={submitted && !emailOk}
      />

      <TextInput
        type="password"
        placeholder="Пароль"
        value={pass}
        onChange={handleInput(setPass)}
        hasError={submitted && !passOk}
      />

      {(anyError || serverError) && (
        <p className="text-red-600 text-[12px] font-montserrat text-center">
          {serverError ||
            'Упс! Введенные вами данные некорректны. Введите данные корректно и повторите попытку.'}
        </p>
      )}

      <button
        type="submit"
        disabled={loading}
        className={`rounded-[6px] bg-[#1FA46C] hover:bg-[#168455] text-white text-[12px] font-semibold leading-[15px] text-center font-montserrat py-[12px] transition
        ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
      >
        {loading ? 'Создаём…' : 'Зарегистрироваться'}
      </button>
    </form>
  );
};

export default Register;
