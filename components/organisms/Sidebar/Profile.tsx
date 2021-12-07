import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import jwtDecode from 'jwt-decode';
import { JWTPayloadTypes, UserTypes } from '../../../services/data-types';

export default function Profile() {
  const [, setIsLogin] = useState(false);
  const [user, setUser] = useState({
    avatar: '',
    name: '',
    email: '',
  });

  useEffect(() => {
    const token = Cookies.get('token');
    if (token) {
      const jwtToken = atob(token);
      const payload: JWTPayloadTypes = jwtDecode(jwtToken);
      const userData: UserTypes = payload.player;
      const IMG = process.env.NEXT_PUBLIC_IMAGE;
      userData.avatar = `${IMG}/${user.avatar}`;
      setIsLogin(true);
      setUser(userData);
    }
  }, []);

  const IMG = process.env.NEXT_PUBLIC_IMAGE;
  return (
    <div className="user text-center pb-50 pe-30">
      <img src={`${IMG}/${user.avatar}`} width="90" height="90" className="img-fluid mb-20" style={{ borderRadius: '100%' }} alt={`${user.name} avatar`} />
      <h2 className="fw-bold text-xl color-palette-1 m-0">{user.name}</h2>
      <p className="color-palette-2 m-0">{user.email}</p>
    </div>
  );
}
