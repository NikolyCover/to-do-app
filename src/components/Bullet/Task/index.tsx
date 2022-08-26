import React from 'react'
import styles from './Task.module.scss'
import { MoreHorizontal } from 'react-feather'

const Task: React.FC = () => {
    return (
        <div className={styles.task}>
            <MoreHorizontal className={styles.moreIcon} size={16} />
            <h1>Lorem Ipsum</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
        </div>
    )
}

export default Task