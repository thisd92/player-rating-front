import styles from '../page.module.css'
import Player from "../../components/player/Player"
import Link from 'next/link'

export default function PlayerPage() {
    return (
        <main className={styles.main}>
            <Link href={'/'}>Voltar</Link>
            <Player />
        </main>
    )
}