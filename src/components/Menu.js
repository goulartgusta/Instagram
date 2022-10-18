import "../styles/menu.scss";
import { ReactComponent as Home } from "../images/home.svg";
import { ReactComponent as Inbox } from "../images/inbox.svg";
import { ReactComponent as Publicacao } from "../images/pub.svg";
import { ReactComponent as Explore } from "../images/explore.svg";
import { ReactComponent as Notificacao } from "../images/notificacao.svg";
import image from "../images/perfil.jpg"
import IconPerfil from "./IconPerfil";

function Menu() {
    return (
        <div className="menu">
            <Home className="icon" />
            <Inbox className="icon" />
            <Publicacao className="icon" />
            <Explore className="icon" />
            <Notificacao className="icon" />
            <IconPerfil iconSize="small" image={image} />
        </div>
    )
}

export default Menu;

