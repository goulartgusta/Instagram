import "../styles/cardmenu.scss"
import { ReactComponent as Curtir } from "../images/curtir.svg"
import { ReactComponent as Comentar } from "../images/comentar.svg"
import { ReactComponent as Compartilhar } from "../images/compartilhar.svg"
import { ReactComponent as Salvar } from "../images/salvar.svg"

function CardMenu() {
    return (
        <div className="cardmenu">
            <div className="interacoes">
                <Curtir className="icon" />
                <Comentar className="icon" />
                <Compartilhar className="icon" />
            </div>
            <Salvar className="icon" />
        </div>
    );
}

export default CardMenu;