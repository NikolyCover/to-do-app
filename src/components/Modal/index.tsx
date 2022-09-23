import React, { forwardRef, useCallback, useEffect, useImperativeHandle, useRef, useState } from 'react'
import styles from './Modal.module.scss'
import { X } from 'react-feather'
import { ITask } from '../../interfaces/ITask'
import { useTasks } from '../../context'

export interface ModalHandles {
    handleModalVisibility: () => void
}

interface Props {
    bullet: string
}

const Modal: React.ForwardRefRenderFunction<ModalHandles, Props> = ({ bullet }, ref) => {
    const [isVisible, setIsVisible] = useState(false)
    const [inputs, setInputs] = useState<ITask>({ title: '', description: '' })

    const { createTask } = useTasks()

    const handleModalVisibility = useCallback(() => {
        setIsVisible(visible => !visible)
    }, [])

    const handleFormChange = useCallback((event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const name = event.currentTarget.name;
        const value = event.currentTarget.value;

        setInputs(values => ({...values, [name]: value }) )
    }, [])

    const handleSubmit = useCallback((event: React.FormEvent) => {
        event.preventDefault()

        createTask({ ...inputs, bullet })
        setInputs({ title: '', description: '' }) //limpar "cache"

        handleModalVisibility()
    }, [ inputs ])

    useImperativeHandle(ref, () => ({ handleModalVisibility }))

    if(!isVisible){
        return null
    }

    return (
        <div className={styles['modal-context']}>                        
            <div className={styles.modal}>
                <button onClick={handleModalVisibility} className={styles['closeIcon']}>
                    <X/>
                </button>
                <form onSubmit={handleSubmit}>
                    <fieldset>
                        <label htmlFor='title'>Title</label>
                        <input type='text' id='title' name='title' onChange={handleFormChange}/>
                    </fieldset>
                    <fieldset>
                        <label htmlFor='description'>Descrição</label>
                        <textarea rows={4} id='description' name='description' onChange={handleFormChange}/>
                    </fieldset>
                    <button type='submit'>Create</button>
                </form>
            </div>
        </div>
    )
}

export default forwardRef(Modal)