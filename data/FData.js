const courses = [
  {
    id: 1,
    title: "APIXOL",
    description: "Description for Course 1",
    color: "orange",
    sections: [
      {
        id: 1,
        title: "Formation Médicale",
        chapters: [
          {
            id: 1,
            title: "I-Anatomie",
            content: `
      
      <p>
        Les voies respiratoires sont l'ensemble des conduits qui permettent le
        passage d'air du milieu extérieur jusqu'aux poumons. On peut diviser les
        voies respiratoires en :
      </p>
      <ul>
        <li>
          Voies respiratoires hautes : cavité nasale, la bouche, le pharynx et
          le larynx
        </li>
        <li>
          Voies respiratoires basses : la trachée, les bronches souches droite
          et gauche, les bronches lobaires et les bronchioles
        </li>
        <li>
          Les alvéoles pulmonaires représentent l'espace d'échange avec le sang.
        </li>
      </ul>

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
      <p><strong>Rôle des sinus :</strong></p>

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
  </body>
</html>
`,
          },
          {
            id: 2,
            title: "II. Physiopathologie",
            content: `
    <p>
      La gorge, comme tout l'arbre respiratoire, se défend par plusieurs
      mécanismes :
    </p>
    <ul>
      <li>
        <p>Tapis muco-ciliaire</p>
        <ul>
          <li>Mucus : tapisse la muqueuse, la défend et la protège</li>
          <li>Cils vibratiles : aident à évacuer les mucosités</li>
        </ul>
      </li>
      <li>
        <p>Système immunitaire</p>
        <ul>
          <li>Macrophages</li>
          <li>Lymphocytes T et B</li>
        </ul>
      </li>
      <li>
        <p>Amygdales</p>
        <ul>
          <li>Protection contre les microbes</li>
          <li>Formation d'anticorps</li>
        </ul>
      </li>
    </ul>
    <p>
      Les pathologies affectant l'appareil respiratoire peuvent être de cause
      virale, bactérienne ou dues à des agents irritants :
    </p>
    <ul>
      <li>
        Virus : Rhinovirus, Coronavirus, Virus respiratoire syncitial, Virus
        influenzae, Virus Para-influenzae
      </li>
      <li>
        Bactéries : Pneumocoque, Haemophilus influenzae, Moraxella catarrhalis,
        Staphylocoque
      </li>
      <li>
        Agents irritants : Poussière, Pollen, Gaz toxiques, Fumée de cigarette…
      </li>
    </ul>
    <p>Et peuvent se manifester par différents symptômes :</p>
    <ul>
      <li>
        Locaux : toux, douleur, irritation, enrouement, écoulement nasal,
        obstruction nasale…
      </li>
      <li>
        Généraux : fièvre, courbatures, difficulté de respirer (dyspnée) ou
        d'avaler (dysphagie), fatigue…
      </li>
    </ul>

    <h3>1. La toux</h3>
    <p>
      Réaction de l'organisme en cas d'irritation des voies respiratoires. On
      peut la différencier en :
    </p>
    <ul>
      <li>
        <p>
          <strong>Toux sèche </strong>: toux réflexe, stimulation du centre de
          la toux au niveau cérébral suite à l'irritation des voies
          respiratoires
        </p>
        <p>
          Traitement par les Antitussifs à base de codéine ou Antihistaminiques
        </p>
      </li>
      <li>
        <p>
          <strong>Toux grasse</strong> : avec modification des propriétés du
          mucus Traitement
        </p>
        <p>par les Fluidifiants (Carbocistéine, Ambroxol, Bromhexine)</p>
      </li>
    </ul>
    <p>
      La toux sèche ou grasse peut faire partie du tableau clinique de plusieurs
      pathologies aiguës :
    </p>
    <ul>
      <li>
        Infection des voies respiratoires hautes : Pharyngite, Angines
        (Amygdalite), Laryngite
      </li>
      <li>
        Infection des voies respiratoires basses : Bronchite, Bronchiolite,
        Alvéolite, Pneumonie
      </li>
    </ul>
    <p>
      Ou chroniques tels que les BPCO (broncho-pneumopathies chroniques
      obstructives).
    </p>
    <p>
      Les BPCO regroupent plusieurs entités pathologiques dont la plus fréquente
      est la bronchite chronique.
    </p>
    <p>
      Il existe aussi des remèdes naturels contre la toux sèche et grasse :
      Propolis, Eucalyptus, Sureau, Plantain, Pin, Mauve…
    </p>
    <h3>2. Les maux de gorge</h3>
    <p>
      Regroupent les inflammations du pharynx se manifestant par une irritation,
      douleur et rougeur et peuvent être dus soit à des agents pathogènes
      (virus, bactéries) ou bien des agents irritants.
    </p>
    <p>
      Les principales étiologies des maux de gorge : les Angines, La Pharyngite
      et l'Aphtose oro-pharyngée.
    </p>
    <p>
      Les maux de gorge, comme les affections respiratoires basses, peuvent
      avoir une cause virale (80% des cas), bactérienne ou peuvent êtres dus à
      des agents irritants.
    </p>
    <h3>3. L'enrouement</h3>
    <p>
      Modification de la voix due à une atteinte des cordes vocales due à une
      laryngite.
    </p>
    <p>
      Le traitement de l'enrouement dépend de la cause (Anti-inflammatoire ±
      Antibiotiques).
    </p>`,
          },
          {
            id: 3,
            title: "III. Pathologies",
            content: `    <h3>1. La pharyngite</h3>
    <p>
      Infection du Pharynx, peut être précédée des signes d'une Rhinite
      (Rhinopharyngite)
    </p>
    <p>
      <strong>Signes cliniques</strong> : Toux, irritation de la gorge, +-
      Fièvre, +- signes digestifs chez le nourrisson et l'enfant ; déglutition
      douloureuse
    </p>
    <h3>2. La laryngite</h3>
    <p>Infection du Larynx</p>
    <p>
      Causes : plutôt virales chez l'enfant et plutôt bactériennes + + chez
      l'adulte +- facteurs irritants
    </p>
    <p>
      <strong>Signes cliniques</strong> : Enrouement, Dysphonie, Toux sèche,
      Syndrome pseudogrippal, +/- Fièvre
    </p>
    <h3>3. Les angines</h3>
    <p>
      Infection des amygdales, rare avant 3 ans, peut être de cause virale
      (90%), bactérienne (10%) – Streptocoque β-hémolytique du groupe A.
    </p>
    <p>
      <strong>Signes cliniques</strong> : Amygdales gonflées, Irritation de la
      gorge, Fièvre, Toux d'irritation, Dysphagie, Signes digestifs chez
      l'enfant
    </p>

    <h3>4. L'aphtose oro-pharyngée</h3>
    <p>
      Les angines et les pharyngites surtout d'origine bactérienne
      (streptocoque) peuvent s'accompagner d'Aphtose oro-pharyngée.
    </p>
    <p>
      L'aphte est définit comme une éruption ulcéreuse douloureuse au niveau de
      la muqueuse.
    </p>

    <h3>5. La grippe</h3>
    <p>
      Fièvre : Fréquente, Température entre 38 °C et 40 °C avec un début soudain
    </p>
    <p>Écoulement nasal, toux, maux de tête, courbatures généralisées</p>
    <h3>6. Le rhume</h3>
    <p>Écoulement nasal, Toux, +-Maux de tête</p>

    <h3>7. La rhinite allergique</h3>
    <p>Écoulement nasal, obstruction nasale, démangeaisons, éternuements</p>

    <h3>8. La sinusite</h3>
    <p>
      Écoulement nasal, obstruction nasale, sécrétions épaisses, douleur à la
      pression, difficulté d'alimentation (bébé)
    </p>
    <h3>9. La bronchite</h3>
    <p>Infection des Bronches, plus fréquente chez l'Adulte</p>
    <p>Causes : Virales +++, bactériennes</p>
    <p>
      <strong>Signes cliniques</strong>: Toux grasse (productive), parfois
      précédée par une toux sèche douloureuse et incessante, Syndrome
      pseudogrippal, +/- Fièvre
    </p>
    <h3>10. La bronchiolite</h3>
    <p>
      Infection des bronchioles, plus fréquente chez le nourrisson et l'enfant
      de moins de 2 ans
    </p>
    <p>Causes : Virales (virus syncitial respiratoire)</p>
    <p>
      <strong>Signes cliniques</strong> : Toux productive (parfois sèche au
      début avec dyspnée, parfois précédée par des signes de rhinite, +/-
      Fièvre. Peut être grave, doit faire rechercher un terrain atopique.
    </p>

    <h3>11. La pneumonie</h3>
    <p>
      <strong>Signes cliniques</strong> : Début BRUTAL, Fièvre (parfois
      frissons, sueurs...) - Toux sèche - Douleur thoracique qui bloque la
      respiration - Dyspnée progressive
    </p>
    <p>
      Causes : Essentiellement bactériennes : Pneumocoque, Haemophilus
      influenzae, Legionella…
    </p>
    <h3>12. La bronchite chronique</h3>
    <p>
      Définition: Caractérisée par une hypersécrétion muqueuse permanente ou
      récidivante au moins 3 mois par an pendant au moins 2 années consécutives,
      plus fréquente chez l'adulte et surtout fumeur ++
    </p>
    <p>
      <strong>Signes cliniques</strong>: TOUX productive chronique qui dure
      depuis plus de 3 mois - Dyspnée progressive, persistante
    </p>`,
          },
          {
            id: 4,
            title: "IV.	Moyens de traitement",
            content: `    <p>
      Le traitement des pathologies du tractus respiratoire dépend de chaque
      affection, ses causes ainsi que des signes associés :
    </p>
    <ol>
      <li>
        <p><strong>Traitement de la toux :</strong></p>
        <p><strong>- Les antitussifs opiacés</strong></p>
        <ul>
          <li>Dérivés de codéine, de pholcodine, de dextrométhorphane…</li>
          <li>
            Mode d'action (action centrale) = suppression du reflexe de la toux
            / centre de la toux (bulbaire)
          </li>
          <li>
            Nombreux effets secondaires (somnolence, vertiges, sédation...)
          </li>
          <li>Le traitement doit être de courte durée.</li>
          <li>
            Ne doivent pas être prescrit chez l'enfant de moins de 30 mois pour
            risque de dépression respiratoire.
          </li>
        </ul>
        <p>
          A base de codéine : Eucalyptine (Maphar), Codetux (Galenica), Euphon
          (Cooper), Neocodion (Propharm), Pulmofluide (Cooper), Polery
          (Novopharma) <span> => Adultes et enfants de plus de 12 ans</span>
        </p>

        <p>
          A base de pholcodine : Trophirès (Synthemedic)
          <span> => A partir de 30 mois (2 ans et demi)</span>
        </p>

        <p>
          A base de dextrométorphane : Drill Toux sèche (Pierre Fabre), Akindex
          (Stéripharma)<span> =>A partir de 30 mois (2 ans et demi)</span>
        </p>
        <p><strong>- Les antitussifs antihistaminiques</strong></p>
        <ul>
          <li>A base d'Alimémazine ou de Prométhazine…</li>
          <li>Mode d'action : action sédative et anti-cholinergique</li>
          <li>
            Utilisés dans le traitement des affections d'origine allergique et à
            prédominance nocturne
          </li>
          <li>
            Effets secondaires : effets secondaires anti-cholinergiques, effet
            sédatif (surtout les antihistaminique de 1ère génération)
          </li>
          <li>
            Ne doivent pas être prescrit chez l'enfant de moins de 24 mois pour
            risque d'apnée
          </li>
        </ul>
        <p>
          Toplexil (Aventis), Benadryl (Maphar)
          <span> =>A partir de 2 ans</span>
        </p>
        <p><strong>- Les fluidifiants</strong></p>
        <ul>
          <li>Carbocystéine, Ambroxol, Bromhexine.</li>
          <li>
            Mode d'action : Diminution du degré de viscosité de la couche
            géliforme du mucus bronchique (ruptures de liaisons chimiques)
          </li>
          <li>
            Effets secondaires : troubles digestifs, inondation bronchique…
          </li>
          <li>
            Précaution d'emploi: avoir la capacité d'évacuer les sécrétions
            bronchiques (soit par la toux, soit par la kinésithérapie
            respiratoire)
          </li>
          <li>Ne jamais associer Fluidifiant et Antitussif.</li>
        </ul>
        <p>
          <strong>Carbocystéine</strong> : Drill (Cooper), Rhinathiol (Aventis),
          Medibronc (Sothema), Bronchocist (Synthemedic), Muciclar (Pfizer),
          Humex (Steripharma), Broncathiol (Bottu), Muccocil (Galenica),
          Bronchofluid - Bronchokod (Novopharma)
        </p>
        <p>
          <strong>Ambroxol</strong> : Broncholiber - Bromax (Afric-Phar),
          Broclar (Ipharma), Eumoxol (Pharma 5), Fluibron (Promopharm), Muxol
          (Cooper)
        </p>
        <p><strong>Bromhexine</strong> : Pectryl (Laprophan)</p>
        <span>=> A partir de 2 ans</span>
        <p><strong>- Traitement naturel</strong></p>
        <ul>
          <li>
            <p>Avantages</p>
            <ul>
              <li>Efficacité</li>
              <li>Tolérance</li>
              <li>Utilisation chez le petit enfant et le nourrisson</li>
            </ul>
          </li>
          <li>
            Phyto-aromathérapie : Thym, Eucalyptus, Pin, Mauve, Plantain,
            Sureau…
          </li>
          <li>
            Api-thérapie : Propolis, Miel, Gelée royale, Pollen, Cire, Venin
          </li>
        </ul>
      </li>
      <li>
        <p><strong>Traitement symptomatologique :</strong></p>
        <ul>
          <li>
            Antipyrétique : Paracétamol (Doliprane), Acide acétylsalicylique
            (Aspegic)
          </li>
          <li>Ibuprofène (Brufen, Algantil),</li>
          <li>Corticoïdes (solupred, effipred, Celestène gouttes)</li>
          <li>Vitamine C</li>
          <li>
            Si forme grave : hospitalisation, kinésithérapie, oxygénation…
          </li>
        </ul>
      </li>
      <li>
        <p><strong>Traitement étiologique :</strong></p>
        <ul>
          <li>Antibiotiques en cas de surinfection</li>
          <li>Chirurgie (angines récurrentes, polypes, déviation nasale…)</li>
          <li>Eviction tabac, agents irritants</li>
        </ul>
      </li>
    </ol>`,
          },
        ],
      },
      {
        id: 2,
        title: "Composition gamme APIXOL",
        chapters: [
          {
            id: 111,
            title: "Propolis",
            content: `
                   <p>
      <strong>Définition</strong> : Mélange de substances résineuses, gommeuses
      et balsamiques de consistance visqueuse récoltées par les abeilles à
      partir de bourgeons et écorces de certains arbres et végétaux enrichies
      par leurs sécrétions salivaires.
    </p>
    <p>Les conditions pour avoir une propolis de qualité :</p>
    <ul>
      <li>Purifiée</li>
      <li>Déparaffinée (sans cire)</li>
      <li>Titrés en Flavonoïdes et Phénols</li>
      <li>Intérêt pour la ruche : « ciment antiseptique »</li>
      <li>Stabilité architecturale de la ruche + Antisepsie</li>
    </ul>
    <p>Les conditions à l'intérieur de la ruche :</p>
    <ul>
      <li>Température : 35°c</li>
      <li>Humidité à 70%</li>
      <li>Sucre ++++</li>
      <li>Centaine de milliers d'abeille</li>
      <li>Entrée possible d'insecte</li>
    </ul>
    <p>
      En principe la ruche a toutes les conditions pour être un milieu propice
      au développement des microbes, mais grâce à la propolis = milieu stérile
    </p>
    <p><strong>Propriétés: </strong></p>
    <ul>
      <li>Antiseptiques : antivirales, antibactériennes…</li>
      <li>Anti-inflammatoires</li>
      <li>Immunostimulantes</li>
      <li>Antalgique et anesthésique locale</li>
      <li>Cicatrisantes et régénératrices</li>
      <li>Anti-oxydantes</li>
      <li>Antiallergiques, anticarcinogène, antiulcérogène…</li>
    </ul>`,
          },
          {
            id: 112,
            title: "Eucalyptus(Eucalyptus globulus)",
            content: `    <h4>
      <strong><em>Famille des myrtacées</em></strong>
    </h4>
    <p>
      Le genre eucalyptus comporte plus de 600 à 700 espèces et variétés dont le
      plus fréquent est <strong>l'Eucalyptus globulus</strong>
    </p>

    <p><strong>Origine :</strong> Australie-Tasmanie- Malaisie-Indonésie</p>
    <p><strong>Principal actif chimique :</strong> 1,8 cinéole : Eucalyptol</p>
    <p>
      <strong>Propriétés:</strong>
    </p>
    <ul>
      <li>
        Principales : Antibactériennes, antivirales, anti-inflammatoires, antalgiques, expectorant
      </li>
      <li>Autres : cicatrisant, antioxydant</li>
    </ul>`,
          },
        ],
      },
      {
        id: 3,
        title: "Formation Produit",
        chapters: [
          {
            id: 121,
            title: "Apixol Sirop",
            content: `<ol>
      <li>
        Composition
        <ul>
          <li>
            Apixol sirop adultes : 60ml/mg
            <ul>
              <li>Propolis (e.h.g) : 1,20 g</li>
              <li>Echinac&eacute;e (e.s) : 300 mg</li>
              <li>Sureau (e.s) : 300 mg</li>
              <li>Plantain e.h.g : 300 mg</li>
              <li>Pin sylvestre h.e : 150 mg</li>
              <li>Eucalyptus (h.e) : 60 mg</li>
              <li>Tilleul (e.h.g) : 150 mg</li>
              <li>Vitamine C : 150 mg (AJR : 250%)</li>
            </ul>
          </li>
        </ul>
      </li>
      <br />
      <ul>
        <li>
          Apixol sirop enfants : 45ml/mg
          <ul>
            <li>Propolis (e.g) : 450</li>
            <li>Echinac&eacute;e (e.s) : 180</li>
            <li>Sureau (e.s) : 230</li>
            <li>Vitamine C : 180 (AJR : 300%)</li>
            <li>Ac&eacute;rola (e.s) : 270</li>
          </ul>
        </li>
      </ul>
    </ol>`,
          },
          { id: 122, title: "Chapter 2.2", content: "Content for Chapter 2.2" },
        ],
      },
    ],
  },
  {
    id: 2,
    title: "CURARTI",
    color: "blue",
    description: "Description for Course 1",
    sections: [
      {
        id: 1,
        title: "Formation Médicale",
        chapters: [
          {
            id: 1,
            title: "I-Anatomie",
            content: ``,
          },
          {
            id: 2,
            title: "II. Physiopathologie",
            content: ``,
          },
          {
            id: 3,
            title: "III. Pathologies",
            content: ``,
          },
          {
            id: 4,
            title: "IV.	Moyens de traitement",
            content: ``,
          },
        ],
      },
      {
        id: 2,
        title: "Section 2",
        chapters: [
          { id: 121, title: "Chapter 2.1", content: "Content for Chapter 2.1" },
          { id: 122, title: "Chapter 2.2", content: "Content for Chapter 2.2" },
        ],
      },
    ],
  },
  {
    id: 3,
    title: "FITORAX",
    color: "yellow",
    description: "Description for Course 1",
    sections: [
      {
        id: 1,
        title: "Formation Médicale",
        chapters: [
          {
            id: 1,
            title: "I-Anatomie",
            content: ``,
          },
          {
            id: 2,
            title: "II. Physiopathologie",
            content: ``,
          },
          {
            id: 3,
            title: "III. Pathologies",
            content: ``,
          },
          {
            id: 4,
            title: "IV.	Moyens de traitement",
            content: ``,
          },
        ],
      },
      {
        id: 2,
        title: "Section 2",
        chapters: [
          { id: 121, title: "Chapter 2.1", content: "Content for Chapter 2.1" },
          { id: 122, title: "Chapter 2.2", content: "Content for Chapter 2.2" },
        ],
      },
    ],
  },
];

