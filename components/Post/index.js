import { useContext, useState } from "react";

import DataContext from "../../context";
import Btn from "../Btn";
import Time from "../Time";
import PostFooter from "./postFooter";
import PostComments from "./postComments";

import styles from "./post.module.scss";

export default function Post(props) {
  const { uuid, text, timestamp, reactions, comments, user } = props;

  const [commentsAreShown, setCommentsAreShown] = useState(false);
  const [ticketIsShown, setTicketIsShown] = useState(false);
  const [newComment, setNewComment] = useState("");
  const { users, updatePost } = useContext(DataContext);

  const hasReactions = reactions && reactions.length > 0;
  const hasComments = comments && comments.length > 0;
  const postUser = users.find((u) => u.uuid === user);

  const onChange = (e) => {
    const { value } = e.target;
    setNewComment(value);
  };

  const publishComment = () => {
    if (newComment !== "") {
      updatePost(uuid, {
        comments: [
          {
            user_id: postUser.uuid,
            timestamp: new Date().getTime(),
            text: newComment,
          },
        ],
      });
      setCommentsAreShown(true);
      setTicketIsShown(false);
      setNewComment("");
    }
  };

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
          {hasReactions && (
            <div className={styles.post__images}>
              {reactions.map((reaction) => {
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
          )}
          <p className={styles.post__likes}>
            {hasReactions ? `${reactions.length} likes` : "No tiene likes"}
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
          <Btn
            text="Comentar"
            type="text"
            modifier="action"
            clickHandler={() => {
              setTicketIsShown(!ticketIsShown);
            }}
          />
        </div>
      </div>
      <PostComments
        commentsAreShown={commentsAreShown}
        comments={comments}
        users={users}
      />
      <PostFooter
        ticketIsShown={ticketIsShown}
        inputValue={newComment}
        onChange={onChange}
        onClick={publishComment}
      />
    </article>
  );
}
