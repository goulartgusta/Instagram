import "../styles/sidebar.scss";
import Sticky from "react-sticky-el";
import Perfil from "./Perfil";
import Sugestao from "./Sugestao";
import Footer from "./Footer";
import image from "../images/perfil.jpg"

function Sidebar() {
    return (
        <Sticky topOffset={-80}>
            <div className="sidebar">
                <Perfil
                    username="gusta.goulart"
                    caption="Gustavo Goulart"
                    urlText="Mudar"
                    iconSize="big"
                    image={image}
                />
                <Sugestao />
                <Footer />
            </div>
        </Sticky>
    )
}

export default Sidebar;