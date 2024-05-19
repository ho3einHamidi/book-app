import styles from "./SearchBar.module.css";
function SearchBar() {
  return (
    <div className={styles["search-bar"]}>
      <input name="input" placeholder="Search Title" />
    </div>
  );
}

export default SearchBar;
