import Bullet from '../../components/Bullet'
import styles from './Todo.module.scss'
import { PlayCircle, Loader, PauseCircle, Check} from 'react-feather'

export default function Todo() {
    return (
        <>
            <h1 className={styles.title}>TODO APP</h1>
            <main className={styles.todoList}>
                <Bullet label='Not started' Icon={PlayCircle}/>
                <Bullet label='Not started' Icon={Loader}/>
                <Bullet label='Not started' Icon={PauseCircle}/>
                <Bullet label='Not started' Icon={Check}/>
            </main>
        </>
    )
}