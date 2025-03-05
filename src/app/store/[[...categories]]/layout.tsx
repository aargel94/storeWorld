import {ReactNode} from "react";

export default function Layout({children}: {children: ReactNode}) {
    return(
        <main>
            <nav>navegacion de las categorias</nav>
            {children}
        </main>
    )
}