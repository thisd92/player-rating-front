import styles from './page.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.div}>
        <Link href={'/match'}>Partidas</Link>
        <Link href={'/player'}>Jogadores</Link>
      </div>
    </main>
  )
}
