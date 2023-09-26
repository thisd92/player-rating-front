'use client'
import styles from '../page.module.css'

import Match from '../../components/match/Match'
import Link from 'next/link'

export default function MatchPage() {

    return (
        <main className={styles.main}>
            <Link href={'/'}>Voltar</Link>
            <Match />
        </main>
    )
}