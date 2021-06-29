import Time from "../Time";

import styles from "./post.module.scss";

export default function PostComments(props) {
  const { commentsAreShown, comments, users } = props;
  const commentsShownClass = commentsAreShown ? styles.commentsShown : "";

  return (
    comments && (
      <div className={`${styles.post__comments} ${commentsShownClass}`}>
        {comments.length > 0 &&
          comments.map((comment) => {
            const commentUser = users.find((u) => u.uuid === comment.user_id);
            return (
              <div key={comment.timestamp} className={styles.post__comment}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  className={`${styles.post__img} ${styles["post__img--medium"]}`}
                  src={`/images/users/${commentUser.photo}`}
                  alt={commentUser.name}
                />
                {commentUser && (
                  <p className={styles.post__name}>{commentUser.name}</p>
                )}
                <p className={styles.post__text}>{comment.text}</p>
                <Time timestamp={comment.timestamp} />
              </div>
            );
          })}
      </div>
    )
  );
}
