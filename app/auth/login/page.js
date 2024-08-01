// app/auth/login/page.js
import LoginForm from '../../../components/Auth/LoginForm';
import styles from '../../Homepage.module.css';

const LoginPage = () => {
  return (
    <div className={styles.loginn}>
      <h1>LOGIN</h1>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
