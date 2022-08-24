import styles from './Bullet.module.scss'
import Task from "./Task"

import { Plus as PlusIcon } from 'react-feather'
import React from 'react'

/**
 * import PlusIcon from '../../assets/plus.svg'
 * 
 * -> importa o path da imagem: é necessário adicionar o PlusIcon no atributo src da imagem
 * 
 * Ex:  <img src={PlusIcon}/>
 */


/**
 * Adicionar as imagens na pasta public
 * Ex:  <img src='/image.svg'/>
 * 
 * Obs. O caminho do src precisa começar com /
 */

/**
 * import { ReactComponent as PlusIcon } from '../../assets/plus.svg'
 * 
 * -> Para usar os svg como componentes no vite, é preciso instalar o plugin `vite-plugin-svgr`. 
 * -> Após instala-lo, é necessário adiciona-lo no array de plugins do vite (vite.config.ts) e colocar a referencia no arquivo de referências do vite (vite-env.d.ts)
 * 
 * Ex: <PlusIcon />
 */


interface Props {
    name: string
}

const Bullet: React.FC<Props> = ({ name }) => {
    return (
        <div>
            <h1 className={styles.title}>{name}</h1>
            <button className={styles.button}>
                <PlusIcon size={16}/>
                Create task
            </button>

           
            <Task/>
        </div>
    )
}

export default Bullet