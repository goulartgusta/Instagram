import "../styles/card.scss"
import Perfil from "./Perfil";
import { ReactComponent as CardButton } from "../images/pontos.svg"
import CardMenu from "./CardMenu";
import Comentario from "./Comentario";
import { ReactComponent as Reagir } from "../images/reagir.svg"

function Card(props) {
    const {
        storyBorder,
        image,
        comentario,
        curtidoPorTexto,
        curtidoPorNum,
        horas
    } = props;

    return (
        <div className="card">
            <header>
                <Perfil iconSize="medium" storyBorder={storyBorder} />
                <CardButton className="cardButton" />
            </header>
            <img className="cardImage" src={image} alt="card content" />
            <CardMenu />
            <div className="curtidoPor">
                <Perfil iconSize="small" hideAccountName={true} />
                <span>
                    Curtido por <strong>{curtidoPorTexto}</strong> e{" "}
                    <strong>{curtidoPorNum} outras pessoas</strong>
                </span>
            </div>
            <div className="comentario">
                {comentario.map(comentario => {
                    return (
                        <Comentario
                            key={comentario.id}
                            accountName={comentario.user}
                            comentario={comentario.text}
                        />
                    )
                })}
            </div>
            <div className="tempoPostado"> HÁ {horas} HORAS ATRÁS</div>
            <div className="addComentario">
                <Reagir className="reagir" />
                <div className="comentarioTexto">Adicione um comentário...</div>
                <div className="publicar">Publicar</div>
            </div>
        </div>
    );
}

export default Card;