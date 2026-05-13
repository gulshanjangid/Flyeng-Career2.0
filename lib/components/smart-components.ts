export const SMART_COMPONENTS: Record<string, { code: string; tag: string; filename: string }> = {
  "game.ticTacToe": {
    filename: "TicTacToe.jsx",
    tag: "<TicTacToe />",
    code: `import React, { useState } from 'react';
import { RefreshCw, Trophy } from 'lucide-react';

export default function TicTacToe() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  };

  const winner = calculateWinner(board);
  const status = winner 
    ? \`Winner: \${winner}\` 
    : board.every(Boolean) 
      ? "Draw!" 
      : \`Next player: \${xIsNext ? 'X' : 'O'}\`;

  const handleClick = (i) => {
    if (calculateWinner(board) || board[i]) return;
    const nextBoard = board.slice();
    nextBoard[i] = xIsNext ? 'X' : 'O';
    setBoard(nextBoard);
    setXIsNext(!xIsNext);
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setXIsNext(true);
  };

  return (
    <div className="flex flex-col items-center justify-center p-8 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-xl max-w-md mx-auto my-12">
      <div className="flex items-center gap-3 mb-8">
        <Trophy className={\`w-8 h-8 \${winner ? 'text-yellow-400 animate-bounce' : 'text-purple-400'}\`} />
        <h2 className="text-3xl font-bold text-white">Tic Tac Toe</h2>
      </div>

      <div className="grid grid-cols-3 gap-3 mb-8">
        {board.map((square, i) => (
          <button
            key={i}
            onClick={() => handleClick(i)}
            className={\`w-20 h-20 rounded-xl text-4xl font-bold flex items-center justify-center transition-all duration-200 
              \${square === 'X' ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/50' : ''}
              \${square === 'O' ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/50' : ''}
              \${!square ? 'bg-white/5 hover:bg-white/10' : ''}
            \`}
          >
            {square}
          </button>
        ))}
      </div>

      <div className="text-xl font-mono text-white mb-6 bg-black/30 px-6 py-2 rounded-full border border-white/5">
        {status}
      </div>

      <button
        onClick={resetGame}
        className="flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-all font-semibold"
      >
        <RefreshCw size={18} /> Restart Game
      </button>
    </div>
  );
}`
}
};