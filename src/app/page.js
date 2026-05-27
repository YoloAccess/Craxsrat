import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroBackground}></div>
        <div className={styles.gridOverlay}></div>
        
        <div className={`${styles.logoContainer} animate-fade-in-up`}>
          <Image 
            src="/logo.png" 
            alt="Craxs RAT Logo" 
            width={180} 
            height={180} 
            className={styles.logo}
            priority
          />
        </div>

        <div className={`${styles.badge} animate-fade-in-up delay-100`}>
          Threat Intelligence Report
        </div>
        
        <h1 className={`${styles.heroTitle} animate-fade-in-up delay-200`}>
          Understanding <span>Craxs RAT</span>
        </h1>
        
        <p className={`${styles.heroSubtitle} animate-fade-in-up delay-300`}>
          An advanced Android Remote Access Trojan capable of completely compromising mobile devices. 
          Learn how it operates, its devastating capabilities, and how to protect yourself.
        </p>

        <a 
          href="https://t.me/Pretty_Hax" 
          target="_blank" 
          rel="noopener noreferrer" 
          className={`${styles.telegramButton} animate-fade-in-up delay-300`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 0 0-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .24z"/>
          </svg>
          <span className={styles.textSwitcher}>
            <span className={styles.textEn}>Join Telegram Channel</span>
            <span className={styles.textZh}>加入电报频道</span>
          </span>
        </a>
      </section>

      {/* Interface Preview Section */}
      <section className={styles.previewSection}>
        <div className={`${styles.dashboardPreview} animate-fade-in-up delay-100`}>
          <Image 
            src="/interface.png" 
            alt="Craxs RAT Interface Preview" 
            width={1280} 
            height={720} 
            className={styles.dashboardImage}
          />
        </div>
      </section>

      {/* Capabilities Section */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Devastating Capabilities</h2>
          <p className={styles.sectionSubtitle}>
            Craxs RAT is considered one of the most powerful and dangerous Android trojans available on dark web forums. Once installed, it grants attackers near-total control over the device.
          </p>
        </div>

        <div className={styles.grid}>
          <div className={styles.card}>
            <div className={styles.cardIcon}>📱</div>
            <h3 className={styles.cardTitle}>Live Screen Control</h3>
            <p className={styles.cardDesc}>
              Attackers can view and interact with the device's screen in real-time, bypassing black screens and recording active sessions without the user's knowledge.
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.cardIcon}>⌨️</div>
            <h3 className={styles.cardTitle}>Advanced Keylogging</h3>
            <p className={styles.cardDesc}>
              Captures every keystroke typed on the device, stealing passwords, search histories, and private messages across all applications.
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.cardIcon}>📁</div>
            <h3 className={styles.cardTitle}>File System Access</h3>
            <p className={styles.cardDesc}>
              Full read and write access to the device's storage. Attackers can download sensitive documents, photos, and upload additional malware payloads.
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.cardIcon}>💬</div>
            <h3 className={styles.cardTitle}>SMS & 2FA Interception</h3>
            <p className={styles.cardDesc}>
              Intercepts incoming SMS messages and OTPs (One Time Passwords), allowing attackers to bypass two-factor authentication on banking and email accounts.
            </p>
          </div>
          
          <div className={styles.card}>
            <div className={styles.cardIcon}>🎤</div>
            <h3 className={styles.cardTitle}>Mic & Camera Hijacking</h3>
            <p className={styles.cardDesc}>
              Silently activates the microphone and front or rear cameras to spy on the victim's physical surroundings.
            </p>
          </div>
          
          <div className={styles.card}>
            <div className={styles.cardIcon}>🛡️</div>
            <h3 className={styles.cardTitle}>Anti-Delete & Stealth</h3>
            <p className={styles.cardDesc}>
              Uses Android Accessibility Services to prevent users from uninstalling the app. It hides its icon and operates entirely in the background.
            </p>
          </div>
        </div>
      </section>

      {/* Attack Vectors Section */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={`${styles.sectionTitle} ${styles.danger}`}>Attack Vectors</h2>
          <p className={styles.sectionSubtitle}>
            How does Craxs RAT infect a device? Attackers rely on social engineering and deceptive tactics.
          </p>
        </div>

        <div className={styles.grid}>
          <div className={`${styles.card} ${styles.dangerCard}`}>
            <div className={styles.cardIcon}>🎣</div>
            <h3 className={styles.cardTitle}>Phishing Campaigns</h3>
            <p className={styles.cardDesc}>
              Victims receive SMS or emails containing links to fake websites prompting them to download a "security update" or "shipping app" which is actually the RAT payload.
            </p>
          </div>

          <div className={`${styles.card} ${styles.dangerCard}`}>
            <div className={styles.cardIcon}>📦</div>
            <h3 className={styles.cardTitle}>Trojanized APKs</h3>
            <p className={styles.cardDesc}>
              The malware is frequently bundled into modified versions of popular apps or games distributed on third-party app stores and forums.
            </p>
          </div>
          
          <div className={`${styles.card} ${styles.dangerCard}`}>
            <div className={styles.cardIcon}>🧩</div>
            <h3 className={styles.cardTitle}>Dropper Apps</h3>
            <p className={styles.cardDesc}>
              Seemingly harmless apps on official stores that later download and install the Craxs RAT payload after bypassing initial security checks.
            </p>
          </div>
        </div>
      </section>

      {/* Defense Section */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>How to Defend Yourself</h2>
          <p className={styles.sectionSubtitle}>
            Protecting against advanced malware like Craxs RAT requires a combination of common sense and technological safeguards.
          </p>
        </div>

        <div className={styles.grid}>
          <div className={styles.card}>
            <div className={styles.cardIcon}>✅</div>
            <h3 className={styles.cardTitle}>Avoid Sideloading</h3>
            <p className={styles.cardDesc}>
              Never download APK files from unknown websites or forums. Stick exclusively to the Google Play Store or trusted OEM stores like Samsung Galaxy Store.
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.cardIcon}>🔒</div>
            <h3 className={styles.cardTitle}>Audit Permissions</h3>
            <p className={styles.cardDesc}>
              Be extremely cautious with apps requesting "Accessibility Services" or "Device Admin" privileges. Craxs RAT relies on these to maintain persistence and control.
            </p>
          </div>
          
          <div className={styles.card}>
            <div className={styles.cardIcon}>🔄</div>
            <h3 className={styles.cardTitle}>System Updates</h3>
            <p className={styles.cardDesc}>
              Keep your Android OS and all applications updated. Security patches frequently close the vulnerabilities that RATs use to escalate privileges.
            </p>
          </div>
        </div>
      </section>
      
      {/* Warning Banner */}
      <section className={styles.warningBannerWrapper}>
        <div className={styles.warningBanner}>
          <h3>⚠️ Important Disclaimer</h3>
          <p>
            We do <strong>NOT</strong> sell, distribute, or provide access to Craxs RAT or any other malicious software. 
            This website is strictly for educational purposes and threat intelligence sharing to help security researchers and users understand and defend against advanced mobile threats.
          </p>
        </div>
      </section>

      <footer className={styles.footer}>
        <p>Educational Purposes Only. Understand the threat to build better defenses.</p>
        <div style={{ marginTop: '1rem', fontSize: '0.9rem' }}>
          <Link href="/privacy-policy" style={{ textDecoration: 'underline' }}>
            Privacy Policy for Extension
          </Link>
        </div>
      </footer>
    </main>
  );
}
