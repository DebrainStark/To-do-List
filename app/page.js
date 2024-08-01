import Link from 'next/link';
import styles from './Homepage.module.css';

const HomePage = () => {
  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.container}>
          <Link href="/" className={styles.logo}>ToMe</Link>
          <ul className={styles.navLinks}>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>

          <ul className={styles.authlinks}>
            <li><Link href="/">LogIn</Link></li>
            <li><Link href="/about">SignUp</Link></li>
          </ul>

        </div>
      </nav>

      <div className={styles.container}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <h1>Welcome to Our To-Do List App</h1>
          <p>Stay organized and boost your productivity with our innovative to-do list app.</p>
          <Link href="/waitlist" legacyBehavior>
            <a className={styles.ctaButton}>Join the Waitlist</a>
          </Link>
        </section>

        {/* Features Section */}
        <section className={styles.features}>
          <h2>Features</h2>
          <div className={styles.featureList}>
            <div className={styles.feature}>
              <h3>Feature One</h3>
              <p>Description of the first feature.</p>
            </div>
            <div className={styles.feature}>
              <h3>Feature Two</h3>
              <p>Description of the second feature.</p>
            </div>
            <div className={styles.feature}>
              <h3>Feature Three</h3>
              <p>Description of the third feature.</p>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className={styles.testimonials}>
          <h2>What Our Users Say</h2>
          <div className={styles.testimonialList}>
            <div className={styles.testimonial}>
              <p>"This app has changed the way I organize my tasks!"</p>
              <p>- User One</p>
            </div>
            <div className={styles.testimonial}>
              <p>"I love the simplicity and functionality."</p>
              <p>- User Two</p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className={styles.ctaSection}>
          <h2>Ready to Get Started?</h2>
          <Link href="/waitlist" legacyBehavior>
            <a className={styles.ctaButton}>Join the Waitlist</a>
          </Link>
        </section>

        {/* Footer */}
        <footer className={styles.footer}>
          <p>Follow us on social media</p>
          <div className={styles.socialLinks}>
            <a href="https://twitter.com" >Twitter</a>
            <a href="https://facebook.com">Facebook</a>
            <a href="https://instagram.com">Instagram</a>
          </div>
        </footer>
      </div>
    </>
  );
};

export default HomePage;
