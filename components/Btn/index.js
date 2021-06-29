import Icon from "./icon";

import styles from "./btn.module.scss";

export default function Btn(props) {
  const { text, icon, isSecondary, clickHandler } = props;

  const nameClass = icon ? styles.icon : "";
  const typeClass = isSecondary ? styles.secondary : styles.primary;

  return (
    <button
      className={`${styles.btn} ${typeClass} ${nameClass}`}
      type="button"
      onClick={clickHandler}
    >
      {icon && <Icon icon={icon} />}
      {text && <span className={styles.btn__text}>{text}</span>}
    </button>
  );
}
