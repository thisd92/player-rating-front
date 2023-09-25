import axios from "axios";
import { EventHandler, useState } from "react";


export default function Match() {
    const [date, setDate] = useState('');
    const [local, setLocal] = useState('');
    const [typeMatch, setTypeMatch] = useState('');

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        const newMatch = { date, local, typeMatch };
        try {
            await axios.post('http://localhost:8080/api/matches', newMatch);
            alert('Partida criada com sucesso!');
        } catch (error) {
            console.error('Erro ao criar a partida: ', error);
        }
    };

    return (
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
    );
}