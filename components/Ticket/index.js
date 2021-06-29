import styles from './styles.module.scss'
import Input from '../Input'
import Btn from '../Btn/index'
import { useState } from 'react'
import DataContext from '../../context'


export default function Ticket() {
    const { posts, updatePosts } = useContext(DataContext)
    const [isOpen, setIsOpen] = useState(false)
    const openClassName = isOpen ? styles.open : ''

    const onBlur = () => {
        setIsOpen(!isOpen)
    }

    const onFocus = () => {
        setIsOpen(!isOpen)
    }
    function published() {
        updatePosts([...posts, { uuid: 'daniel' }])
    }

    return (
        <section className={`${styles.ticket} ${openClassName}`}>
            <Input placeholder='Escribe Aquí tu estado' onBlur={onBlur} onFocus={onFocus} />
            <Btn type='text' text='Publicar' modifier='publish' onclick={published} />
        </section >
    )
}