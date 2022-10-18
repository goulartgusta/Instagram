import "../styles/sugestao.scss";
import Perfil from "./Perfil";

function Sugestao() {
    return (
        <div className="sugestao">
            <div className="tituloContainer">
                <div className="titulo">Sugestões para você</div>
                <a href="#"><strong>Ver tudo</strong></a>
            </div>
            <Perfil
                caption="Seguido por alanzoka e 6 outras pes..."
                urlText="Seguir" iconSize="medium"
                captionSize="small"
            />
            <Perfil
                caption="Seguido por gab.augustoz e 15 outra..."
                urlText="Seguir" iconSize="medium"
                captionSize="small"
            />
            <Perfil
                caption="Novo no Instagram"
                urlText="Seguir" iconSize="medium"
                captionSize="small"
            />
            <Perfil
                caption="Seguido por glaucofernando84 e 1 e ..."
                urlText="Seguir" iconSize="medium"
                captionSize="small"
            />
            <Perfil
                caption="Seguido por jao_victor___ e 6 outras ..."
                urlText="Seguir" iconSize="medium"
                captionSize="small"
            />

        </div>
    );
}

export default Sugestao;