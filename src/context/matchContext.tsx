import MatchType from '@/app/components/match/type';
import axios from 'axios';
import React, { ReactNode, createContext, useCallback, useState, useEffect } from 'react';

interface MatchContextProps {
    matches: MatchType[];
    getMatches: (matchId: string) => void;
}

interface MatchProviderProps {
    children: ReactNode,
}

export const MatchContext = createContext<MatchContextProps>({
    matches: [],
    getMatches: () => { },
});

export const MatchProvider: React.FC<MatchProviderProps> = ({ children }) => {
    const [matches, setMatches] = useState<MatchType[]>([])

    const fetchMatches = useCallback(async () => {
        try {
            const response = await axios.get(`http://localhost:8080/matches`);
            setMatches(response.data);
        } catch (error) {
            console.log('Erro ao obter as partidas:', error);
        }

    }, [matches])

    useEffect(() => {
        fetchMatches()
    }, [matches])

    return (
        <MatchContext.Provider value={{ matches, getMatches: fetchMatches }}>
            {children}
        </MatchContext.Provider>
    )
}