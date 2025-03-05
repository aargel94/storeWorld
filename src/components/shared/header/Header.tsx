import Link from "next/link";
import styles from './Header.module.sass'


export const Header=()=>{

    return (
        <header>
            <nav>
                <ul className={styles.Header_list}>
                    <li>
                        <Link href="/">
                        Home
                        </Link>
                    </li>
                    <li>
                        <Link href={"/store"}>
                            store
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}