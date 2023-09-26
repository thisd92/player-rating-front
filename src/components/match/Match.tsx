'use client'
import axios from "axios";
import { useState, useEffect } from "react";

import MatchList from "./MatchList";
import MatchType from "./type";


export default function Match() {
    const [date, setDate] = useState('');
    const [local, setLocal] = useState('');
    const [typeMatch, setTypeMatch] = useState('');
    const [matches, setMatches] = useState<MatchType[]>([])


    const handleSubmit = async (e: any) => {
        e.preventDefault();
        const newMatch = { date, local, typeMatch };
        try {
            await axios.post('http://localhost:8080/matches', newMatch);
            alert('Partida criada com sucesso!');
            getMatches();
        } catch (error) {
            console.error('Erro ao criar a partida: ', error);
        }
    };

    const getMatches = async () => {
        try {
            const response = await axios.get("http://localhost:8080/matches");
            setMatches(response.data)
        } catch (error) {
            console.log('Erro ao obter as partidas:', error);
        }
    }

    useEffect(() => {
        getMatches()
    },[])

    return (
        <div>
            <div>
                <h2>Criar Partida</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="date"
                        placeholder="Data"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Local"
                        value={local}
                        onChange={(e) => setLocal(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Tipo de Partida"
                        value={typeMatch}
                        onChange={(e) => setTypeMatch(e.target.value)}
                    />
                    <button type="submit">Criar Partida</button>
                </form>
            </div>
            <div>
                <MatchList matches={matches} />
            </div>

        </div>
    );
}