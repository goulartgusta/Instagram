import "../styles/cards.scss";
import Stories from "./Stories";
import Card from "./Card"

function Cards() {
    const comentariosUm = [
        {
            user: "nanotec.oficial",
            text: "Incrìvel, continua assim que você vai longe!",
            id: 1
        },
        {
            user: "toguro",
            text: "Em pleno 2022..",
            id: 2
        },
        {
            user: "mcluan",
            text: "Ta monstro fiote, voa 🚀",
            id: 3
        }
    ];

    const comentariosDois = [
        {
            user: "laris.f12",
            text: "Muito legal, Saudades. ❤️",
            id: 1
        },
        {
            user: "_itsuki_",
            text: "🖤👽🍑",
            id: 2
        },

    ];

    const comentariosTres = [
        {
            user: "boss_all",
            text: "Muito bom acompanhar suas conquistas!",
            id: 1
        }
    ];

    const comentariosQuatro = [
        {
            user: "clasq.salf",
            text: "Incrível essa foto, muito bom seus postos, continue assim!!!",
            id: 1
        },
        {
            user: "rocara1467",
            text: "Amei essa cena, ficou incrível 😎",
            id: 1
        }
    ];


    return (
        <div className="cards">
            <Stories />

            <Card
                accountName="neymarjr"
                storyBorder={true}
                image="https://picsum.photos/700"
                comentario={comentariosUm}
                curtidoPorTexto="ferquack23"
                curtidoPorNum={8999}
                horas={16}
            />
            <Card
                accountName="carvalho.henrique"
                storyBorder={false}
                image="https://picsum.photos/800"
                comentario={comentariosDois}
                curtidoPorTexto="loganmakw"
                curtidoPorNum={643}
                horas={19}
            />
            <Card
                accountName="gusta.goulart"
                storyBorder={true}
                image="https://picsum.photos/900"
                comentario={comentariosTres}
                curtidoPorTexto="ronaldofenomenops"
                curtidoPorNum={234}
                horas={21}
            />
            <Card
                accountName="gusta.goulart"
                storyBorder={true}
                image="https://picsum.photos/1000"
                comentario={comentariosQuatro}
                curtidoPorTexto="makqsafo._4"
                curtidoPorNum={1258}
                horas={23}
            />
        </div>
    );

}

export default Cards;