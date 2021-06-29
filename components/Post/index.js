import { useContext, useState } from "react";

import DataContext from "../../context";
import Btn from "../Btn";
import Time from "../Time";
import PostFooter from "./postFooter";
import PostComments from "./postComments";
import PostReactions from "./postReactions";
import PostReactionsBtn from "./postReactionsBtn";

import styles from "./post.module.scss";

export default function Post(props) {
  const { uuid, text, timestamp, reactions, comments, user } = props;

  const [commentsAreShown, setCommentsAreShown] = useState(false);
  const [areReactionsShown, setAreReactionsShown] = useState(false);

  const [ticketIsShown, setTicketIsShown] = useState(false);
  const [newComment, setNewComment] = useState("");
  const { users, updatePost, currentUser } = useContext(DataContext);

  const hasReactions = reactions && reactions.length > 0;
  const hasComments = comments && comments.length > 0;
  const postUser = users.find((u) => u.uuid === user);
  const likes = hasReactions ? reactions.filter((r) => r.type === "like") : [];
  const hasLikes = likes.length > 0;
  const likesCopy = `${likes.length} ${likes.length === 1 ? "like" : "likes"}`;
  const hasUserLiked =
    hasReactions && reactions.find((r) => r.user_id === currentUser);
  const [liked, setLiked] = useState(hasUserLiked);

  const onChange = (e) => {
    const { value } = e.target;
    setNewComment(value);
  };

  const publishComment = () => {
    if (newComment !== "") {
      updatePost(
        uuid,
        {
          user_id: postUser.uuid,
          timestamp: new Date().getTime(),
          text: newComment,
        },
        null
      );
      setCommentsAreShown(true);
      setTicketIsShown(false);
      setNewComment("");
    }
  };

  const updateReactions = (type) => {
    setLiked(type === "like");
    updatePost(uuid, null, {
      user_id: currentUser,
      type,
    });
    setAreReactionsShown(false);
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
          <PostReactions
            hasReactions={hasReactions}
            reactions={reactions}
            users={users}
          />

          <p className={styles.post__likes}>
            {hasLikes ? likesCopy : "No tiene likes"}
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
          <PostReactionsBtn
            updateReactions={updateReactions}
            liked={liked}
            isShown={areReactionsShown}
            clickHandler={setAreReactionsShown}
          />
          <Btn
            text="Comentar"
            type="text"
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
