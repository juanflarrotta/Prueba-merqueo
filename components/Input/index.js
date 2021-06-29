import { useState } from "react";
import styles from "./input.module.scss";

export default function Input(props) {
  const { value, placeholder, onBlur, onFocus, handleChange } = props;
  const [error, setError] = useState("");
  const errorClass = error ? styles.error : "";
  return (
    <div className={styles.inputWrapper}>
      <input
        className={`${styles.input} ${errorClass}`}
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
        onChange={(e) => {
          const { value } = e.target;
          if (value.length > 255) {
            setError("El text debe ser máximo de 255 caractéres");
          } else {
            setError("");
          }
          handleChange(e);
        }}
        placeholder={placeholder}
      />
      {error !== "" && <span className={styles.errorText}>{error}</span>}
    </div>
  );
}
