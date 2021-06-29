import Input from "../Input";
import Btn from "../Btn";

import styles from "./post.module.scss";

export default function PostFooter(props) {
  const { ticketIsShown, inputValue, onChange, onClick } = props;
  const ticketShownClass = ticketIsShown ? styles.ticketShown : "";

  return (
    <div className={`${styles.ticket} ${ticketShownClass}`}>
      <Input
        placeholder="Escribe un comentario"
        value={inputValue}
        handleChange={onChange}
      />
      <Btn text="Publicar" isSecondary clickHandler={onClick} />
    </div>
  );
}
