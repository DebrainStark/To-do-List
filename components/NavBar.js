// components/Navbar.js
import Link from 'next/link';
import styles from '../app/Homepage.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        
        <Link href="/" className={styles.logo}>MyApp</Link>
        
        <ul className={styles.authlinks}>
          <li><Link href="/auth/login">Log In</Link></li>
          <li><Link href="/auth/signup">Sign Up</Link></li>
          <li><Link href="/waitlist" >Join Waitlist</Link></li>
        </ul>

      </div>
    </nav>
  );
};

export default Navbar;
