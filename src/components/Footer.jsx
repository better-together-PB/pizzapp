import styles from "../components/Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <p>
        Checkout the{" "}
        <a href="https://github.com/better-together-PB/pizzapp">GitHub</a>{" "}
        repository for our app Creators{" "}
        <a href="https://github.com/Kisyov92">🇧🇬 Atanas Kisyov</a>{" "}
        <a href="https://github.com/Goncaloduarte-23">Gonçalo Duarte 🇵🇹</a>
      </p>
      <p>
        Copyright © {new Date().getFullYear()} Pizza Palace - All rights
        reserved
      </p>
    </footer>
  );
}

export default Footer;
