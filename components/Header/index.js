import { useState, useEffect } from 'react'

import styles from './styles.module.scss'
import Btn from '../Btn/index'

export default function Header() {
    return (
        <nav className={styles.navbar}>
            <a className={styles.navbar__brand} href="#">Merqueo Test</a>
            <Btn type={'icon'} modifier={'menu'} />
        </nav >
    )
}