import Input from "../Input";
import Btn from "../Btn";

import styles from "./post.module.scss";

export default function PostReactions(props) {
  const { hasReactions, reactions, users } = props;

  return (
    hasReactions && (
      <div className={styles.post__images}>
        {reactions.map((reaction, index) => {
          const reactionUser = users.find((u) => u.uuid === reaction.user_id);
          return index <= 2 ? (
            /* eslint-disable-next-line @next/next/no-img-element */
            <img
              key={reaction.user_id}
              className={`${styles.post__img} ${styles["post__img--small"]}`}
              src={`/images/users/${reactionUser.photo}`}
              alt={reactionUser.name}
            />
          ) : null;
        })}
      </div>
    )
  );
}
