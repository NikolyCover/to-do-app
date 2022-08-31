import React, { useState } from 'react'
import styles from './Task.module.scss'
import { MoreHorizontal } from 'react-feather'
import { ITask } from '../../../interfaces/ITask'

const Task: React.FC<ITask> = ({ title, description }) => {
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
            <h1>{ title }</h1>
            <p>{ description }</p>
        </div>
    )
}

export default Task