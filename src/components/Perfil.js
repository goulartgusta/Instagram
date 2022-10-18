import "../styles/perfil.scss";
import IconPerfil from "./IconPerfil";
import users from "../data/users";

function Perfil(props) {
    const {
        username,
        caption,
        urlText,
        iconSize,
        captionSize,
        storyBorder,
        hideAccountName,
        image
    } = props;

    let accountName = username ? username : users[Math.floor(Math.random() * users.length)].username;

    return (
        <div className="perfil">
            <IconPerfil
                iconSize={iconSize}
                storyBorder={storyBorder}
                image={image}
            />
            {(accountName || caption) && !hideAccountName && (
                <div className="textContainer">
                    <span className="accountName"><strong>{accountName}</strong></span>
                    <span className={`caption ${captionSize}`}>{caption}</span>
                </div>
            )}
            <a href="#">{urlText}</a>
        </div>
    );
}

export default Perfil;