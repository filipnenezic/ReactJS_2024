import { json, redirect } from 'react-router-dom';
import AuthForm from '../components/AuthForm';

function AuthenticationPage() {
  return <AuthForm />;
}

export default AuthenticationPage;

export async function action({ request }) {
  const mode = 'login';

  if (mode !== 'login') {
    throw json({ message: 'Unsupported mode.' }, { status: 422 });
  }

  const formData = await request.formData();
  const email = formData.get('email');
  const password = formData.get('password');

  const storedEmail = 'john@mail.com';
  const storedPassword = 'changeme';

  if (email === storedEmail && password === storedPassword) {
    const accessToken = generateAccessToken(email);

    localStorage.setItem('accessToken', accessToken);

    return redirect('/');
  } else {
    throw json({ message: 'Invalid email or password.' }, { status: 401 });
  }
}

function generateAccessToken(email) {
  const access_token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsImlhdCI6MTY3Mjc2NjAyOCwiZXhwIjoxNjc0NDk0MDI4fQ.kCak9sLJr74frSRVQp0_27BY4iBCgQSmoT3vQVWKzJg';
  return access_token;
}
