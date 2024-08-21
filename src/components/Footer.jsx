import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <p>
        Checkout the{" "}
        <a href="https://github.com/better-together-PB/pizzapp" target="_blank">
          GitHub
        </a>{" "}
        repository for our app Creators{" "}
        <a href="https://github.com/Kisyov92" target="_blank">
          🇧🇬 Atanas Kisyov
        </a>{" "}
        <a href="https://github.com/Goncaloduarte-23" target="_blank">
          Gonçalo Duarte 🇵🇹
        </a>
      </p>
      <p>
        Copyright © {new Date().getFullYear()} Pizza Palace - All rights
        reserved;
      </p>
    </footer>
  );
}

export default Footer;
