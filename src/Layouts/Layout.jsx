import styles from "./Layout.module.css";
function Layout({ children }) {
  return (
    <>
      <header>
        <h1>Book App</h1>
      </header>
      {children}
      <footer>
        <p>Developed By Hossein Hamidi</p>
      </footer>
    </>
  );
}

export default Layout;
