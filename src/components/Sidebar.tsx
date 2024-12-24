import { PencilLine } from "phosphor-react"

import styles from './Sidebar.module.css'
import { Avatar } from "./Avatar"

export function Sidebar(){
    return (
        <aside className={styles.sidebar}>
            <img
            className={styles.cover} 
             src="https://images.unsplash.com/photo-1457305237443-44c3d5a30b89?fm=jpg&q=50&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
             />

            <div className={styles.profile}>
                <Avatar src={"https://github.com/Guilherme549.png"}/>

                <strong>Guilherme Francisco</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20}/>
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    );
}