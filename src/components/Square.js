const style = {
    background: 'ligthblue',
    border: '2px solid green',
    fontSize: '30px',
    cursor: 'pointer',
    outline: 'none'

}
function Square(props) {
    const {onClick, value } = props;
    return (
        <button style={style} onClick={onClick}>
            {value}
        </button>
    )
}

export default Square;