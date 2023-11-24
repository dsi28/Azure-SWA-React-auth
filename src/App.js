import React from 'react';

function App() {
  const value = 'World';
  return <div>Hello {value}!
  
  <div><a href="/profile">profile</a></div>
  <a href="/.auth/login/github">Login</a>
  <a href="/.auth/login/github?post_login_redirect_uri=https://http://localhost:3000/profile">Login</a>
  </div>;
}

export default App;