const quizes = [
  {
    id: 1,
    title: "APIXOL",
    questions: [
      {
        id: 1,
        question:
          "Citez la classe des sirops qui luttent contre la toux sèche et donnez 3 exemples de molécules et de noms commerciaux.",
      },
      {
        id: 2,
        question:
          "Citez la classe des sirops qui calment la toux grasse et citez 3 exemples de molécules et de noms commerciaux.",
      },
      { id: 3, question: "Citez la composition de Apixol SB adulte." },
      { id: 4, question: "Citez la posologie de Apixol SB adulte." },
      {
        id: 5,
        question: "Citez les présentations et les prix de Apixol SB adulte.",
      },
      { id: 6, question: "Citez la composition de Apixol SB enfant." },
      { id: 7, question: "Citez la posologie de Apixol SB enfant." },
      {
        id: 8,
        question: "Citez les présentations et les prix de Apixol SB enfant.",
      },
      { id: 9, question: "Citez les avantages de Apixol Vs Fluibron." },
      { id: 10, question: "Citez les avantages de Apixol Vs Docivox SB." },
      { id: 11, question: "Citez les avantages de Apixol Vs Prospan SB." },
      { id: 12, question: "Citez les avantages de Apixol Vs Enrouex SB." },
      {
        id: 13,
        question: "Citez la composition de Apixol Spray gorge adulte.",
      },
      { id: 14, question: "Citez la posologie de Apixol Spray gorge enfant." },
      {
        id: 15,
        question:
          "Citez les avantages de Apixol spray gorge Vs Docivox Spray gorge.",
      },
      { id: 16, question: "Citez la composition de Apixol spray nasal." },
      {
        id: 17,
        question: "Quels sont les points forts de Apixol spray nasal.",
      },
    ],
  },
];

export { courses, quizes };
