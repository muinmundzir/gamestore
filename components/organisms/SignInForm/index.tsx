import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { toast } from 'react-toastify';
import Cookies from 'js-cookie';
import { setLogin } from '../../../services/auth';

export default function SignInForm() {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = async () => {
    const data = { email, password };

    if (!email || !password) {
      toast.error('Email and Password must be filled!');
    } else {
      const result = await setLogin(data);
      if (result.error) {
        toast.error(result.message);
      } else {
        toast.success('Login Success!');
        const { token } = result.data;
        const tokenBase64 = btoa(token);
        Cookies.set('token', tokenBase64, { expires: 1 });
        router.push('/');
      }
    }
  };

  return (
    <>
      <h2 className="text-4xl fw-bold color-palette-1 mb-10">Sign In</h2>
      <p className="text-lg color-palette-1 m-0">Masuk untuk melakukan proses top up</p>
      <div className="pt-50">
        <label htmlFor="email" className="form-label text-lg fw-medium color-palette-1 mb-10">
          Email
          Address
        </label>
        <input
          type="email"
          className="form-control rounded-pill text-lg"
          id="email"
          name="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          aria-describedby="email"
          placeholder="Enter your email address"
        />
      </div>
      <div className="pt-30">
        <label htmlFor="password" className="form-label text-lg fw-medium color-palette-1 mb-10">Password</label>
        <input
          type="password"
          className="form-control rounded-pill text-lg"
          id="password"
          name="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          aria-describedby="password"
          placeholder="Your password"
        />
      </div>
      <div className="button-group d-flex flex-column mx-auto pt-50">
        <button
          className="btn btn-sign-in fw-medium text-lg text-white rounded-pill mb-16"
          type="button"
          onClick={onSubmit}
        >
          Continue to Sign In
        </button>
        <Link href="/sign-up">
          <a
            className="btn btn-sign-up fw-medium text-lg color-palette-1 rounded-pill"
            role="button"
          >
            Sign
            Up
          </a>
        </Link>
      </div>
    </>
  );
}
