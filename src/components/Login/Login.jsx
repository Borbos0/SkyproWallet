const Login = () => (
  <form className="flex flex-col gap-4 w-full max-w-xs">
    <input
      className="border rounded px-3 py-2"
      type="email"
      placeholder="Email"
    />
    <input
      className="border rounded px-3 py-2"
      type="password"
      placeholder="Пароль"
    />
    <button
      className="bg-blue-700 text-white py-2 px-4 rounded hover:bg-blue-800"
      type="submit"
    >
      Войти
    </button>
  </form>
);

export default Login;
