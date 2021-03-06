import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import { toast } from 'react-toastify';
import { getGameCategories } from '../services/player';
import { setSignUp } from '../services/auth';
import { CategoryTypes } from '../services/data-types';

export default function SignUpPhoto() {
  const router = useRouter();
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [image, setImage] = useState<any>('');
  const [imagePreview, setImagePreview] = useState<any>('');
  const [localForm, setLocalForm] = useState({
    name: '',
    email: '',
  });

  const getGameCategoriesAPI = useCallback(async () => {
    const data = await getGameCategories();
    setCategories(data.data);
    setSelectedCategory(data.data[0]._id);
  }, [getGameCategories]);

  useEffect(() => {
    getGameCategoriesAPI();
  }, []);

  useEffect(() => {
    const getLocalForm = localStorage.getItem('user-form');
    setLocalForm(JSON.parse(getLocalForm!));
  }, []);

  const onSubmit = async () => {
    const getLocalForm = await localStorage.getItem('user-form');
    const form = JSON.parse(getLocalForm!);
    const data = new FormData();

    data.append('image', image);
    data.append('name', form.name);
    data.append('email', form.email);
    data.append('password', form.password);
    data.append('username', form.name);
    data.append('phoneNumber', form.phoneNumber);
    data.append('role', 'user');
    data.append('status', 'Yes');
    data.append('favorite', selectedCategory);

    const result = await setSignUp(data);

    if (result.error) {
      toast.error(result.message);
    } else {
      toast.success('Register Success!');
      router.push('/sign-up-success');
      localStorage.removeItem('form-user');
    }
  };

  return (
    <section className="sign-up-photo mx-auto pt-lg-227 pb-lg-227 pt-130 pb-50">
      <div className="container mx-auto">
        <form action="">
          <div className="form-input d-md-block d-flex flex-column">
            <div>
              <div className="mb-20">
                <div className="image-upload text-center">
                  <label htmlFor="avatar">
                    {imagePreview === '/'
                      ? <Image src="/icon/upload.svg" width={120} height={120} alt="upload" />
                      : <img src={imagePreview} className="img-upload" alt="upload" />}
                  </label>
                  <input
                    id="avatar"
                    type="file"
                    name="avatar"
                    onChange={(e) => {
                      setImage(e.target.files![0]);
                      setImagePreview(URL.createObjectURL(e.target.files![0]));
                    }}
                    accept="image/png, image/jpeg"
                  />
                </div>
              </div>
              <h2 className="fw-bold text-xl text-center color-palette-1 m-0">{localForm.name}</h2>
              <p className="text-lg text-center color-palette-1 m-0">{localForm.email}</p>
              <div className="pt-50 pb-50">
                <label htmlFor="category" className="form-label text-lg fw-medium color-palette-1 mb-10">
                  Favorite
                  Game
                </label>
                <select
                  id="category"
                  name="category"
                  className="form-select d-block w-100 rounded-pill text-lg"
                  aria-label="Favorite Game"
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  {categories.map((category: CategoryTypes) => (
                    <option
                      key={category._id}
                      value={category._id}
                    >
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="button-group d-flex flex-column mx-auto">
              <button
                className="btn btn-create fw-medium text-lg text-white rounded-pill mb-16"
                type="button"
                onClick={onSubmit}
              >
                Create My Account
              </button>
              <Link href="/terms-and-conditions">
                <a
                  className="btn btn-tnc text-lg color-palette-1 text-decoration-underline pt-15"
                  href="/#"
                  role="button"
                >
                  Terms &
                  Conditions
                </a>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
