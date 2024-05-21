import styles from "./SearchBar.module.css";
function SearchBar({ changeInputHandler }) {
  return (
    <div className={styles["search-bar"]}>
      <input
        onChange={(e) => changeInputHandler(e.target.value.toLowerCase())}
        name="input"
        placeholder="Search Title"
      />
    </div>
  );
}

export default SearchBar;
