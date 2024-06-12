import { redirect } from 'react-router-dom';

export function action() {
  localStorage.removeItem('accessToken'); // Corrected key name
  return redirect('/login');
}
