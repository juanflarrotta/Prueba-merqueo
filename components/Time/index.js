import differenceInDays from "date-fns/differenceInDays";
import differenceInHours from "date-fns/differenceInHours";
import differenceInMinutes from "date-fns/differenceInMinutes";
import styles from "./styles.module.scss";

const MINUTES_IN_HOUR = 60;
const HOURS_IN_DAY = 24;

export default function Time(props) {
  const { className, timestamp } = props;
  const now = new Date();
  const time = new Date(timestamp);
  const days = differenceInDays(now, time);
  const hours = differenceInHours(now, time);
  const minutes = differenceInMinutes(now, time);

  let text = "Justo ahora";

  if (minutes >= 1 && minutes < MINUTES_IN_HOUR) {
    text = `Hace ${minutes} ${minutes === 1 ? "minuto" : "minutos"}`;
  }
  if (minutes >= MINUTES_IN_HOUR && minutes < MINUTES_IN_HOUR * HOURS_IN_DAY) {
    text = `Hace ${hours} ${hours === 1 ? "hora" : "horas"}`;
  }
  if (minutes >= MINUTES_IN_HOUR * HOURS_IN_DAY) {
    text = `Hace ${days} ${days === 1 ? "día" : "días"}`;
  }

  return <time className={styles.date}>{text}</time>;
}
