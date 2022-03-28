import React from 'react';
import './App.css';
import MainTitle from './components/MainTitle';
import SudokoBoard from './components/SudokoBoard';
import ControlPanel from './components/ControlPanel';
import GameProvider from './providers/GameProvider';
import ContactLinks from './components/ContactLinks';

const App:React.FC = () => {
  return (
    <>
    <MainTitle />
    <GameProvider>
      <SudokoBoard />
      <ControlPanel />
    </GameProvider>
    <ContactLinks />
    </>
  );
}

export default App;
