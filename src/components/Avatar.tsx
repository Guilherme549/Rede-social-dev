import { ImgHTMLAttributes } from "react"
import styles from "./Avatar.module.css"

type Props = ImgHTMLAttributes<HTMLImageElement> & {
    hasBorder?: boolean
}

export function Avatar({ hasBorder = true, ...props}: Props){

    return (
        <img 
        className={hasBorder ? styles.avatarWithBorder : styles.avatar} 
            {...props}
        />
    )
}