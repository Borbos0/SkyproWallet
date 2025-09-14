import { useEffect, useState } from 'react';
import { AUTH_TOKEN_KEY, isAuthenticated } from './storage';

export function useAuth() {
  const [isAuth, setIsAuth] = useState(isAuthenticated());

  useEffect(() => {
    const update = () => setIsAuth(isAuthenticated());

    const onStorage = (e) => {
      if (e.key === AUTH_TOKEN_KEY) update();
    };
    window.addEventListener('storage', onStorage);

    window.addEventListener('auth:changed', update);

    return () => {
      window.removeEventListener('storage', onStorage);
      window.removeEventListener('auth:changed', update);
    };
  }, []);

  return isAuth;
}
