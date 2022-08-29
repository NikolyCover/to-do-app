import React, { useState } from 'react'
import styles from './Task.module.scss'
import { MoreHorizontal } from 'react-feather'

const Task: React.FC = () => {
    const [optionsOpen, setOptionsOpen] = useState(false) 

    return (
        <div className={styles.task}>
            <button className={styles.moreIcon} onClick={() => setOptionsOpen(!optionsOpen)} onBlur={() => setOptionsOpen(false)} >
                <MoreHorizontal size={16}/>
            </button>
            {
                optionsOpen && (
                    <div className={styles.popover}>
                        <button>Editar</button>
                        <button>Apagar</button>
                    </div>
                )
            }
            <h1>Lorem Ipsum</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
        </div>
    )
}

export default Task