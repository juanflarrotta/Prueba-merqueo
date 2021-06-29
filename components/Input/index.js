import styles from "./styles.module.scss";

export default function Input({
  value,
  placeholder,
  onBlur,
  onFocus,
  handleChange,
}) {
  return (
    <input
      type="text"
      onBlur={(e) => {
        if (onBlur) {
          onBlur(e);
        }
      }}
      onFocus={(e) => {
        if (onFocus) {
          onFocus(e);
        }
      }}
      value={value}
      onChange={handleChange}
      className={styles.input}
      placeholder={placeholder}
    />
  );
}
