import React from "react";
import "./trailer.css";
import Video from '../../video.mp4';

function Trailer() {
    return (
        <div className="trailer-container">
            <div className="sinopse">
                <h2 className="sinopse-title">Sinopse</h2>
                <p className="description">
                A série clássica gira em torno das aventuras vividas por Naruto Uzumaki, um jovem órfão habitante da Aldeia da Folha que sonha em se tornar o quinto Hokage, o maior guerreiro e governante da vila. Ao se graduar como ninja, Naruto descobre que tem um demônio raposa selado dentro de si.
                Naruto Shippuden é a segunda parte do anime Naruto, que adapta a continuação do mangá original escrito por Masashi Kishimoto e consiste em 500 episódios ao todo. Ambientada dois anos após os eventos da série original, Shippuden acompanha o ninja adolescente Naruto e seus aliados. Naruto retorna a Aldeia da Folha (Konoha), depois de passar os últimos tempos treinando com um dos três ninjas lendários: Jiraiya. Sasuke fugiu da Aldeia da Folha para se juntar a Orochimaru e matar seu irmão, Itachi Uchiha. Enquanto isso, Akatsuki começa a recrutar demônios, tendo como primeiro alvo Gaara da Aldeia da Areia. Por sua vez, Naruto decide tentar convencer Sasuke a voltar para casa mais uma vez, mas encontrando o dobro de inimigos no caminho e tendo que conquistar o respeito da Aldeia à medida que a protege. Apesar de existir a possibilidade de paz, o destino da Aldeia da Folha corre perigo.
                </p>
                <button className="button">
                    Comprar Ingresso
                </button>
            </div>

            <div className="trailer-content">
                <video className="trailer" controls>
                    <source src={Video} />
                    Navegador não suporta este tipo de vídeo!
                </video>
            </div> 
        </div>
    );
};

export default Trailer;