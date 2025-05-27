const Register = () => (
    <form className="flex flex-col gap-4 w-full max-w-xs">
      <input className="border rounded px-3 py-2" type="email" placeholder="Email" />
      <input className="border rounded px-3 py-2" type="password" placeholder="Пароль" />
      <input className="border rounded px-3 py-2" type="password" placeholder="Повторите пароль" />
      <button className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700" type="submit">
        Зарегистрироваться
      </button>
    </form>
  );
  
  export default Register;
  