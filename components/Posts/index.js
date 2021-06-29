import { useContext } from "react";

import styles from "./posts.module.scss";
import Post from "../Post";
import DataContext from "../../context";

export default function Posts() {
  const { posts } = useContext(DataContext);
  const isLoading = posts && posts.length === 0;
  const orderedPosts = posts.sort((x, y) => y.timestamp - x.timestamp);
  return (
    <section className={styles.posts}>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        orderedPosts.map((post) => <Post key={post.uuid} {...post} />)
      )}
    </section>
  );
}
