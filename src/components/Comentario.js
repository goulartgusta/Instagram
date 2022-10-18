import "../styles/comentario.scss"

function Comentario(props) {
    const {
        accountName,
        comentario } = props;

    return (
        <div className="comentarioContainer">
            <div className="accountName">{accountName}</div>
            <div className="comentario">{comentario}</div>
        </div>
    );
}

export default Comentario;