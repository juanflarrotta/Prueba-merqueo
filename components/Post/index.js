import styles from './styles.module.scss'
import Btn from '../Btn/index'

export default function Post(props) {
    const { uuid, text, timestamp, reactions, comments, user } = props
    return (
        <div className={styles.post}>
            <div className={styles.post__content}>
                <div className={styles.post__info}>
                    <img className={styles.post__img} src='/images/users/daniel.png' alt='juan' />
                    <h3 className={styles.post__name}>{uuid}</h3>
                    <span className={styles.post__date}>{new Date(timestamp).toDateString()}</span>
                    <p className={styles.post__text}>{text}</p>
                </div>
                <div className={styles.post__reaction}>
                    <div className={styles.post__images}>
                        <img className={styles['post__img'] + ' ' + styles['post__img--small']} src='/images/users/daniel.png' alt='juan' />
                        <img className={styles['post__img'] + ' ' + styles['post__img--small']} src='/images/users/daniel.png' alt='juan' />
                        <img className={styles['post__img'] + ' ' + styles['post__img--small']} src='/images/users/daniel.png' alt='juan' />
                    </div>
                    {reactions && reactions.length > 0 && <p className={styles.post__likes}>{reactions.length} likes</p>}
                    <Btn text='3 comentarios' type='text' modifier='commentary' />
                </div>
                <div className={styles.post__action}>
                    <Btn text='Reaccionar' type='text' modifier='action' />
                    <Btn text='Comentar' type='text' modifier='action' />
                </div>
            </div>
            <div className={styles.post__comments}>
                {comments && comments.length > 0 && comments.map(comment => {
                    return <div key={comment.timestamp} >{comment.text}</div>
                })}
            </div>
        </div>
    )
}

