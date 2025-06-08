import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();

  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isFormSubmitting, setIsFormSubmitting] = useState(false);
  const [isButtonInactive, setIsButtonInactive] = useState(false);

  const isEmailValid = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const emailValid = isEmailValid(userEmail);
  const passwordValid = userPassword.length >= 5;
  const confirmPasswordValid =
    confirmPassword === userPassword && confirmPassword !== '';

  const showError =
    formSubmitted && (!emailValid || !passwordValid || !confirmPasswordValid);

  useEffect(() => {
    if (emailValid && passwordValid && confirmPasswordValid) {
      setIsButtonInactive(false);
    } else if (formSubmitted) {
      setIsButtonInactive(true);
    }
  }, [emailValid, passwordValid, confirmPasswordValid, formSubmitted]);

  const inputClass = (hasError, isValid) => {
    const baseClasses =
      'border rounded px-3 py-2 w-full font-montserrat text-black text-[12px] font-normal leading-[15px] tracking-[0px] text-left placeholder:text-[#999999] transition-colors duration-200';
    if (hasError)
      return `${baseClasses} border-red-700 bg-red-100 text-red-700 placeholder:text-red-700`;
    if (isValid)
      return `${baseClasses} border-green-700 bg-green-100 text-green-700 placeholder:text-green-700`;
    return `${baseClasses} border-gray-300`;
  };

  const handleSubmit = (e) => {
  e.preventDefault();
  setFormSubmitted(true);

  if (!emailValid || !passwordValid || !confirmPasswordValid) {
    setIsButtonInactive(true);
    return;
  }

  localStorage.setItem(
    'user',
    JSON.stringify({ email: userEmail, password: userPassword })
  );

  setIsFormSubmitting(true);
  setIsButtonInactive(true);

  setTimeout(() => navigate('/login'), 1000);
};


  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 w-full max-w-xs"
      noValidate
    >
      <div className="relative w-full">
        <input
          className={inputClass(formSubmitted && !emailValid, emailValid)}
          type="email"
          placeholder="Email"
          value={userEmail}
          onChange={(e) => setUserEmail(e.target.value)}
        />
        {formSubmitted && !emailValid && (
          <span className="absolute right-2 top-1/2 transform -translate-y-1/2 text-red-700 font-bold">
            *
          </span>
        )}
      </div>

      <div className="relative w-full">
        <input
          className={inputClass(formSubmitted && !passwordValid, passwordValid)}
          type="password"
          placeholder="Пароль"
          value={userPassword}
          onChange={(e) => setUserPassword(e.target.value)}
        />
        {formSubmitted && !passwordValid && (
          <span className="absolute right-2 top-1/2 transform -translate-y-1/2 text-red-700 font-bold">
            *
          </span>
        )}
      </div>

      <div className="relative w-full">
        <input
          className={inputClass(
            formSubmitted && !confirmPasswordValid,
            confirmPasswordValid,
          )}
          type="password"
          placeholder="Повторите пароль"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        {formSubmitted && !confirmPasswordValid && (
          <span className="absolute right-2 top-1/2 transform -translate-y-1/2 text-red-700 font-bold">
            *
          </span>
        )}
      </div>

      {showError && (
        <p className="text-red-700 text-[12px] font-montserrat text-center">
          Упс! Введенные вами данные не корректны. Введите данные корректно и
          повторите попытку.
        </p>
      )}

      <button
  type="submit"
  disabled={isFormSubmitting || isButtonInactive}
  className={`
    w-full
    rounded-[6px]
    ${isFormSubmitting || isButtonInactive
      ? 'bg-[#999999] cursor-not-allowed'
      : 'bg-[rgb(31,164,108)] hover:bg-green-700'}
    text-white
    text-[12px]
    font-semibold
    leading-[15px]
    tracking-[0px]
    text-center
    font-montserrat
    py-2
    transition
  `}
>
  Зарегистрироваться
</button>

    </form>
  );
};

export default Register;