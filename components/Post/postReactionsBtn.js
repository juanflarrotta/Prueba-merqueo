import { useState } from "react";
import Btn from "../Btn";

import styles from "./post.module.scss";

const REACTIONS = [
  {
    type: "like",
    icon: null,
  },
  {
    type: "happy",
    icon: null,
  },
  {
    type: "love",
    icon: null,
  },
  {
    type: "cry",
    icon: null,
  },
  {
    type: "sad",
    icon: null,
  },
  {
    type: "skeptic",
    icon: null,
  },
];

export default function PostReactionsBtn(props) {
  const { updateReactions } = props;
  const [isShown, setIsShown] = useState(false);
  const reactionsShownClass = isShown ? styles.reactionsShown : "";

  return (
    <div className={styles.reactionsWrapper}>
      <div className={`${styles.reactions} ${reactionsShownClass}`}>
        {REACTIONS.map((reaction) => {
          const { type } = reaction;
          return (
            <div
              key={type}
              className={styles.reaction}
              onClick={() => {
                updateReactions(type);
              }}
            >
              {type}
            </div>
          );
        })}
      </div>

      <Btn
        text="Reaccionar"
        type="text"
        clickHandler={() => {
          setIsShown(!isShown);
        }}
      />
    </div>
  );
}
