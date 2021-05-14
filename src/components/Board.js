import Square from './Square';

const style = {
    border: '4px solid green',
    borderRadius: '10px',
    width: '400px',
    height: '400px',
    display: 'grid',
    gridTemplate: 'repeat(3, 1fr) / repeat(3, 1fr)'
};

// style prop is default in react
function Board(props) {
    const {squares, onClick} = props;
    return (
        <div style={style}>
            <Square value="1" onClick={ () => onClick("some value")}/>
            <Square value="2" onClick={ () => onClick("some value")}/>
            <Square value="3" onClick={ () => onClick("some value")}/>
            <Square value="4" onClick={ () => onClick("some value")}/>
            <Square value="5" onClick={ () => onClick("some value")}/>
            <Square value="6" onClick={ () => onClick("some value")}/>
            <Square value="7" onClick={ () => onClick("some value")}/>
            <Square value="8" onClick={ () => onClick("some value")}/>
            <Square value="9" onClick={ () => onClick("some value")}/>
        </div>
    )
}

export default Board;