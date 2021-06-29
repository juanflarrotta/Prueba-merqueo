import { useContext, useState } from "react";

import DataContext from "../../context";
import styles from "./styles.module.scss";
import Btn from "../Btn";
import Time from "../Time";

export default function Post(props) {
  const [commentsAreShown, setCommentsAreShown] = useState(false);
  const { users } = useContext(DataContext);
  const { text, timestamp, reactions, comments, user } = props;
  const hasReactions = reactions && reactions.length > 0;
  const hasComments = comments && comments.length > 0;

  const postUser = users.find((u) => u.uuid === user);
  const commentsShownClass = commentsAreShown ? styles.commentsShown : "";
  return (
    <article className={styles.post}>
      <div className={styles.post__content}>
        <div className={styles.post__info}>
          {/* eslint-disable @next/next/no-img-element */}
          <img
            className={styles.post__img}
            src={`/images/users/${postUser.photo}`}
            alt={postUser.name}
          />
          {postUser && postUser.name && (
            <h3 className={styles.post__name}>{postUser.name}</h3>
          )}

          <Time timestamp={timestamp} />
          <p className={styles.post__text}>{text}</p>
        </div>
        <div className={styles.post__reaction}>
          <div className={styles.post__images}>
            {hasReactions &&
              reactions.map((reaction) => {
                const reactionUser = users.find(
                  (u) => u.uuid === reaction.user_id
                );
                return (
                  /* eslint-disable-next-line @next/next/no-img-element */
                  <img
                    key={reaction.user_id}
                    className={`${styles.post__img} ${styles["post__img--small"]}`}
                    src={`/images/users/${reactionUser.photo}`}
                    alt={reactionUser.name}
                  />
                );
              })}
          </div>

          <p className={styles.post__likes}>
            {hasReactions ? `${reactions.length} likes` : "no tiene likes"}
          </p>

          {hasComments && (
            <Btn
              text={`${comments.length} comentarios`}
              type="text"
              modifier="commentary"
              clickHandler={() => {
                setCommentsAreShown(!commentsAreShown);
              }}
            />
          )}
        </div>
        <div className={styles.post__action}>
          <Btn text="Reaccionar" type="text" modifier="action" />
          <Btn text="Comentar" type="text" modifier="action" />
        </div>
      </div>
      <div className={`${styles.post__comments} ${commentsShownClass}`}>
        {comments &&
          comments.length > 0 &&
          comments.map((comment) => {
            const commentUser = users.find((u) => u.uuid === comment.user_id);
            return (
              <div key={comment.timestamp}>
                <img
                  className={`${styles.post__img} ${styles["post__img--small"]}`}
                  src={`/images/users/${commentUser.photo}`}
                  alt={commentUser.name}
                />
                <Time timestamp={comment.timestamp} />
                {commentUser && <p>{commentUser.name}</p>}
                <p>{comment.text}</p>
              </div>
            );
          })}
      </div>
    </article>
  );
}
