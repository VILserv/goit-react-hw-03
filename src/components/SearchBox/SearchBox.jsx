import css from "./SearchBox.module.css";

export default function SearchBox({ value, onFilter }) {
  return (
    <div className={css.div}>
      <p>Find contacts by name</p>
      <input
        type="text"
        placeholder="Search"
        value={value}
        onChange={(e) => onFilter(e.target.value)}
      />
    </div>
  );
}
