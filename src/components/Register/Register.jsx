import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const emailValid = email.includes('@');
  const passwordValid = password.length >= 5;
  const repeatPasswordValid = repeatPassword === password && repeatPassword !== '';

  
  const showEmailError = isSubmitted && !emailValid;
  const showPasswordError = isSubmitted && !passwordValid;
  const showRepeatPasswordError = isSubmitted && !repeatPasswordValid;

  useEffect(() => {
    if (isButtonDisabled) {
      if (emailValid && passwordValid && repeatPasswordValid) {
        setIsButtonDisabled(false);
        setIsSubmitted(false); 
      }
    }
  }, [emailValid, passwordValid, repeatPasswordValid, isButtonDisabled]);

  const inputClass = (hasError, isValid) => {
    const baseClasses = 'border rounded px-3 py-2 w-full font-montserrat text-black text-[12px] font-normal leading-[15px] tracking-[0px] text-left placeholder:text-[#999999] transition-colors duration-200';

    if (hasError) {
      return `${baseClasses} border-red-700 bg-red-100 text-red-700 placeholder:text-red-700`;
    }
    if (isValid) {
      return `${baseClasses} border-green-700 bg-green-100 text-green-700 placeholder:text-green-700`;
    }
    return `${baseClasses} border-gray-300`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);

    if (!emailValid || !passwordValid || !repeatPasswordValid) {

      setIsButtonDisabled(true);
      return;
    }

    setIsSubmitting(true);
    setIsButtonDisabled(true); 

    setTimeout(() => {
      navigate('/login');
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full max-w-xs" noValidate>
      <input
        className={inputClass(showEmailError, emailValid)}
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
          if (isSubmitted) setIsSubmitted(false);
        }}
      />
      {showEmailError && (
        <p className="text-red-700 text-[12px] font-montserrat text-center">
          Адрес электронной почты должен содержать символ "@".
        </p>
      )}

      <input
        className={inputClass(showPasswordError, passwordValid)}
        type="password"
        placeholder="Пароль"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
          if (isSubmitted) setIsSubmitted(false);
        }}
      />
      {showPasswordError && (
        <p className="text-red-700 text-[12px] font-montserrat text-center">
          Пароль должен быть не менее 5 символов.
        </p>
      )}

      <input
        className={inputClass(showRepeatPasswordError, repeatPasswordValid)}
        type="password"
        placeholder="Повторите пароль"
        value={repeatPassword}
        onChange={(e) => {
          setRepeatPassword(e.target.value);
          if (isSubmitted) setIsSubmitted(false);
        }}
      />
      {showRepeatPasswordError && (
        <p className="text-red-700 text-[12px] font-montserrat text-center">
          Пароли не совпадают или поле пустое.
        </p>
      )}

      <button
        type="submit"
        disabled={isSubmitting || isButtonDisabled}
        className={`w-full py-2 px-4 rounded-[6px] font-montserrat text-[12px] font-semibold leading-[15px] tracking-[0px] text-center
          ${(isSubmitting || isButtonDisabled) ? 'bg-gray-400 cursor-not-allowed' : 'bg-[rgb(31,164,108)] hover:bg-green-700 text-white'}
        `}
      >
        {isSubmitting ? 'Отправка...' : 'Зарегистрироваться'}
      </button>
    </form>
  );
};

export default Register;











  