import Bullet from '../../components/Bullet'
import styles from './Todo.module.scss'
import { PlayCircle, Loader, PauseCircle, Check} from 'react-feather'

export default function Todo() {
    return (
        <>
            <h1 className={styles.title}>TODO APP</h1>
            <main className={styles.todoList}>
                <Bullet name='Not started' Icon={PlayCircle}/>
                <Bullet name='Not started' Icon={Loader}/>
                <Bullet name='Not started' Icon={PauseCircle}/>
                <Bullet name='Not started' Icon={Check}/>
            </main>
        </>
    )
}