import Bullet from './Bullet'
import styles from './Todo.module.scss'

export default function Todo() {
    return (
        <>
            <h1 className={styles.title}>TODO APP</h1>
            <Bullet name='Not started'/>
        </>
    )
}