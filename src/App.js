import './App.css';
import React, { useState } from 'react';
import GameContext from './components/game/GameContext';  // Импорт GameContext
import Game from './components/game';  // Компонент игры

function App() {
  const [gameKey, setGameKey] = useState(0);  // Ключ для перерисовки компонента
  const [game, setGame] = useState(() => new GameContext());  // Инициализация игры

  // Функция для перезапуска игры
  const handleRestart = () => {
    const newGame = new GameContext(); // Создаём новый экземпляр игры
    setGame(newGame); // Обновляем состояние игры
    setGameKey(prevKey => prevKey + 1);  // Пересоздаём компонент Game
  };

  return (
    <div className="app">
      <header className="bg-black p-2 white">
        <nav className="d-grid nav-grid align-items-center">
          <div className="d-flex justify-content-center">
            <h1 className="m-0">Chess</h1>
          </div>
          <div className="d-flex justify-content-center mt-2">
            <button className="btn btn-light" onClick={handleRestart}>Restart</button>
          </div>
        </nav>
      </header>
      {/* Передаем новый ключ и game в компонент Game */}
      <Game key={gameKey} game={game} />
    </div>
  );
}

export default App;
