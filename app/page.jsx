"use client";

import { signIn } from "next-auth/react";
import { SessionProvider } from "next-auth/react";
import styles from "../styles/page.module.css";
import { useState } from "react";

export default function Login(session) {
  const [email, setEmail] = useState("mau");

  const [password, setPassword] = useState("afasdasdsa");

  const [user, setUser] = useState('');
  
  const [contraseña, setcontraseña] = useState('')

  const [Islogin, setIsLogin] = useState(false)

  function handelChange(name, value) {
    if (name === 'usuario') {
      setUser(value)
    }else{
      setcontraseña(value)
    }
  }

  function ifMatch(params) {
    if (params.user.length >0 && params.contraseña.length >0) {
      if (params.user === 'Nextapp' && params.contraseña === 'admin') {
        const {user, contraseña}= params;
        let ac = {user,contraseña};
        let account = JSON.stringify(ac);
        localStorage.setItem('account', account);
        setIsLogin(true)
        if (Islogin === true) {
          location.href = 'http://localhost:3000/Home';
        }
      }else{
        setIsLogin(false)
        if (Islogin === false) {
          location.href = 'http://localhost:3000/'
        }
      }

    }else{
      setIsLogin(false)
    }
  }

  function handleSubmit() {
    let account ={user, contraseña}
    if (account) {
    ifMatch(account)
    console.log(account)
    }
  }

  return (
    <SessionProvider session={session}>
      <main className={styles.main}>
        <div className={styles.description}>
          <div></div>
          <h2>LOGIN</h2>
          <div>
            <label>USER:</label>
            <input
              id="user"
              type="text"
              name="usuario"
              placeholder="ingrese su usuario"
              onChange={(e) => handelChange(e.target.name, e.target.value)}
              className={styles.imput}
            ></input>
          </div>

          <div>
            <label>PASSWORD:</label>
            <input id="password" name="contraseña" type="password" placeholder="ingrese su contraseña"  
             onChange={(e) => handelChange(e.target.name, e.target.value)}className={styles.imput}></input>
          </div>

          <button onClick={handleSubmit} className={styles.button_login}>Log-in</button>

          <button
            className={styles.button_google}
            onClick={() => {
              signIn("credentials", {
                callbackUrl: "/Home",
                redirect: true,
                email,
                password,
              });
            }}
          >
            <div>
              <h3>Google Authentication</h3>
              <img src="./google-icon.ico" className={styles.image_auth} />
            </div>
          </button>

          <div></div>
          <div className={styles.image}>
            <img src="./favicon.ico" />
          </div>
          <div></div>
        </div>
      </main>
    </SessionProvider>
  );
}
