import "../styles/navegacao.scss";
import logo from "../images/logo.png";
import Menu from "./Menu.js";
import { ReactComponent as Procurar } from "../images/procurar.svg";

function Navegacao() {
    return (
        <div className="navegacao">
            <div className="container">
                <img className="logo" src={logo} alt="Logo Instagram" />
                <div className="search">
                    <Procurar className="searchIcon" />
                    <span className="searchText">Pesquisar</span>
                </div>
                <Menu />
            </div>
        </div>
    )
}

export default Navegacao;