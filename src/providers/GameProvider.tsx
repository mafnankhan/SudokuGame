import React, { HTMLAttributes, useState, createContext, SyntheticEvent, useEffect } from 'react'
import { fetchAPI } from '../utils/api';

export const GameContext = createContext<any>({});

interface Props extends HTMLAttributes<HTMLElement> {}

export interface GameProviderInterface {
    screen2DMap: any;
    setScree2DMap: Function;
    level: String;
    setLevel: Function;
    validateValue: String;
    validate: Function;
    difficulty: Function;
    solve: Function;
    reset: Function
}

const initialScreenMap = [
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0]
]

const GameProvider:React.FC<Props> = ({ children }) => {
    const [screen2DMap, setScree2DMap] = useState<any>(initialScreenMap);
    const [level, setLevel] = useState<String>('easy');
    const [validateValue, setValidate] = useState<String>('unsolved');
    const [refresh, setRefresh] = useState(false);

    const reset = (e: SyntheticEvent) => {
        e.preventDefault();
        setScree2DMap(initialScreenMap)
    }

    const validate = (e: SyntheticEvent) => {
        e.preventDefault();

        var bodyFormData = new FormData();
        bodyFormData.append('board', JSON.stringify(screen2DMap));

        fetchAPI('POST', `validate`, bodyFormData)
        .then((data: any) => {
            if (data) {
                const { status } = data;
                setValidate(status)
            }
        })
        .catch((error: any) => {
            alert(error)
        })
    }

    const difficulty = (e: SyntheticEvent) => {
        e.preventDefault();

        var bodyFormData = new FormData();
        bodyFormData.append('board', JSON.stringify(screen2DMap));

        fetchAPI('POST', `grade`, bodyFormData)
        .then((data: any) => {
            if (data) {
                const { difficulty } = data;
                if (difficulty !== level)
                    setLevel(difficulty)
            }
        })
        .catch((error: any) => {
            alert(error)
        })
    }

    const solve = (e: SyntheticEvent) => {
        e.preventDefault();

        var bodyFormData = new FormData();
        bodyFormData.append('board', JSON.stringify(screen2DMap));

        fetchAPI('POST', `solve`, bodyFormData)
        .then((data: any) => {
            if (data) {
                const { difficulty, solution, status } = data;
                setRefresh(true)
                setScree2DMap(solution)
                setValidate(status)
                setLevel(difficulty)
            }
        })
        .catch((error: any) => {
            alert(error)
        })
    }

    useEffect(() => {
        if (refresh) {
            setRefresh(false)
        }
    }, [refresh])

    useEffect(() => {
        if (level && !refresh) {
            fetchAPI('GET', `board?difficulty=${level}`)
            .then((data: any) => {
                if (data) {
                    const { board } = data;
                    setScree2DMap(board)
                }
            })
            .catch((error: any) => {
                alert(error)
            })
        }
    }, [level])

    const provider:GameProviderInterface = {
        screen2DMap,
        setScree2DMap,
        level,
        setLevel,
        validateValue,
        validate,
        reset,
        difficulty,
        solve
    }

    return (
        <GameContext.Provider value={provider}>
            {children}
        </GameContext.Provider>
    );
}

export default GameProvider