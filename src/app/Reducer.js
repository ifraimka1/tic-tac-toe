const initialState = {
    squares: Array(9).fill(null),
    xIsNext: true,
    winner: null,
    round: 1
};
  
const Reducer = (state = initialState, action) => {
switch (action.type) {
    case 'CLICK_SQUARE':
    const squares = state.squares.slice();
    if (state.winner || squares[action.index] || state.round === 10) {
        return state;
    }
    squares[action.index] = state.xIsNext ? 'X' : 'O';
    const winner = calculateWinner(squares);
    return {
        squares: squares,
        xIsNext: !state.xIsNext,
        winner: winner,
        round: state.round + 1
    };
    default:
    return state;
}
};

const calculateWinner = (squares) => {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (
            squares[a] &&
            squares[a] === squares[b] &&
            squares[a] === squares[c]
        ) {
            return squares[a];
        }
    }
    return null;
};
  
export default Reducer;
