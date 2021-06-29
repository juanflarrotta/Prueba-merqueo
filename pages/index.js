import { useEffect, useState } from "react";

import Header from "../components/Header";
import Ticket from "../components/Ticket";
import Posts from "../components/Posts";
import DataContext, { defaultContext } from "../context";

import styles from "../styles/Home.module.scss";

const DATA_KEYS = {
  users: "mrq_users",
  posts: "mrq_posts",
};

const saveOnLS = (key, data) => {
  if (localStorage && !localStorage[key]) {
    localStorage.setItem(key, JSON.stringify(data));
  }
};

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);
  const currentUser = "8fd1-4d6e";

  useEffect(() => {
    saveOnLS(DATA_KEYS.users, defaultContext.users);
    saveOnLS(DATA_KEYS.posts, defaultContext.posts);
  }, []);

  useEffect(() => {
    if (localStorage && localStorage[DATA_KEYS.posts]) {
      setPosts(JSON.parse(localStorage[DATA_KEYS.posts]));
    }
    if (localStorage && localStorage[DATA_KEYS.users]) {
      setUsers(JSON.parse(localStorage[DATA_KEYS.users]));
    }
  }, []);

  function updatePosts(posts) {
    setPosts(posts);
    if (localStorage) {
      localStorage.setItem(DATA_KEYS.posts, JSON.stringify(posts));
    }
  }
  return (
    <DataContext.Provider
      value={{
        posts,
        updatePosts,
        currentUser,
        users,
      }}
    >
      <div className={styles.container}>
        <Header />
        <Ticket />
        <Posts />
      </div>
    </DataContext.Provider>
  );
}
