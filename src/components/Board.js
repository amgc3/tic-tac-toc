import Square from './Square';

const style = {
    border: '4px solid green',
    borderRadius: '10px',
    width: '400px',
    height: '400px',
    margin: '0 auto',
    display: 'grid',
    gridTemplate: 'repeat(3, 1fr) / repeat(3, 1fr)'
};

// style prop is default in react
function Board(props) {
    const {squares, onClick} = props;
    return (
        <section style={style}>
            {squares.map((square, index) => {
                return (
                <Square key={index} value={square} onClick={ () => onClick(index)}/> )
            })}
            
        </section>
    )
}

export default Board;