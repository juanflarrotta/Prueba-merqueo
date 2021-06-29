import { createContext } from 'react'

import { users, posts } from '../data/seed'

export const defaultContext = {
    users,
    posts
}

export default createContext(defaultContext);


