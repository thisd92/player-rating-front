import { useEffect } from 'react'

import PlayerType from './type';

interface PlayerListProps {
    players: PlayerType[];
}

export default function MatchList({ players }: PlayerListProps) {

    useEffect(() => {
    }, [players])

    return (
        <div>
            <ul>
                {players.map((p) => (
                    <li key={p.id}>Nome: {p.name}</li>
                ))}
            </ul>

        </div>
    )

}