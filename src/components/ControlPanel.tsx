import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons/faGraduationCap';
import { faCheck } from '@fortawesome/free-solid-svg-icons/faCheck';
import { GameContext, GameProviderInterface } from '../providers/GameProvider';

export interface ControlPanelInterface {
    level: String;
    setLevel: Function;
    validateValue: String;
    validate: Function;
    difficulty: Function;
    solve: Function;
    reset: Function
}

const ControlPanel:React.FC = () => {
    const { level, setLevel, validateValue, validate, difficulty, solve, reset }:GameProviderInterface = useContext(GameContext);

    return (
        <div className='control-panel'>
            <section>
                <h3> Generate: </h3>
                <div className="right-float">
                    <div className="btn-group">
                        <button className="btn" onClick={() => setLevel('easy')}>Easy</button>
                        <button className="btn" onClick={() => setLevel('medium')}>Medium</button>
                        <button className="btn" onClick={() => setLevel('hard')}>Hard</button>
                        <button className="btn" onClick={() => setLevel('random')}>Random</button>
                    </div>
                    <button className="btn btn-outline-secondary" onClick={(e) => reset(e)}>Clear</button>
                </div>
            </section>
            <section>
                <div className="buttons-section">
                    <div className="input-group" tabIndex={0}>
                        <button className="btn btn-outline-secondary" onClick={(e) => validate(e)}>
                            <FontAwesomeIcon icon={faCheck as IconProp} />
                            Validate
                        </button>
                        <div className="input-group-prepend">
                            <div className="input-group-text" id="btnGroupAddon">{validateValue}</div>
                        </div>
                    </div>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <div className="input-group-text" id="btnGroupAddon">{level}</div>
                        </div>
                        <button className="btn btn-outline-secondary" onClick={(e) => difficulty(e)}>
                            <FontAwesomeIcon icon={faGraduationCap as IconProp} />
                            Difficulty
                        </button>
                    </div>
                </div>
            </section>
            <section>
                <button className="btn btn-outline-secondary btn-lg btn-block" onClick={(e) => solve(e)}>Solve</button>
            </section>
        </div>
    )
}

export default ControlPanel;