import Link from 'next/link';
import styles from './page.module.css';

export const metadata = {
  title: 'Privacy Policy | Craxs RAT Extension',
  description: 'Privacy Policy for the Craxs RAT Google Chrome Extension.',
};

export default function PrivacyPolicy() {
  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <div className={styles.headerBackground}></div>
        <div className="animate-fade-in-up">
          <h1 className={styles.title}>Privacy Policy</h1>
          <p className={styles.subtitle}>For the Craxs RAT Google Chrome Extension</p>
          <p className={styles.subtitle} style={{marginTop: '0.5rem', fontSize: '0.9rem'}}>Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
        </div>
      </header>

      <div className={styles.content}>
        <Link href="/" className={`${styles.backLink} animate-fade-in-up delay-100`}>
          <span>← Back to Home</span>
        </Link>

        <section className={`${styles.section} animate-fade-in-up delay-100`}>
          <h2>🛡️ Overview</h2>
          <p>
            This Privacy Policy applies to the <strong>Craxs RAT</strong> Google Chrome Extension. We are committed to protecting your privacy and ensuring transparency about how your data is handled when you use our extension.
          </p>
        </section>

        <section className={`${styles.section} animate-fade-in-up delay-100`}>
          <h2>📁 Data Collection and Usage</h2>
          <p>
            Our extension is designed with a privacy-first approach:
          </p>
          <ul>
            <li><strong>No Personal Information:</strong> We do not collect, store, or transmit any personally identifiable information (PII).</li>
            <li><strong>Local Processing:</strong> All core functionalities of the extension operate locally on your device. We do not send your browsing history, keystrokes, or sensitive data to external servers.</li>
            <li><strong>Required Permissions:</strong> The extension only requests the minimum permissions necessary to function correctly within your browser environment.</li>
          </ul>
        </section>

        <section className={`${styles.section} animate-fade-in-up delay-200`}>
          <h2>🔒 Third-Party Services</h2>
          <p>
            The Craxs RAT Extension does not integrate with third-party analytics trackers, advertising networks, or data brokers. Your activity within the extension remains entirely private and is not monetized or shared.
          </p>
        </section>

        <section className={`${styles.section} animate-fade-in-up delay-200`}>
          <h2>🔄 Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy occasionally to reflect changes in our extension or compliance requirements. Any significant updates will be communicated through the extension's release notes or via this website.
          </p>
        </section>
        
        <section className={`${styles.section} animate-fade-in-up delay-300`}>
          <h2>📞 Contact Us</h2>
          <p>
            If you have any questions, concerns, or requests regarding this Privacy Policy or the Craxs RAT Extension, please contact us through the official support channels provided on our main website.
          </p>
        </section>
      </div>

      <footer className={styles.footer}>
        <p>Craxs RAT Educational & Threat Intelligence</p>
      </footer>
    </main>
  );
}
