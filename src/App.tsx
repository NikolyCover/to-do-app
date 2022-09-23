import React from 'react'
import TaskContext from './context'
import Todo from "./pages/Todo"

import './styles/global.scss'

const App: React.FC = () => (
    <TaskContext>
        <Todo />
    </TaskContext>
)

export default App