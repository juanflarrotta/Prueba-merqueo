import { useEffect, useState } from "react";
import Btn from "../Btn";
import Icon from "../Icon";

import styles from "./post.module.scss";

const REACTIONS = ["like", "happy", "love", "cry", "sad", "skeptic"];

export default function PostReactionsBtn(props) {
  const { updateReactions, liked, isShown } = props;

  const [isShownState, setIsShownState] = useState(false);
  const reactionsShownClass = isShownState ? styles.reactionsShown : "";
  const likedClass = liked ? styles.liked : "";

  useEffect(() => {
    console.log("effect");
    setIsShownState(isShown);
  }, [isShown]);

  console.log("isShown -----> debug");
  console.log(isShown);
  console.log("isShownState -----> debug");
  console.log(isShownState);

  return (
    <div className={`${styles.reactionsWrapper} ${likedClass}`}>
      <div className={`${styles.reactions} ${reactionsShownClass}`}>
        {REACTIONS.map((reaction) => {
          return (
            <div
              key={reaction}
              className={styles.reaction}
              onClick={() => {
                updateReactions(reaction);
              }}
            >
              <Icon icon={reaction} />
            </div>
          );
        })}
      </div>

      <Btn
        text={`${liked ? "Me gusta" : "Reaccionar"}`}
        type="text"
        clickHandler={() => {
          setIsShownState(!isShownState);
        }}
      />
    </div>
  );
}
