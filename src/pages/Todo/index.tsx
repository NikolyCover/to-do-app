import Bullet from '../../components/Bullet'
import styles from './Todo.module.scss'
import { PlayCircle, Loader, PauseCircle, Check} from 'react-feather'
import { useCallback, useState } from 'react'
import { ITask } from '../../interfaces/ITask'
import { useTasks } from '../../context'

export default function Todo() {

    return (
        <>
            <h1 className={styles.title}>TODO APP</h1>
            <main className={styles.todoList}>
                <Bullet label='Not started' Icon={PlayCircle} />
                <Bullet label='In progress' Icon={Loader} />
                <Bullet label='Paused' Icon={PauseCircle}/>
                <Bullet label='Done' Icon={Check} />
            </main>
        </>
    )
}