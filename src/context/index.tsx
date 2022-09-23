import React, { createContext, useCallback, useContext, useMemo, useState } from 'react'
import { ITask } from '../interfaces/ITask'

interface TaskContextProps {
    tasks: ITask[]
    filterTasks: (bullet: string) => ITask[]
    createTask: (task: ITask) => void
}

interface Props {
    children: React.ReactNode
}

const Context = createContext({} as TaskContextProps)

const TaskContext: React.FC<Props> = ({ children }) => {
    const [ tasks, setTasks ] = useState<ITask[]>([])

    const createTask = useCallback((task: ITask) => {
        setTasks(previousTasks => [ ...previousTasks, task ])
    }, [])

    const filterTasks = useCallback((bullet: string) => {
        return tasks.filter(task => task.bullet === bullet)
    }, [ tasks ])

    return (
        <Context.Provider value={{ tasks, createTask, filterTasks }} >
            { children }
        </Context.Provider>
    )
}

export const useTasks = () => useContext(Context)

export default TaskContext