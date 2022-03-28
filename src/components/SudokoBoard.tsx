import React, { useContext, SyntheticEvent, useState } from 'react';
import { GameContext, GameProviderInterface } from '../providers/GameProvider';

function ForceUpdate(){
    const [value, setValue] = useState(0);
    return () => setValue(value => value + 1);
}

const SudokoBoard:React.FC = () => {
    const { screen2DMap, setScree2DMap }:GameProviderInterface = useContext(GameContext);

    const forceUpdate = ForceUpdate();

    const onChange = (e: SyntheticEvent | any) => {
        e.preventDefault()
        if (e.target.value !== "") {
            const [boardRow, boardCol] = [e.target.attributes.getNamedItem("board-row").value, e.target.attributes.getNamedItem("board-col").value];

            let updatedMap = screen2DMap
            updatedMap[boardRow][boardCol] = parseInt(e.target.value)
            setScree2DMap(updatedMap)
            forceUpdate()
        }
    };

    return (
        <div className="sudoku-board">
            {screen2DMap && screen2DMap.map((e: any, rowIndex: number) => {
                return (
                    <>
                    {e && e.map((i: any, colIndex: number) => {
                        return (
                            <input id={`input_${rowIndex}${colIndex}`} board-row={rowIndex} board-col={colIndex} value={i} onChange={onChange} />
                        )
                    })}
                    </>
                )
            })}
        </div>
    )
}

export default SudokoBoard;