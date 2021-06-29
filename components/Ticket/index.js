import { useContext } from "react";

import Input from "../Input";
import Btn from "../Btn/index";
import { useState } from "react";
import DataContext from "../../context";
import { generateUuid } from "../../utils";

import styles from "./ticket.module.scss";

export default function Ticket() {
  const { posts, updatePosts, currentUser } = useContext(DataContext);
  const [isOpen, setIsOpen] = useState(false);
  const [text, setText] = useState("");
  const openClassName = isOpen ? styles.open : "";

  const onBlur = (e) => {
    const { value } = e.target;
    if (value === "") {
      setIsOpen(false);
    }
  };

  const onFocus = () => {
    setIsOpen(true);
  };

  const onChange = (e) => {
    const { value } = e.target;
    setText(value);
  };

  function publishPost(e) {
    if (text !== "") {
      const newPost = {
        uuid: generateUuid(),
        user: currentUser,
        text,
        timestamp: new Date().getTime(),
        reactions: [],
        comments: [],
      };
      updatePosts([...posts, { ...newPost }]);
      setIsOpen(false);
      setText("");
    }
  }

  return (
    <section className={`${styles.ticket} ${openClassName}`}>
      <Input
        placeholder="Escribe Aquí tu estado"
        onBlur={onBlur}
        onFocus={onFocus}
        value={text}
        handleChange={onChange}
      />
      <Btn text="Publicar" clickHandler={publishPost} isSecondary />
    </section>
  );
}
