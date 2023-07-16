import { signIn } from 'next-auth/client';

const LoginButton = () => {
  const handleLogin = () => {
    signIn('google');
  };

  return <button onClick={handleLogin}>Log in with Google</button>;
};

export default LoginButton;

// import styles from "../styles/page.module.css";
// import { useSession } from "next-auth/react";
// export default function Login() {

//   return (
//     <main className={styles.main}>
//       <div className={styles.description}>
//         <div></div>
//         <h2>LOGIN</h2>
//         <div>
//           <label>USER:</label>
//           <input className={styles.imput}></input>
//         </div>

//         <div>
//           <label>PASSWORD:</label>
//           <input type="password" className={styles.imput}></input>
//         </div>

//         <div>
//           <button className={styles.button_google}>
//             <h3>Google Authentication</h3>
//             <div>
//               <img src="./google-icon.ico" className={styles.image_auth} />
//             </div>
//           </button>
//         </div>
//         <div>
//           <button className={styles.button_facebook}>
//             <h3>Facebook Authentication</h3>
//             <div>
//               <img src="./facebook-icon.ico" className={styles.image_auth} />
//             </div>
//           </button>
//         </div>
//         <div className={styles.image}>
//           <img src="./favicon.ico" />
//         </div>
//         <div></div>
//       </div>
//     </main>
//   );
// }
