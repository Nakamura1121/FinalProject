// import jwt_decode from 'jwt-decode';
import bcrypt from 'bcryptjs';

export function login(username, password) {
    const user = users[username];
    if (user && bcrypt.compareSync(password, user.password)) {
        alert ("Logged In Successfully")
      return { username: user.username };
    } else {
        alert ("Logged In Failed")
      return null;
    }
  }
export function logout() {
  localStorage.removeItem('token');
}

export function isAuthenticated() {
  const token = localStorage.getItem('token');
  return !!token;
}




