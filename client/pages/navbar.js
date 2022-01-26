
import styles from '../styles/navbar.module.css'

export default function Navbar() {
    //classNames
    const { navbar, appTitle } = styles;
    return (
        <div className={navbar}>
            <span className={appTitle}>RADA</span>
        </div>
    )
}
