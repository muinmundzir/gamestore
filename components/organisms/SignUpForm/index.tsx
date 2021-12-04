import { useState } from 'react';
import { useRouter } from 'next/router';
import cx from 'classnames';

export default function SignUpForm() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const className = {
    label: cx('form-label text-lg fw-medium color-palette-1 mb-10'),
  };

  const onSubmit = () => {
    const userForm = {
      email,
      name,
      password,
      phoneNumber,
    };
    localStorage.setItem('user-form', JSON.stringify(userForm));
    router.push('/sign-up-photo');
  };

  return (
    <>
      <h2 className="text-4xl fw-bold color-palette-1 mb-10">Sign Up</h2>
      <p className="text-lg color-palette-1 m-0">Daftar dan bergabung dengan kami</p>
      <div className="pt-50">
        <label htmlFor="name" className={className.label}>Full Name</label>
        <input
          type="text"
          className="form-control rounded-pill text-lg"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          aria-describedby="name"
          placeholder="Enter your name"
        />
      </div>
      <div className="pt-30">
        <label htmlFor="phoneNumber" className={className.label}>
          Phone Number
        </label>
        <input
          type="text"
          className="form-control rounded-pill text-lg"
          id="phoneNumber"
          name="phoneNumber"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          aria-describedby="phoneNumber"
          placeholder="Enter your phone number"
        />
      </div>
      <div className="pt-30">
        <label htmlFor="email" className={className.label}>
          Email
          Address
        </label>
        <input
          type="email"
          className="form-control rounded-pill text-lg"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          aria-describedby="email"
          placeholder="Enter your email address"
        />
      </div>
      <div className="pt-30">
        <label htmlFor="password" className={className.label}>Password</label>
        <input
          type="password"
          className="form-control rounded-pill text-lg"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          aria-describedby="password"
          placeholder="Your password"
        />
      </div>
      <div className="button-group d-flex flex-column mx-auto pt-50">
        <button
          type="button"
          className="btn btn-sign-up fw-medium text-lg text-white rounded-pill mb-16"
          onClick={onSubmit}
        >
          Continue
        </button>
        <a
          className="btn btn-sign-in fw-medium text-lg color-palette-1 rounded-pill"
          href="/sign-in"
          role="button"
        >
          Sign
          In
        </a>
      </div>
    </>
  );
}
