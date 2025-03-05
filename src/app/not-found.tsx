'use client';
import Image from 'next/image'
import styles from 'app/sass/not-found.module.sass';
import Link from "next/link";

export default function GlobalError() {
    return(
        <main className={styles.NotFound}>
            <h1 className={styles.NotFound__title}>404</h1>
            <Image
                src='/images/404.png'
                width={300}
                height={300}
                alt='Error'
            />
            <p className={styles.NotFound__subtitle}>Al parecer ha ocurrido un error, </p>
            <Link className={styles.NotFound__link} href="/store">
                ¡Vamos de compras!
            </Link>
        </main>
    )
}