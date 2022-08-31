import { forwardRef, useCallback, useImperativeHandle, useRef, useState } from 'react'
import styles from './Modal.module.scss'
import { X } from 'react-feather'

export interface ModalHandles {
    handleModal: () => void
}

const Modal: React.ForwardRefRenderFunction<ModalHandles> = ({}, ref) => {
    const [isVisible, setIsVisible] = useState(false)

    const handleModal = useCallback(() => {
        setIsVisible(visible => !visible)
    }, [])

    useImperativeHandle(ref, () => ({ handleModal }))

    if(!isVisible){
        return null
    }

    return (
        <div className={styles['modal-context']}>                        
            <div className={styles.modal}>
                <button onClick={handleModal} className={styles['closeIcon']}>
                    <X/>
                </button>
                <fieldset>
                    <label htmlFor='title'>Title</label>
                    <input type='text' id='title'/>
                </fieldset>
                <fieldset>
                    <label htmlFor='descr'>Descrição</label>
                    <textarea rows={4} id='descr'/>
                </fieldset>
            </div>
        </div>
    )
}

export default forwardRef(Modal)