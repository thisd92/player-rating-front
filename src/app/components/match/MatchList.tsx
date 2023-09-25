import { useState, useEffect } from 'react'

import Match from './type';

interface MatchListProps {
    matches: Match[];
}

export default function MatchList({ matches }: MatchListProps) {

    useEffect(() => {
    }, [matches])

    return (
        <div>
            <ul>
                {matches.map((m) => (
                    <li key={m.id}>Local: {m.local}</li>
                ))}
            </ul>

        </div>
    )

}