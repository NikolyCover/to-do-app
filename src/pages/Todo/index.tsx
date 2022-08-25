import Bullet from '../../components/Bullet'
import styles from './Todo.module.scss'

export default function Todo() {
    return (
        <>
            <h1 className={styles.title}>TODO APP</h1>
            <main className={styles.todoList}>
                <Bullet name='Not started'/>
                <Bullet name='In progress'/>
                <Bullet name='Stoped'/>
                <Bullet name='Done'/>
            </main>
        </>
    )
}