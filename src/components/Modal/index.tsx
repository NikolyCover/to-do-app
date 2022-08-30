import { forwardRef, useCallback, useImperativeHandle, useRef, useState } from 'react'
import styles from './Modal.module.scss'

export interface ModalHandles {
    handleModal: () => void
}

const Modal: React.ForwardRefRenderFunction<ModalHandles> = ({}, ref) => {
    const [isVisible, setIsVisible] = useState(false)

    const handleModal = useCallback(() => {
        setIsVisible(visible => !visible)
    }, [])

    useImperativeHandle(ref, () => ({ handleModal }))

    return (
        <>
            {
                isVisible && (
                    <div className={styles['modal-context']}>
                        <div className={styles.modal} onBlur={handleModal} tabIndex={0}>
                            Content
                        </div>
                    </div>
                )
            }
        </>
    )
}

export default forwardRef(Modal)