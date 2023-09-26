'use client'
import axios from "axios";
import { useState, useEffect } from "react";

import PlayerList from "./PlayerList";
import PlayerType from "./type";


export default function Player() {
    const [name, setName] = useState('');
    const [position, setPosition] = useState('');
    const [players, setPlayers] = useState<PlayerType[]>([])

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        const newPlayer = { name, position };
        try {
            await axios.post('http://localhost:8080/players', newPlayer);
            alert('Jogador adicionado com sucesso!');
            getPlayers();
        } catch (error) {
            console.error('Erro ao adicionar o jogador: ', error);
        }
    };

    const getPlayers = async () => {
        try {
            const response = await axios.get("http://localhost:8080/players");
            setPlayers(response.data)
        } catch (error) {
            console.log('Erro ao obter as partidas:', error);
        }
    }

    useEffect(() => {
        getPlayers()
    }, [])

    return (
        <div>
            <div>
                <h2>Criar Jogador</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Nome"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Posição"
                        value={position}
                        onChange={(e) => setPosition(e.target.value)}
                    />
                    <button type="submit">Adicionar Jogador</button>
                </form>
            </div>
            <div>
                <PlayerList players={players} />
            </div>

        </div>
    );
}