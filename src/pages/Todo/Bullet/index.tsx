import CreateTaskButton from "./CreateTaskButton"
import styles from './Bullet.module.scss'
import Task from "./Task"

interface Props {
    name: string
}

export default function Bullet({name}: Props) {
    return (
        <div>
            <h1 className={styles.title}>{name}</h1>
            <CreateTaskButton/>
            <Task/>
        </div>
    )
}