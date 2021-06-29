import { useContext } from 'react'

import styles from './styles.module.scss'
import Post from '../Post'
import DataContext from '../../context'

export default function Posts() {
    const { posts, updatePosts } = useContext(DataContext)
    const isLoading = posts && posts.length === 0

    return (
        <section className={styles.posts}>
            {isLoading ? <p>Loading...</p> : posts.map((post) => <Post key={post.uuid} {...post} />)}
        </section>
    )
}
