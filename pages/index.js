import { useEffect, useState } from 'react'

import Header from '../components/Header'
import Ticket from '../components/Ticket'
import Posts from '../components/Posts'
import DataContext, { defaultContext } from '../context'

import styles from '../styles/Home.module.scss'

const DATA_KEYS = {
  users: 'mrq_users',
  posts: 'mrq_posts'
}

export default function Home() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    if (localStorage && !localStorage[DATA_KEYS.users]) {
      localStorage.setItem(DATA_KEYS.users, JSON.stringify(defaultContext.users))
    }
    if (localStorage && !localStorage[DATA_KEYS.posts]) {
      localStorage.setItem(DATA_KEYS.posts, JSON.stringify(defaultContext.posts))
    }
  }, [])

  useEffect(() => {
    if (localStorage && localStorage[DATA_KEYS.posts]) {
      setPosts(JSON.parse(localStorage[DATA_KEYS.posts]))
    }
  }, [])

  function updatePosts(posts) {
    setPosts(posts)
  }

  return (
    <DataContext.Provider value={{
      posts,
      updatePosts,
    }}>
      <div className={styles.container}>
        <Header />
        <Ticket />
        <Posts />
      </div>
    </DataContext.Provider>

  )
}
