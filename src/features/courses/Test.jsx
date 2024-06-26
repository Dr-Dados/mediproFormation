import { useState } from "react";

function Test() {
  const [test, setTest] = useState("etest");

  return (
    <>
      <div className="courseSection">
        <p>
          Les voies respiratoires sont l'ensemble des conduits qui permettent le
          passage d'air du milieu extérieur jusqu'aux poumons. On peut diviser
          les voies respiratoires en :
        </p>
        <ul className="listStyle">
          <li>
            Voies respiratoires hautes : cavité nasale, la bouche, le pharynx et
            le larynx
          </li>
          <li>
            Voies respiratoires basses : la trachée, les bronches souches droite
            et gauche, les bronches lobaires et les bronchioles
          </li>
          <li>
            Les alvéoles pulmonaires représentent l'espace d'échange avec le
            sang.
          </li>
        </ul>
      </div>

      <h3>- Les fosses nasales :</h3>
      <p>
        Les fosses nasales sont 2 cavités aériennes, allongées d'avant en
        arrière, séparées par une cloison. C'est la partie la plus supérieure
        des voies respiratoires, elle constitue donc une des premières barrières
        de défense contre les agents agresseurs.
      </p>
      <p>
        Les fosses nasales sont tapissées par une muqueuse de type respiratoire.
        A la partie supérieure des fosses nasales se trouve la zone de
        l'olfaction. Elles ont 3 rôles essentiels : respiratoire, immunitaire et
        olfactif.
      </p>
      <ul>
        <li>Filtrent les impuretés et agents pathogènes</li>
        <li>Humidifient l'air</li>
        <li>Réchauffent l'air</li>
        <li>Responsables de l'odorat</li>
      </ul>
      <h3>- Le pharynx :</h3>
      <p>
        Fait partie des voies aériennes supérieures et se divise en 3 parties :
        Nasopharynx, Oropharynx et Hypopharynx ou Laryngopharynx
      </p>
      <p>
        Nous disposons de 6 amygdales organisées en 3 paires : palatines,
        pharyngiennes et linguales
      </p>
      <h3>- Les sinus :</h3>
      <p>
        Cavités aériennes creusées dans le massif facial, recouvertes d'une
        muqueuse respiratoire, et reliées aux fosses nasales par un orifice de
        drainage appelé méat.
      </p>
      <p>Il existe 4 paires de sinus:</p>
      <ul>
        <li>Maxillaires : sur le côté</li>
        <li>Frontaux: au dessus des yeux</li>
        <li>
          Ethmoïdaux : entre les 2 yeux de chaque côté de la cloison en haut
        </li>
        <li>Sphénoïdaux : au fond du nez</li>
      </ul>
      <p>
        <strong>Rôle des sinus :</strong>
      </p>

      <ul>
        <li>
          Améliorent le réchauffement et l'humidification de l'air inhalé avant
          qu'il n'atteigne les poumons
        </li>
        <li>Augmentent la résonnance de la voix</li>
        <li>Amortissent d'éventuels coups reçus au visage</li>
        <li>
          Réduisent le poids de la partie antérieure du crâne car ils sont creux
        </li>
      </ul>
      <h3>- Particularités chez l'enfant</h3>
      <p>
        Les fosses nasales et les sinus répondent chez l'enfant comme chez
        l'adulte a une triple fonction: respiratoire, immunologique et
        olfactive, toutefois celles ci présentent quelques différences:
      </p>
      <ul>
        <li>Chez le nourrisson la respiration est exclusivement nasale.</li>
        <li>
          Les fosses nasales sont étroites avec des cornets volumineux : une
          simple inflammation muqueuse peut rapidement engendrer une gêne
          respiratoire importante
        </li>
        <li>
          L'immaturité immunologique des nourrissons et des jeunes enfants
          explique la plus grande fréquence des infections rhinosinusiennes.
        </li>
      </ul>
    </>
  );
}

export default Test;
