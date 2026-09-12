"use strict";
/* ---------------- DATA ----------------
   Remplace ce bloc par le contenu réel de ton jeu.
   Chaque entrée: id, catégorie, nom, court résumé, image-couleur (accent), infos, description.
*/
const ENTRIES_BASE = [
    { id: 'alice-alfreya', cat: 'personnages', name: 'Alice Alfreya', tagline: 'Hybride de rang A', rarity: 'rare', faction: 'halcyon', squad: 'oracle',
        image: 'assets/characters/alice-alfreya.jpg',
        quote: "« Ça ? Ce n'était rien, je suis capable de faire beaucoup mieux vous savez. »",
        summary: "Jeune hybride de rang A, fraîchement augmentée, qui met sa vie en jeu sur le terrain au service de Halcyon tout en doutant des véritables intentions de son supérieur.",
        info: { "Rang": "Fraîchement augmentée — Rang A", "Gène d'Oxiri lié": "Kitzo", "Capacité": "Matérialisation", "Faction": "Halcyon" },
        body: ["Alice est une jeune hybride de rang A. Malgré son jeune âge, elle a déjà fait ses preuves sur le terrain en risquant sa vie pour sauver son monde. Elle est consciente qu'elle a été créée comme une arme pour Halcyon et vit en tant que telle, faisant tout son possible pour mener à bien la mission qui lui a été confiée. Elle est un élément très fiable, sur et en dehors du champ de bataille.",
            "Malgré les nombreux obstacles qui se sont mis sur sa route depuis sa création, elle n'a jamais cessé d'avancer. Cependant, malgré son sérieux et son application dans la guerre dans laquelle elle est impliquée, de nombreux doutes subsistent en elle quant aux véritables intentions de son supérieur. Alice se demande si Halcyon cherche réellement à sauver le monde ou s'il poursuit un autre objectif caché.",
            "Cette incertitude la trouble et la pousse à remettre en question son rôle dans cette guerre. Malgré tout, Alice continue à se battre avec détermination pour protéger les innocents et vaincre les ennemis de son monde."],
        story: ["Exemple de chapitre — remplace ce texte par le véritable chapitre 1 dans le champ « story » de cette entrée.",
            "La pluie tombait sur les toits de verre du complexe Halcyon lorsqu'Alice ouvrit les yeux pour la première fois depuis son augmentation. Autour d'elle, les techniciens s'affairaient sans un mot, comme si sa réussite n'était qu'une ligne de plus dans un rapport.",
            "Elle ne se souvenait pas d'avoir eu peur. Seulement de ce vide étrange, cette sensation d'être devenue quelque chose de neuf — ni tout à fait elle-même, ni tout à fait une arme. Ce sentiment ne l'a plus jamais quittée depuis."] },
    { id: 'rook-halvenn', cat: 'personnages', name: 'Rook Halvenn', tagline: 'Hybride de rang C', rarity: 'common', faction: 'halcyon',
        summary: "Exemple de fiche — remplace ce personnage par un vrai membre de la faction Halcyon.",
        info: { "Rang": "Rang C", "Faction": "Halcyon" },
        body: ["Ceci est une fiche d'exemple ajoutée pour démontrer le carrousel 3D avec plusieurs personnages dans une même faction.",
            "Remplace ce texte par la vraie histoire de ton personnage, ou supprime cette entrée dans ENTRIES."] },
    { id: 'nyx-sorel', cat: 'personnages', name: 'Nyx Sorel', tagline: 'Hybride de rang B', rarity: 'common', faction: 'halcyon',
        summary: "Exemple de fiche — remplace ce personnage par un vrai membre de la faction Halcyon.",
        info: { "Rang": "Rang B", "Faction": "Halcyon" },
        body: ["Ceci est une fiche d'exemple ajoutée pour démontrer le carrousel 3D avec plusieurs personnages dans une même faction.",
            "Remplace ce texte par la vraie histoire de ton personnage, ou supprime cette entrée dans ENTRIES."] },
    { id: 'vesper-kaine', cat: 'personnages', name: 'Vesper Kaine', tagline: 'Hybride de rang B', rarity: 'common', faction: 'halcyon',
        summary: "Exemple de fiche — remplace ce personnage par un vrai membre de la faction Halcyon.",
        info: { "Rang": "Rang B", "Faction": "Halcyon" },
        body: ["Ceci est une fiche d'exemple ajoutée pour démontrer le carrousel 3D avec plusieurs personnages dans une même faction.",
            "Remplace ce texte par la vraie histoire de ton personnage, ou supprime cette entrée dans ENTRIES."] },
    { id: 'thorne-adell', cat: 'personnages', name: 'Thorne Adell', tagline: 'Hybride de rang A', rarity: 'rare', faction: 'halcyon',
        summary: "Exemple de fiche — remplace ce personnage par un vrai membre de la faction Halcyon.",
        info: { "Rang": "Rang A", "Faction": "Halcyon" },
        body: ["Ceci est une fiche d'exemple ajoutée pour démontrer le carrousel 3D avec plusieurs personnages dans une même faction.",
            "Remplace ce texte par la vraie histoire de ton personnage, ou supprime cette entrée dans ENTRIES."] },
    { id: 'mira-solenne', cat: 'personnages', name: 'Mira Solenne', tagline: 'Hybride de rang C', rarity: 'common', faction: 'halcyon',
        summary: "Exemple de fiche — remplace ce personnage par un vrai membre de la faction Halcyon.",
        info: { "Rang": "Rang C", "Faction": "Halcyon" },
        body: ["Ceci est une fiche d'exemple ajoutée pour démontrer le carrousel 3D avec plusieurs personnages dans une même faction.",
            "Remplace ce texte par la vraie histoire de ton personnage, ou supprime cette entrée dans ENTRIES."] },
    { id: 'valen-korr', cat: 'personnages', name: 'Valen Korr', tagline: 'Général déchu', rarity: 'rare', faction: 'bannis', region: 'hauteterres',
        summary: "Ancien commandant de la garde royale, aujourd'hui hors-la-loi après la chute de la citadelle.",
        info: { "Rôle": "PNJ allié", "Région": "Hauteterres", "Statut": "Vivant", "Faction": "Les Bannis" },
        body: ["Valen Korr était autrefois le plus jeune général jamais nommé à la tête de la garde royale. Après la trahison du conseil, il a choisi l'exil plutôt que la soumission.",
            "Il apparaît pour la première fois au chapitre 2, dans les ruines de l'ancienne citadelle, où il propose son aide au joueur en échange d'une faveur future."] },
    { id: 'garrick-voss', cat: 'personnages', name: 'Garrick Voss', tagline: 'Soldat en exil', rarity: 'common', faction: 'bannis',
        summary: "Exemple de fiche — remplace ce personnage par un vrai membre de la faction Les Bannis.",
        info: { "Rôle": "PNJ allié", "Faction": "Les Bannis" },
        body: ["Ceci est une fiche d'exemple ajoutée pour démontrer le carrousel 3D avec plusieurs personnages dans une même faction.",
            "Remplace ce texte par la vraie histoire de ton personnage, ou supprime cette entrée dans ENTRIES."] },
    { id: 'isolde-marrow', cat: 'personnages', name: 'Isolde Marrow', tagline: 'Éclaireuse bannie', rarity: 'common', faction: 'bannis',
        summary: "Exemple de fiche — remplace ce personnage par un vrai membre de la faction Les Bannis.",
        info: { "Rôle": "PNJ allié", "Faction": "Les Bannis" },
        body: ["Ceci est une fiche d'exemple ajoutée pour démontrer le carrousel 3D avec plusieurs personnages dans une même faction.",
            "Remplace ce texte par la vraie histoire de ton personnage, ou supprime cette entrée dans ENTRIES."] },
    { id: 'sylwen', cat: 'personnages', name: 'Sylwen', tagline: "Marchande d'ombres", rarity: 'common', faction: 'errants', region: 'marais-bas',
        summary: "Tient une échoppe itinérante qui n'apparaît qu'au crépuscule.",
        info: { "Rôle": "Marchande", "Région": "Variable", "Statut": "Vivant", "Faction": "Les Errants" },
        body: ["Sylwen vend des objets rares que l'on ne trouve nulle part ailleurs, mais son échoppe ne se matérialise qu'entre le coucher et le lever du soleil.",
            "Certains joueurs rapportent qu'elle se souvient des choix passés, modifiant ses prix en conséquence."] },
    { id: 'fenn-adair', cat: 'personnages', name: 'Fenn Adair', tagline: 'Éclaireur nomade', rarity: 'common', faction: 'errants',
        summary: "Exemple de fiche — remplace ce personnage par un vrai membre de la faction Les Errants.",
        info: { "Rôle": "PNJ neutre", "Faction": "Les Errants" },
        body: ["Ceci est une fiche d'exemple ajoutée pour démontrer le carrousel 3D avec plusieurs personnages dans une même faction.",
            "Remplace ce texte par la vraie histoire de ton personnage, ou supprime cette entrée dans ENTRIES."] },
    { id: 'kaelen-thorr', cat: 'personnages', name: 'Kaelen Thorr', tagline: 'Archiviste du Conclave', rarity: 'rare', faction: 'conclave', region: 'hauteterres',
        summary: "Gardien des savoirs anciens, il protège les ruines des Hauteterres contre les pillards comme contre l'oubli.",
        info: { "Rôle": "PNJ allié", "Région": "Hauteterres", "Statut": "Vivant", "Faction": "Conclave Ivoire" },
        body: ["Kaelen Thorr a consacré sa vie au Conclave Ivoire, un ordre voué à préserver la mémoire de l'âge d'avant la chute.",
            "Il se méfie profondément de la technologie de la Direction Aurore, qu'il considère comme une seconde catastrophe en préparation."] },
    { id: 'petra-aldric', cat: 'personnages', name: 'Petra Aldric', tagline: 'Gardienne des archives', rarity: 'common', faction: 'conclave',
        summary: "Exemple de fiche — remplace ce personnage par un vrai membre de la faction Conclave Ivoire.",
        info: { "Rôle": "PNJ allié", "Faction": "Conclave Ivoire" },
        body: ["Ceci est une fiche d'exemple ajoutée pour démontrer le carrousel 3D avec plusieurs personnages dans une même faction.",
            "Remplace ce texte par la vraie histoire de ton personnage, ou supprime cette entrée dans ENTRIES."] },
    { id: 'iris-vex', cat: 'personnages', name: 'Iris Vex', tagline: 'Agente de terrain', rarity: 'rare', faction: 'aurora', region: 'cote-ecarlate',
        summary: "Envoyée par la Direction Aurore pour cartographier les ruines à l'aide de drones et de reliques technologiques.",
        info: { "Rôle": "PNJ neutre", "Région": "Côte Écarlate", "Statut": "Vivant", "Faction": "Direction Aurore" },
        body: ["Iris Vex incarne le présent technologique du monde : équipée d'implants et de drones, elle étudie scientifiquement ce que le Conclave considère comme sacré.",
            "Sa relation avec le joueur évolue selon que celui-ci favorise le progrès de la Direction Aurore ou les traditions des Errants et du Conclave."] },
    { id: 'kess-ryn', cat: 'personnages', name: 'Kess Ryn', tagline: 'Ingénieure de terrain', rarity: 'common', faction: 'aurora',
        summary: "Exemple de fiche — remplace ce personnage par un vrai membre de la faction Direction Aurore.",
        info: { "Rôle": "PNJ neutre", "Faction": "Direction Aurore" },
        body: ["Ceci est une fiche d'exemple ajoutée pour démontrer le carrousel 3D avec plusieurs personnages dans une même faction.",
            "Remplace ce texte par la vraie histoire de ton personnage, ou supprime cette entrée dans ENTRIES."] },
    { id: 'sariah-frosleaf', cat: 'personnages', name: 'Sariah Frosleaf', tagline: "Commandant de l'Escadron Oracle", rarity: 'rare', faction: 'halcyon', squad: 'oracle',
        image: 'assets/characters/sariah frosleaf.jpg',
        quote: "« Malgré nos sacrifices, nous gardons la flamme de notre détermination intacte ! »",
        summary: "Général de l'Escadron Oracle, doté d'une force impressionnante et d'une grande intelligence stratégique — l'une des premières réussites du projet d'hybridation.",
        info: { "Rang hybride": "S", "Grade": "Commandant de l'Escadron Oracle", "Gène d'Oxiri lié": "Apoleia", "Capacité": "[Accès réservé aux hauts gradés]" },
        body: ["Le général de l'Escadron Oracle est une figure imposante et charismatique, dotée d'une force impressionnante et d'une grande intelligence stratégique. Elle a été l'une des premières réussites du projet d'hybridation, car son code génétique était étrangement compatible avec les gènes d'Oxiri.",
            "Sous son apparence stricte et juste, elle dirige l'escadron avec une main de maître depuis sa création. Elle n'est pas intéressée par la gloire ou le renom, mais plutôt motivée par un désir ardent d'annihiler Oxiri une bonne fois pour toutes. Elle a la totale confiance de ses supérieurs, ce qui témoigne de son engagement et de sa loyauté envers sa mission.",
            "Cependant, malgré sa puissance et son influence, il y a peu d'informations disponibles sur son passé. Les seules choses connues vont jusqu'à sa transformation en hybride. Il existe même une rumeur selon laquelle elle aurait été impliquée dans un événement grave par le passé, mais cela reste à confirmer."] },
    { id: 'edrick', cat: 'personnages', name: 'Edrick', tagline: 'Le Dernier', rarity: 'common', faction: 'halcyon', squad: 'oracle',
        image: 'assets/characters/Edrick.jpg', imagePos: 'center 35%',
        quote: "« Vous pouvez y arriver, tous, j'y crois... »",
        summary: "Considéré comme faible par ses pairs hors du groupe Oracle, il cache pourtant son jeu mieux que quiconque dans l'organisation — et reste extrêmement respecté.",
        info: { "Rang hybride": "D", "Grade": "Bras droit de l'Escadron Oracle", "Gène d'Oxiri lié": "[//////]", "Capacité": "[//////]" },
        body: ["L'histoire d'Edrick ne sera jamais racontée. Bien que considéré très faible par ses pairs hors du groupe Oracle, il est la personne qui cache le mieux son jeu de toute l'organisation. Il reste pourtant extrêmement respecté, par son simple comportement très sympathique et inflexible en toute circonstance.",
            "D'aucuns diraient qu'il est celui qui a permis à Ord'jaris de devenir ce qu'elle est maintenant et que leur étroite relation lui a permis de devenir son bras droit. Tout le reste concernant Edrick est inconnu ; énormément de rumeurs circulent à son sujet qui, malgré le fait qu'elles aient été démenties plusieurs fois, restent dans la bouche des plus sceptiques.",
            "Il n'empêche pas l'homme de faire de son mieux pour encourager les troupes et faire sortir le meilleur d'eux-mêmes, ayant démontré de fins talents pour la psychologie, l'écoute et la manipulation."] },
    { id: 'professeur', cat: 'personnages', name: 'Professeur', tagline: 'Chercheur en chef de Halcyon', rarity: 'rare', faction: 'halcyon',
        image: 'assets/characters/Professeur.jpg',
        quote: "« Si vous continuez à me gêner, je ferai en sorte que vous ne puissiez plus jamais le faire... »",
        summary: "L'un des hommes à l'origine du projet d'hybridation, doté d'un savoir extraordinaire — mais dont l'identité et le passé restent presque entièrement inconnus.",
        info: { "Rang": "Chercheur en chef de Halcyon", "Gène d'Oxiri lié": "Aucune information à ce sujet", "Capacité": "??" },
        body: ["Cet éminent scientifique est l'un des hommes à l'origine du projet d'hybridation, doté d'un savoir extraordinaire et à l'origine des plus grandes créations de Halcyon. Malheureusement, peu d'informations sont disponibles sur lui. On ignore pourquoi il a rejoint Halcyon, à quoi il ressemble ou d'où il vient.",
            "Il parle très peu, voire jamais de lui-même, mais se concentre uniquement sur son travail. Tout ce que l'on sait, c'est qu'il a rejoint l'organisation dès sa création et que la recherche sur Oxiri semble être sa principale préoccupation.",
            "Sa présence est souvent ressentie comme intimidante, car il exige un niveau d'excellence extrême de la part de ses collègues scientifiques, et ses méthodes peuvent sembler controversées pour certains. Mais il est incontestable que ses contributions à la recherche d'Halcyon ont permis de faire progresser la compréhension de l'Oxiri et ont ouvert la voie à de nouvelles avancées scientifiques."] },
    { id: 'lame-du-crepuscule', cat: 'objets', name: 'Lame du Crépuscule', tagline: 'Épée légendaire', rarity: 'rare',
        summary: "Une lame qui s'assombrit à mesure que son porteur accumule les victoires.",
        info: { "Type": "Arme — Épée", "Dégâts": "48-62", "Rareté": "Légendaire", "Obtention": "Quête « Le dernier serment »" },
        body: ["Forgée dans le cœur d'une étoile éteinte, cette lame absorbe une partie de l'énergie de ses adversaires vaincus.",
            "Son bonus passif augmente les dégâts critiques de 12% mais réduit la régénération de vie de 5%."] },
    { id: 'fiole-de-brume', cat: 'objets', name: 'Fiole de Brume', tagline: 'Consommable', rarity: 'common',
        summary: "Rend le porteur invisible pendant quelques secondes.",
        info: { "Type": "Consommable", "Effet": "Invisibilité (6s)", "Rareté": "Commune", "Obtention": "Achat / Loot" },
        body: ["Un classique pour les approches furtives. Se combine bien avec les compétences de type Assassin.",
            "Le temps de recharge après usage est de 45 secondes."] },
];
const ENTRIES = ENTRIES_BASE.map(e => ({ ...e }));
/* ---------------- ARCHIVES HALCYON — ARTEFACTS OXIRIENS (dossiers secrets des armes) ---------------- */
const WEAPONS = [
    { id: 'jugement-equinoxe', dossier: '001', name: "Jugement de l'Équinoxe", danger: 'Extrême', status: 'PERDU',
        image: "assets/arme/Le Jugement de l'Équinoxe.jpg",
        info: { 'Type': 'Artefact de symbiose spirituelle', 'Classification': 'Oxirien — Classe Inconnue', 'Dangerosité': 'Extrême',
            'Compatibilité humaine': 'Très faible', 'Dernière apparition connue': 'Inconnue', 'Statut': 'PERDU' },
        sections: [
            { heading: 'Description', paragraphs: [
                    { text: "Le Jugement de l'Équinoxe est l'un des artefacts les plus mystérieux jamais recensés." },
                    { text: "Contrairement aux armes Oxiriennes traditionnelles, il ne semble pas avoir été conçu pour canaliser directement l'énergie d'Oxiri." },
                    { text: "Son fonctionnement repose sur un principe différent : la séparation et la matérialisation de l'âme." },
                    { text: "L'utilisateur est capable de faire apparaître une entité correspondant à une partie de sa propre conscience." },
                    { text: "Cette entité peut prendre une forme physique et agir indépendamment de son hôte." },
                    { text: "Les anciens textes décrivent cette manifestation comme :" },
                    { quote: "L'autre moitié de celui qui porte le Jugement." },
                ] },
            { heading: 'Fonctionnement', paragraphs: [
                    { text: "Lors de l'activation, l'artefact établit une connexion avec l'âme de son porteur. Une seconde entité apparaît alors. Cette entité possède :" },
                    { list: ["les souvenirs de son hôte", "ses émotions", "certaines de ses capacités", "ses peurs", "ses désirs",
                            "mais également les parties de sa personnalité que l'utilisateur cherche généralement à dissimuler"] },
                    { text: "Plus la synchronisation augmente, plus l'entité devient autonome." },
                    { text: "À un niveau de synchronisation suffisamment élevé, l'utilisateur et l'esprit peuvent combattre comme s'ils ne formaient qu'un seul être." },
                ] },
            { heading: 'Contrecoup', paragraphs: [
                    { text: "La symbiose n'est pas sans conséquence. L'utilisation prolongée provoque une diminution progressive de la séparation entre les deux consciences." },
                    { text: "Au début, l'utilisateur entend simplement une seconde voix. Puis l'esprit peut parler sans être invoqué. Il peut influencer les émotions du porteur. Il peut contester ses décisions." },
                    { text: "Dans les cas extrêmes, la distinction entre les deux personnalités devient impossible. Le stade final est appelé :" },
                    { quote: 'Inversion' },
                    { text: "L'esprit cesse d'être une extension de l'utilisateur. L'utilisateur devient l'extension de l'esprit." },
                ] },
            { heading: 'Théorie Halcyon', paragraphs: [
                    { text: "Certains chercheurs pensent que l'esprit invoqué n'est pas réellement une partie de l'âme. Il pourrait s'agir d'une entité d'Oxiri utilisant l'âme humaine comme modèle." },
                    { text: "Cette théorie reste officiellement rejetée." },
                ] },
            { heading: 'Fragment historique', paragraphs: [
                    { text: "Un texte vieux de plusieurs millénaires décrit :" },
                    { quote: "Celui qui cherche son véritable visage devra accepter de regarder ce qu'il refuse de voir." },
                ] },
        ],
        classified: { heading: 'Information classifiée', paragraphs: [
                { text: "Une expérience menée sur un sujet hybride aurait permis d'obtenir un résultat impossible." },
                { text: "L'esprit invoqué ne ressemblait pas au sujet. Il ressemblait à une personne morte depuis plusieurs siècles." },
                { text: "L'expérience fut immédiatement interrompue. Tous les rapports concernant le sujet ont été supprimés." },
            ] } },
    { id: 'lamentation-morts', dossier: '002', name: 'La Lamentation des Morts', danger: 'Catastrophique', status: 'PERDUE',
        image: 'assets/arme/La Lamentation des Morts.jpg',
        info: { 'Type': 'Arme spirituelle', 'Classification': 'Oxirien — Classe Nécrotique', 'Dangerosité': 'Catastrophique',
            'Compatibilité humaine': 'Variable', 'Dernière localisation': 'Inconnue', 'Statut': 'PERDUE' },
        sections: [
            { heading: 'Description', paragraphs: [
                    { text: "La Lamentation des Morts est une arme dont l'origine remonte aux guerres de la première Éruption." },
                    { text: "Son créateur aurait cherché à empêcher les victimes de la guerre de disparaître dans l'oubli. Il utilisa les âmes des morts pour forger l'arme." },
                    { text: "Le résultat fut une arme capable de manipuler les résidus spirituels laissés par les êtres décédés." },
                    { text: "La Lamentation ne contrôle donc pas simplement les morts." },
                    { quote: 'Elle les entend.' },
                ] },
            { heading: 'Capacités', paragraphs: [
                    { text: "L'arme permet à son utilisateur de manipuler les ombres des personnes mortes. Les manifestations peuvent prendre différentes formes :" },
                    { list: ['silhouettes', 'mains spectrales', 'soldats morts', 'souvenirs matérialisés', 'fragments de conscience'] },
                    { text: "Plus une bataille provoque de morts à proximité, plus l'arme devient puissante." },
                    { text: "Elle peut également absorber temporairement les derniers souvenirs d'une personne décédée." },
                ] },
            { heading: 'Contrecoup', paragraphs: [
                    { text: "Chaque âme absorbée laisse une trace dans l'esprit de l'utilisateur." },
                    { list: ['Une voix.', 'Une émotion.', 'Un souvenir.', 'Une peur.'] },
                    { text: "Au début, ces voix sont faibles. Après plusieurs utilisations, elles deviennent permanentes." },
                    { text: "Le porteur commence à entendre des centaines de personnes parler simultanément." },
                    { text: "À un stade avancé, les morts peuvent commenter les actions de l'utilisateur. Certains anciens porteurs auraient même affirmé que les morts leur demandaient :" },
                    { quote: 'Pourquoi nous as-tu tués ?' },
                    { text: "Même lorsque le porteur n'était pas responsable de leur mort." },
                ] },
            { heading: 'Danger psychologique', paragraphs: [
                    { text: "La Lamentation ne rend pas nécessairement fou. Elle crée quelque chose de plus dangereux : elle détruit progressivement la frontière entre la mémoire des morts et celle du vivant." },
                    { text: "Certains utilisateurs finissent par croire qu'ils sont eux-mêmes plusieurs personnes." },
                ] },
            { heading: 'Histoire', paragraphs: [
                    { text: "Une légende affirme que le premier porteur utilisa l'arme pour sauver une ville entière. Il invoqua les soldats morts durant la bataille précédente. Une armée de milliers de spectres combattit à ses côtés. La ville fut sauvée." },
                    { text: "Mais le lendemain matin, le porteur aurait demandé :" },
                    { quote: 'Pourquoi suis-je encore vivant ?' },
                    { text: "Il mourut trois jours plus tard." },
                ] },
        ],
        classified: { heading: 'Information classifiée', paragraphs: [
                { text: "Les analyses modernes ont révélé une anomalie." },
                { text: "Les âmes contenues dans l'arme ne semblent pas complètement humaines. Une partie de leur énergie possède les mêmes caractéristiques que celle d'Oxiri." },
            ] } },
    { id: 'serment-helix', dossier: '003', name: 'Le Serment de Helix', danger: 'Catastrophique', status: 'PERDU',
        image: 'assets/arme/Le Serment de Helix.jpg',
        info: { 'Type': 'Arme dimensionnelle', 'Classification': 'Oxirien — Classe Zéro', 'Dangerosité': 'Catastrophique',
            'Compatibilité humaine': 'Inconnue', 'Statut': 'PERDU', 'Localisation supposée': 'Zone Zéro' },
        sections: [
            { heading: 'Description', paragraphs: [
                    { text: "Le Serment de Helix est une arme créée à partir d'un alliage extrêmement rare. Son matériau principal provient des cellules de la Deuxième Entropy." },
                    { text: "Il possède une propriété unique :" },
                    { quote: 'il peut trancher la réalité.' },
                    { text: "Une blessure causée par Helix n'est pas simplement une blessure physique. L'arme peut couper :" },
                    { list: ['la matière', 'l’énergie', 'la magie', 'les barrières dimensionnelles', 'les connexions spirituelles', 'et, dans certains cas, l’espace lui-même'] },
                ] },
            { heading: 'La Zone Zéro', paragraphs: [
                    { text: "Helix permet d'ouvrir des passages vers une dimension appelée :" },
                    { quote: 'Zone Zéro' },
                    { text: "Les informations concernant cette zone sont extrêmement limitées. Les objets qui y sont envoyés ne réapparaissent jamais." },
                    { text: "Certaines théories affirment qu'ils sont détruits. D'autres affirment qu'ils continuent d'exister dans un espace où les lois physiques n'ont plus de sens." },
                ] },
            { heading: 'Le Réceptacle', paragraphs: [
                    { text: "L'arme contient encore une partie de la conscience de la Deuxième Entropy." },
                    { text: "Cette conscience semble attendre. Elle cherche constamment un corps capable de l'accueillir." },
                    { text: "Plus le porteur utilise Helix, plus la présence de l'Entropy devient forte. Elle peut alors :" },
                    { list: ['communiquer', 'influencer les rêves', 'modifier certaines perceptions', 'provoquer des hallucinations', 'tenter de prendre le contrôle du corps'] },
                ] },
            { heading: 'Contrecoup', paragraphs: [
                    { text: "Le principal danger de Helix n'est pas la destruction physique." },
                    { quote: 'C’est la possession.' },
                    { text: "Le porteur peut progressivement perdre le contrôle de son propre corps. Dans les cas extrêmes :" },
                    { quote: 'Manifestation Helix' },
                    { text: "Le corps devient temporairement un réceptacle pour la Deuxième Entropy." },
                ] },
        ],
        classified: { heading: 'Information classifiée', paragraphs: [
                { text: "Une archive récupérée dans un laboratoire abandonné mentionne :" },
                { quote: "Helix n'est pas une prison." },
                { text: "La phrase suivante a été détruite." },
            ] } },
    { id: 'souvenir-passe', dossier: '004', name: 'Souvenir du Passé', danger: 'Très élevée', status: 'PERDU',
        image: 'assets/arme/souvenir du passé.jpg',
        info: { 'Type': 'Arme temporelle', 'Classification': 'Oxirien — Classe Temporelle', 'Dangerosité': 'Très élevée', 'Statut': 'PERDU' },
        sections: [
            { heading: 'Description', paragraphs: [
                    { text: "Souvenir du Passé est une arme composée d'un matériau cristallin inconnu." },
                    { text: "Elle utilise des projectiles capables de suspendre temporairement ce qu'ils touchent dans un état situé hors du cours normal du temps." },
                    { text: "Une cible touchée peut être figée :" },
                    { list: ['physiquement', 'magiquement', 'émotionnellement', 'et temporellement'] },
                ] },
            { heading: 'Propriété principale', paragraphs: [
                    { text: "L'arme permet également à son porteur de conserver parfaitement ses souvenirs." },
                    { list: ['Aucune maladie.', 'Aucun traumatisme.', 'Aucune altération mentale.'] },
                    { text: "Aucun passage du temps ne peut naturellement effacer ce qui a été mémorisé." },
                ] },
            { heading: 'Le Prix', paragraphs: [
                    { text: "Cela semble être un avantage." },
                    { quote: 'C’est tout le contraire.' },
                    { text: "Le cerveau humain est conçu pour oublier. Oublier permet de vivre." },
                    { text: "Le porteur de Souvenir du Passé ne peut plus réellement oublier." },
                    { list: ['Chaque douleur reste intacte.', 'Chaque décès reste présent.', 'Chaque erreur est constamment accessible.', 'Chaque traumatisme peut être revécu avec la même intensité.'] },
                ] },
            { heading: 'Danger psychologique', paragraphs: [
                    { text: "Les anciens porteurs finissaient par vivre dans le passé. Certains refusaient de prendre de nouvelles décisions. Ils préféraient revivre leurs souvenirs." },
                    { text: "D'autres cherchaient à utiliser l'arme pour figer des personnes importantes pour eux." },
                ] },
            { heading: 'Utilisation historique', paragraphs: [
                    { text: "Une ancienne porteuse aurait utilisé l'arme pour sauver son enfant. Elle le figea dans le temps afin qu'il ne meure jamais." },
                    { text: "Le problème est qu'elle ne pouvait plus accepter de le libérer. Elle conserva ainsi son enfant pendant plusieurs siècles." },
                ] },
        ],
        classified: { heading: 'Information classifiée', paragraphs: [
                { text: "Une hypothèse suggère que Souvenir du Passé n'a jamais été créé pour préserver les souvenirs." },
                { text: "Il aurait été créé pour préserver quelque chose qu'Oxiri voulait empêcher l'humanité d'oublier." },
            ] } },
    { id: 'jumeaux-eden', dossier: '005', name: "Jumeaux d'Éden", danger: 'Extrême', status: 'DISPARUS',
        image: "assets/arme/jumeau d'eden.jpg",
        info: { 'Type': 'Arme double', 'Classification': 'Oxirien — Classe Équilibre', 'Dangerosité': 'Extrême',
            'Nombre de porteurs connus': '2', 'Statut': 'DISPARUS' },
        sections: [
            { heading: 'Description', paragraphs: [
                    { text: "Les Jumeaux d'Éden sont deux lames qui ne peuvent être séparées." },
                    { text: "La première représente l'ombre. La seconde représente la lumière." },
                    { text: "Contrairement à la plupart des artefacts Oxiriens, leur fonctionnement repose entièrement sur leur utilisation simultanée." },
                ] },
            { heading: "Lame de l'ombre", paragraphs: [
                    { text: "Elle absorbe la lumière et crée une zone de ténèbres absolues. Cette obscurité peut dissimuler :" },
                    { list: ['les corps', 'la magie', 'les sons', 'les présences spirituelles'] },
                    { text: "Mais elle possède une capacité plus dangereuse : elle peut cacher temporairement certaines vérités." },
                ] },
            { heading: 'Lame de la lumière', paragraphs: [
                    { text: "Elle révèle ce qui est caché. Elle peut détecter :" },
                    { list: ['les illusions', 'les mensonges', 'les blessures', 'les souvenirs', "les traces d'Oxiri"] },
                    { text: "Mais révéler une vérité ne signifie pas nécessairement qu'elle est supportable." },
                ] },
            { heading: 'Leur véritable pouvoir', paragraphs: [
                    { text: "Lorsque les deux lames sont utilisées ensemble, elles peuvent créer un phénomène appelé :" },
                    { quote: 'Éden' },
                    { text: "Pendant quelques secondes, la lumière et les ténèbres atteignent un équilibre parfait. Le monde environnant est alors révélé tel qu'il est réellement." },
                    { list: ['Sans illusion.', 'Sans magie.', 'Sans mensonge.'] },
                ] },
            { heading: 'Contrecoup', paragraphs: [
                    { text: "Le porteur doit constamment accepter deux visions opposées." },
                    { text: "S'il privilégie la lumière, il devient incapable d'accepter le mensonge ou l'imperfection. S'il privilégie l'ombre, il devient progressivement incapable d'accepter la vérité." },
                    { text: "La maîtrise exige donc une stabilité psychologique exceptionnelle." },
                ] },
        ],
        classified: { heading: 'Information classifiée', paragraphs: [
                { text: "Les deux lames auraient autrefois appartenu à deux frères." },
                { text: "L'un devint défenseur d'Oxiri. L'autre devint son adversaire." },
                { text: "Les deux auraient disparu le même jour." },
            ] } },
    { id: 'division-astrale', dossier: '006', name: 'Division Astrale', danger: 'INCONNUE', status: 'INCONNU',
        image: 'assets/arme/division astrale.jpg',
        info: { 'Type': 'INCONNU', 'Classification': 'OXIRIEN — DONNÉES CORROMPUES', 'Dangerosité': 'INCONNUE', 'Origine': 'INCONNUE', 'Statut': 'INCONNU' },
        sections: [
            { heading: 'Avertissement', paragraphs: [
                    { text: "LES DONNÉES DE CE DOSSIER PRÉSENTENT DES INCOHÉRENCES." },
                    { text: "Plusieurs copies du même document produisent des descriptions différentes de l'artefact." },
                ] },
            { heading: 'Descriptions contradictoires', paragraphs: [
                    { quote: '01 — Arme capable de traverser les distances séparant les étoiles.' },
                    { quote: '02 — Clé permettant d’ouvrir les frontières entre les dimensions.' },
                    { quote: '03 — Objet destiné à couper les liens entre les êtres vivants.' },
                    { quote: "04 — Ce n'est pas une arme." },
                ] },
            { heading: 'Particularité', paragraphs: [
                    { text: "Aucune photographie de Division Astrale ne correspond parfaitement aux autres." },
                    { text: "Certains rapports décrivent une lame. D'autres un arc. D'autres encore une arme qui ne possède aucune forme physique." },
                ] },
            { heading: 'Danger', paragraphs: [
                    { text: "Les individus ayant affirmé avoir utilisé Division Astrale ont tous fourni des témoignages différents." },
                    { text: "Certains affirment avoir vu des étoiles. D'autres affirment avoir vu leur propre mort. Certains parlent d'une ville inconnue." },
                    { text: "Un seul témoignage est considéré comme cohérent :" },
                    { quote: "J'ai vu Oxiri avant qu'il ne devienne Oxiri." },
                ] },
        ],
        classified: { heading: 'Information classifiée', paragraphs: [
                { text: "Une analyse des données corrompues fait apparaître une phrase répétée :" },
                { quote: 'Ce qui est divisé ne peut plus être réuni.' },
                { text: 'Puis :' },
                { quote: 'Ce qui a été réuni ne devrait jamais être divisé.' },
                { text: 'Origine inconnue.' },
            ] } },
    { id: 'armure-exusial', dossier: '007', name: "Armure d'Exusial", danger: 'Catastrophique', status: 'ACTIVE',
        info: { 'Type': 'Armure de combat', 'Classification': 'Technologie Halcyon / Oxirienne', 'Dangerosité': 'Catastrophique',
            'Compatible': 'Hybrides uniquement', 'Statut': 'ACTIVE', 'Propriété': 'HALCYON' },
        sections: [
            { heading: 'Description', paragraphs: [
                    { text: "Contrairement aux autres artefacts Oxiriens, l'Armure d'Exusial n'est pas une relique ancienne." },
                    { text: "Elle est une création moderne. Elle représente le résultat de plusieurs décennies de recherches menées par Halcyon sur les Entropy." },
                    { text: "Son noyau central contient un fragment du noyau de la Troisième Entropy." },
                ] },
            { heading: 'Fonctionnement', paragraphs: [
                    { text: "Lorsqu'elle est activée, l'armure injecte directement l'énergie d'Entropy dans le corps de son porteur." },
                    { text: "Les capacités physiques sont considérablement augmentées. Le porteur obtient :" },
                    { list: ['une force surhumaine', 'une vitesse accrue', 'une résistance extrême', 'une régénération accélérée', 'une capacité de manipulation d’énergie Oxirienne'] },
                    { text: "L'armure peut également générer une forme avancée appelée :" },
                    { quote: 'EXUSIAL — OVERDRIVE' },
                ] },
            { heading: 'Problème', paragraphs: [
                    { text: "Les cellules humaines ne sont pas conçues pour supporter cette quantité d'énergie. Le corps commence progressivement à se transformer." },
                    { list: ['Les cellules humaines sont remplacées.', 'La peau change.', 'Les organes se dégradent.', 'La structure osseuse se modifie.', "Le système nerveux devient compatible avec l'énergie d'Oxiri."] },
                ] },
            { heading: 'Stade final', paragraphs: [
                    { text: "Si l'utilisateur dépasse la limite critique, il entre dans un état appelé :" },
                    { quote: 'Entropisation' },
                    { text: "L'individu ne meurt pas immédiatement. Il devient progressivement quelque chose d'autre. Quelque chose qui n'est plus entièrement humain." },
                ] },
            { heading: 'Protocole Halcyon', paragraphs: [
                    { text: "Les utilisateurs d'Exusial doivent être des hybrides. Même chez eux, le taux de mortalité reste extrêmement élevé." },
                    { text: "Le protocole officiel affirme :" },
                    { quote: "L'intégrité biologique du sujet constitue une variable acceptable au regard de la nécessité militaire." },
                ] },
        ],
        classified: { heading: 'Information classifiée', paragraphs: [
                { text: "Un rapport interne contient une phrase particulièrement inquiétante :" },
                { quote: "L'Armure ne détruit pas le corps de l'utilisateur." },
                { text: 'La phrase suivante :' },
                { quote: 'Elle prépare son corps à autre chose.' },
            ] } },
    { id: 'verite-armes-oxiriennes', dossier: 'FINAL', name: 'La Vérité sur les Armes Oxiriennes', danger: '—', status: 'INTERDIT', restricted: true,
        info: { 'Accès': 'INTERDIT' },
        sections: [
            { heading: 'La vérité', paragraphs: [
                    { text: "Les sept artefacts ne sont pas indépendants." },
                    { text: "Ils possèdent tous une signature énergétique similaire. Cette signature correspond à celle d'Oxiri." },
                    { text: "Mais les recherches récentes démontrent quelque chose d'impossible." },
                    { text: "Les armes ne semblent pas contenir des fragments arrachés à Oxiri." },
                    { quote: 'Elles semblent avoir été données.' },
                    { text: "Quelqu'un — ou quelque chose — aurait volontairement transmis une partie de son essence à l'humanité." },
                    { quote: 'Pourquoi ?' },
                    { text: 'La réponse reste inconnue.' },
                ] },
            { heading: 'Une expérience', paragraphs: [
                    { text: 'Une théorie commence cependant à émerger.' },
                    { text: 'Les armes ne seraient pas des armes.' },
                    { quote: 'Elles seraient des expériences.' },
                    { text: "Oxiri aurait utilisé les humains afin d'observer :" },
                    { list: ['leur rapport à la mort', 'leur rapport à la mémoire', 'leur rapport à la vérité', 'leur rapport à la liberté',
                            'leur rapport à leur propre identité', 'leur capacité à sacrifier leur humanité', "leur capacité à accepter ce qu'ils ne comprennent pas"] },
                    { text: 'Chaque arme représente une question.' },
                    { text: 'Et après mille ans d’observation...' },
                    { text: 'Oxiri serait enfin arrivé à une conclusion.' },
                    { quote: "L'humanité n'a jamais été son ennemie." },
                    { quote: 'Elle était son expérience.' },
                ] },
        ],
        classified: { heading: 'Dernière note', paragraphs: [
                { text: "Document retrouvé dans une archive datant de la première Éruption. Auteur inconnu." },
                { quote: 'Vous appelez cela une guerre.' },
                { quote: 'Nous appelons cela une conversation.' },
                { quote: 'Vous nous tuez.' },
                { quote: 'Nous vous transformons.' },
                { quote: 'Vous nous haïssez.' },
                { quote: 'Nous cherchons seulement à comprendre.' },
                { quote: 'Alors pourquoi tant de morts ?' },
                { quote: 'Parce que vous avez refusé de changer.' },
                { text: 'Fin du document.' },
            ] } },
];
let armesFinalUnlocked = false;
const CATS = {
    personnages: { label: 'Personnages', desc: "Alliés, ennemis, marchands et figures rencontrées au fil de l'aventure." },
    objets: { label: 'Objets & armes', desc: "Équipements, armes, consommables et reliques trouvables dans le jeu." },
    lieux: { label: 'Lieux', desc: "Régions, villages et zones explorables de la carte." },
    bestiaire: { label: 'Bestiaire', desc: "Créatures et ennemis, du plus commun au plus redoutable." },
};
const ICONS = {
    personnages: '<circle cx="12" cy="8" r="4"/><path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8"/>',
    objets: '<path d="M12 2l3 7h7l-5.5 4.5L18 21l-6-4-6 4 1.5-7.5L2 9h7z"/>',
    lieux: '<path d="M1 6l7-3 8 3 7-3v15l-7 3-8-3-7 3z"/><line x1="8" y1="3" x2="8" y2="18"/><line x1="16" y1="6" x2="16" y2="21"/>',
    bestiaire: '<path d="M4 12c0-4 3-7 8-7s8 3 8 7-3 7-8 7-8-3-8-7z"/><circle cx="9" cy="11" r="1"/><circle cx="15" cy="11" r="1"/>',
};
function iconSvg(cat, size = 20) {
    return `<svg class="card-icon" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">${ICONS[cat] || ''}</svg>`;
}
function esc(s) {
    const d = document.createElement('div');
    d.textContent = s;
    return d.innerHTML;
}

function escAttr(s) {
    return esc(s).replace(/"/g, '&quot;');
}
function applyInlineFormatting(escapedText) {
    return escapedText.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
}
const LOCK_SENTINEL = String.fromCharCode(0) + 'LOCK' + String.fromCharCode(0);
function simpleHash(s) {
    let h = 0;
    for (let i = 0; i < s.length; i++) { h = (Math.imul(31, h) + s.charCodeAt(i)) | 0; }
    return (h >>> 0).toString(36);
}
function encodeLockedBlock(code, innerLines) {
    return LOCK_SENTINEL + code + LOCK_SENTINEL[0] + JSON.stringify(innerLines);
}
function lockedBlockHtml(code, innerLines) {
    const blockId = 'lock-' + Math.random().toString(36).slice(2, 10);
    const innerHtml = renderRichBody(innerLines);
    const hash = simpleHash(code.trim().toLowerCase());
    return `
    <div class="locked-archive" id="${blockId}" data-code-hash="${hash}">
      <div class="locked-archive-head">
        <span class="locked-archive-icon">🔒</span>
        <span class="locked-archive-label">Archive verrouillée</span>
      </div>
      <div class="locked-archive-form">
        <input type="text" class="locked-archive-input" placeholder="Entrer le code d'accès…" onkeydown="if(event.key==='Enter'){ unlockArchive('${blockId}'); }">
        <span class="btn btn-ghost" onclick="unlockArchive('${blockId}')">Déverrouiller</span>
      </div>
      <div class="locked-archive-error"></div>
      <div class="locked-archive-content">${innerHtml}</div>
    </div>
  `;
}
function unlockArchive(blockId) {
    const block = document.getElementById(blockId);
    if (!block) return;
    const input = block.querySelector('.locked-archive-input');
    const errEl = block.querySelector('.locked-archive-error');
    const attempt = (input?.value || '').trim().toLowerCase();
    if (simpleHash(attempt) === block.dataset.codeHash) {
        if (errEl) errEl.textContent = '';
        block.classList.add('unlocking');
        setTimeout(() => {
            block.classList.remove('unlocking');
            block.classList.add('unlocked');
            const chronoBody = block.closest('.chrono-body');
            if (chronoBody && chronoBody.style.maxHeight && chronoBody.style.maxHeight !== '0px') {
                chronoBody.style.maxHeight = chronoBody.scrollHeight + 'px';
            }
        }, 550);
    } else {
        if (errEl) errEl.textContent = 'Code incorrect.';
        block.classList.remove('shake');
        void block.offsetWidth;
        block.classList.add('shake');
    }
}
function tryRenderLockedBlock(raw) {
    if (!raw.startsWith(LOCK_SENTINEL)) return null;
    const rest = raw.slice(LOCK_SENTINEL.length);
    const sepIdx = rest.indexOf(LOCK_SENTINEL[0]);
    if (sepIdx === -1) return null;
    const code = rest.slice(0, sepIdx);
    let innerLines;
    try { innerLines = JSON.parse(rest.slice(sepIdx + 1)); } catch { innerLines = []; }
    return lockedBlockHtml(code, innerLines);
}
function decodeBodyLineForEdit(line) {
    if (!line.startsWith(LOCK_SENTINEL)) return line;
    const rest = line.slice(LOCK_SENTINEL.length);
    const sepIdx = rest.indexOf(LOCK_SENTINEL[0]);
    if (sepIdx === -1) return line;
    const code = rest.slice(0, sepIdx);
    let innerLines;
    try { innerLines = JSON.parse(rest.slice(sepIdx + 1)); } catch { innerLines = []; }
    const innerText = innerLines.map(decodeBodyLineForEdit).join('\n\n');
    return `[${code}]${innerText}]`;
}
function renderRichBody(lines) {
    const out = [];
    let list = [];
    const flushList = () => {
        if (list.length) {
            out.push(`<ul class="dossier-list-block">${list.map(li => `<li>${applyInlineFormatting(esc(li))}</li>`).join('')}</ul>`);
            list = [];
        }
    };
    for (const raw of lines) {
        const locked = tryRenderLockedBlock(raw);
        if (locked !== null) { flushList(); out.push(locked); continue; }
        const line = raw.trim();
        if (!line) continue;
        if (line.startsWith('#')) {
            flushList();
            out.push(`<h3>${esc(line.replace(/^#+\s*/, ''))}</h3>`);
        } else if (line.startsWith('- ') || line.startsWith('* ')) {
            list.push(line.slice(2).trim());
        } else if (line.startsWith('> ')) {
            flushList();
            out.push(`<div class="dossier-quote">« ${applyInlineFormatting(esc(line.slice(2).trim()))} »</div>`);
        } else {
            flushList();
            out.push(`<p>${applyInlineFormatting(esc(line))}</p>`);
        }
    }
    flushList();
    return out.join('');
}
function findEntry(id) { return ENTRIES.find(e => e.id === id); }

function extractLockedBlocks(raw) {
    return raw.replace(/\[([^\[\]\n]+)\]([\s\S]*?)\]/g, (_m, code, inner) => {
        return '\n' + encodeLockedBlock(code.trim(), parseWriteBody(inner)) + '\n';
    });
}
function parseWriteBody(raw) {
    raw = extractLockedBlocks(raw);
    const out = [];
    let buffer = [];
    let parenBuffer = null;
    const flushBuffer = () => {
        if (buffer.length) {
            out.push(buffer.join(' ').trim());
            buffer = [];
        }
    };
    for (const rawLine of raw.split('\n')) {
        const line = rawLine.trim();
        if (line.startsWith(LOCK_SENTINEL)) {
            flushBuffer();
            out.push(line);
            continue;
        }
        if (parenBuffer !== null) {
            if (line.endsWith(')')) {
                parenBuffer.push(line.slice(0, -1));
                out.push(parenBuffer.join(' ').replace(/\s+/g, ' ').trim());
                parenBuffer = null;
            } else {
                parenBuffer.push(line);
            }
            continue;
        }
        if (!line) {
            flushBuffer();
            continue;
        }
        if (line.startsWith('(')) {
            flushBuffer();
            const inner = line.slice(1);
            const closeIdx = inner.indexOf(')');
            if (closeIdx === -1) {
                parenBuffer = [inner];
            } else {
                out.push(inner.slice(0, closeIdx).trim());
                const rest = inner.slice(closeIdx + 1).trim();
                if (rest) buffer.push(rest);
            }
            continue;
        }
        if (line.startsWith('#') || line.startsWith('- ') || line.startsWith('* ') || line.startsWith('> ')) {
            flushBuffer();
            out.push(line);
        } else {
            buffer.push(line);
        }
    }
    if (parenBuffer !== null && parenBuffer.length) {
        out.push(parenBuffer.join(' ').replace(/\s+/g, ' ').trim());
    }
    flushBuffer();
    return out.filter(s => s.length > 0);
}

function parseChronoBody(raw) {
    return parseWriteBody(raw).map(line =>
        line.startsWith('> ') ? { quote: line.slice(2).trim() } : line
    );
}

function chronoBodyToText(body) {
    return body.map(item => typeof item === 'string' ? decodeBodyLineForEdit(item) : ('> ' + item.quote)).join('\n\n');
}

const AUTH_KEY = 'akiAuthUser';
const AUTH_USERS = {
    'aki': 'yw3547',
    'wingless': 'aurora',
    'alter': 'pyke',
};

function capitalize(s) {
    return s ? s.charAt(0).toUpperCase() + s.slice(1) : s;
}
function getCurrentUser() {
    const u = localStorage.getItem(AUTH_KEY);
    return u && Object.prototype.hasOwnProperty.call(AUTH_USERS, u) ? u : null;
}
function isLoggedIn() {
    return getCurrentUser() !== null;
}

let customEntriesCache = [];
let customPagesCache = [];
let customChronoCache = [];
let wfImagesDraft = [];
function getFirestoreDb() {
    return window.db || null;
}

const IMAGE_BUDGET_BYTES = 700 * 1024;

function estimateImageBytes(dataUrl) {
    const commaIdx = dataUrl.indexOf(',');
    const b64 = commaIdx >= 0 ? dataUrl.slice(commaIdx + 1) : dataUrl;
    const padding = b64.endsWith('==') ? 2 : (b64.endsWith('=') ? 1 : 0);
    return Math.max(0, Math.floor((b64.length * 3) / 4) - padding);
}

function totalWfImagesBytes() {
    return wfImagesDraft.reduce((sum, img) => sum + estimateImageBytes(img.url), 0);
}

const DRAFT_FIELD_IDS = ['wfCat', 'wfName', 'wfTagline', 'wfQuote', 'wfFactionSelect', 'wfFaction', 'wfOxiriGene', 'wfSpecialite', 'wfCapacite', 'wfMusic', 'wfBody', 'wfEditId', 'ceDate', 'ceTitle', 'ceBody', 'ceEditId', 'cnpLabel', 'cnpBody'];

function captureDraftFormState() {
    const state = {};
    for (const id of DRAFT_FIELD_IDS) {
        const el = document.getElementById(id);
        if (el) state[id] = el.value;
    }
    const checkedTags = Array.from(document.querySelectorAll('.ceTagCheck:checked')).map(c => c.value);
    if (checkedTags.length) state['__ceTags'] = checkedTags.join(',');
    const checkedLinked = Array.from(document.querySelectorAll('.wfLinkedCheck:checked')).map(c => c.value);
    if (checkedLinked.length) state['__wfLinked'] = checkedLinked.join(',');
    return state;
}

function restoreDraftFormState(state) {
    for (const id of DRAFT_FIELD_IDS) {
        if (!(id in state)) continue;
        const el = document.getElementById(id);
        if (el) el.value = state[id];
    }
    if ('wfFactionSelect' in state) onWfFactionSelectChange();
    if (state['__ceTags']) {
        const tags = state['__ceTags'].split(',');
        document.querySelectorAll('.ceTagCheck').forEach(c => { c.checked = tags.includes(c.value); });
    }
    if (state['__wfLinked']) {
        const linked = state['__wfLinked'].split(',');
        document.querySelectorAll('.wfLinkedCheck').forEach(c => { c.checked = linked.includes(c.value); });
    }
    if (state['wfEditId']) {
        const btn = document.getElementById('wfSubmitBtn'); if (btn) btn.textContent = 'Enregistrer les modifications';
        const cancelBtn = document.getElementById('wfCancelBtn'); if (cancelBtn) cancelBtn.style.display = '';
    }
    if (state['ceEditId']) {
        const btn = document.getElementById('ceSubmitBtn'); if (btn) btn.textContent = 'Enregistrer les modifications';
        const cancelBtn = document.getElementById('ceCancelBtn'); if (cancelBtn) cancelBtn.style.display = '';
    }
}

function initFirestoreSync() {
    const db = getFirestoreDb();
    if (!db) return;
    db.collection('entries').onSnapshot((snap) => {
        const list = [];
        const overrides = {};
        const deletedOverrideIds = new Set();
        snap.forEach((doc) => {
            const data = doc.data();
            const specialite = Array.isArray(data.specialite)
                ? data.specialite
                : (data.specialite ? parseWriteBody(data.specialite) : undefined);
            const isOverride = ENTRIES_BASE.some(e => e.id === doc.id);
            if (isOverride) {
                if (data.deleted) { deletedOverrideIds.add(doc.id); return; }
                overrides[doc.id] = { cat: data.cat, name: data.name, tagline: data.tagline, quote: data.quote || undefined, body: data.body || [], images: data.images, specialite, capacite: data.capacite || undefined, faction: data.faction || undefined, factionId: data.factionId || undefined, music: data.music || undefined, linkedIds: data.linkedIds || undefined, oxiriGene: data.oxiriGene || undefined };
                return;
            }
            const images = data.images || (data.image ? [{ url: data.image, caption: '' }] : []);
            list.push({ id: doc.id, cat: data.cat, name: data.name, tagline: data.tagline, quote: data.quote || undefined, body: data.body || [], author: data.author || 'aki', images, specialite, capacite: data.capacite || undefined, faction: data.faction || undefined, factionId: data.factionId || undefined, music: data.music || undefined, linkedIds: data.linkedIds || undefined, oxiriGene: data.oxiriGene || undefined });
        });
        ENTRIES.length = 0;
        ENTRIES_BASE.forEach(base => {
            if (deletedOverrideIds.has(base.id)) return;
            const ov = overrides[base.id];
            ENTRIES.push(ov ? mergeEntryOverride(base, ov) : { ...base });
        });
        list.forEach(c => ENTRIES.push(customEntryToEntry(c)));
        customEntriesCache = list;
        const draft = captureDraftFormState();
        render();
        restoreDraftFormState(draft);
    }, (err) => console.error('Firestore (entries) :', err));

    db.collection('navPages').onSnapshot((snap) => {
        const list = [];
        snap.forEach((doc) => {
            const data = doc.data();
            list.push({ id: doc.id, label: data.label, body: data.body || [] });
        });
        customPagesCache = list;
        refreshCustomNavLinks();
        const draft = captureDraftFormState();
        render();
        restoreDraftFormState(draft);
    }, (err) => console.error('Firestore (pages) :', err));

    db.collection('chronoEvents').onSnapshot((snap) => {
        const list = [];
        snap.forEach((doc) => {
            const data = doc.data();
            list.push({ id: doc.id, date: data.date, title: data.title, tags: data.tags || [], body: data.body || [], deleted: !!data.deleted });
        });
        customChronoCache = list;
        const draft = captureDraftFormState();
        render();
        restoreDraftFormState(draft);
    }, (err) => console.error('Firestore (chrono) :', err));
}
function getCustomEntriesRaw() {
    return customEntriesCache;
}
function customEntryToEntry(c) {
    const info = {};
    if (c.oxiriGene) info["Gène d'Oxiri lié"] = c.oxiriGene;
    if (c.capacite) info['Spécificité'] = c.capacite;
    info['Auteur'] = capitalize(c.author || 'aki');
    return {
        id: 'custom-' + c.id, cat: c.cat, name: c.name, tagline: c.tagline, rarity: 'common',
        quote: c.quote, summary: c.tagline, info, body: c.body,
        specialite: c.specialite,
        faction: c.factionId,
        factionLabel: c.faction,
        music: c.music,
        linkedIds: c.linkedIds,
        image: c.images && c.images[0] ? c.images[0].url : undefined,
        images: c.images,
    };
}
function mergeEntryOverride(base, ov) {
    const images = ov.images && ov.images.length ? ov.images : base.images;
    const info = { ...base.info };
    if (ov.capacite) {
        delete info['Capacité'];
        delete info['Spécificité'];
        info['Spécificité'] = ov.capacite;
    }
    if (ov.oxiriGene) info["Gène d'Oxiri lié"] = ov.oxiriGene;
    return {
        ...base,
        cat: ov.cat || base.cat,
        name: ov.name || base.name,
        tagline: ov.tagline || base.tagline,
        quote: ov.quote !== undefined ? (ov.quote || undefined) : base.quote,
        body: ov.body && ov.body.length ? ov.body : base.body,
        images,
        image: images && images[0] ? images[0].url : base.image,
        specialite: ov.specialite && ov.specialite.length ? ov.specialite : base.specialite,
        info,
        faction: ov.factionId || base.faction,
        factionLabel: ov.faction || base.factionLabel,
        music: ov.music || base.music,
        linkedIds: ov.linkedIds && ov.linkedIds.length ? ov.linkedIds : base.linkedIds,
    };
}
function updateAuthUI() {
    const loggedIn = isLoggedIn();
    const user = getCurrentUser();
    const label = user ? capitalize(user) : '';
    const btn = document.getElementById('authBtn');
    const out = document.getElementById('authFormLoggedOut');
    const inn = document.getElementById('authFormLoggedIn');
    const welcomeName = document.getElementById('authWelcomeName');
    const ecritureLink = document.getElementById('ecritureNavLink');
    const compteLink = document.getElementById('compteNavLink');
    const avatar = getAvatar();
    if (btn) {
        btn.innerHTML = loggedIn
            ? (avatar ? `<img class="auth-btn-avatar" src="${avatar}" alt="">${esc(label)}` : esc(label))
            : 'Connexion';
    }
    if (welcomeName) welcomeName.textContent = label;
    if (out) out.style.display = loggedIn ? 'none' : '';
    if (inn) inn.style.display = loggedIn ? '' : 'none';
    if (ecritureLink) ecritureLink.style.display = loggedIn ? '' : 'none';
    if (compteLink) compteLink.style.display = loggedIn ? '' : 'none';
}
function toggleAuthPanel() {
    document.getElementById('authPanel')?.classList.toggle('open');
}
function submitLogin() {
    const userEl = document.getElementById('authUser');
    const codeEl = document.getElementById('authCode');
    const errEl = document.getElementById('authError');
    const u = (userEl?.value || '').trim().toLowerCase();
    const c = (codeEl?.value || '').trim();
    if (Object.prototype.hasOwnProperty.call(AUTH_USERS, u) && AUTH_USERS[u] === c) {
        localStorage.setItem(AUTH_KEY, u);
        if (errEl) errEl.textContent = '';
        if (userEl) userEl.value = '';
        if (codeEl) codeEl.value = '';
        document.getElementById('authPanel')?.classList.remove('open');
        updateAuthUI();
    } else if (errEl) {
        errEl.textContent = 'Identifiants incorrects.';
    }
}
function logout() {
    localStorage.removeItem(AUTH_KEY);
    updateAuthUI();
    document.getElementById('authPanel')?.classList.remove('open');
    if ((window.location.hash || '').includes('ecriture')) navigate('home');
}
document.addEventListener('click', (ev) => {
    const panel = document.getElementById('authPanel');
    const dock = document.getElementById('authDock');
    if (!panel || !panel.classList.contains('open')) return;
    if (dock && !dock.contains(ev.target)) panel.classList.remove('open');
});
function slugify(s) {
    return s.toLowerCase().normalize('NFD').replace(new RegExp('[\\u0300-\\u036f]', 'g'), '').replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}
function renderEcriture() {
    if (!isLoggedIn()) {
        return `<div class="empty-state">Connecte-toi pour accéder à l'espace d'écriture.</div>`;
    }
    const mine = getCustomEntriesRaw().filter(c => c.author === getCurrentUser());
    return `
    <div class="crumbs"><span onclick="navigate('home')" style="cursor:pointer">Accueil</span> / Écriture</div>
    <h1 style="font-size:26px; margin-bottom:6px;">Espace d'écriture</h1>
    <p style="color:var(--text-dim); font-size:13px; margin-bottom:22px;">
      Crée de nouvelles pages de lore. Elles s'ajoutent directement dans la catégorie choisie
      et sont visibles par tous les visiteurs du site.
    </p>
    <div class="write-form">
      <input type="hidden" id="wfEditId" value="">
      <div class="write-row">
        <label>Catégorie</label>
        <select id="wfCat">${Object.entries(CATS).map(([k, c]) => `<option value="${k}">${esc(c.label)}</option>`).join('')}</select>
      </div>
      <div class="write-row">
        <label>Nom</label>
        <input id="wfName" type="text" placeholder="Nom du personnage / objet / lieu…">
      </div>
      <div class="write-row">
        <label>Titre / tagline</label>
        <input id="wfTagline" type="text" placeholder="Courte description affichée sous le nom">
      </div>
      <div class="write-row">
        <label>Citation (optionnel)</label>
        <input id="wfQuote" type="text" placeholder="« ... »">
      </div>
      <div class="write-row">
        <label>Faction (optionnel)</label>
        <select id="wfFactionSelect" onchange="onWfFactionSelectChange()">
          <option value="">— Aucune —</option>
          ${FACTIONS.map(f => `<option value="${f.id}">${esc(f.name)}</option>`).join('')}
          <option value="__custom">Autre (texte libre)…</option>
        </select>
        <input id="wfFaction" type="text" placeholder="Ex : Eidolon…" style="margin-top:8px; display:none;">
        <div class="write-hint">En choisissant une faction existante, le personnage apparaît automatiquement dans son roster (page Personnages). "Autre" affiche juste un nom libre, sans rattachement.</div>
      </div>
      <div class="write-row">
        <label>Gène d'Oxiri lié (optionnel)</label>
        <input id="wfOxiriGene" type="text" placeholder="Ex : Kitzo, Apoleia…">
        <div class="write-hint">S'affiche comme ligne d'info "Gène d'Oxiri lié" sur la fiche, comme pour Alice ou Sariah.</div>
      </div>
      <div class="write-row">
        <label>Spécificité (optionnel)</label>
        <input id="wfCapacite" type="text" placeholder="Ex : Androïde de dernière génération, Rang A…">
        <div class="write-hint">S'affiche comme info courte à côté de la fiche (et en haut, à côté de la faction, pour un personnage).</div>
      </div>
      <div class="write-row">
        <label>Capacité (optionnel)</label>
        <textarea id="wfSpecialite" rows="5" placeholder="Décris la capacité en détail… peut faire plusieurs paragraphes."></textarea>
        <div class="write-hint">S'affiche dans un grand encadré sous la fiche — peut être aussi long que tu veux (plusieurs paragraphes, gras, listes...).</div>
      </div>
      <div class="write-row">
        <label>Texte (un paragraphe par bloc de lignes)</label>
        <textarea id="wfBody" rows="8" placeholder="Écris l'histoire ici…"></textarea>
        <div class="write-hint">Astuce : les lignes qui se suivent forment un même paragraphe — laisse une ligne vide pour commencer un nouveau paragraphe, ou entoure tout le texte d'un paragraphe de parenthèses <code>( )</code> pour être sûr qu'il reste groupé. Commence une ligne par <code># </code> pour un titre de section, <code>- </code> pour une liste à puces, ou <code>&gt; </code> pour une citation encadrée. Entoure un mot de <code>**</code> pour le mettre en gras. Écris <code>[code]</code> suivi du texte caché puis <code>]</code> pour créer une archive verrouillée déverrouillable avec ce code (ex : <code>[1234]texte secret]</code>).</div>
      </div>
      <div class="write-row">
        <label>Images (optionnel, 700 Ko au total pour cette fiche)</label>
        <div class="write-images-list" id="wfImagesList">${wfImagesListHtml()}</div>
        <input id="wfImageFile" type="file" accept="image/*" onchange="handleCustomEntryImage(this)">
      </div>
      <div class="write-row">
        <label>Musique (optionnel)</label>
        <input id="wfMusic" type="url" placeholder="Lien vers un fichier audio, ou lien SoundCloud">
        <div class="write-hint">Crée une barre de lecture sur la fiche. Un lien SoundCloud (page du morceau) fonctionne directement. Pour un autre lien, il doit pointer vers le fichier audio lui-même (pas vers une page) — par exemple un lien de fichier joint Discord.</div>
      </div>
      <div class="write-row">
        <label>Personnages liés (optionnel)</label>
        <div class="write-linked-checks" id="wfLinkedChecks">
          ${ENTRIES.filter(x => x.cat === 'personnages').map(p => `
            <label class="write-linked-check"><input type="checkbox" value="${p.id}" class="wfLinkedCheck"> ${esc(p.name)}</label>
          `).join('') || '<span class="write-hint">Aucun personnage écrit pour l\'instant.</span>'}
        </div>
        <div class="write-hint">Les personnages cochés s'affichent en photo de profil cliquable, en haut à gauche de la fiche.</div>
      </div>
      <div class="write-error" id="wfError"></div>
      <span class="btn btn-primary" id="wfSubmitBtn" onclick="submitCustomEntry()">Publier</span>
      <span class="btn btn-ghost" id="wfCancelBtn" style="display:none; margin-left:8px;" onclick="cancelEditCustomEntry()">Annuler</span>
    </div>

    <h2 style="font-size:16px; margin:30px 0 14px; color:var(--verdigris);">Mes pages écrites</h2>
    <div class="grid">
      ${mine.length ? mine.map(m => `
        <div class="card" style="cursor:default;">
          <div class="card-top">${iconSvg(m.cat)}<span class="tag common">${esc(CATS[m.cat].label)}</span></div>
          <h3 onclick="navigate('entry-custom-${m.id}')" style="cursor:pointer;">${esc(m.name)}</h3>
          <p>${esc(m.tagline)}</p>
          <div style="display:flex; gap:8px; margin-top:10px;">
            <span class="btn btn-ghost" onclick="editCustomEntry('${m.id}')">Modifier</span>
            <span class="btn btn-ghost" onclick="if(confirm('Supprimer définitivement cette fiche ?')){ deleteCustomEntry('${m.id}'); }">Supprimer</span>
          </div>
        </div>`).join('') : `<div class="empty-state">Aucune page écrite pour l'instant.</div>`}
    </div>

    <h1 id="chronoWriteForm" style="font-size:26px; margin:44px 0 6px;">Chronologie</h1>
    <p style="color:var(--text-dim); font-size:13px; margin-bottom:22px;">
      Ajoute un événement à la frise chronologique du monde. Il est placé automatiquement au bon endroit
      dans la frise selon sa date (numéro, position, style des tags générés tout seuls) — tu n'as qu'à
      remplir la date, le titre, les catégories et le texte. Tu peux aussi modifier n'importe quel
      événement déjà écrit, y compris ceux déjà présents sur la frise, avec le bouton « Modifier ».
    </p>
    <div class="write-form">
      <input type="hidden" id="ceEditId" value="">
      <div class="write-row">
        <label>Date / Époque</label>
        <input id="ceDate" type="text" placeholder="Ex : + 25">
      </div>
      <div class="write-row">
        <label>Titre</label>
        <input id="ceTitle" type="text" placeholder="Nom de l'événement">
      </div>
      <div class="write-row">
        <label>Catégories</label>
        <div class="chrono-tag-checks">
          ${Object.entries(CHRONO_TAGS).map(([key, t]) => `
            <label class="chrono-tag-check"><input type="checkbox" value="${key}" class="ceTagCheck"> ${esc(t.label)}</label>
          `).join('')}
        </div>
      </div>
      <div class="write-row">
        <label>Texte (un paragraphe par bloc de lignes)</label>
        <textarea id="ceBody" rows="6" placeholder="Raconte l'événement…"></textarea>
        <div class="write-hint">Astuce : les lignes qui se suivent forment un même paragraphe — laisse une ligne vide pour commencer un nouveau paragraphe, ou entoure tout le texte d'un paragraphe de parenthèses <code>( )</code> pour être sûr qu'il reste groupé. Commence une ligne par <code># </code> pour un titre, <code>- </code> pour une liste à puces, ou <code>&gt; </code> pour une citation encadrée. Entoure un mot de <code>**</code> pour le mettre en gras. Écris <code>[code]</code> suivi du texte caché puis <code>]</code> pour créer une archive verrouillée déverrouillable avec ce code (ex : <code>[1234]texte secret]</code>).</div>
      </div>
      <div class="write-error" id="ceError"></div>
      <span class="btn btn-primary" id="ceSubmitBtn" onclick="submitChronoEvent()">Publier l'événement</span>
      <span class="btn btn-ghost" id="ceCancelBtn" style="display:none; margin-left:8px;" onclick="cancelEditChronoEvent()">Annuler</span>
    </div>
  `;
}
function wfImagesListHtml() {
    return wfImagesDraft.map((img, i) => `
    <div class="write-image-item">
      <img src="${img.url}" alt="">
      <input type="text" class="write-image-caption" placeholder="Description de cette image (optionnel)" value="${escAttr(img.caption || '')}" oninput="updateWfImageCaption(${i}, this.value)">
      <span class="btn btn-ghost" onclick="removeWfImage(${i})">Retirer</span>
    </div>`).join('');
}
function refreshWfImagesList() {
    const wrap = document.getElementById('wfImagesList');
    if (wrap) wrap.innerHTML = wfImagesListHtml();
}
function handleCustomEntryImage(input) {
    const file = input.files && input.files[0];
    if (!file) return;
    const remaining = IMAGE_BUDGET_BYTES - totalWfImagesBytes();
    if (file.size > remaining) {
        const remainingKo = Math.max(0, Math.floor(remaining / 1024));
        alert(`Pas assez de place : il reste environ ${remainingKo} Ko sur les 700 Ko disponibles au total pour cette fiche (toutes les images additionnées). Choisis une image plus légère ou retire-en une.`);
        input.value = '';
        return;
    }
    const reader = new FileReader();
    reader.onload = () => {
        wfImagesDraft.push({ url: reader.result, caption: '' });
        input.value = '';
        refreshWfImagesList();
    };
    reader.readAsDataURL(file);
}
function updateWfImageCaption(i, value) {
    if (wfImagesDraft[i]) wfImagesDraft[i].caption = value;
}
function removeWfImage(i) {
    wfImagesDraft.splice(i, 1);
    refreshWfImagesList();
}
function onWfFactionSelectChange() {
    const select = document.getElementById('wfFactionSelect');
    const input = document.getElementById('wfFaction');
    if (!select || !input) return;
    const isCustom = select.value === '__custom';
    input.style.display = isCustom ? '' : 'none';
    if (!isCustom) input.value = '';
}
function submitCustomEntry() {
    const catEl = document.getElementById('wfCat');
    const nameEl = document.getElementById('wfName');
    const taglineEl = document.getElementById('wfTagline');
    const quoteEl = document.getElementById('wfQuote');
    const factionSelectEl = document.getElementById('wfFactionSelect');
    const factionEl = document.getElementById('wfFaction');
    const oxiriGeneEl = document.getElementById('wfOxiriGene');
    const specialiteEl = document.getElementById('wfSpecialite');
    const capaciteEl = document.getElementById('wfCapacite');
    const musicEl = document.getElementById('wfMusic');
    const bodyEl = document.getElementById('wfBody');
    const editIdEl = document.getElementById('wfEditId');
    const errEl = document.getElementById('wfError');
    const cat = (catEl?.value || 'personnages');
    const name = (nameEl?.value || '').trim();
    const tagline = (taglineEl?.value || '').trim();
    const quote = (quoteEl?.value || '').trim();
    const factionSelect = factionSelectEl?.value || '';
    const factionId = factionSelect && factionSelect !== '__custom' ? factionSelect : '';
    const faction = factionSelect === '__custom' ? (factionEl?.value || '').trim() : '';
    const oxiriGene = (oxiriGeneEl?.value || '').trim();
    const specialite = parseWriteBody(specialiteEl?.value || '');
    const capacite = (capaciteEl?.value || '').trim();
    const music = (musicEl?.value || '').trim();
    const linkedIds = Array.from(document.querySelectorAll('.wfLinkedCheck:checked')).map(c => c.value);
    const body = parseWriteBody(bodyEl?.value || '');
    const images = wfImagesDraft.slice();
    const editId = editIdEl?.value || '';
    if (!name || !tagline || body.length === 0) {
        if (errEl) errEl.textContent = 'Remplis au moins le nom, le titre et le texte.';
        return;
    }
    const db = getFirestoreDb();
    if (!db) { if (errEl) errEl.textContent = 'Connexion au serveur indisponible.'; return; }
    if (errEl) errEl.textContent = '';
    if (editId) {
        const existing = customEntriesCache.find(c => c.id === editId);
        db.collection('entries').doc(editId).set({
            cat, name, tagline, quote: quote || null, faction: faction || null, factionId: factionId || null, oxiriGene: oxiriGene || null, specialite: specialite.length ? specialite : null, capacite: capacite || null, music: music || null, linkedIds: linkedIds.length ? linkedIds : null, body, images,
            author: existing ? existing.author : (getCurrentUser() || 'aki'),
        }).catch((err) => { if (errEl) errEl.textContent = 'Erreur : ' + err.message; });
    } else {
        db.collection('entries').add({
            cat, name, tagline, quote: quote || null, faction: faction || null, factionId: factionId || null, oxiriGene: oxiriGene || null, specialite: specialite.length ? specialite : null, capacite: capacite || null, music: music || null, linkedIds: linkedIds.length ? linkedIds : null, body, images, author: getCurrentUser() || 'aki',
        }).catch((err) => { if (errEl) errEl.textContent = 'Erreur : ' + err.message; });
    }
    cancelEditCustomEntry();
}
function editCustomEntry(id) {
    const isHardcoded = ENTRIES_BASE.some(e => e.id === id);
    const rawCustom = isHardcoded ? undefined : customEntriesCache.find(c => c.id === id);
    if (!isHardcoded && !rawCustom) return;
    const entry = isHardcoded ? findEntry(id) : customEntryToEntry(rawCustom);
    if (!entry) return;
    if (!document.getElementById('wfCat')) {
        navigate('ecriture');
        setTimeout(() => editCustomEntry(id), 60);
        return;
    }
    document.getElementById('wfCat').value = entry.cat;
    document.getElementById('wfName').value = entry.name;
    document.getElementById('wfTagline').value = entry.tagline;
    document.getElementById('wfQuote').value = entry.quote || '';
    document.getElementById('wfFactionSelect').value = entry.faction || (entry.factionLabel ? '__custom' : '');
    document.getElementById('wfFaction').value = entry.factionLabel || '';
    onWfFactionSelectChange();
    document.getElementById('wfOxiriGene').value = entry.info["Gène d'Oxiri lié"] || '';
    document.getElementById('wfSpecialite').value = (entry.specialite || []).map(decodeBodyLineForEdit).join('\n\n');
    document.getElementById('wfCapacite').value = entry.info['Spécificité'] || entry.info['Capacité'] || '';
    document.getElementById('wfMusic').value = entry.music || '';
    document.querySelectorAll('.wfLinkedCheck').forEach(c => { c.checked = (entry.linkedIds || []).includes(c.value); });
    document.getElementById('wfBody').value = entry.body.map(decodeBodyLineForEdit).join('\n\n');
    document.getElementById('wfEditId').value = id;
    wfImagesDraft = (entry.images || []).map(img => ({ ...img }));
    refreshWfImagesList();
    const btn = document.getElementById('wfSubmitBtn');
    if (btn) btn.textContent = 'Enregistrer les modifications';
    const cancelBtn = document.getElementById('wfCancelBtn');
    if (cancelBtn) cancelBtn.style.display = '';
    document.querySelector('.write-form')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
function cancelEditCustomEntry() {
    document.getElementById('wfEditId').value = '';
    document.getElementById('wfCat').value = 'personnages';
    document.getElementById('wfName').value = '';
    document.getElementById('wfTagline').value = '';
    document.getElementById('wfQuote').value = '';
    document.getElementById('wfFactionSelect').value = '';
    document.getElementById('wfFaction').value = '';
    onWfFactionSelectChange();
    document.getElementById('wfOxiriGene').value = '';
    document.getElementById('wfSpecialite').value = '';
    document.getElementById('wfCapacite').value = '';
    document.getElementById('wfMusic').value = '';
    document.querySelectorAll('.wfLinkedCheck').forEach(c => { c.checked = false; });
    document.getElementById('wfBody').value = '';
    wfImagesDraft = [];
    refreshWfImagesList();
    const fileEl = document.getElementById('wfImageFile');
    if (fileEl) fileEl.value = '';
    const btn = document.getElementById('wfSubmitBtn');
    if (btn) btn.textContent = 'Publier';
    const cancelBtn = document.getElementById('wfCancelBtn');
    if (cancelBtn) cancelBtn.style.display = 'none';
    const errEl = document.getElementById('wfError');
    if (errEl) errEl.textContent = '';
}
function deleteCustomEntry(id) {
    const db = getFirestoreDb();
    if (!db) return;
    const isHardcoded = ENTRIES_BASE.some(e => e.id === id);
    if (isHardcoded) {
        db.collection('entries').doc(id).set({ deleted: true });
    } else {
        db.collection('entries').doc(id).delete();
    }
}

function submitChronoEvent() {
    const dateEl = document.getElementById('ceDate');
    const titleEl = document.getElementById('ceTitle');
    const bodyEl = document.getElementById('ceBody');
    const editIdEl = document.getElementById('ceEditId');
    const errEl = document.getElementById('ceError');
    const date = (dateEl?.value || '').trim();
    const title = (titleEl?.value || '').trim();
    const tags = Array.from(document.querySelectorAll('.ceTagCheck:checked')).map(c => c.value);
    const body = parseChronoBody(bodyEl?.value || '');
    const editId = editIdEl?.value || '';
    if (!date || !title || body.length === 0) {
        if (errEl) errEl.textContent = 'Remplis au moins la date, le titre et le texte.';
        return;
    }
    const db = getFirestoreDb();
    if (!db) { if (errEl) errEl.textContent = 'Connexion au serveur indisponible.'; return; }
    if (errEl) errEl.textContent = '';
    if (editId) {
        db.collection('chronoEvents').doc(editId).set({ date, title, tags, body })
            .catch((err) => { if (errEl) errEl.textContent = 'Erreur : ' + err.message; });
    } else {
        db.collection('chronoEvents').add({ date, title, tags, body })
            .catch((err) => { if (errEl) errEl.textContent = 'Erreur : ' + err.message; });
    }
    cancelEditChronoEvent();
}
function editChronoEvent(id) {
    const source = customChronoCache.find(c => c.id === id) || CHRONO_EVENTS.find(e => e.id === id);
    if (!source) return;
    navigate('ecriture');
    setTimeout(() => {
        document.getElementById('ceDate').value = source.date;
        document.getElementById('ceTitle').value = source.title;
        document.getElementById('ceBody').value = chronoBodyToText(source.body);
        document.querySelectorAll('.ceTagCheck').forEach(c => { c.checked = source.tags.includes(c.value); });
        document.getElementById('ceEditId').value = id;
        const btn = document.getElementById('ceSubmitBtn');
        if (btn) btn.textContent = 'Enregistrer les modifications';
        const cancelBtn = document.getElementById('ceCancelBtn');
        if (cancelBtn) cancelBtn.style.display = '';
        document.getElementById('chronoWriteForm')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 60);
}
function cancelEditChronoEvent() {
    const dateEl = document.getElementById('ceDate');
    const titleEl = document.getElementById('ceTitle');
    const bodyEl = document.getElementById('ceBody');
    const editIdEl = document.getElementById('ceEditId');
    if (dateEl) dateEl.value = '';
    if (titleEl) titleEl.value = '';
    if (bodyEl) bodyEl.value = '';
    if (editIdEl) editIdEl.value = '';
    document.querySelectorAll('.ceTagCheck').forEach(c => { c.checked = false; });
    const btn = document.getElementById('ceSubmitBtn');
    if (btn) btn.textContent = "Publier l'événement";
    const cancelBtn = document.getElementById('ceCancelBtn');
    if (cancelBtn) cancelBtn.style.display = 'none';
    const errEl = document.getElementById('ceError');
    if (errEl) errEl.textContent = '';
}
function deleteChronoEvent(id) {
    const db = getFirestoreDb();
    if (!db) return;
    const isOriginal = CHRONO_EVENTS.some(ev => ev.id === id);
    if (isOriginal) {
        db.collection('chronoEvents').doc(id).set({ deleted: true });
    } else {
        db.collection('chronoEvents').doc(id).delete();
    }
}

const AVATAR_KEY = 'akiAvatar';

function avatarKey() {
    return AVATAR_KEY + '_' + (getCurrentUser() || 'guest');
}
function getAvatar() {
    return localStorage.getItem(avatarKey());
}
function setAvatarFromFile(file) {
    if (file.size > 2 * 1024 * 1024) { alert('Image trop lourde (2 Mo maximum).'); return; }
    const reader = new FileReader();
    reader.onload = () => {
        try {
            localStorage.setItem(avatarKey(), reader.result);
        } catch {
            alert("Impossible d'enregistrer cette image (trop volumineuse pour le stockage local).");
            return;
        }
        updateAuthUI();
        if ((window.location.hash || '').includes('compte')) render();
    };
    reader.readAsDataURL(file);
}
function removeAvatar() {
    localStorage.removeItem(avatarKey());
    updateAuthUI();
    if ((window.location.hash || '').includes('compte')) render();
}
function getCustomPagesRaw() {
    return customPagesCache;
}
function refreshCustomNavLinks() {
    const wrap = document.getElementById('customNavLinksWrap');
    if (!wrap) return;
    wrap.innerHTML = customPagesCache.map(p => `
    <a class="nav-link" data-route="page-${p.id}" onclick="navigate('page-${p.id}')">
      <svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
      ${esc(p.label)}
    </a>`).join('');
}
function addCustomNavPage() {
    const labelEl = document.getElementById('cnpLabel');
    const bodyEl = document.getElementById('cnpBody');
    const errEl = document.getElementById('cnpError');
    const db = getFirestoreDb();
    if (!db) { if (errEl) errEl.textContent = 'Connexion au serveur indisponible.'; return; }
    const label = (labelEl?.value || '').trim();
    const body = parseWriteBody(bodyEl?.value || '');
    if (!label) {
        if (errEl) errEl.textContent = "Donne un nom à l'onglet.";
        return;
    }
    if (errEl) errEl.textContent = '';
    db.collection('navPages').add({ label, body })
        .catch((err) => { if (errEl) errEl.textContent = 'Erreur : ' + err.message; });
}
function deleteCustomNavPage(id) {
    const db = getFirestoreDb();
    if (!db) return;
    db.collection('navPages').doc(id).delete().then(() => {
        if ((window.location.hash || '').replace('#', '') === 'page-' + id) navigate('home');
    });
}
function renderCustomPage(id) {
    const page = customPagesCache.find(p => p.id === id);
    if (!page) return renderNotFound();
    return `
    <div class="crumbs"><span onclick="navigate('home')" style="cursor:pointer">Accueil</span> / ${esc(page.label)}</div>
    <h1 style="font-size:26px; margin-bottom:16px;">${esc(page.label)}</h1>
    <div class="custom-page-body">
      ${page.body.length ? renderRichBody(page.body) : `<p style="color:var(--text-dim)">Page vide.</p>`}
    </div>
  `;
}
function renderCompte() {
    if (!isLoggedIn()) {
        return `<div class="empty-state">Connecte-toi pour accéder à ton compte.</div>`;
    }
    const avatar = getAvatar();
    const pages = getCustomPagesRaw();
    return `
    <div class="crumbs"><span onclick="navigate('home')" style="cursor:pointer">Accueil</span> / Mon compte</div>
    <h1 style="font-size:26px; margin-bottom:20px;">Mon compte</h1>

    <div class="account-section">
      <h2 class="account-section-title">Photo de profil</h2>
      <div class="avatar-row">
        <div class="avatar-preview">${avatar ? `<img src="${avatar}" alt="Avatar">` : `<span>A</span>`}</div>
        <div class="avatar-actions">
          <label class="btn btn-ghost avatar-upload-btn">
            Changer la photo
            <input type="file" accept="image/*" style="display:none" onchange="if(this.files && this.files[0]) setAvatarFromFile(this.files[0])">
          </label>
          ${avatar ? `<span class="btn btn-ghost" onclick="removeAvatar()">Retirer</span>` : ''}
        </div>
      </div>
    </div>

    <div class="account-section">
      <h2 class="account-section-title">Onglets de navigation personnalisés</h2>
      <p style="color:var(--text-dim); font-size:12.5px; margin-bottom:14px;">
        Crée un nouvel onglet dans la barre de navigation, visible par tous les visiteurs du site (règles du RP, annonces…).
      </p>
      <div class="write-form" style="max-width:520px; margin-bottom:20px;">
        <div class="write-row"><label>Nom de l'onglet</label><input id="cnpLabel" type="text" placeholder="Ex : Règles du RP"></div>
        <div class="write-row">
          <label>Contenu (un paragraphe par bloc de lignes)</label>
          <textarea id="cnpBody" rows="6"></textarea>
          <div class="write-hint">Astuce : les lignes qui se suivent forment un même paragraphe — laisse une ligne vide pour commencer un nouveau paragraphe, ou entoure tout le texte d'un paragraphe de parenthèses <code>( )</code> pour être sûr qu'il reste groupé. Commence une ligne par <code># </code> pour un titre de section, <code>- </code> pour une liste à puces, ou <code>&gt; </code> pour une citation encadrée. Entoure un mot de <code>**</code> pour le mettre en gras. Écris <code>[code]</code> suivi du texte caché puis <code>]</code> pour créer une archive verrouillée déverrouillable avec ce code (ex : <code>[1234]texte secret]</code>).</div>
        </div>
        <div class="write-error" id="cnpError"></div>
        <span class="btn btn-primary" onclick="addCustomNavPage()">Ajouter l'onglet</span>
      </div>
      <div class="account-list">
        ${pages.length ? pages.map(p => `
          <div class="account-list-row">
            <span onclick="navigate('page-${p.id}')" style="cursor:pointer;">${esc(p.label)}</span>
            <span class="btn btn-ghost" onclick="if(confirm('Supprimer définitivement cet onglet ?')){ deleteCustomNavPage('${p.id}'); }">Supprimer</span>
          </div>`).join('') : `<div class="empty-state">Aucun onglet personnalisé pour l'instant.</div>`}
      </div>
    </div>
  `;
}
/* ---------------- FACTIONS (page Personnages façon Wuthering Waves) ---------------- */
const FACTIONS = [
    { id: 'halcyon', name: 'Halcyon', color: '178,58,58',
        desc: "L'organisation qui conçoit et augmente les hybrides de rang, les employant comme armes vivantes sur le champ de bataille.",
        iconPath: '<circle cx="12" cy="12" r="9"/><path d="M8 14l4-4 4 4"/><circle cx="12" cy="9" r="1.3" fill="currentColor" stroke="none"/>' },
    { id: 'bannis', name: 'Les Bannis', color: '196,201,209',
        desc: "D'anciens gardes royaux et soldats en exil, fidèles à un serment que le royaume a trahi.",
        iconPath: '<circle cx="12" cy="12" r="9"/><line x1="6" y1="6" x2="18" y2="18"/><line x1="18" y1="6" x2="6" y2="18"/>' },
    { id: 'conclave', name: 'Conclave Ivoire', color: '138,149,166',
        desc: "Un ordre voué à préserver la mémoire de l'âge d'avant la chute et à protéger les ruines sacrées.",
        iconPath: '<circle cx="12" cy="12" r="9"/><ellipse cx="12" cy="12" rx="5.2" ry="3"/><circle cx="12" cy="12" r="1.3" fill="currentColor" stroke="none"/>' },
    { id: 'aurora', name: 'Direction Aurore', color: '112,176,186',
        desc: "Une organisation technologique moderne qui cartographie et exploite les vestiges de l'ancien monde.",
        iconPath: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="2.6"/><line x1="12" y1="5.5" x2="12" y2="8.4"/><line x1="12" y1="15.6" x2="12" y2="18.5"/><line x1="5.5" y1="12" x2="8.4" y2="12"/><line x1="15.6" y1="12" x2="18.5" y2="12"/>' },
    { id: 'errants', name: 'Les Errants', color: '178,120,90',
        desc: "Marchands, éclaireurs et vagabonds sans allégeance, qui traversent les régions au fil de leurs intérêts.",
        iconPath: '<circle cx="12" cy="12" r="9"/><path d="M15.2 8.8l-2 6.4-6.4 2 2-6.4 6.4-2z"/>' },
];
const SQUADS = [
    { id: 'oracle', name: 'Escadron Oracle',
        desc: "Une unité d'élite de Halcyon commandée par Sariah Frosleaf, vouée à l'annihilation d'Oxiri." },
];
const HALCYON_HIERARCHY = [
    { id: 'dirigeant', label: 'Dirigeant',
        desc: "Il y a tout d'abord le dirigeant, celui à la tête de la société. Il est celui qui dirige les opérations et dont la voix porte sur tout le monde. Les théories sont nombreuses sur la puissance et le réel but de cette personne, mais pour le moment il ne fait « qu'avancer le monde vers un avenir meilleur » selon ses dires.",
        memberIds: [] },
    { id: 'bras-droit', label: 'Bras droit',
        desc: "Il est le second du dirigeant : il peut prendre des décisions importantes et diriger les opérations en son absence, et reste le premier fil conducteur entre la société et celui qui en est à sa tête. Ce rôle exige un lien de confiance très fort avec le dirigeant — même s'il est arrivé d'y voir des personnes… spéciales.",
        memberIds: [] },
    { id: 'rang-s', label: 'Hybrides de rang S',
        desc: "Généralement les plus puissants, ceux et celles qui ont été couronnés de succès lors de leurs différents combats. Ils sont généralement soit capitaines d'escadrons, soit bras droit de ceux-ci. Il y a très peu d'hybrides de rang S, les personnes capables d'atteindre ce stade étant rares.",
        memberIds: ['sariah-frosleaf'] },
    { id: 'rang-a', label: 'Hybrides de rang A',
        desc: "Ce sont les plus nombreux : généralement ceux et celles qui ont déjà pas mal d'expérience, qui connaissent bien la dure vie sur le terrain et ce que c'est que de se battre contre Oxiri. Tous ont fini leur processus de formation et se battent pour protéger leur monde… (enfin, normalement).",
        memberIds: ['alice-alfreya', 'thorne-adell'] },
    { id: 'rang-b', label: 'Hybrides de rang B',
        desc: "Ce sont celles et ceux qui commencent ou sont en cours de formation ; ils découvrent ce qu'ils vont devoir vivre pour leur futur. Beaucoup abandonnent très tôt et peu restent. C'est un peu la phase de sélection, où certains sont gardés à l'œil car possédant des aptitudes différentes qui leur permettraient d'atteindre les plus hauts sommets.",
        memberIds: ['nyx-sorel', 'vesper-kaine'] },
    { id: 'stagiaire', label: 'Stagiaire',
        desc: "Ooofff… vous êtes des stagiaires, ici pour observer et apprendre de l'organisation. N'oublie pas de faire signer ta convention !",
        memberIds: [] },
];
function factionIconSvg(id, size) {
    const f = FACTIONS.find(x => x.id === id);
    if (!f)
        return '';
    return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3">${f.iconPath}</svg>`;
}
let rosterState = null;
const ROSTER_STEP_X_DESKTOP = 128;
const ROSTER_STEP_X_MOBILE = 88;
function rosterCard3dHtml(e, index) {
    const f = FACTIONS.find(x => x.id === e.faction);
    const fclr = f ? f.color : '196,201,209';
    const visual = e.image
        ? `<img src="${e.image}" alt="${esc(e.name)}" draggable="false">`
        : `<div class="roster-card-glyph">${esc(e.name.charAt(0))}</div>`;
    const pips = e.rarity === 'rare' ? '✦ ✦ ✦' : '✦';
    return `
    <div class="roster-3d-card" data-index="${index}" data-flip="0" style="--fclr:${fclr}" onmouseenter="onRosterCardHoverStart(${index})" onmouseleave="onRosterCardHoverEnd(${index})">
      <div class="roster-3d-card-inner">
        <div class="roster-card-edge roster-card-edge-r"></div>
        <div class="roster-card-edge roster-card-edge-l"></div>
        <div class="roster-card-face roster-card-front">
          ${visual}
          <div class="roster-card-shine"></div>
          <div class="roster-card-info">
            <div class="roster-card-name">${esc(e.name)}</div>
            <div class="roster-card-tag">${esc(e.tagline)}</div>
          </div>
        </div>
        <div class="roster-card-face roster-card-back">
          <span class="roster-card-back-corner tl">✦</span>
          <span class="roster-card-back-corner tr">✦</span>
          <span class="roster-card-back-corner bl">✦</span>
          <span class="roster-card-back-corner br">✦</span>
          <div class="roster-card-back-emblem">${e.faction === 'halcyon' ? `<img class="roster-card-back-logo" src="${encodeURI(HALCYON_LOGO)}" alt="Halcyon">` : (e.faction ? factionIconSvg(e.faction, 84) : '')}</div>
          <div class="roster-card-back-divider"></div>
          <div class="roster-card-back-name">${esc(e.name)}</div>
          <div class="roster-card-back-pips">${pips}</div>
          <div class="roster-card-back-sheen"></div>
        </div>
      </div>
    </div>`;
}
function rosterBubbleHtml(e) {
    const c = CATS[e.cat];
    return `
    <button class="roster-bubble-close" onclick="closeRosterBubble()" aria-label="Fermer">✕</button>
    <div class="roster-info-eyebrow">${esc(c.label)} · ${e.rarity === 'rare' ? 'Notable' : 'Commun'}</div>
    <div class="roster-info-name">${esc(e.name)}</div>
    ${e.quote ? `<div class="roster-info-quote">${esc(e.quote)}</div>` : ''}
    <div class="roster-info-summary">${esc(e.summary)}</div>
    <span class="btn btn-primary roster-info-link" onclick="navigate('entry-${e.id}')">Plus d'infos →</span>
  `;
}
function renderPersonnagesRoster() {
    const initial = FACTIONS[0];
    const list = ENTRIES.filter(e => e.cat === 'personnages' && e.faction === initial.id);
    rosterState = { factionId: initial.id, list, selected: 0 };
    return `
    <div class="crumbs"><span onclick="navigate('home')" style="cursor:pointer">Accueil</span> / Personnages</div>
    <div class="roster-page">
      <div class="roster-rail">
        ${FACTIONS.map(f => `
          <div class="roster-faction ${f.id === initial.id ? 'active' : ''}" data-faction="${f.id}" onclick="selectFaction('${f.id}')" title="${esc(f.name)}">
            ${factionIconSvg(f.id, 24)}
          </div>`).join('')}
      </div>
      <div class="roster-main">
        <div class="roster-crest" id="rosterCrest">${factionIconSvg(initial.id, 170)}</div>
        <div class="roster-eyebrow">Faction</div>
        <h2 id="rosterTitle">${esc(initial.name)}</h2>
        <p class="roster-desc" id="rosterDesc">${esc(initial.desc)}</p>
        <div class="roster-ornament"><span></span>❖<span></span></div>
        <p class="roster-hint">🖱️ Molette pour parcourir · Survole pour un aperçu · Clique pour zoomer · Glisse pour retourner</p>

        <div class="roster-stage" id="rosterStage">
          <span class="roster-frame-corner tl">✦</span>
          <span class="roster-frame-corner tr">✦</span>
          <span class="roster-frame-corner bl">✦</span>
          <span class="roster-frame-corner br">✦</span>
          <div class="roster-stage-cards" id="rosterStageCards">
            ${list.length ? list.map((e, i) => rosterCard3dHtml(e, i)).join('') : ''}
          </div>
          ${!list.length ? `<div class="roster-empty">Aucun résonateur recensé dans cette faction pour l'instant.</div>` : ''}
        </div>

        <div class="roster-nav">
          <button class="roster-arrow prev" onclick="scrollRoster(-1)"><span class="line"></span>◂</button>
          <button class="roster-arrow next" onclick="scrollRoster(1)">▸<span class="line"></span></button>
        </div>

        <div class="roster-bubble" id="rosterBubble"></div>
      </div>
    </div>`;
}
const ROSTER_MAX_VISIBLE = 3;
// Les cartes se répartissent sur toute la largeur du cadre plutôt que de
// rester tassées au centre : le pas horizontal dépend de la largeur réelle
// de la scène, pas d'une valeur fixe pensée pour un site plus étroit.
// Utilisée à la fois pour positionner les cartes et pour déduire, au clic,
// laquelle a été visée — les deux doivent rester en phase.
function rosterStepX(isMobile) {
    const stage = document.getElementById('rosterStage');
    const stageWidth = (stage ? stage.clientWidth : 0) || (isMobile ? 360 : 900);
    const base = isMobile ? ROSTER_STEP_X_MOBILE : ROSTER_STEP_X_DESKTOP;
    const proportional = stageWidth * (isMobile ? 0.16 : 0.19);
    return Math.min(320, Math.max(base, proportional));
}
function layoutRosterStage() {
    if (!rosterState)
        return;
    const stageCards = document.getElementById('rosterStageCards');
    if (!stageCards)
        return;
    const { selected } = rosterState;
    const isMobile = window.innerWidth < 700;
    const maxVisible = ROSTER_MAX_VISIBLE;
    const stepX = rosterStepX(isMobile);
    const stepRotate = 26;
    const stepZ = 140;
    Array.from(stageCards.children).forEach(child => {
        const el = child;
        const idx = Number(el.dataset.index);
        const offset = idx - selected;
        const abs = Math.abs(offset);
        const clamped = Math.max(-maxVisible, Math.min(maxVisible, offset));
        const x = clamped * stepX;
        const rotate = clamped * -stepRotate;
        const z = offset === 0 ? 60 : -abs * stepZ;
        const scale = offset === 0 ? 1.08 : Math.max(0.6, 1 - abs * 0.14);
        const opacity = abs > maxVisible ? 0 : Math.max(0, 1 - abs * 0.28);
        el.style.transform = `translate3d(${x}px, 0, ${z}px) rotateY(${rotate}deg) scale(${scale})`;
        el.style.opacity = String(opacity);
        el.style.zIndex = String(100 - abs);
        el.classList.toggle('is-active', offset === 0);
        el.dataset.flip = '0';
        const inner = el.querySelector('.roster-3d-card-inner');
        const shine = el.querySelector('.roster-card-shine');
        if (inner)
            inner.style.transform = '';
        if (shine)
            shine.style.opacity = '0';
    });
}
function openRosterBubble(index) {
    if (!rosterState)
        return;
    const e = rosterState.list[index];
    const bubble = document.getElementById('rosterBubble');
    if (!bubble || !e)
        return;
    bubble.innerHTML = rosterBubbleHtml(e);
    bubble.classList.add('open');
}
function closeRosterBubble() {
    const bubble = document.getElementById('rosterBubble');
    if (bubble)
        bubble.classList.remove('open');
}
// La bulle d'info ne s'ouvre plus au clic : elle apparaît quand la souris
// reste posée quelques instants sur la carte active, et se referme dès
// qu'on la retire (comme une infobulle).
let rosterHoverTimer = null;
function onRosterCardHoverStart(index) {
    if (!rosterState || index !== rosterState.selected)
        return;
    if (rosterDrag.active)
        return;
    if (rosterHoverTimer !== null)
        return;
    rosterHoverTimer = window.setTimeout(() => {
        rosterHoverTimer = null;
        openRosterBubble(index);
    }, 650);
}
function onRosterCardHoverEnd(_index) {
    if (rosterHoverTimer !== null) {
        clearTimeout(rosterHoverTimer);
        rosterHoverTimer = null;
    }
    closeRosterBubble();
}
// Le clic, lui, ouvre la fiche en grand : la carte zoome au centre de
// l'écran avec ses informations qui apparaissent de part et d'autre.
function rosterZoomHtml(e) {
    const c = CATS[e.cat];
    const f = FACTIONS.find(x => x.id === e.faction);
    const fclr = f ? f.color : '196,201,209';
    const visual = e.image
        ? `<img src="${e.image}" alt="${esc(e.name)}">`
        : `<div class="roster-zoom-glyph">${esc(e.name.charAt(0))}</div>`;
    return `
    <div class="roster-zoom-panel roster-zoom-panel-left">
      <div class="roster-info-eyebrow">${esc(c.label)} · ${e.rarity === 'rare' ? 'Notable' : 'Commun'}</div>
      <div class="roster-zoom-name">${esc(e.name)}</div>
      <div class="roster-zoom-tag">${esc(e.tagline)}</div>
      ${e.quote ? `<div class="roster-info-quote">${esc(e.quote)}</div>` : ''}
    </div>
    <div class="roster-zoom-card" style="--fclr:${fclr}">${visual}</div>
    <div class="roster-zoom-panel roster-zoom-panel-right">
      <div class="roster-info-summary">${esc(e.summary)}</div>
      <div class="roster-zoom-facts">
        ${Object.entries(e.info).map(([k, v]) => `<div class="roster-zoom-fact"><span class="k">${esc(k)}</span><span class="v">${esc(v)}</span></div>`).join('')}
      </div>
      <span class="btn btn-primary roster-info-link" onclick="navigate('entry-${e.id}')">Plus d'infos →</span>
    </div>
  `;
}
function openRosterZoom(index) {
    if (!rosterState)
        return;
    const e = rosterState.list[index];
    if (!e)
        return;
    closeRosterBubble();
    let overlay = document.getElementById('rosterZoomOverlay');
    if (!overlay) {
        overlay = document.createElement('div');
        overlay.id = 'rosterZoomOverlay';
        overlay.className = 'roster-zoom-overlay';
        overlay.innerHTML = `<div class="roster-zoom-backdrop" onclick="closeRosterZoom()"></div>
      <button class="roster-zoom-close" onclick="closeRosterZoom()" aria-label="Fermer">✕</button>
      <div class="roster-zoom-stage" id="rosterZoomStage"></div>`;
        document.body.appendChild(overlay);
    }
    const stage = document.getElementById('rosterZoomStage');
    if (stage)
        stage.innerHTML = rosterZoomHtml(e);
    requestAnimationFrame(() => { overlay.classList.add('open'); });
}
function closeRosterZoom() {
    const overlay = document.getElementById('rosterZoomOverlay');
    if (overlay)
        overlay.classList.remove('open');
}
// Les cartes latérales sont fortement inclinées en 3D (rotateY) : leur zone
// réellement cliquable (après transform) est bien plus petite et décalée que
// leur silhouette visible, ce qui les rend quasi impossibles à cliquer avec
// précision. On délègue donc le clic au conteneur (non transformé) et on
// déduit la carte visée à partir de la position horizontale du clic.
function onRosterStageClick(ev) {
    if (rosterDrag.moved) {
        rosterDrag.moved = false;
        return;
    }
    if (!rosterState || !rosterState.list.length)
        return;
    const stage = document.getElementById('rosterStage');
    if (!stage)
        return;
    const rect = stage.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const isMobile = window.innerWidth < 700;
    const stepX = rosterStepX(isMobile);
    const offset = Math.round((ev.clientX - centerX) / stepX);
    const target = Math.max(0, Math.min(rosterState.list.length - 1, rosterState.selected + offset));
    rosterState.selected = target;
    layoutRosterStage();
    openRosterZoom(target);
}
let rosterWheelLock = false;
function onRosterStageWheel(ev) {
    if (!rosterState || !rosterState.list.length)
        return;
    const dir = ev.deltaY > 0 ? 1 : -1;
    const next = rosterState.selected + dir;
    if (next < 0 || next >= rosterState.list.length)
        return;
    ev.preventDefault();
    if (rosterWheelLock)
        return;
    closeRosterBubble();
    rosterState.selected = next;
    layoutRosterStage();
    rosterWheelLock = true;
    setTimeout(() => { rosterWheelLock = false; }, 380);
}
// Effet "vraie carte à jouer" : la carte active suit la souris (léger tilt
// 3D + reflet façon carte holographique), comme si on la tenait en main.
function onRosterStageMouseMove(ev) {
    if (rosterDrag.active)
        return;
    const active = document.querySelector('.roster-3d-card.is-active');
    const inner = active ? active.querySelector('.roster-3d-card-inner') : null;
    const shine = active ? active.querySelector('.roster-card-shine') : null;
    if (!active || !inner)
        return;
    const flip = Number(active.dataset.flip || '0');
    const rect = active.getBoundingClientRect();
    if (ev.clientX < rect.left || ev.clientX > rect.right || ev.clientY < rect.top || ev.clientY > rect.bottom) {
        inner.style.transition = 'transform .4s cubic-bezier(.2,.8,.2,1)';
        inner.style.transform = `rotateY(${flip}deg)`;
        if (shine)
            shine.style.opacity = '0';
        return;
    }
    const px = (ev.clientX - rect.left) / rect.width;
    const py = (ev.clientY - rect.top) / rect.height;
    const tiltX = (0.5 - py) * 18;
    const tiltY = (px - 0.5) * 18;
    inner.style.transition = 'transform .08s linear';
    inner.style.transform = `rotateY(${flip}deg) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
    if (shine) {
        const isFront = Math.abs(flip % 360) === 0;
        shine.style.opacity = isFront ? '0.55' : '0';
        shine.style.setProperty('--mx', `${px * 100}%`);
        shine.style.setProperty('--my', `${py * 100}%`);
    }
}
function onRosterStageMouseLeave() {
    if (rosterDrag.active)
        return;
    const active = document.querySelector('.roster-3d-card.is-active');
    const inner = active ? active.querySelector('.roster-3d-card-inner') : null;
    const shine = active ? active.querySelector('.roster-card-shine') : null;
    if (inner) {
        const flip = Number((active && active.dataset.flip) || '0');
        inner.style.transition = 'transform .4s cubic-bezier(.2,.8,.2,1)';
        inner.style.transform = `rotateY(${flip}deg)`;
    }
    if (shine)
        shine.style.opacity = '0';
}
// Manipulation directe : on clique-glisse la carte active pour la faire
// tourner librement (jusqu'à 360° et plus) et voir son dos. Au relâchement,
// elle se cale sur la face la plus proche (recto ou verso).
const rosterDrag = { active: false, moved: false, cardEl: null, innerEl: null, startX: 0, startRotation: 0 };
function onRosterStageMouseDown(ev) {
    const active = document.querySelector('.roster-3d-card.is-active');
    if (!active)
        return;
    const rect = active.getBoundingClientRect();
    if (ev.clientX < rect.left || ev.clientX > rect.right || ev.clientY < rect.top || ev.clientY > rect.bottom)
        return;
    const inner = active.querySelector('.roster-3d-card-inner');
    if (!inner)
        return;
    const shine = active.querySelector('.roster-card-shine');
    if (shine)
        shine.style.opacity = '0';
    if (rosterHoverTimer !== null) {
        clearTimeout(rosterHoverTimer);
        rosterHoverTimer = null;
    }
    closeRosterBubble();
    rosterDrag.active = true;
    rosterDrag.moved = false;
    rosterDrag.cardEl = active;
    rosterDrag.innerEl = inner;
    rosterDrag.startX = ev.clientX;
    rosterDrag.startRotation = Number(active.dataset.flip || '0');
    inner.style.transition = 'none';
    ev.preventDefault();
}
function onRosterDragMove(ev) {
    if (!rosterDrag.active || !rosterDrag.cardEl || !rosterDrag.innerEl)
        return;
    const dx = ev.clientX - rosterDrag.startX;
    if (Math.abs(dx) > 4)
        rosterDrag.moved = true;
    const rotation = rosterDrag.startRotation + dx * 0.6;
    rosterDrag.cardEl.dataset.flip = String(rotation);
    rosterDrag.innerEl.style.transform = `rotateY(${rotation}deg)`;
}
function onRosterDragEnd() {
    if (!rosterDrag.active)
        return;
    rosterDrag.active = false;
    const cardEl = rosterDrag.cardEl;
    const inner = rosterDrag.innerEl;
    rosterDrag.cardEl = null;
    rosterDrag.innerEl = null;
    if (!cardEl || !inner)
        return;
    const current = Number(cardEl.dataset.flip || '0');
    const nearest = Math.round(current / 180) * 180;
    cardEl.dataset.flip = String(nearest);
    inner.style.transition = 'transform .5s cubic-bezier(.2,.8,.2,1)';
    inner.style.transform = `rotateY(${nearest}deg)`;
}
function initRosterStage() {
    layoutRosterStage();
    const stage = document.getElementById('rosterStage');
    if (stage) {
        stage.addEventListener('click', onRosterStageClick);
        stage.addEventListener('wheel', onRosterStageWheel, { passive: false });
        stage.addEventListener('mousedown', onRosterStageMouseDown);
        stage.addEventListener('mousemove', onRosterStageMouseMove);
        stage.addEventListener('mouseleave', onRosterStageMouseLeave);
    }
}
function selectRosterCard(index) {
    if (!rosterState)
        return;
    if (index < 0 || index >= rosterState.list.length)
        return;
    rosterState.selected = index;
    layoutRosterStage();
}
function scrollRoster(dir) {
    if (!rosterState)
        return;
    const next = rosterState.selected + dir;
    if (next < 0 || next >= rosterState.list.length)
        return;
    closeRosterBubble();
    rosterState.selected = next;
    layoutRosterStage();
}
function selectFaction(id) {
    const stage = document.getElementById('rosterStage');
    const stageCards = document.getElementById('rosterStageCards');
    if (!stage || !stageCards)
        return;
    const f = FACTIONS.find(x => x.id === id);
    if (!f)
        return;
    document.querySelectorAll('.roster-faction').forEach(b => b.classList.toggle('active', b.dataset.faction === id));
    closeRosterBubble();
    stage.classList.add('slide-out');
    setTimeout(() => {
        const list = ENTRIES.filter(e => e.cat === 'personnages' && e.faction === id);
        rosterState = { factionId: id, list, selected: 0 };
        const titleEl = document.getElementById('rosterTitle');
        const descEl = document.getElementById('rosterDesc');
        const crestEl = document.getElementById('rosterCrest');
        if (titleEl)
            titleEl.textContent = f.name;
        if (descEl)
            descEl.textContent = f.desc;
        if (crestEl)
            crestEl.innerHTML = factionIconSvg(id, 170);
        stageCards.innerHTML = list.length ? list.map((e, i) => rosterCard3dHtml(e, i)).join('') : '';
        stage.classList.remove('slide-out');
        stage.classList.add('slide-in');
        layoutRosterStage();
        setTimeout(() => stage.classList.remove('slide-in'), 340);
    }, 240);
}
function renderHome() {
    const counts = Object.keys(CATS).reduce((acc, c) => {
        acc[c] = ENTRIES.filter(e => e.cat === c).length;
        return acc;
    }, {});
    const featured = ENTRIES.filter(e => e.cat === 'personnages').slice(-5);
    return `
    <div class="hero">
      <svg class="hero-sigil" viewBox="0 0 24 24" fill="none" stroke="#c4c9d1" stroke-width="1"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="3.2"/><line x1="12" y1="1" x2="12" y2="5"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="1" y1="12" x2="5" y2="12"/><line x1="19" y1="12" x2="23" y2="12"/></svg>
      <div class="hero-eyebrow">Codex non-officiel</div>
      <h1>MEMORIES<br>OF PAST</h1>
      <div class="hero-divider"></div>
      <p>Entre les ruines d'un âge oublié et les flèches de verre d'un présent technologique, un même monde continue de se souvenir. Explore ses régions, ses factions et ceux qui portent encore le poids du passé.</p>
      <div class="hero-actions">
        <span class="btn btn-primary" onclick="navigate('cat-personnages')">Parcourir le codex</span>
        <span class="btn btn-ghost" onclick="navigate('carte')">Voir la carte du monde</span>
      </div>
    </div>

    <div class="stats-row">
      ${Object.entries(CATS).map(([key, c]) => `
        <div class="stat">
          <div class="num">${counts[key]}</div>
          <div class="lbl">${c.label}</div>
        </div>`).join('')}
    </div>

    <div class="section-title">
      <h2>Dernièrement</h2>
      <a onclick="navigate('cat-personnages')">Voir tout →</a>
    </div>
    <div class="featured-grid">
      ${featuredGridHtml(featured)}
    </div>

    <div class="editnote">
      💡 Ceci est un site de départ. Remplace le nom du jeu, les catégories dans <code>CATS</code> et les fiches dans <code>ENTRIES</code> (en haut du fichier) par ton propre contenu.
    </div>
  `;
}
function featuredGridHtml(list) {
    return list.map((e, i) => {
        const badgeIcon = e.faction ? factionIconSvg(e.faction, 20) : iconSvg(e.cat, 18);
        return `
    <div class="featured-card ${i === list.length - 1 ? 'featured-large' : ''}" onclick="showCharacterReveal('${e.id}')">
      ${e.image ? `<img class="featured-img" src="${encodeURI(e.image)}" alt="${esc(e.name)}" style="${e.imagePos ? `object-position:${e.imagePos}` : ''}">` : ''}
      <div class="featured-info">
        <div class="featured-icon-badge">${badgeIcon}</div>
        <div class="featured-tag">${esc(e.tagline)}</div>
        <div class="featured-name">${esc(e.name)}</div>
      </div>
    </div>`;
    }).join('');
}
let charRevealTimer = null;
function showCharacterReveal(id) {
    const e = findEntry(id);
    if (!e) { navigate('entry-' + id); return; }
    let overlay = document.getElementById('charRevealOverlay');
    if (!overlay) {
        overlay = document.createElement('div');
        overlay.id = 'charRevealOverlay';
        overlay.className = 'char-reveal-overlay';
        document.body.appendChild(overlay);
    }
    const f = e.faction ? FACTIONS.find(x => x.id === e.faction) : undefined;
    const words = e.tagline.split(/\s+/).filter(Boolean);
    const bgWord = (words[words.length - 1] || e.name).toUpperCase();
    overlay.innerHTML = `
    <div class="cr-halftone"></div>
    <div class="cr-slash cr-slash-1"></div>
    <div class="cr-slash-2"></div>
    <div class="cr-bgword">${esc(bgWord)}</div>
    ${e.image ? `<div class="cr-portrait-wrap"><img class="cr-portrait" src="${encodeURI(e.image)}" alt="${esc(e.name)}" style="${e.imagePos ? `object-position:${e.imagePos}` : ''}"></div>` : ''}
    <div class="cr-vignette"></div>
    <div class="cr-topbar">
      <div class="cr-topbar-left">${f ? factionIconSvg(f.id, 18) : ''}<span>${f ? esc(f.name) : 'Codex'}</span></div>
      <div class="cr-topbar-right">${e.rarity === 'rare' ? '★ Notable' : 'Fiche'}</div>
    </div>
    <div class="cr-info">
      <div class="cr-eyebrow">${esc(e.name)} ‹‹‹</div>
      <div class="cr-title-banner"><h2 class="cr-title">${esc(e.tagline)}</h2></div>
      ${e.quote ? `<p class="cr-quote">${esc(e.quote)}</p>` : ''}
    </div>
    <div class="cr-hint">Cliquer pour continuer ▸</div>
  `;
    overlay.onclick = () => finishCharacterReveal(id);
    requestAnimationFrame(() => { overlay.classList.add('open'); });
    if (charRevealTimer) window.clearTimeout(charRevealTimer);
    charRevealTimer = window.setTimeout(() => finishCharacterReveal(id), 3600);
}
function finishCharacterReveal(id) {
    if (charRevealTimer) { window.clearTimeout(charRevealTimer); charRevealTimer = null; }
    const overlay = document.getElementById('charRevealOverlay');
    if (overlay) {
        overlay.onclick = null;
        overlay.classList.remove('open');
    }
    navigate('entry-' + id);
}
function cardHtml(e) {
    return `
    <div class="card" onclick="navigate('entry-${e.id}')">
      <div class="card-top">
        ${iconSvg(e.cat)}
        <span class="tag ${e.rarity}">${e.rarity === 'rare' ? 'Notable' : 'Commun'}</span>
      </div>
      <h3>${esc(e.name)}</h3>
      <p>${esc(e.summary)}</p>
    </div>`;
}
function renderCategory(cat) {
    const list = ENTRIES.filter(e => e.cat === cat);
    const c = CATS[cat];
    return `
    <div class="crumbs"><span onclick="navigate('home')" style="cursor:pointer">Accueil</span> / ${c.label}</div>
    <div class="cat-header">
      <div class="cat-icon-big">${iconSvg(cat, 22)}</div>
      <div>
        <h1 style="font-size:26px">${c.label}</h1>
        <p>${c.desc}</p>
      </div>
    </div>
    <div class="grid">
      ${list.length ? list.map(cardHtml).join('') : `<div class="empty-state">Aucune entrée pour l'instant.</div>`}
    </div>
  `;
}
function renderEntry(id) {
    const e = findEntry(id);
    if (!e)
        return renderNotFound();
    if (e.cat === 'personnages') return renderPersonnageEntry(e);
    const c = CATS[e.cat];
    return `
    <div class="crumbs"><span onclick="navigate('home')" style="cursor:pointer">Accueil</span> / <span onclick="navigate('cat-${e.cat}')" style="cursor:pointer">${c.label}</span> / ${esc(e.name)}</div>
    <div class="article">
      <div class="article-head">
        <span class="tag ${e.rarity}">${e.rarity === 'rare' ? 'Notable' : 'Commun'} · ${c.label}</span>
        <h1>${esc(e.name)}</h1>
        <p style="color:var(--text-dim); font-size:13.5px; margin-top:4px;">${esc(e.tagline)}</p>
        ${e.quote ? `<p class="entry-quote">${esc(e.quote)}</p>` : ''}
        ${entryLinkedCharactersHtml(e)}
        ${entryMusicHtml(e)}
        ${entryOwnerActionsHtml(e)}
      </div>
      <div class="article-body">
        <div>
          ${renderRichBody(e.body)}
        </div>
        <div class="entry-side">
          ${entryGalleryHtml(e)}
          <div class="infobox">
            ${Object.entries(e.info).map(([k, v]) => `
              <div class="ib-row"><span class="ib-k">${esc(k)}</span><span class="ib-v">${esc(v)}</span></div>
            `).join('')}
          </div>
          ${entrySpecialiteHtml(e)}
        </div>
      </div>
    </div>
  `;
}
function entryGalleryHtml(e) {
    const images = (e.images && e.images.length) ? e.images : (e.image ? [{ url: e.image }] : []);
    if (!images.length) return '';
    return `<div class="entry-gallery">${images.map(img => `
    <figure class="entry-gallery-item">
      <img src="${encodeURI(img.url)}" alt="${esc(e.name)}">
      ${img.caption ? `<figcaption>${esc(img.caption)}</figcaption>` : ''}
    </figure>`).join('')}</div>`;
}
function entrySpecialiteHtml(e) {
    if (!e.specialite || !e.specialite.length) return '';
    return `<div class="entry-specialite"><div class="entry-side-heading">Capacité</div>${renderRichBody(e.specialite)}</div>`;
}
function entryLinkedCharactersHtml(e) {
    if (!e.linkedIds || !e.linkedIds.length) return '';
    const linked = e.linkedIds.map(id => findEntry(id)).filter((p) => !!p);
    if (!linked.length) return '';
    return `<div class="entry-linked-wrap">
    <div class="entry-side-heading">Personnage lié</div>
    <div class="entry-linked">
      ${linked.map(p => `
        <button type="button" class="entry-linked-avatar" onclick="navigate('entry-${p.id}')" title="${esc(p.name)}">
          ${p.image ? `<img src="${encodeURI(p.image)}" alt="${esc(p.name)}" style="${p.imagePos ? `object-position:${p.imagePos}` : ''}">` : `<span>${esc(p.name.charAt(0))}</span>`}
        </button>
      `).join('')}
    </div>
  </div>`;
}
function entryMusicHtml(e) {
    if (!e.music) return '';
    const playerId = 'em-' + e.id;
    const isSoundCloud = /soundcloud\.com/i.test(e.music);
    const source = isSoundCloud
        ? `<iframe class="entry-music-sc-frame" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=${encodeURIComponent(e.music)}&auto_play=false&show_artwork=false"></iframe>`
        : `<audio preload="metadata" loop src="${encodeURI(e.music)}"></audio>`;
    return `<div class="entry-music" id="${playerId}" data-kind="${isSoundCloud ? 'soundcloud' : 'direct'}">
    <button type="button" class="entry-music-toggle" onclick="toggleEntryMusic('${playerId}')" aria-label="Lecture">▶</button>
    <div class="entry-music-track" onclick="seekEntryMusic(event,'${playerId}')">
      <div class="entry-music-progress"></div>
    </div>
    <span class="entry-music-time">0:00</span>
    <div class="entry-music-vol">
      <span class="entry-music-vol-icon">🔊</span>
      <input type="range" class="entry-music-vol-slider" min="0" max="100" value="80" oninput="setEntryMusicVolume(this,'${playerId}')">
    </div>
    ${source}
  </div>`;
}
function formatAudioTime(sec) {
    if (!isFinite(sec) || sec < 0) sec = 0;
    const m = Math.floor(sec / 60);
    const s = Math.floor(sec % 60);
    return m + ':' + (s < 10 ? '0' : '') + s;
}
const scWidgets = {};
function initEntryMusicPlayers() {
    document.querySelectorAll('.entry-music[data-kind="soundcloud"]').forEach(wrap => initEntryMusicSC(wrap.id));
}
function entryMusicScFallback(wrap, iframeSrc) {
    const match = iframeSrc.match(/url=([^&]+)/);
    const trackUrl = match ? decodeURIComponent(match[1]) : iframeSrc;
    wrap.innerHTML = `<a class="entry-music-fallback" href="${esc(trackUrl)}" target="_blank" rel="noopener">🎵 Écouter sur SoundCloud ↗</a>`;
}
function initEntryMusicSC(playerId, attempt = 0) {
    const wrap = document.getElementById(playerId);
    if (!wrap || scWidgets[playerId]) return;
    const iframe = wrap.querySelector('iframe');
    const SC = window.SC;
    if (!iframe || !SC || !SC.Widget) {
        if (attempt >= 25) {
            if (iframe) entryMusicScFallback(wrap, iframe.src);
            return;
        }
        setTimeout(() => initEntryMusicSC(playerId, attempt + 1), 200);
        return;
    }
    const widget = SC.Widget(iframe);
    scWidgets[playerId] = widget;
    let durationSec = 0;
    widget.bind(SC.Widget.Events.READY, () => {
        widget.setVolume(80);
        widget.getDuration((ms) => { durationSec = ms / 1000; });
    });
    widget.bind(SC.Widget.Events.PLAY, () => {
        wrap.dataset.playing = '1';
        const btn = wrap.querySelector('.entry-music-toggle');
        if (btn) btn.textContent = '⏸';
    });
    const markPaused = () => {
        wrap.dataset.playing = '0';
        const btn = wrap.querySelector('.entry-music-toggle');
        if (btn) btn.textContent = '▶';
    };
    widget.bind(SC.Widget.Events.PAUSE, markPaused);
    widget.bind(SC.Widget.Events.FINISH, () => {
        widget.seekTo(0);
        widget.play();
    });
    widget.bind(SC.Widget.Events.PLAY_PROGRESS, (data) => {
        const progress = wrap.querySelector('.entry-music-progress');
        const timeEl = wrap.querySelector('.entry-music-time');
        if (progress) progress.style.width = (data.relativePosition * 100) + '%';
        if (timeEl) timeEl.textContent = formatAudioTime(data.currentPosition / 1000) + (durationSec ? ' / ' + formatAudioTime(durationSec) : '');
    });
}
function updateEntryMusicProgress(playerId) {
    const wrap = document.getElementById(playerId);
    if (!wrap) return;
    const audio = wrap.querySelector('audio');
    const progress = wrap.querySelector('.entry-music-progress');
    const timeEl = wrap.querySelector('.entry-music-time');
    if (!audio || !progress || !timeEl) return;
    const pct = audio.duration ? (audio.currentTime / audio.duration) * 100 : 0;
    progress.style.width = pct + '%';
    timeEl.textContent = formatAudioTime(audio.currentTime) + (audio.duration ? ' / ' + formatAudioTime(audio.duration) : '');
}
function pauseAllEntryMusicExcept(exceptPlayerId) {
    Object.keys(scWidgets).forEach(id => {
        if (id === exceptPlayerId) return;
        if (!document.getElementById(id)) { delete scWidgets[id]; return; }
        try { scWidgets[id].pause(); } catch (err) { delete scWidgets[id]; }
    });
    document.querySelectorAll('.entry-music audio').forEach(a => {
        if (a.closest('.entry-music')?.id !== exceptPlayerId) a.pause();
    });
}
function toggleEntryMusic(playerId) {
    const wrap = document.getElementById(playerId);
    if (!wrap) return;
    const btn = wrap.querySelector('.entry-music-toggle');
    if (!btn) return;
    if (wrap.dataset.kind === 'soundcloud') {
        const widget = scWidgets[playerId];
        if (!widget) return;
        if (wrap.dataset.playing === '1') {
            widget.pause();
        } else {
            pauseAllEntryMusicExcept(playerId);
            widget.play();
        }
        return;
    }
    const audio = wrap.querySelector('audio');
    if (!audio) return;
    if (!audio.dataset.wired) {
        audio.dataset.wired = '1';
        audio.addEventListener('timeupdate', () => updateEntryMusicProgress(playerId));
        audio.addEventListener('loadedmetadata', () => updateEntryMusicProgress(playerId));
        audio.addEventListener('ended', () => { btn.textContent = '▶'; });
    }
    if (audio.paused) {
        pauseAllEntryMusicExcept(playerId);
        audio.play();
        btn.textContent = '⏸';
    } else {
        audio.pause();
        btn.textContent = '▶';
    }
}
function seekEntryMusic(evt, playerId) {
    const wrap = document.getElementById(playerId);
    if (!wrap) return;
    const track = evt.currentTarget;
    const rect = track.getBoundingClientRect();
    const ratio = Math.min(1, Math.max(0, (evt.clientX - rect.left) / rect.width));
    if (wrap.dataset.kind === 'soundcloud') {
        const widget = scWidgets[playerId];
        if (!widget) return;
        widget.getDuration((ms) => widget.seekTo(ratio * ms));
        return;
    }
    const audio = wrap.querySelector('audio');
    if (!audio || !audio.duration) return;
    audio.currentTime = ratio * audio.duration;
    updateEntryMusicProgress(playerId);
}
function setEntryMusicVolume(input, playerId) {
    const wrap = document.getElementById(playerId);
    if (!wrap) return;
    const pct = Number(input.value);
    if (wrap.dataset.kind === 'soundcloud') {
        const widget = scWidgets[playerId];
        if (widget) widget.setVolume(pct);
        return;
    }
    const audio = wrap.querySelector('audio');
    if (audio) audio.volume = pct / 100;
}
function entryOwnerActionsHtml(e) {
    if (e.id.startsWith('custom-')) {
        const rawId = e.id.slice('custom-'.length);
        const custom = customEntriesCache.find(c => c.id === rawId);
        if (!custom || custom.author !== getCurrentUser()) return '';
        return `<div class="entry-owner-actions">
      <span class="btn btn-ghost" onclick="editCustomEntry('${rawId}')">Modifier</span>
      <span class="btn btn-ghost" onclick="if(confirm('Supprimer définitivement cette fiche ?')){ deleteCustomEntry('${rawId}'); navigate('cat-${e.cat}'); }">Supprimer</span>
    </div>`;
    }
    if (!isLoggedIn()) return '';
    return `<div class="entry-owner-actions">
    <span class="btn btn-ghost" onclick="editCustomEntry('${e.id}')">Modifier</span>
    <span class="btn btn-ghost" onclick="if(confirm('Supprimer définitivement cette fiche ?')){ deleteCustomEntry('${e.id}'); navigate('cat-${e.cat}'); }">Supprimer</span>
  </div>`;
}
function opParticlesHtml() {
    let out = '';
    for (let i = 0; i < 12; i++) {
        const left = (Math.random() * 100).toFixed(1);
        const delay = (Math.random() * 6).toFixed(2);
        const dur = (5 + Math.random() * 4).toFixed(2);
        out += `<span class="op-particle" style="left:${left}%; animation-delay:${delay}s; animation-duration:${dur}s;"></span>`;
    }
    return out;
}
function renderPersonnageEntry(e) {
    const c = CATS[e.cat];
    const f = e.faction ? FACTIONS.find(x => x.id === e.faction) : undefined;
    const fclr = f ? f.color : '196,201,209';
    const bgWord = e.name.split(/\s+/)[0].toUpperCase();
    const list = ENTRIES.filter(x => x.cat === 'personnages');
    const infoEntries = Object.entries(e.info);
    const capaciteFact = infoEntries.find(([k]) => k === 'Capacité' || k === 'Spécificité') || infoEntries[0];
    const factionName = f ? f.name : (e.factionLabel || '—');
    const railAvatars = list.map(p => {
        const active = p.id === e.id;
        return `<button type="button" class="op-rail-avatar${active ? ' active' : ''}" onclick="navigate('entry-${p.id}')" title="${esc(p.name)}">
      ${p.image ? `<img src="${encodeURI(p.image)}" alt="${esc(p.name)}" style="${p.imagePos ? `object-position:${p.imagePos}` : ''}">` : `<span>${esc(p.name.charAt(0))}</span>`}
    </button>`;
    }).join('');
    return `
    <div class="crumbs"><span onclick="navigate('home')" style="cursor:pointer">Accueil</span> / <span onclick="navigate('cat-${e.cat}')" style="cursor:pointer">${c.label}</span> / ${esc(e.name)}</div>
    <div class="op-page">
      <div class="op-rail">
        <button type="button" class="op-rail-nav" onclick="navigatePersonnageRail(-1,'${e.id}')" aria-label="Précédent">▲</button>
        <div class="op-rail-list" id="opRailList">${railAvatars}</div>
        <button type="button" class="op-rail-nav" onclick="navigatePersonnageRail(1,'${e.id}')" aria-label="Suivant">▼</button>
        <button type="button" class="op-rail-all" onclick="navigate('cat-personnages')" title="Tous les personnages">☰</button>
      </div>
      <div class="op-main">
        <div class="op-hero" style="--fclr:${fclr}">
          <div class="op-hero-bgtext">${esc(bgWord)}</div>
          <div class="op-hero-blob"></div>
          <div class="op-hero-shard op-hero-shard-1"></div>
          <div class="op-hero-shard op-hero-shard-2"></div>
          <div class="op-hero-particles">${opParticlesHtml()}</div>
          <div class="op-hero-scan"></div>
          <div class="op-hero-corners">
            <span class="op-corner op-corner-tl"></span>
            <span class="op-corner op-corner-tr"></span>
            <span class="op-corner op-corner-bl"></span>
            <span class="op-corner op-corner-br"></span>
          </div>
          ${e.image ? `<img class="op-hero-img" src="${encodeURI(e.image)}" alt="${esc(e.name)}" style="${e.imagePos ? `object-position:${e.imagePos}` : ''}">` : ''}
        </div>
        <div class="op-name-row">
          <span class="tag ${e.rarity}">${e.rarity === 'rare' ? 'Notable' : 'Commun'} · ${c.label}</span>
          <h1 class="op-name">[ ${esc(e.name)} ]</h1>
          <p class="op-tagline">${esc(e.tagline)}</p>
        </div>
        <div class="op-facts-bar">
          <div class="op-fact"><span class="op-fact-k">Faction</span><span class="op-fact-v">${esc(factionName)}</span></div>
          ${capaciteFact ? `<div class="op-fact"><span class="op-fact-k">${esc(capaciteFact[0])}</span><span class="op-fact-v">${esc(capaciteFact[1])}</span></div>` : ''}
        </div>
        ${e.quote ? `<p class="entry-quote op-quote">${esc(e.quote)}</p>` : ''}
        ${entryLinkedCharactersHtml(e)}
        ${entryMusicHtml(e)}
        <span class="btn btn-ghost op-history-btn" onclick="openStoryBook('${e.id}')">📖 Histoire</span>
        ${entryOwnerActionsHtml(e)}
        <div class="article-body op-article-body">
          <div>${renderRichBody(e.body)}</div>
          <div class="entry-side">
            <div class="infobox">
              ${Object.entries(e.info).map(([k, v]) => `
                <div class="ib-row"><span class="ib-k">${esc(k)}</span><span class="ib-v">${esc(v)}</span></div>
              `).join('')}
            </div>
            ${entrySpecialiteHtml(e)}
          </div>
        </div>
      </div>
    </div>
  `;
}
function navigatePersonnageRail(dir, currentId) {
    const list = ENTRIES.filter(e => e.cat === 'personnages');
    const idx = list.findIndex(e => e.id === currentId);
    if (idx < 0) return;
    const next = list[(idx + dir + list.length) % list.length];
    navigate('entry-' + next.id);
}
function initPersonnageEntryRail() {
    const active = document.querySelector('.op-rail-avatar.active');
    if (active) active.scrollIntoView({ block: 'center' });
    const page = document.querySelector('.op-page');
    if (page) {
        page.classList.remove('in');
        requestAnimationFrame(() => { page.classList.add('in'); });
    }
    const hero = document.querySelector('.op-hero');
    if (hero) {
        const img = hero.querySelector('.op-hero-img');
        const blob = hero.querySelector('.op-hero-blob');
        hero.onmousemove = (ev) => {
            const rect = hero.getBoundingClientRect();
            const dx = (ev.clientX - rect.left) / rect.width - 0.5;
            const dy = (ev.clientY - rect.top) / rect.height - 0.5;
            if (img) img.style.transform = `translate(${dx * -14}px, ${dy * -8}px) scale(1.03)`;
            if (blob) blob.style.transform = `translate(${dx * 20}px, ${dy * 14}px)`;
        };
        hero.onmouseleave = () => {
            if (img) img.style.transform = '';
            if (blob) blob.style.transform = '';
        };
    }
}
function renderNotFound() {
    return `<div class="empty-state">
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
    <div>Page introuvable.</div>
  </div>`;
}
function navigate(route) {
    window.location.hash = route;
}
/* ---------------- CHRONOLOGIE — frise historique du monde ---------------- */
const CHRONO_TAGS = {
    mystere: { label: 'Mystère', color: '#d94ecb', desc: "Un événement ou un phénomène dont l'origine et la nature échappent encore à toute explication." },
    lore: { label: 'Civilisation', color: '#8a95a6', desc: "Un jalon fondateur des sociétés humaines : essor technologique, reconstruction ou évolution des mœurs." },
    politique: { label: 'Politique', color: '#4ecdd9', desc: "Un fait lié aux structures de pouvoir, aux dirigeants ou aux décisions qui façonnent les nations." },
    combat: { label: 'Combat', color: '#e2762c', filled: true, desc: "Un affrontement armé, une bataille ou une guerre ayant marqué cette période." },
    oxiri: { label: 'Oxiri', color: '#b34ad9', desc: "Un événement directement lié à la présence, aux actes ou à l'influence d'Oxiri." },
    halcyon: { label: 'Halcyon', color: '#e0524a', desc: "Un fait concernant l'organisation Halcyon, ses recherches ou ses décisions." },
    social: { label: 'Social', color: '#3ec9c0', filled: true, desc: "Un changement qui touche directement la vie quotidienne et les mentalités des populations." },
    corruption: { label: 'Corruption', color: '#9aa0a6', desc: "Des faits dissimulés, des manipulations ou des vérités que quelqu'un a cherché à enterrer." },
    avenement: { label: 'Avènement', color: '#5b8cff', desc: "L'apparition d'une force, d'une entité ou d'un phénomène entièrement nouveau dans le monde." },
};
const CHRONO_EVENTS = [
    { id: 'silence', numeral: 'I', date: '– ???', title: "L'Âge du Silence", tags: ['mystere', 'oxiri'], body: [
            "Avant les royaumes, avant les cités, avant même que l'humanité ne découvre l'Essence, le monde existait déjà.",
            "Les anciennes traditions parlent d'une époque où les frontières entre le monde physique et le monde spirituel n'existaient pas réellement : les forêts étaient considérées comme vivantes, les montagnes vénérées comme des êtres conscients, les océans semblaient répondre aux prières.",
            "Au-dessus de tout cela existait une présence dont le nom apparaît dans plusieurs civilisations : OXIRI. Les premières civilisations ne le décrivaient pas comme un dieu, mais plutôt comme la Volonté du Monde, chargée de maintenir l'équilibre entre la vie et la mort, la création et la destruction, l'Essence et la matière, le passé et le futur, l'humanité et le reste du monde.",
            "Cette période reste extrêmement mystérieuse. Aucune preuve ne permet aujourd'hui de déterminer si Oxiri était réellement une divinité, une créature ou une force naturelle.",
        ] },
    { id: 'premiers-hommes', numeral: 'II', date: '– 12 000', title: "La Naissance de l'Humanité", tags: ['lore'], body: [
            "Les premières civilisations humaines apparaissent. Contrairement aux croyances modernes, les humains ne sont pas les premières formes de vie intelligentes.",
            "Ils découvrent rapidement que le monde est traversé par une énergie mystérieuse, qu'ils nomment différemment selon les régions : mana, éther, flux, souffle. Aujourd'hui, cette énergie est simplement appelée Essence.",
            "Les humains apprennent progressivement à l'utiliser. L'Essence devient partie intégrante de leur civilisation — pas comme une magie, mais comme une énergie qu'on apprend à canaliser et à exploiter.",
        ] },
    { id: 'royaumes', numeral: 'III', date: '– 9 500', title: "L'Âge des Royaumes", tags: ['lore', 'politique'], body: [
            "Les tribus humaines deviennent des royaumes. La maîtrise de l'Essence permet de construire des villes gigantesques : des cristaux énergétiques éclairent les rues, des trains alimentés à l'Essence relient les continents, des armes combinent Essence, mécanique et ingénierie.",
            "Les grandes villes possèdent des gratte-ciels illuminés par l'Essence, des réseaux de transport à Essence, des académies scientifiques, des guildes, des corporations, des laboratoires, des temples.",
            "Mais une chose reste inexpliquée : certains artefacts semblent posséder une énergie différente de celle de l'Essence humaine — une énergie beaucoup plus ancienne.",
        ] },
    { id: 'contact', numeral: 'IV', date: '– 7 800', title: "La Première Rencontre", tags: ['mystere', 'oxiri'], body: [
            "Des explorateurs découvrent des ruines impossibles à dater. Au centre se trouve une gigantesque structure noire.",
            "Lorsqu'un groupe de chercheurs entre en contact avec elle, tous les cristaux d'Essence de la région se mettent à réagir. Une voix est entendue, une seule phrase :",
            { quote: "Vous êtes allés trop loin." },
            "Le phénomène est attribué à une ancienne divinité. Le nom Oxiri apparaît pour la première fois dans les archives humaines.",
        ] },
    { id: 'artefacts', numeral: 'V', date: '– 7 500 à – 4 500', title: "Les Premières Armes Oxiriennes", tags: ['oxiri', 'mystere'], body: [
            "Les humains commencent à rechercher l'origine de l'énergie d'Oxiri. Ils découvrent qu'il est possible de mélanger Essence humaine et Essence d'Oxiri.",
            "Cette découverte donne naissance aux premiers Artefacts Oxiriens. Ce ne sont pas de simples armes : ils semblent réagir à l'âme de leur utilisateur, deviennent plus puissants lorsqu'ils sont utilisés, semblent parfois communiquer — et certains refusent même d'être maniés par certaines personnes.",
            "Durant cette période apparaissent progressivement les artefacts légendaires : le Jugement de l'Équinoxe, la Lamentation des Morts, le Serment de Helix, Souvenir du Passé, les Jumeaux d'Éden, Division Astrale. Leur véritable origine reste inconnue.",
        ] },
    { id: 'chute', numeral: 'VI', date: '– 1 000', title: "La Chute", tags: ['oxiri', 'combat'], body: [
            "C'est le début de l'histoire connue. Le ciel change. Les cristaux d'Essence deviennent noirs. Les océans commencent à se vider de leur énergie.",
            "Puis les premières créatures apparaissent. Les humains les appellent Entropy — des créatures qui ne semblent répondre à aucune logique biologique. Certaines ressemblent à des animaux, d'autres à des humains, d'autres encore semblent être des concepts ayant pris forme.",
            "Elles apparaissent partout. Et derrière elles... Oxiri.",
        ] },
    { id: 'mille-jours', numeral: 'VII', date: '– 1 000 à – 987', title: "La Guerre des Mille Jours", tags: ['combat', 'oxiri'], body: [
            "Les royaumes humains s'unissent, mais leurs armes ne suffisent pas. Les soldats touchés par l'Essence d'Oxiri commencent à changer : certains deviennent des créatures, d'autres perdent leurs émotions, d'autres encore deviennent des sortes de soldats sans volonté.",
            "L'humanité comprend alors quelque chose d'effrayant : Oxiri ne cherche pas à conquérir le monde. Il cherche à le remettre à zéro.",
            "Les humains refusent. Une phrase devient le symbole de leur résistance :",
            { quote: "Notre futur nous appartient." },
        ] },
    { id: 'miracle', numeral: 'VIII', date: '– 987', title: "Le Miracle de l'Aube", tags: ['mystere', 'oxiri'], body: [
            "Alors que l'humanité est au bord de l'extinction, Oxiri disparaît. Sans bataille finale, sans victoire, sans explication.",
            "Les Entropy cessent soudainement leur progression. Les survivants restent seuls au milieu d'un monde détruit. Les historiens parleront plus tard du Miracle de l'Aube.",
            "Mais aucune explication n'est jamais trouvée.",
        ] },
    { id: 'cicatrices', numeral: 'IX', date: '– 987 à – 400', title: "L'Âge des Cicatrices", tags: ['lore', 'social'], body: [
            "L'humanité tente de reconstruire. Des continents entiers sont inhabitables ; certaines régions restent contaminées par l'Essence d'Oxiri, où apparaissent des créatures mutantes. Les anciennes villes deviennent des ruines.",
            "Mais progressivement, l'humanité recommence à prospérer. Et surtout, elle commence à avoir peur — peur qu'Oxiri revienne.",
        ] },
    { id: 'progres', numeral: 'X', date: '– 400 à – 250', title: "L'Ère du Progrès", tags: ['lore', 'politique'], body: [
            "Les royaumes commencent à développer une technologie beaucoup plus avancée. L'exploitation de l'Essence devient industrielle : les grandes villes ressemblent désormais à des métropoles futuristes, des voitures à Essence circulent dans les rues, des armes à feu utilisent des cristaux d'Essence.",
            "Les humains commencent à penser qu'ils ont enfin dépassé leur passé. Mais certains scientifiques pensent autrement : ils cherchent un moyen de rendre l'humanité indépendante de la volonté des dieux.",
        ] },
    { id: 'naissance-halcyon', numeral: 'XI', date: '– 250', title: "La Naissance de Halcyon", tags: ['halcyon', 'politique'], body: [
            "Plusieurs scientifiques, ingénieurs, militaires et philosophes fondent une organisation : Halcyon. Sa philosophie est simple :",
            { quote: "Le futur ne doit plus jamais dépendre d'une puissance extérieure." },
            "Halcyon commence par créer des systèmes de défense, des armes anti-Entropy, des laboratoires, des technologies médicales, des réseaux énergétiques, et des armes capables de reproduire l'énergie Oxirienne.",
            "Halcyon devient rapidement indispensable. Puis, progressivement, elle devient plus puissante que les gouvernements.",
        ] },
    { id: 'deuxieme-eruption', numeral: 'XII', date: '– 250 → – 0', title: "La Deuxième Éruption", tags: ['combat', 'oxiri', 'halcyon'], body: [
            "Oxiri revient. Mais cette fois, l'humanité est prête. Les armes Oxiriennes sont retrouvées, les armées utilisent la technologie développée par Halcyon.",
            "Pendant plusieurs décennies, les humains réussissent à repousser les Entropy. Pour la première fois, l'humanité pense pouvoir gagner.",
            "Puis apparaît quelque chose que personne n'avait prévu.",
        ] },
    { id: 'premiere-entropy', numeral: 'XIII', date: '– 1', title: "La Première Entropy Supérieure", tags: ['mystere', 'combat', 'halcyon'], body: [
            "Une humaine liée à Halcyon absorbe une quantité inconnue d'Essence d'Oxiri. Elle ne devient pas une Entropy classique : elle devient quelque chose de nouveau, une créature capable de conserver son intelligence, ses souvenirs, sa volonté, ses émotions.",
            "Elle devient la première Entropy Supérieure. Son pouvoir dépasse tout ce que l'humanité connaît : elle détruit plusieurs armées à elle seule.",
            "Les artefacts Oxiriens sont utilisés simultanément contre elle. Des milliers de soldats meurent, des villes entières sont sacrifiées. Finalement... elle tombe.",
        ] },
    { id: 'voile', numeral: 'XIV', date: '– 0', title: "Le Voile", tags: ['mystere', 'oxiri'], body: [
            "Au moment de sa mort, une lumière gigantesque recouvre le monde. Pendant plusieurs jours, plus aucun dispositif lié à l'Essence ne fonctionne.",
            "Les Entropy disparaissent. Oxiri disparaît une seconde fois. La guerre est officiellement déclarée terminée.",
            "Mais les survivants découvrent quelque chose : le corps de l'Entropy a disparu.",
        ] },
    { id: 'hybridation', numeral: 'XV', date: '+ 1 à + 5', title: "Le Projet Hybridation", tags: ['halcyon', 'corruption'], body: [
            "Halcyon refuse d'attendre une troisième Éruption. Ses scientifiques commencent un projet secret : le Projet Hybridation, dont l'objectif est de créer un être capable d'utiliser l'énergie d'Oxiri sans perdre son humanité.",
            "Les premiers sujets sont des échecs. Ils deviennent des monstres. Ils sont éliminés. Les expériences continuent. Encore. Et encore.",
        ] },
    { id: 'a-00', numeral: 'XVI', date: '+ 5', title: "A-00, le premier hybride", tags: ['halcyon', 'avenement'], body: [
            "Le premier hybride viable naît : A-00. Pour la première fois, humanité et Essence d'Oxiri coexistent dans un même corps.",
            "A-00 conserve sa conscience, ses souvenirs, ses émotions, sa capacité à communiquer. Halcyon considère cela comme la plus grande avancée scientifique de l'histoire.",
            "Mais quelque chose est étrange : A-00 ne possède aucune haine envers les humains. Il semble même... les aimer.",
        ] },
    { id: 'age-hybrides', numeral: 'XVII', date: '+ 5 à + 15', title: "L'Âge des Hybrides", tags: ['social', 'halcyon'], body: [
            "Le projet est rendu public. De nouveaux hybrides sont créés : soldats, chercheurs, explorateurs, médecins, gardiens, citoyens.",
            "Mais la société se divise. Certains humains pensent : « Les hybrides sont notre avenir. » D'autres : « Ce sont des monstres fabriqués en laboratoire. »",
            "Une troisième catégorie commence à émerger : « Peut-être sommes-nous tous des monstres fabriqués par quelque chose. »",
        ] },
    { id: 'eidolon', numeral: 'XVIII', date: '+ 15', title: "La Naissance d'une Nouvelle Religion", tags: ['mystere', 'corruption'], body: [
            "Une organisation mystérieuse commence à apparaître. Ses membres rejettent Halcyon et affirment que l'humanité n'a jamais compris Oxiri.",
            "Ils récupèrent d'anciens textes, étudient les Entropy, recherchent les anciennes civilisations. Leur conclusion est radicale : Oxiri n'est pas venu détruire l'humanité — il serait venu empêcher quelque chose de pire.",
            "Cette organisation devient connue sous le nom d'Eidolon.",
        ] },
    { id: 'ere-moderne', numeral: 'XIX', date: '+ 15', title: "L'Ère Moderne", tags: ['social', 'lore'], body: [
            "Le monde ressemble désormais à une civilisation moderne, mélangeant technologie de pointe et architecture futuriste. Les humains utilisent quotidiennement l'Essence, et les hybrides vivent parmi eux.",
            "Halcyon contrôle une grande partie des infrastructures mondiales. Mais des zones restent contaminées par l'ancienne Éruption — et les Entropy recommencent à apparaître. Faiblement. Puis de plus en plus.",
        ] },
    { id: 'retour-oxiri', numeral: 'XX', date: '+ 18', title: "Le Retour d'Oxiri", tags: ['mystere', 'oxiri', 'avenement'], body: [
            "Des anomalies énergétiques sont détectées partout. Les anciens artefacts se réveillent. Des personnes commencent à faire les mêmes rêves.",
            "Un symbole apparaît dans plusieurs régions du monde. Une phrase est retrouvée sur plusieurs ruines :",
            { quote: "Le cycle recommence." },
            "Halcyon déclare l'état d'urgence. Eidolon disparaît dans la clandestinité. Les hybrides sont mobilisés.",
        ] },
    { id: 'aube-fin', numeral: 'XXI', date: '+ 20 — Début du jeu', title: "L'Aube de la Fin", tags: ['avenement', 'mystere'], body: [
            "Le joueur commence son histoire dans une grande cité contrôlée par Halcyon : une ville moderne, des néons, des trains à Essence, des gratte-ciels, des académies, des temples, des laboratoires, des humains, des hybrides. Tout semble fonctionner normalement.",
            "Puis une Entropy apparaît au centre de la ville. Mais quelque chose est différent : elle ne massacre personne. Elle regarde simplement le ciel, et elle dit :",
            { quote: "Pourquoi continuez-vous à vivre dans un monde qui vous demande de mourir ?" },
            "Puis elle disparaît.",
        ] },
];
function toRoman(num) {
    const map = [[1000, 'M'], [900, 'CM'], [500, 'D'], [400, 'CD'], [100, 'C'], [90, 'XC'], [50, 'L'], [40, 'XL'], [10, 'X'], [9, 'IX'], [5, 'V'], [4, 'IV'], [1, 'I']];
    let res = '';
    for (const [val, sym] of map) {
        while (num >= val) { res += sym; num -= val; }
    }
    return res;
}
function parseChronoDateValue(date) {
    const normalized = (date || '').replace(/[–−]/g, '-');
    const match = normalized.match(/([+-])?\s*(\d[\d\s]*\d|\d)/);
    if (!match) return -Infinity;
    const sign = match[1] === '-' ? -1 : 1;
    const num = parseInt(match[2].replace(/\s+/g, ''), 10);
    return isNaN(num) ? -Infinity : sign * num;
}
function getAllChronoEvents() {
    const deletedIds = new Set(customChronoCache.filter(c => c.deleted).map(c => c.id));
    const overrides = customChronoCache.filter(c => !c.deleted);
    const overrideIds = new Set(overrides.map(c => c.id));
    const baseEvents = CHRONO_EVENTS
        .filter(ev => !overrideIds.has(ev.id) && !deletedIds.has(ev.id))
        .map(ev => ({ ...ev }));
    const custom = overrides.map(c => ({
        id: c.id, numeral: '', date: c.date, title: c.title, tags: c.tags, body: c.body,
    }));
    const merged = [...baseEvents, ...custom];
    merged.sort((a, b) => parseChronoDateValue(a.date) - parseChronoDateValue(b.date));
    merged.forEach((ev, i) => { ev.numeral = toRoman(i + 1); });
    return merged;
}
function chronoTagHtml(key) {
    const t = CHRONO_TAGS[key];
    if (!t)
        return '';
    return `<button type="button" class="chrono-tag${t.filled ? ' chrono-tag-filled' : ''}" style="--tagclr:${t.color}" onclick="showChronoTagInfo('${key}', event)">${esc(t.label)}<span class="chrono-tag-i">i</span></button>`;
}
function chronoBodyHtml(body) {
    const out = [];
    let list = [];
    const flushList = () => {
        if (list.length) {
            out.push(`<ul class="dossier-list-block">${list.map(li => `<li>${applyInlineFormatting(esc(li))}</li>`).join('')}</ul>`);
            list = [];
        }
    };
    for (const p of body) {
        if (typeof p !== 'string') {
            flushList();
            out.push(`<p class="chrono-quote">« ${applyInlineFormatting(esc(p.quote))} »</p>`);
            continue;
        }
        const locked = tryRenderLockedBlock(p);
        if (locked !== null) { flushList(); out.push(locked); continue; }
        const line = p.trim();
        if (line.startsWith('#')) {
            flushList();
            out.push(`<h3>${esc(line.replace(/^#+\s*/, ''))}</h3>`);
        } else if (line.startsWith('- ') || line.startsWith('* ')) {
            list.push(line.slice(2).trim());
        } else {
            flushList();
            out.push(`<p>${applyInlineFormatting(esc(line))}</p>`);
        }
    }
    flushList();
    return out.join('');
}
function renderChronologie() {
    const legend = Object.keys(CHRONO_TAGS).map(chronoTagHtml).join('');
    const loggedIn = isLoggedIn();
    const rows = getAllChronoEvents().map((ev, i) => {
        const side = i % 2 === 0 ? 'chrono-left' : 'chrono-right';
        const actions = loggedIn ? `
        <div class="chrono-actions">
          <span class="btn btn-ghost" onclick="editChronoEvent('${ev.id}')">Modifier</span>
          <span class="btn btn-ghost" onclick="if(confirm('Supprimer définitivement cet événement de la chronologie ?')){ deleteChronoEvent('${ev.id}'); }">Supprimer</span>
        </div>` : '';
        return `
    <div class="chrono-row ${side}">
      <div class="chrono-dot"></div>
      <div class="chrono-card">
        <div class="chrono-card-head">
          <span class="chrono-numeral">${esc(ev.numeral)}</span>
          <span class="chrono-date">${esc(ev.date)}</span>
        </div>
        <div class="chrono-tags">${ev.tags.map(chronoTagHtml).join('')}</div>
        <h3 class="chrono-card-title">${esc(ev.title)}</h3>
        <div class="chrono-body" id="chronoBody-${ev.id}">${chronoBodyHtml(ev.body)}</div>
        <button type="button" class="chrono-toggle" onclick="toggleChronoCard(this)">Ouvrir le dossier ›</button>
        ${actions}
      </div>
    </div>`;
    }).join('');
    return `
    <div class="crumbs"><span onclick="navigate('home')" style="cursor:pointer">Accueil</span> / Chronologie</div>
    <div class="chrono-page">
      <div class="chrono-epigraph">
        <p>« L'histoire n'est jamais écrite par ceux qui l'ont vécue. Elle est écrite par ceux qui ont survécu. »</p>
        <span>— Fragment retrouvé dans les ruines de l'ancienne capitale</span>
      </div>
      <h1 class="chrono-title">OXIRI — Frise chronologique du monde</h1>
      ${loggedIn ? `<div style="margin-bottom:16px;"><span class="btn btn-primary" onclick="navigate('ecriture'); setTimeout(()=>document.getElementById('chronoWriteForm')?.scrollIntoView({behavior:'smooth', block:'start'}), 60);">+ Ajouter un événement</span></div>` : ''}
      <div class="chrono-legend">${legend}</div>
      <div class="chrono-timeline">
        <div class="chrono-line"></div>
        ${rows}
      </div>
    </div>
    <div class="chrono-tag-popover" id="chronoTagPopover"></div>
  `;
}
function toggleChronoCard(btn) {
    const card = btn.closest('.chrono-card');
    if (!card)
        return;
    const body = card.querySelector('.chrono-body');
    if (!body)
        return;
    const expanded = card.classList.toggle('expanded');
    if (expanded) {
        body.style.maxHeight = body.scrollHeight + 'px';
        btn.textContent = 'Refermer ‹';
    }
    else {
        body.style.maxHeight = '0px';
        btn.textContent = 'Ouvrir le dossier ›';
    }
}
function showChronoTagInfo(key, ev) {
    ev.stopPropagation();
    const t = CHRONO_TAGS[key];
    const pop = document.getElementById('chronoTagPopover');
    if (!t || !pop)
        return;
    const btn = ev.currentTarget;
    const wasOpenForThis = pop.classList.contains('open') && pop.dataset.key === key;
    if (wasOpenForThis) {
        pop.classList.remove('open');
        return;
    }
    pop.style.setProperty('--tagclr', t.color);
    pop.dataset.key = key;
    pop.innerHTML = `<div class="chrono-pop-label">${esc(t.label)}</div><div class="chrono-pop-desc">${esc(t.desc)}</div>`;
    const rect = btn.getBoundingClientRect();
    const popWidth = 260;
    let left = rect.left + rect.width / 2 - popWidth / 2;
    left = Math.max(12, Math.min(left, window.innerWidth - popWidth - 12));
    pop.style.left = left + 'px';
    pop.style.top = (rect.bottom + window.scrollY + 8) + 'px';
    pop.classList.add('open');
}
document.addEventListener('click', (ev) => {
    const pop = document.getElementById('chronoTagPopover');
    if (!pop || !pop.classList.contains('open'))
        return;
    if (!pop.contains(ev.target)) {
        pop.classList.remove('open');
    }
});
function initChronoAnimations() {
    const line = document.querySelector('.chrono-line');
    const rows = document.querySelectorAll('.chrono-row');
    const stagger = 70;
    if (line) {
        line.style.transition = 'none';
        line.style.transform = 'translateX(-50%) scaleY(0)';
        void line.offsetHeight;
        line.style.transition = `transform ${Math.max(0.7, (rows.length * stagger) / 1000)}s cubic-bezier(.2,.8,.2,1)`;
    }
    rows.forEach((row, i) => { row.style.transitionDelay = (i * stagger) + 'ms'; });
    requestAnimationFrame(() => {
        requestAnimationFrame(() => {
            if (line) line.style.transform = 'translateX(-50%) scaleY(1)';
            rows.forEach(row => row.classList.add('in-view'));
        });
    });
}
function playChronoBoot() {
    const content = document.getElementById('content');
    if (!content) return;
    const lines = [
        { text: 'ACCÈS AUX ARCHIVES TEMPORELLES…' },
        { text: 'SYNCHRONISATION DES ÉVÉNEMENTS…' },
        { text: 'RECONSTITUTION DE LA FRISE CHRONOLOGIQUE…' },
        { text: 'CHARGEMENT TERMINÉ' },
    ];
    content.innerHTML = `
    <div class="chrono-boot" id="chronoBootPanel">
      <div class="chrono-boot-title">◆ ARCHIVES DU MONDE — OXIRI ◆</div>
      <div class="chrono-boot-log" id="chronoBootLog"></div>
      <div class="chrono-boot-bar"><div class="chrono-boot-bar-fill" id="chronoBootFill"></div></div>
      <div class="chrono-boot-pct" id="chronoBootPct">0%</div>
    </div>
  `;
    const logEl = document.getElementById('chronoBootLog');
    const fillEl = document.getElementById('chronoBootFill');
    const pctEl = document.getElementById('chronoBootPct');
    let i = 0;
    function step() {
        if (document.getElementById('chronoBootLog') !== logEl) return;
        if (i < lines.length) {
            const row = document.createElement('div');
            row.className = 'chrono-boot-line';
            row.textContent = '> ' + lines[i].text;
            logEl.appendChild(row);
            i++;
            const pct = Math.round((i / lines.length) * 100);
            fillEl.style.width = pct + '%';
            pctEl.textContent = pct + '%';
            setTimeout(step, 240 + Math.random() * 150);
        } else {
            setTimeout(() => {
                if (document.getElementById('chronoBootLog') !== logEl) return;
                const c = document.getElementById('content');
                if (c) { c.innerHTML = renderChronologie(); c.scrollTop = 0; }
                initChronoAnimations();
            }, 380);
        }
    }
    step();
}
/* ---------------- MISSION EN COURS — tableau de bord tactique ---------------- */
const MISSION_POINT_META = {
    'hauteterres': { label: 'Hauteterres', x: 640, y: 230, glow: '196,201,209', status: 'ANOMALIE', category: 'actif', desc: "Pic d'activité énergétique détecté près des ruines de la citadelle." },
    'marais-bas': { label: 'Marais Bas', x: 930, y: 520, glow: '138,149,166', status: 'SIGNAL FAIBLE', category: 'actif', desc: "Traces d'Essence résiduelle relevées dans les zones inondées." },
    'foret-des-cendres': { label: 'Forêt des Cendres', x: 520, y: 520, glow: '196,110,64', status: 'SURVEILLANCE', category: 'actif', desc: "Une clairière continue de brûler sans s'éteindre. Cause inconnue." },
    'cote-ecarlate': { label: 'Côte Écarlate', x: 1020, y: 250, glow: '178,90,82', status: 'INTERVENTION', category: 'actif', desc: "Unité de la Direction Aurore déployée pour cartographier le littoral." },
};
function getMissionPoints() {
    const pts = Object.entries(MISSION_POINT_META).map(([id, m]) => ({ id, ...m }));
    pts.push({ id: 'secteur-inconnu', label: 'Secteur Inconnu', x: 800, y: 420, status: 'CLASSIFIÉ', category: 'classifie', desc: "Coordonnées verrouillées. Accès réservé aux hauts gradés Halcyon." });
    return pts;
}
function mcPct(v, total) { return (v / total * 100).toFixed(2); }
const MC_LOG_POOL = [
    "SIGNAL DÉTECTÉ — SECTEUR 4",
    "SYNCHRONISATION DES CAPTEURS…",
    "FLUCTUATION D'ESSENCE ENREGISTRÉE",
    "UNITÉ DE TERRAIN EN POSITION",
    "ANALYSE SPECTRALE EN COURS…",
    "AUCUNE ANOMALIE — SECTEUR 2",
    "RECALIBRAGE AUTOMATIQUE TERMINÉ",
    "TRANSMISSION HALCYON REÇUE",
    "NIVEAU DE RISQUE STABLE",
    "PERTE DE SIGNAL TEMPORAIRE — SECTEUR 7",
];
let mcClockTimer = null;
let mcTelemetryTimer = null;
let mcLogTimer = null;
let mcLogPaused = false;
function mcGaugeSvg() {
    return `<svg viewBox="0 0 40 40" fill="none" stroke="currentColor" stroke-width="1.2">
    <circle cx="20" cy="20" r="16"/>
    <circle cx="20" cy="20" r="10" stroke-dasharray="2 3"/>
    <line class="mc-gauge-needle" x1="20" y1="20" x2="20" y2="6"/>
    <circle cx="20" cy="20" r="1.6" fill="currentColor" stroke="none"/>
  </svg>`;
}
function mcWireframeSvg() {
    return `<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="0.8">
    <polygon points="50,8 90,80 10,80"/>
    <polygon points="50,8 50,80 10,80"/>
    <polygon points="50,8 50,80 90,80"/>
    <line x1="50" y1="8" x2="50" y2="80"/>
    <line x1="10" y1="80" x2="90" y2="80"/>
    <circle cx="50" cy="8" r="2" fill="currentColor" stroke="none"/>
  </svg>`;
}
function mcStatusGrid(n) {
    let cells = '';
    for (let i = 0; i < n; i++) {
        cells += `<span class="mc-status-cell${Math.random() < 0.35 ? ' on' : ''}"></span>`;
    }
    return `<div class="mc-status-grid">${cells}</div>`;
}
function renderMission() {
    const points = getMissionPoints();
    const blips = points.map(p => {
        const left = mcPct(p.x, WORLD_W);
        const top = mcPct(p.y, WORLD_H);
        return `<button type="button" class="mc-blip" data-category="${p.category}" style="left:${left}%; top:${top}%;" onclick="showMissionPointInfo('${p.id}', event)">
      <span class="mc-blip-dot"></span>
      <span class="mc-blip-label">${esc(p.label)}</span>
    </button>`;
    }).join('');
    const terrainBlobs = Object.values(MISSION_POINT_META).map(z => {
        const left = mcPct(z.x, WORLD_W);
        const top = mcPct(z.y, WORLD_H);
        return `<div class="mc-terrain-blob" style="left:${left}%; top:${top}%; --tclr:${z.glow};"></div>`;
    }).join('');
    const routePoints = points.filter(p => p.category === 'actif')
        .map(p => `${mcPct(p.x, WORLD_W)},${mcPct(p.y, WORLD_H)}`).join(' ');
    return `
    <div class="crumbs"><span onclick="navigate('home')" style="cursor:pointer">Accueil</span> / Mission en cours</div>
    <div class="mission-page" data-alert="green">
      <div class="mc-topbar">
        <div class="mc-topbar-left">
          ${[0, 1, 2, 3].map(() => `<div class="mc-gauge">${mcGaugeSvg()}</div>`).join('')}
        </div>
        <div class="mc-clock">
          <div class="mc-clock-label">Scanner Chrono-temporel</div>
          <div class="mc-clock-value">
            <span class="mc-clock-seg" id="mcSeg0">00</span>/<span class="mc-clock-seg" id="mcSeg1">00</span>/<span class="mc-clock-seg" id="mcSeg2">00</span>/<span class="mc-clock-seg" id="mcSeg3">00</span>
          </div>
        </div>
        <div class="mc-topbar-right">
          ${mcStatusGrid(16)}
        </div>
      </div>

      <div class="mc-toolbar">
        <div class="mc-toolbar-group">
          <span class="mc-toolbar-label">Niveau d'alerte</span>
          <button type="button" class="mc-alert-btn alert-green active" onclick="setMissionAlert('green', this)">VERT</button>
          <button type="button" class="mc-alert-btn alert-yellow" onclick="setMissionAlert('yellow', this)">JAUNE</button>
          <button type="button" class="mc-alert-btn alert-red" onclick="setMissionAlert('red', this)">ROUGE</button>
        </div>
        <div class="mc-toolbar-group">
          <span class="mc-toolbar-label">Affichage</span>
          <button type="button" class="mc-filter-btn active" onclick="filterMissionPoints('all', this)">TOUS</button>
          <button type="button" class="mc-filter-btn" onclick="filterMissionPoints('actif', this)">ACTIFS</button>
          <button type="button" class="mc-filter-btn" onclick="filterMissionPoints('classifie', this)">CLASSIFIÉ</button>
        </div>
        <div class="mc-toolbar-group">
          <span class="mc-toolbar-label">Radar</span>
          <button type="button" class="mc-icon-btn" onclick="zoomMissionRadar(1)" title="Zoom avant">+</button>
          <button type="button" class="mc-icon-btn" onclick="zoomMissionRadar(-1)" title="Zoom arrière">–</button>
          <button type="button" class="mc-icon-btn" onclick="recalibrateMission()" title="Recalibrer">⟳</button>
        </div>
      </div>

      <div class="mc-main-row">
        <div class="mc-panel mc-panel-side">
          <div class="mc-panel-title">Capteurs</div>
          <div class="mc-side-list">
            ${['ESSENCE', 'SISMIQUE', 'THERMIQUE', 'OXIRI', 'PRESSION', 'RADIATION'].map(k => `
              <div class="mc-side-row">
                <span class="mc-side-k">${k}</span>
                <div class="mc-side-bar"><div class="mc-side-bar-fill" style="width:${20 + Math.round(Math.random() * 70)}%"></div></div>
              </div>`).join('')}
          </div>
        </div>

        <div class="mc-panel mc-radar-panel">
          <div class="mc-radar-label">Simulation<span class="mc-radar-sub">Vue satellite — ${esc(CONTINENT_NAME)}</span></div>
          <div class="mc-radar-stage" id="mcRadarStage" data-zoom="1">
            <div class="mc-radar-grid"></div>
            <svg class="mc-continent-shape" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path d="M30,25 C40,15 55,12 68,18 C82,22 90,30 88,42 C92,52 85,62 75,68 C68,78 55,80 45,75 C32,72 22,60 20,48 C18,38 22,30 30,25 Z"/>
            </svg>
            <div class="mc-map-terrain">${terrainBlobs}</div>
            <svg class="mc-map-routes" viewBox="0 0 100 100" preserveAspectRatio="none">
              <polyline class="mc-route-line" points="${routePoints}"/>
            </svg>
            <div class="mc-map-scanline"></div>
            <div class="mc-map-hq" style="left:60%; top:50%;" title="Poste de commandement"><span class="mc-map-hq-label">QG</span></div>
            <div class="mc-graticule">
              <span class="mc-grat mc-grat-tl">61°N 12°O</span>
              <span class="mc-grat mc-grat-tr">61°N 44°E</span>
              <span class="mc-grat mc-grat-bl">08°N 12°O</span>
              <span class="mc-grat mc-grat-br">08°N 44°E</span>
            </div>
            ${blips}
          </div>
          <div class="mc-readouts">
            <div class="mc-readout"><span class="mc-readout-num" id="mcNum1" data-decimals="0">3193</span><span class="mc-readout-unit">KM</span></div>
            <div class="mc-readout"><span class="mc-readout-num" id="mcNum2" data-decimals="1">42.7</span><span class="mc-readout-unit">STB</span></div>
            <div class="mc-readout mc-readout-accent"><span class="mc-readout-num" id="mcNum3" data-decimals="2">23.97</span><span class="mc-readout-unit">STB</span></div>
            <div class="mc-readout"><span class="mc-readout-num" id="mcNum4" data-decimals="0">380</span><span class="mc-readout-unit">STB</span></div>
            <div class="mc-readout"><span class="mc-readout-label">RATIO</span><span class="mc-readout-num" id="mcNum5" data-decimals="2">2.35</span></div>
          </div>
        </div>

        <div class="mc-panel mc-panel-side">
          <div class="mc-panel-title">Structure</div>
          <div class="mc-wireframe">${mcWireframeSvg()}</div>
          <div class="mc-side-row">
            <span class="mc-side-k">INTÉGRITÉ</span>
            <div class="mc-side-bar"><div class="mc-side-bar-fill" id="mcIntegrityBar" style="width:94%"></div></div>
          </div>
          ${mcStatusGrid(9)}
          <button type="button" class="mc-btn-recalibrate" onclick="runMissionDiagnostic()">Lancer diagnostic</button>
        </div>
      </div>

      <div class="mc-bottom">
        <div class="mc-control-title">Mode de contrôle</div>
        <div class="mc-control-grid">
          ${[0, 1, 2].map(i => `
            <div class="mc-control-panel">
              <svg class="mc-graph" viewBox="0 0 120 40" preserveAspectRatio="none">
                <polyline points="${mcGraphPoints()}" fill="none" stroke="currentColor" stroke-width="1.4"/>
              </svg>
              <div class="mc-control-rows">
                ${['GAIN', 'SEUIL', 'FLUX'].map(k => `
                  <div class="mc-control-row">
                    <span>${k}</span>
                    <span class="mc-toggle ${Math.random() < 0.5 ? 'on' : ''}" onclick="this.classList.toggle('on')"></span>
                  </div>`).join('')}
              </div>
            </div>`).join('')}
        </div>
      </div>

      <div class="mc-log-panel">
        <div class="mc-log-head">
          <span>Journal d'activité</span>
          <button type="button" class="mc-log-toggle" id="mcLogToggle" onclick="toggleMissionLog(this)">Pause</button>
        </div>
        <div class="mc-log-feed" id="mcLogFeed"></div>
      </div>

      <div class="mc-corner mc-corner-left">
        <div class="mc-mini-radar"></div>
        <div class="mc-corner-coord">4309</div>
      </div>
      <div class="mc-corner mc-corner-right">
        <div class="mc-mini-radar"></div>
        <div class="mc-corner-coord">1322</div>
      </div>
    </div>
    <div class="mc-popover" id="missionPointPopover"></div>
  `;
}
function mcGraphPoints() {
    let pts = [];
    let y = 20;
    for (let x = 0; x <= 120; x += 12) {
        y += (Math.random() - 0.5) * 16;
        y = Math.max(4, Math.min(36, y));
        pts.push(`${x},${y.toFixed(1)}`);
    }
    return pts.join(' ');
}
function showMissionPointInfo(id, ev) {
    ev.stopPropagation();
    const p = getMissionPoints().find(x => x.id === id);
    const pop = document.getElementById('missionPointPopover');
    if (!p || !pop) return;
    const wasOpenForThis = pop.classList.contains('open') && pop.dataset.id === id;
    if (wasOpenForThis) { pop.classList.remove('open'); return; }
    pop.dataset.id = id;
    pop.innerHTML = `<div class="mc-pop-label">${esc(p.label)} <span class="mc-pop-status">${esc(p.status)}</span></div><div class="mc-pop-desc">${esc(p.desc)}</div>`;
    const btn = ev.currentTarget;
    const rect = btn.getBoundingClientRect();
    const popWidth = 240;
    let left = rect.left + rect.width / 2 - popWidth / 2;
    left = Math.max(12, Math.min(left, window.innerWidth - popWidth - 12));
    pop.style.left = left + 'px';
    pop.style.top = (rect.bottom + window.scrollY + 10) + 'px';
    pop.classList.add('open');
}
document.addEventListener('click', (ev) => {
    const pop = document.getElementById('missionPointPopover');
    if (!pop || !pop.classList.contains('open')) return;
    if (!pop.contains(ev.target)) {
        pop.classList.remove('open');
    }
});
function setMissionAlert(level, btn) {
    const page = document.querySelector('.mission-page');
    if (page) page.setAttribute('data-alert', level);
    document.querySelectorAll('.mc-alert-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
}
function filterMissionPoints(cat, btn) {
    document.querySelectorAll('.mc-blip').forEach(el => {
        el.style.display = (cat === 'all' || el.dataset.category === cat) ? '' : 'none';
    });
    document.querySelectorAll('.mc-filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
}
function zoomMissionRadar(dir) {
    const stage = document.getElementById('mcRadarStage');
    if (!stage) return;
    const current = parseFloat(stage.dataset.zoom || '1');
    const next = Math.max(0.8, Math.min(1.5, current + dir * 0.15));
    stage.dataset.zoom = String(next);
    stage.style.transform = `scale(${next})`;
}
function recalibrateMission() {
    document.querySelectorAll('.mc-side-bar-fill').forEach(el => {
        if (el.id !== 'mcIntegrityBar') el.style.width = (20 + Math.round(Math.random() * 70)) + '%';
    });
    document.querySelectorAll('.mc-status-cell').forEach(el => {
        el.classList.toggle('on', Math.random() < 0.35);
    });
    const integrity = document.getElementById('mcIntegrityBar');
    if (integrity) integrity.style.width = (85 + Math.round(Math.random() * 14)) + '%';
    const panel = document.querySelector('.mission-page');
    if (panel) {
        panel.classList.remove('mc-flash');
        void panel.offsetWidth;
        panel.classList.add('mc-flash');
    }
}
function appendMissionLog(msg) {
    const feed = document.getElementById('mcLogFeed');
    if (!feed) return;
    const row = document.createElement('div');
    row.className = 'mc-log-line';
    const time = new Date().toISOString().slice(11, 19);
    row.textContent = `[${time}] ${msg}`;
    feed.appendChild(row);
    while (feed.children.length > 8) feed.removeChild(feed.firstChild);
    feed.scrollTop = feed.scrollHeight;
}
function pushMissionLog() {
    if (mcLogPaused) return;
    appendMissionLog(MC_LOG_POOL[Math.floor(Math.random() * MC_LOG_POOL.length)]);
}
function runMissionDiagnostic() {
    recalibrateMission();
    appendMissionLog('DIAGNOSTIC MANUEL — TOUS SYSTÈMES NOMINAUX');
}
function toggleMissionLog(btn) {
    mcLogPaused = !mcLogPaused;
    btn.textContent = mcLogPaused ? 'Reprendre' : 'Pause';
}
function startMissionClock() {
    const segs = [0, 1, 2, 3].map(i => document.getElementById('mcSeg' + i));
    if (segs.some(s => !s)) return;
    mcClockTimer = window.setInterval(() => {
        segs.forEach(s => { if (s) s.textContent = String(Math.floor(Math.random() * 100)).padStart(2, '0'); });
    }, 110);
}
function startMissionLog() {
    appendMissionLog('INITIALISATION DU JOURNAL…');
    mcLogTimer = window.setInterval(pushMissionLog, 2200);
}
function startMissionTelemetry() {
    const ids = ['mcNum1', 'mcNum2', 'mcNum3', 'mcNum4', 'mcNum5'];
    mcTelemetryTimer = window.setInterval(() => {
        const id = ids[Math.floor(Math.random() * ids.length)];
        const el = document.getElementById(id);
        if (!el) return;
        const base = parseFloat(el.textContent || '0');
        if (isNaN(base)) return;
        const decimals = parseInt(el.dataset.decimals || '0', 10);
        const delta = (Math.random() - 0.5) * (base > 100 ? 6 : 0.6);
        const next = Math.max(0, base + delta);
        el.textContent = next.toFixed(decimals);
    }, 1100);
}
function stopMissionHud() {
    if (mcClockTimer) { window.clearInterval(mcClockTimer); mcClockTimer = null; }
    if (mcTelemetryTimer) { window.clearInterval(mcTelemetryTimer); mcTelemetryTimer = null; }
    if (mcLogTimer) { window.clearInterval(mcLogTimer); mcLogTimer = null; }
    mcLogPaused = false;
}
function initMissionHud() {
    stopMissionHud();
    startMissionClock();
    startMissionTelemetry();
    startMissionLog();
}
/* ---------------- ACTUALITÉS — flash d'infos façon écran TV ---------------- */
function ensureNewsTvDock() {
    let dock = document.getElementById('newsTvDock');
    if (!dock) {
        dock = document.createElement('div');
        dock.id = 'newsTvDock';
        dock.className = 'news-tv-dock';
        dock.innerHTML = `
      <div class="news-tv-bubble">News</div>
      <svg class="news-tv-icon" viewBox="0 0 64 48" fill="none" stroke="currentColor" stroke-width="2">
        <rect x="4" y="10" width="56" height="34" rx="3"/>
        <line x1="20" y1="4" x2="28" y2="10"/>
        <line x1="44" y1="4" x2="36" y2="10"/>
        <circle cx="50" cy="18" r="1.5" fill="currentColor" stroke="none"/>
        <line x1="10" y1="36" x2="54" y2="36"/>
      </svg>
    `;
        dock.addEventListener('click', () => navigate('actualites'));
        document.body.appendChild(dock);
    }
    return dock;
}
function removeNewsTvDock() {
    const dock = document.getElementById('newsTvDock');
    if (dock) dock.remove();
}
function renderNewsPage() {
    const newest = ENTRIES.filter(e => e.cat === 'personnages').slice(-4).reverse();
    const cards = newest.map(e => `
    <div class="news-card" onclick="navigate('entry-${e.id}')">
      ${e.image ? `<img class="news-card-img" src="${encodeURI(e.image)}" alt="${esc(e.name)}" style="${e.imagePos ? `object-position:${e.imagePos}` : ''}">` : ''}
      <div class="news-card-body">
        <div class="news-card-tag">Nouvelle recrue</div>
        <h3>${esc(e.name)}</h3>
        <p>${esc(e.tagline)}</p>
      </div>
    </div>`).join('');
    return `
    <div class="crumbs"><span onclick="navigate('home')" style="cursor:pointer">Accueil</span> / Actualités</div>
    <div class="news-page">
      <div class="news-intro" id="newsIntro">
        <div class="news-static"></div>
        <div class="news-intro-title">LE HÉRAUT D'AELORIA</div>
      </div>
      <div class="news-content">
        <div class="news-header">
          <span class="news-live-tag">● EN DIRECT</span>
          <h1>Le Héraut d'Aeloria</h1>
          <p class="news-sub">Dernières arrivées recensées dans le codex</p>
        </div>
        <div class="news-grid">
          ${cards || `<div class="empty-state">Aucune nouvelle recrue pour l'instant.</div>`}
        </div>
      </div>
    </div>
  `;
}
function initNewsIntro() {
    const intro = document.getElementById('newsIntro');
    if (!intro) return;
    requestAnimationFrame(() => { intro.classList.add('play'); });
    window.setTimeout(() => { intro.classList.add('done'); }, 1900);
}
/* ---------------- HALCYON — page de présentation de l'organisation ---------------- */
function renderOrgTree() {
    return `
    <div class="org-tree">
      ${HALCYON_HIERARCHY.map(tier => `
        <div class="org-tier-box">
          <div class="org-tier-label">${esc(tier.label)}</div>
          <p class="org-tier-desc">${esc(tier.desc)}</p>
          <div class="org-tier-members">
            ${tier.memberIds.length
        ? tier.memberIds.map(id => {
            const e = findEntry(id);
            return e ? `<span class="org-tier-chip" onclick="navigate('entry-${e.id}')">${esc(e.name)}</span>` : '';
        }).join('')
        : `<span class="org-tier-empty">Aucun personnage recensé pour l'instant.</span>`}
          </div>
        </div>`).join('')}
    </div>
  `;
}
function renderSquadRoster(squad) {
    const list = ENTRIES.filter(e => e.cat === 'personnages' && e.squad === squad.id);
    rosterState = { factionId: squad.id, list, selected: 0 };
    return `
    <div class="roster-page no-rail">
      <div class="roster-main">
        <p class="roster-hint">🖱️ Molette pour parcourir · Survole pour un aperçu · Clique pour zoomer · Glisse pour retourner</p>
        <div class="roster-stage" id="rosterStage">
          <span class="roster-frame-corner tl">✦</span>
          <span class="roster-frame-corner tr">✦</span>
          <span class="roster-frame-corner bl">✦</span>
          <span class="roster-frame-corner br">✦</span>
          <div class="roster-stage-cards" id="rosterStageCards">
            ${list.length ? list.map((e, i) => rosterCard3dHtml(e, i)).join('') : ''}
          </div>
          ${!list.length ? `<div class="roster-empty">Aucun membre recensé dans cet escadron pour l'instant.</div>` : ''}
        </div>
        <div class="roster-nav">
          <button class="roster-arrow prev" onclick="scrollRoster(-1)"><span class="line"></span>◂</button>
          <button class="roster-arrow next" onclick="scrollRoster(1)">▸<span class="line"></span></button>
        </div>
        <div class="roster-bubble" id="rosterBubble"></div>
      </div>
    </div>`;
}
function renderSquads() {
    return `
    <div class="squad-list">
      ${SQUADS.map(s => `
        <div class="squad-card">
          <div class="squad-card-name">${esc(s.name)}</div>
          <p class="squad-card-desc">${esc(s.desc)}</p>
          ${renderSquadRoster(s)}
        </div>`).join('')}
    </div>
  `;
}
function renderHalcyonPage() {
    const f = FACTIONS.find(x => x.id === 'halcyon');
    return `
    <div class="crumbs"><span onclick="navigate('home')" style="cursor:pointer">Accueil</span> / Halcyon</div>
    <div class="halcyon-page">
      <div class="halcyon-page-header">
        <img class="halcyon-page-crest" src="${encodeURI(HALCYON_LOGO)}" alt="Halcyon">
        <div class="halcyon-page-eyebrow">Organisation Oxirienne</div>
        <h1 class="halcyon-page-title">HALCYON</h1>
        <div class="halcyon-page-divider"></div>
        <p class="halcyon-page-desc">${esc(f.desc)}</p>
      </div>

      <div class="halcyon-page-grid">
        <div class="halcyon-page-block">
          <h3>Domaines de recherche</h3>
          <ul class="dossier-list-block">
            <li>Augmentation et création d'hybrides de rang, employés comme armes vivantes.</li>
            <li>Étude et exploitation de l'énergie d'Oxiri et des Entropy.</li>
            <li>Conservation et classification des artefacts Oxiriens perdus (Département des Reliques).</li>
            <li>Développement de technologies de combat avancées, dont l'Armure d'Exusial.</li>
          </ul>
        </div>
        <div class="halcyon-page-block">
          <h3>Doctrine officielle</h3>
          <div class="dossier-quote">L'intégrité biologique du sujet constitue une variable acceptable au regard de la nécessité militaire.</div>
          <p class="halcyon-page-block-note">— Extrait du protocole interne Halcyon, dossier Exusial.</p>
        </div>
      </div>

      <div class="section-title"><h2>Hiérarchie</h2></div>
      <p class="halcyon-page-desc" style="margin:0 0 22px;max-width:none;">Au sein de Halcyon, il y a une hiérarchie bien définie où chaque membre possède son rôle en fonction de son rang et de son expérience. Il est possible pour n'importe quel membre de grimper dans les échelons selon ses actions.</p>
      ${renderOrgTree()}

      <div class="section-title"><h2>Escadrons</h2></div>
      ${renderSquads()}

      <div class="halcyon-archive-card" onclick="navigate('armes')">
        <img class="halcyon-archive-card-logo" src="${encodeURI(HALCYON_LOGO)}" alt="">
        <div class="halcyon-archive-card-info">
          <div class="halcyon-archive-card-eyebrow">Niveau d'accès : OMEGA</div>
          <div class="halcyon-archive-card-title">Archives des Artefacts Oxiriens</div>
          <div class="halcyon-archive-card-desc">Dossiers classifiés sur les sept artefacts nés de l'énergie d'Oxiri.</div>
        </div>
        <div class="halcyon-archive-card-arrow">→</div>
      </div>
    </div>
  `;
}
/* ---------------- ARCHIVES HALCYON — dossiers secrets des artefacts Oxiriens ---------------- */
function dangerClass(d) {
    const s = d.toLowerCase();
    if (s.includes('catastrophique'))
        return 'crit';
    if (s.includes('extrême'))
        return 'crit';
    if (s.includes('élevée'))
        return 'high';
    if (s.includes('inconnue'))
        return 'unknown';
    return 'mid';
}
function statusClass(s) {
    const v = s.toLowerCase();
    if (v.includes('perdu'))
        return 'lost';
    if (v.includes('disparu'))
        return 'vanished';
    if (v.includes('actif') || v === 'active')
        return 'active';
    if (v.includes('interdit'))
        return 'forbidden';
    if (v.includes('inconnu'))
        return 'unknown';
    return 'mid';
}
function weaponParaHtml(p) {
    if (p.list)
        return `<ul class="dossier-list-block">${p.list.map(li => `<li>${esc(li)}</li>`).join('')}</ul>`;
    if (p.quote)
        return `<div class="dossier-quote">« ${esc(p.quote)} »</div>`;
    return `<p>${esc(p.text || '')}</p>`;
}
function weaponSectionHtml(s) {
    return `<h3>${esc(s.heading)}</h3>${s.paragraphs.map(weaponParaHtml).join('')}`;
}
function findWeapon(id) {
    return WEAPONS.find(w => w.id === id);
}
function dossierRowHtml(w) {
    const thumb = w.image
        ? `<img src="${encodeURI(w.image)}" alt="">`
        : `<div class="dossier-row-noimg">${w.restricted ? '🔒' : '✕'}</div>`;
    return `
    <div class="dossier-row ${w.id === 'division-astrale' ? 'corrupted' : ''} ${w.restricted ? 'restricted' : ''}" onclick="navigate('arme-${w.id}')">
      <div class="dossier-row-num">DOSSIER<br>${esc(w.dossier)}</div>
      <div class="dossier-row-thumb">${thumb}</div>
      <div class="dossier-row-info">
        <div class="dossier-row-name">${esc(w.name)}</div>
        <div class="dossier-row-tags">
          <span class="dstamp dstamp-${dangerClass(w.danger)}">${esc(w.danger)}</span>
          <span class="dstamp dstamp-${statusClass(w.status)}">${esc(w.status)}</span>
        </div>
      </div>
      <div class="dossier-row-arrow">→</div>
    </div>`;
}
function renderArmesArchive() {
    return `
    <div class="crumbs"><span onclick="navigate('home')" style="cursor:pointer">Accueil</span> / Armes</div>
    <div class="dossier-header">
      <div class="dossier-header-org">HALCYON</div>
      <h1 class="dossier-header-title">Archives des Artefacts Oxiriens</h1>
      <div class="dossier-header-meta">
        <span>Niveau d'accès : <b>OMEGA</b></span>
        <span>Classification : ARTEFACTS OXIRIENS</span>
      </div>
      <blockquote class="dossier-epigraph">
        « Il existe des armes capables de tuer un homme.<br>Il existe des armes capables de détruire une ville.<br>
        Et il existe des armes qui peuvent changer la définition même de ce qu'est un homme. »
        <cite>— Extrait des archives du Département des Reliques</cite>
      </blockquote>
    </div>
    <div class="dossier-list">
      ${WEAPONS.map(dossierRowHtml).join('')}
      <div class="dossier-row corrupted-row" onclick="navigate('archives-corrompues')">
        <div class="dossier-row-num">DOSSIER<br>???</div>
        <div class="dossier-row-thumb"><div class="dossier-row-noimg">?</div></div>
        <div class="dossier-row-info">
          <div class="dossier-row-name corrupted-text">????</div>
          <div class="dossier-row-tags"><span class="dstamp dstamp-unknown">DONNÉES CORROMPUES</span></div>
        </div>
        <div class="dossier-row-arrow">→</div>
      </div>
    </div>
  `;
}
function renderArmeDossier(id) {
    const w = findWeapon(id);
    if (!w)
        return renderNotFound();
    const idx = WEAPONS.findIndex(x => x.id === id);
    const prev = WEAPONS[idx - 1], next = WEAPONS[idx + 1];
    if (w.restricted && !armesFinalUnlocked) {
        return `
      <div class="crumbs"><span onclick="navigate('home')" style="cursor:pointer">Accueil</span> / <span onclick="navigate('armes')" style="cursor:pointer">Armes</span> / DOSSIER ${esc(w.dossier)}</div>
      <div class="dossier-gate cyber-glitch" id="dossierGate">
        <div class="dossier-gate-icon">🔒</div>
        <div class="dossier-gate-title">ACCÈS INTERDIT</div>
        <p class="dossier-gate-text">Ce dossier requiert une habilitation de niveau supérieur à OMEGA.<br>Saisis le code d'authentification Halcyon pour continuer.</p>
        <div class="dossier-gate-code-row">
          <input type="text" id="archiveCodeInput" maxlength="4" inputmode="numeric" placeholder="Code" class="dossier-gate-code-input" onkeydown="if(event.key==='Enter') submitArchiveCode();">
          <span class="btn btn-primary" onclick="submitArchiveCode()">Déverrouiller</span>
        </div>
      </div>
    `;
    }
    return `
    <div class="crumbs"><span onclick="navigate('home')" style="cursor:pointer">Accueil</span> / <span onclick="navigate('armes')" style="cursor:pointer">Armes</span> / DOSSIER ${esc(w.dossier)}</div>
    <div class="dossier-file">
      <div class="dossier-file-top">
        <div class="dossier-file-num">DOSSIER ${esc(w.dossier)}</div>
        <div class="dstamp-big dstamp-${statusClass(w.status)}">${esc(w.status)}</div>
      </div>
      <h1 class="dossier-file-title">${esc(w.name)}</h1>
      <div class="dossier-file-body">
        <div class="dossier-file-main">
          ${w.sections.map(weaponSectionHtml).join('')}
          ${w.classified ? `
            <div class="classified-block" id="classified-${w.id}">
              <div class="classified-bar" onclick="toggleClassified('${w.id}')">
                <span class="classified-lock">🔒</span>
                <span class="classified-label">${esc(w.classified.heading)} — cliquer pour décrypter</span>
                <span class="classified-chevron">▾</span>
              </div>
              <div class="classified-content">
                ${w.classified.paragraphs.map(weaponParaHtml).join('')}
              </div>
            </div>` : ''}
        </div>
        <div class="dossier-file-side">
          ${w.image ? `<div class="dossier-file-media"><img src="${encodeURI(w.image)}" alt=""></div>` : `<div class="dossier-file-media dossier-file-noimg">IMAGE INDISPONIBLE</div>`}
          <div class="infobox dossier-infobox">
            ${Object.entries(w.info).map(([k, v]) => `<div class="ib-row"><span class="ib-k">${esc(k)}</span><span class="ib-v">${esc(v)}</span></div>`).join('')}
          </div>
        </div>
      </div>
      <div class="dossier-nav">
        ${prev ? `<span onclick="navigate('arme-${prev.id}')">← DOSSIER ${esc(prev.dossier)}</span>` : `<span></span>`}
        <span onclick="navigate('armes')">Index des archives</span>
        ${next ? `<span onclick="navigate('arme-${next.id}')">DOSSIER ${esc(next.dossier)} →</span>` : `<span></span>`}
      </div>
    </div>
  `;
}
/* ---------------- ARCHIVES CORROMPUES — terminal instable, but à définir ---------------- */
function corruptedCodeLine() {
    const chars = '01{}[]<>/;:=+-*#@$%&?!ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let s = '';
    const len = 8 + Math.floor(Math.random() * 14);
    for (let i = 0; i < len; i++)
        s += chars[Math.floor(Math.random() * chars.length)];
    return s;
}
function corruptStreamColumnsHtml(count) {
    let out = '';
    for (let i = 0; i < count; i++) {
        const left = count > 1 ? (i / (count - 1)) * 100 : 50;
        const dur = (6 + Math.random() * 7).toFixed(2);
        const block = Array.from({ length: 40 }, () => corruptedCodeLine()).join('\n');
        out += `<div class="corrupt-stream" style="left:${left}%; animation-duration:${dur}s, 1.8s;">${esc(block + '\n' + block)}</div>`;
    }
    return out;
}
const CORRUPT_UNLOCK_CODE = '1234';
function renderCorruptedArchive() {
    const windows = Array.from({ length: 7 }, () => {
        const top = (Math.random() * 68 + 6).toFixed(1);
        const left = (Math.random() * 68 + 4).toFixed(1);
        const w = Math.round(140 + Math.random() * 110);
        const delay = (Math.random() * 6).toFixed(2);
        const dur = (4 + Math.random() * 4).toFixed(2);
        const lineCount = 4 + Math.floor(Math.random() * 3);
        const lines = Array.from({ length: lineCount }, () => corruptedCodeLine());
        return `<div class="corrupt-window" style="top:${top}%; left:${left}%; width:${w}px; animation-delay:${delay}s; animation-duration:${dur}s;">
      <div class="corrupt-window-bar"></div>
      <div class="corrupt-window-body">${lines.map(l => `<div>${esc(l)}</div>`).join('')}</div>
    </div>`;
    }).join('');
    return `
    <div class="crumbs"><span onclick="navigate('home')" style="cursor:pointer">Accueil</span> / <span onclick="navigate('armes')" style="cursor:pointer">Armes</span> / ????</div>
    <div class="corrupt-terminal cyber-glitch-ambient" id="corruptTerminal">
      <div class="corrupt-terminal-bg">
        <div class="corrupt-stream-layer">${corruptStreamColumnsHtml(9)}</div>
        ${windows}
      </div>
      <div class="corrupt-terminal-fg">
        <div class="corrupt-terminal-title">?????????????</div>
        <p class="corrupt-terminal-sub">Archive antérieure à la fondation de Halcyon. Intégrité des données : critique.</p>
        <div class="corrupt-search-row">
          <input type="text" id="corruptCodeInput" class="corrupt-search-input" placeholder="&gt; saisir une séquence…" autocomplete="off" onkeydown="if(event.key==='Enter') submitCorruptedCode();">
          <span class="btn btn-primary" onclick="submitCorruptedCode()">Exécuter</span>
        </div>
        <div class="corrupt-terminal-feedback" id="corruptFeedback"></div>
      </div>
    </div>
  `;
}
function submitCorruptedCode() {
    const input = document.getElementById('corruptCodeInput');
    const code = input ? input.value.trim() : '';
    if (code === CORRUPT_UNLOCK_CODE) {
        if (input)
            input.value = '';
        openCorruptCodeWindow();
        return;
    }
    const fb = document.getElementById('corruptFeedback');
    const term = document.getElementById('corruptTerminal');
    if (term) {
        term.classList.remove('shake');
        void term.offsetWidth;
        term.classList.add('shake');
    }
    if (fb)
        fb.textContent = '> SÉQUENCE NON RECONNUE — ANALYSE EN COURS…';
    if (input)
        input.value = '';
}
let corruptTermStep = 0;
function normalizeCmd(s) {
    return s.trim().toLowerCase().replace(/\s+/g, ' ');
}
function openCorruptCodeWindow() {
    let overlay = document.getElementById('corruptCodeOverlay');
    if (!overlay) {
        overlay = document.createElement('div');
        overlay.id = 'corruptCodeOverlay';
        overlay.className = 'corrupt-code-overlay cyber-glitch-ambient';
        document.body.appendChild(overlay);
    }
    corruptTermStep = 0;
    overlay.innerHTML = `
    <button class="corrupt-code-close" onclick="closeCorruptCodeWindow()" aria-label="Fermer">✕</button>
    <div class="corrupt-code-bar">
      <span class="corrupt-code-bar-dot"></span><span class="corrupt-code-bar-dot"></span><span class="corrupt-code-bar-dot"></span>
      <span class="corrupt-code-bar-title">ACCÈS_NON_AUTORISÉ.EXE</span>
    </div>
    <div class="corrupt-code-body">
      <div class="corrupt-stream-layer">${corruptStreamColumnsHtml(6)}</div>
      <div class="corrupt-term">
        <div class="corrupt-term-log" id="corruptTermLog"></div>
        <div class="corrupt-term-inputrow">
          <span class="corrupt-term-prompt">&gt;</span>
          <input type="text" id="corruptTermInput" class="corrupt-term-input" autocomplete="off" onkeydown="if(event.key==='Enter') submitCorruptTermCommand();">
        </div>
      </div>
    </div>
  `;
    document.body.style.overflow = 'hidden';
    requestAnimationFrame(() => overlay.classList.add('open'));
    appendCorruptTermLine('SYSTÈME PRÊT.');
    appendCorruptTermLine('Saisissez une commande…');
    const input = document.getElementById('corruptTermInput');
    if (input)
        setTimeout(() => input.focus(), 500);
}
function closeCorruptCodeWindow() {
    const overlay = document.getElementById('corruptCodeOverlay');
    if (!overlay)
        return;
    overlay.classList.remove('open');
    document.body.style.overflow = '';
    setTimeout(() => { const el = document.getElementById('corruptCodeOverlay'); if (el)
        el.remove(); }, 450);
}
function appendCorruptTermLine(text, corrupted) {
    const log = document.getElementById('corruptTermLog');
    if (!log)
        return;
    const line = document.createElement('div');
    line.className = 'corrupt-term-line' + (corrupted ? ' corrupted' : '');
    line.textContent = text;
    log.appendChild(line);
    log.scrollTop = log.scrollHeight;
}
function setCorruptTermInputEnabled(on) {
    const input = document.getElementById('corruptTermInput');
    if (!input)
        return;
    input.disabled = !on;
    if (on)
        input.focus();
}
function playCorruptTermLines(lines, onDone) {
    let i = 0;
    function step() {
        if (document.getElementById('corruptTermLog') === null)
            return;
        if (i < lines.length) {
            appendCorruptTermLine(lines[i][0], lines[i][1]);
            i++;
            setTimeout(step, 260 + Math.random() * 180);
        }
        else if (onDone) {
            setTimeout(onDone, 550);
        }
    }
    step();
}
function submitCorruptTermCommand() {
    const input = document.getElementById('corruptTermInput');
    if (!input || input.disabled)
        return;
    const raw = input.value;
    if (!raw.trim())
        return;
    const cmd = normalizeCmd(raw);
    appendCorruptTermLine('> ' + raw);
    input.value = '';
    if (corruptTermStep === 0 && cmd === 'admin zero acces') {
        corruptTermStep = 1;
        setCorruptTermInputEnabled(false);
        playCorruptTermLines([
            ['[SYSTÈME] Initialisation du protocole ADMIN_ZERO…'],
            ['[SYSTÈME] Vérification des identifiants… OK'],
            ["[ARCHIVE] Ouverture des accès administrateur…"],
            ['[ERREUR] SEGMENT_0x4F ILLISIBLE — DONNÉES ANCIENNES', true],
            ["[SYSTÈME] Contournement de l'erreur… succès"],
            ['[SYSTÈME] ACCÈS ADMINISTRATEUR : ACCORDÉ'],
        ], () => setCorruptTermInputEnabled(true));
    }
    else if (corruptTermStep === 1 && cmd === 'give lumen prem admin') {
        corruptTermStep = 2;
        setCorruptTermInputEnabled(false);
        playCorruptTermLines([
            ["[SYSTÈME] Attribution du niveau d'accès : LUMEN — PREMIUM ADMIN"],
            ['[SYSTÈME] Synchronisation des privilèges…'],
            ['[ERREUR] SEGMENT CORROMPU — RECONSTRUCTION PARTIELLE', true],
            ['[ARCHIVE] Requête : FICHIER_ZERO'],
            ["[ARCHIVE] Ce fichier nécessite un code d'accès."],
            ["Entrez le code d'accès au FICHIER ZERO :"],
        ], () => setCorruptTermInputEnabled(true));
    }
    else if (corruptTermStep === 2 && cmd === 'oxiri') {
        corruptTermStep = 3;
        setCorruptTermInputEnabled(false);
        playCorruptTermLines([
            ['[SYSTÈME] CODE VALIDÉ'],
            ['[ARCHIVE] DÉVERROUILLAGE DU FICHIER ZERO…'],
            ['[ARCHIVE] FUITE DE DONNÉES EN COURS…', true],
        ], () => triggerDataLeak());
    }
    else {
        appendCorruptTermLine('[ERREUR] COMMANDE INCONNUE', true);
    }
}
function buildLeakVignettes() {
    const chars = ENTRIES.filter(e => e.cat === 'personnages').map(e => ({
        category: 'PERSONNAGE', title: e.name, line: Object.values(e.info)[0] || e.tagline,
    }));
    const weapons = WEAPONS.filter(w => !w.restricted).map(w => ({
        category: 'ARME', title: w.name, line: `${w.danger} — ${w.status}`,
    }));
    const experiments = [
        { category: 'EXPÉRIENCE', title: 'ESSAI BIO-12', line: 'Sujet Alpha — taux de rejet cellulaire 87%' },
        { category: 'EXPÉRIENCE', title: 'PROTOCOLE HYBRIDE-Δ', line: '3 survivants sur 40' },
        { category: 'EXPÉRIENCE', title: 'ENTROPY-3', line: 'Fusion partielle réussie — effets secondaires non documentés' },
        { category: 'EXPÉRIENCE', title: 'SUJET NÉANT', line: 'Disparu après la phase 2' },
        { category: 'EXPÉRIENCE', title: 'ARCHIVE MÉDICALE #204', line: 'Accès restreint — cause du décès inconnue' },
    ];
    return [...chars, ...weapons, ...experiments];
}
function triggerDataLeak() {
    closeCorruptCodeWindow();
    setTimeout(() => {
        const overlay = document.createElement('div');
        overlay.id = 'leakOverlay';
        overlay.className = 'leak-overlay';
        overlay.innerHTML = `<div class="leak-hint">Cliquer n'importe où pour refermer</div>`;
        document.body.appendChild(overlay);
        const pool = buildLeakVignettes();
        const count = Math.min(18, pool.length);
        const used = new Set();
        const chosen = [];
        while (chosen.length < count && used.size < pool.length) {
            const idx = Math.floor(Math.random() * pool.length);
            if (used.has(idx))
                continue;
            used.add(idx);
            chosen.push(pool[idx]);
        }
        chosen.forEach(v => {
            const corrupted = Math.random() < 0.35;
            const el = document.createElement('div');
            el.className = 'leak-vignette' + (corrupted ? ' corrupted' : '');
            el.style.left = (Math.random() * 78 + 4) + '%';
            el.style.top = (Math.random() * 78 + 4) + '%';
            el.style.animationDelay = (Math.random() * 1.1).toFixed(2) + 's';
            el.innerHTML = `
        <div class="leak-vignette-cat">${esc(v.category)}</div>
        <div class="leak-vignette-title">${esc(v.title)}</div>
        <div class="leak-vignette-line">${esc(v.line)}</div>`;
            overlay.appendChild(el);
        });
        overlay.addEventListener('click', () => { overlay.remove(); document.body.style.overflow = ''; });
        document.body.style.overflow = 'hidden';
    }, 500);
}
function toggleClassified(id) {
    const el = document.getElementById('classified-' + id);
    if (el)
        el.classList.toggle('open');
}
function unlockFinalDossier() {
    armesFinalUnlocked = true;
    const content = document.getElementById('content');
    const route = (window.location.hash || '#home').slice(1);
    if (content && route.startsWith('arme-'))
        content.innerHTML = renderArmeDossier(route.replace('arme-', ''));
}
const ARCHIVE_UNLOCK_CODE = '1234';
function submitArchiveCode() {
    const input = document.getElementById('archiveCodeInput');
    const code = input ? input.value.trim() : '';
    if (code === ARCHIVE_UNLOCK_CODE) {
        unlockFinalDossier();
    }
    else {
        const gate = document.getElementById('dossierGate');
        if (gate) {
            gate.classList.remove('shake');
            void gate.offsetWidth;
            gate.classList.add('shake');
        }
        triggerIntrusionLockdown();
    }
}
function triggerIntrusionLockdown() {
    if (document.querySelector('.lockdown-overlay'))
        return;
    const overlay = document.createElement('div');
    overlay.className = 'lockdown-overlay';
    document.body.appendChild(overlay);
    const messages = [
        'ACCÈS INTERDIT', 'INTRUSION DÉTECTÉE', 'TENTATIVE NON AUTORISÉE',
        'ALERTE SÉCURITÉ HALCYON', 'VERROUILLAGE EN COURS', 'LOCALISATION EN COURS…',
        '⚠ ACCÈS INTERDIT ⚠', 'IDENTITÉ SIGNALÉE', 'PROTOCOLE OMEGA ENGAGÉ',
    ];
    for (let i = 0; i < 26; i++) {
        const msg = document.createElement('div');
        msg.className = 'lockdown-msg';
        msg.textContent = messages[Math.floor(Math.random() * messages.length)];
        msg.style.left = (Math.random() * 75 + 5) + '%';
        msg.style.top = (Math.random() * 80 + 5) + '%';
        msg.style.fontSize = (13 + Math.random() * 22) + 'px';
        msg.style.animationDelay = (Math.random() * 0.9) + 's';
        overlay.appendChild(msg);
    }
    setTimeout(() => {
        window.location.hash = 'home';
        window.location.reload();
    }, 2600);
}
const HALCYON_LOGO = 'assets/logo/halcyon logo.png';
function ensureHalcyonLogoDock() {
    let dock = document.getElementById('halcyonLogoDock');
    if (!dock) {
        dock = document.createElement('div');
        dock.id = 'halcyonLogoDock';
        dock.className = 'halcyon-logo-dock';
        dock.innerHTML = `<div class="halcyon-logo-spin"><img class="halcyon-logo-img" src="${encodeURI(HALCYON_LOGO)}" alt="Halcyon"></div>`;
        dock.addEventListener('click', toggleHalcyonNav);
        document.body.appendChild(dock);
    }
    return dock;
}
function removeHalcyonLogoDock() {
    const dock = document.getElementById('halcyonLogoDock');
    if (dock)
        dock.remove();
}
function setHalcyonLogoPos(dock, top, left, size, translateX) {
    dock.style.top = top;
    dock.style.left = left;
    dock.style.width = size;
    dock.style.height = size;
    dock.style.transform = translateX ? 'translateX(-50%)' : 'none';
}
function dockHalcyonLogoImmediate() {
    const dock = ensureHalcyonLogoDock();
    dock.style.transition = 'none';
    setHalcyonLogoPos(dock, '20px', '20px', '46px', false);
    dock.classList.add('docked');
    void dock.offsetWidth;
    dock.style.transition = '';
}
function setHalcyonImmersive(on) {
    const shell = document.querySelector('.shell');
    if (shell)
        shell.classList.toggle('immersive', on);
}
function toggleHalcyonNav() {
    const shell = document.querySelector('.shell');
    if (shell)
        shell.classList.toggle('immersive');
}
function playDossierBoot(renderFn) {
    const content = document.getElementById('content');
    if (!content)
        return;
    const lines = [
        { text: 'CONNEXION AUX SERVEURS HALCYON…' },
        { text: "VÉRIFICATION D'HABILITATION EN COURS…" },
        { text: 'NIVEAU D’ACCÈS REQUIS : OMEGA' },
        { text: '⚠ ACCÈS NON AUTORISÉ DÉTECTÉ — TENTATIVE JOURNALISÉE', warn: true },
        { text: 'DÉCHIFFREMENT DES ARCHIVES…' },
    ];
    const dock = ensureHalcyonLogoDock();
    dock.classList.remove('docked');
    content.innerHTML = `
    <div class="dossier-boot cyber-glitch" id="dossierBootPanel">
      <div class="dossier-boot-warn">⚠ SYSTÈME DE SÉCURITÉ HALCYON ⚠</div>
      <div class="dossier-boot-log" id="dossierBootLog"></div>
      <div class="dossier-boot-bar"><div class="dossier-boot-bar-fill" id="dossierBootFill"></div></div>
      <div class="dossier-boot-pct" id="dossierBootPct">0%</div>
    </div>
  `;
    const shell = document.querySelector('.shell');
    if (shell)
        shell.classList.add('no-anim');
    const panel = document.getElementById('dossierBootPanel');
    void panel.offsetWidth;
    const rect = panel.getBoundingClientRect();
    if (shell)
        shell.classList.remove('no-anim');
    dock.style.transition = 'none';
    setHalcyonLogoPos(dock, (rect.bottom + 16) + 'px', (rect.left + rect.width / 2) + 'px', '90px', true);
    void dock.offsetWidth;
    dock.style.transition = '';
    const logEl = document.getElementById('dossierBootLog');
    const fillEl = document.getElementById('dossierBootFill');
    const pctEl = document.getElementById('dossierBootPct');
    let i = 0;
    function step() {
        if (document.getElementById('dossierBootLog') !== logEl)
            return;
        if (i < lines.length) {
            const row = document.createElement('div');
            row.className = 'dossier-boot-line' + (lines[i].warn ? ' warn' : '');
            row.textContent = '> ' + lines[i].text;
            logEl.appendChild(row);
            i++;
            const pct = Math.round((i / lines.length) * 100);
            fillEl.style.width = pct + '%';
            pctEl.textContent = pct + '%';
            setTimeout(step, 230 + Math.random() * 180);
        }
        else {
            setTimeout(() => {
                if (document.getElementById('dossierBootLog') !== logEl)
                    return;
                const c = document.getElementById('content');
                setHalcyonLogoPos(dock, '20px', '20px', '46px', false);
                dock.classList.add('docked');
                if (c) {
                    c.innerHTML = renderFn();
                    c.scrollTop = 0;
                }
            }, 420);
        }
    }
    step();
}
/* ---------------- CARTE 2D PEINTE (bascule 3D au clic) ----------------
   Carte plate façon carte du monde peinte, déplaçable/zoomable à la souris.
   Un clic sur une région lance une bascule en perspective (CSS 3D) qui zoome
   vers la zone et ouvre le panneau latéral. MAP_ZONES pilote position/couleur.
*/
const CONTINENT_NAME = 'Aeloria';
// Les lieux « en dur » (avec zone cliquable + fiche) ont été retirés : les
// lieux sont désormais uniquement ceux écrits par les utilisateurs connectés
// via l'espace Écriture (page "Lieux" du codex, sans zone sur la carte).
// Ces coordonnées ne servent plus qu'à peindre le relief du continent
// (montagnes, marais, forêt, falaises) sur la carte, à titre décoratif.
const TERRAIN_FEATURES = [
    { id: 'hauteterres', x: 640, y: 230, glow: '196,201,209' },
    { id: 'marais-bas', x: 930, y: 520, glow: '138,149,166' },
    { id: 'foret-des-cendres', x: 520, y: 520, glow: '196,110,64' },
    { id: 'cote-ecarlate', x: 1020, y: 250, glow: '178,90,82' },
];
const MAP_ZONES = [];
const MAP_ZONE_ICONS = {
    mountain: '<path d="M3 18l5-9 4 6 3-4 6 7z"/>',
    swamp: '<path d="M3 15c2-2 4-2 6 0s4 2 6 0 4-2 6 0"/><path d="M3 19c2-2 4-2 6 0s4 2 6 0 4-2 6 0"/>',
    forest: '<path d="M12 2l5 8h-3l4 6h-4v4h-4v-4H6l4-6H7z"/>',
    coast: '<path d="M2 16c2-2 4-2 6 0s4 2 6 0 4-2 6 0"/><path d="M2 20c2-2 4-2 6 0s4 2 6 0 4-2 6 0"/>',
};
const WORLD_W = 1300, WORLD_H = 760;
let mapState = null;
function paintWorldMap() {
    const canvas = document.createElement('canvas');
    const SUPERSAMPLE = 2;
    canvas.width = WORLD_W * SUPERSAMPLE;
    canvas.height = WORLD_H * SUPERSAMPLE;
    canvas.style.width = WORLD_W + 'px';
    canvas.style.height = WORLD_H + 'px';
    const g = canvas.getContext('2d');
    g.scale(SUPERSAMPLE, SUPERSAMPLE);
    // océan profond, embrumé sur les bords
    const ocean = g.createRadialGradient(WORLD_W * 0.5, WORLD_H * 0.5, 80, WORLD_W * 0.5, WORLD_H * 0.5, 900);
    ocean.addColorStop(0, '#13212f');
    ocean.addColorStop(0.6, '#0c1620');
    ocean.addColorStop(1, '#060a0f');
    g.fillStyle = ocean;
    g.fillRect(0, 0, WORLD_W, WORLD_H);
    let seed = 7;
    function rand() { seed = (seed * 1103515245 + 12345) & 0x7fffffff; return (seed % 1000) / 1000; }
    // texture de vaguelettes
    g.strokeStyle = 'rgba(150,180,200,0.06)';
    for (let i = 0; i < 180; i++) {
        const x = rand() * WORLD_W, y = rand() * WORLD_H, w = 14 + rand() * 22;
        g.beginPath();
        g.arc(x, y, w, 0.2 * Math.PI, 0.8 * Math.PI);
        g.stroke();
    }
    // brumes / nuages sur l'océan, façon carte peinte à l'ancienne
    for (let i = 0; i < 26; i++) {
        const nearTop = rand() < 0.5;
        const x = rand() * WORLD_W;
        const y = nearTop ? rand() * 120 : WORLD_H - rand() * 120;
        const r = 60 + rand() * 90;
        const cloud = g.createRadialGradient(x, y, 0, x, y, r);
        cloud.addColorStop(0, 'rgba(215,222,230,0.12)');
        cloud.addColorStop(1, 'rgba(215,222,230,0)');
        g.fillStyle = cloud;
        g.beginPath();
        g.arc(x, y, r, 0, Math.PI * 2);
        g.fill();
    }
    // masse continentale (forme organique)
    function landPath() {
        g.beginPath();
        const pts = [
            [260, 140], [430, 90], [620, 110], [760, 90], [900, 130], [1030, 160], [1120, 260],
            [1150, 400], [1080, 540], [960, 610], [820, 650], [660, 660], [520, 630], [400, 560],
            [300, 470], [230, 360], [210, 240]
        ];
        g.moveTo(pts[0][0], pts[0][1]);
        for (let i = 1; i < pts.length; i++) {
            const p = pts[i], prev = pts[i - 1];
            g.quadraticCurveTo(prev[0] + (p[0] - prev[0]) * 0.5 + ((i % 2) ? 12 : -12), prev[1] + (p[1] - prev[1]) * 0.5, p[0], p[1]);
        }
        g.closePath();
    }
    landPath();
    const landGrad = g.createLinearGradient(200, 80, 1150, 660);
    landGrad.addColorStop(0, '#3c4636');
    landGrad.addColorStop(0.5, '#2f3a2a');
    landGrad.addColorStop(1, '#242c20');
    g.save();
    g.clip();
    g.fillStyle = landGrad;
    g.fillRect(0, 0, WORLD_W, WORLD_H);
    // teinte de neige/roche au sol sous les Hauteterres (les pics eux-mêmes sont peints sur le calque de relief séparé)
    (function () {
        const z = TERRAIN_FEATURES.find(m => m.id === 'hauteterres');
        const snowGround = g.createRadialGradient(z.x, z.y - 10, 20, z.x, z.y - 10, 240);
        snowGround.addColorStop(0, 'rgba(212,217,224,0.6)');
        snowGround.addColorStop(1, 'rgba(212,217,224,0)');
        g.fillStyle = snowGround;
        g.beginPath();
        g.arc(z.x, z.y - 10, 240, 0, Math.PI * 2);
        g.fill();
    })();
    // ombrage doux (relief général)
    const shade = g.createRadialGradient(680, 300, 50, 680, 300, 650);
    shade.addColorStop(0, 'rgba(255,255,255,0.04)');
    shade.addColorStop(1, 'rgba(0,0,0,0.22)');
    g.fillStyle = shade;
    g.fillRect(0, 0, WORLD_W, WORLD_H);
    // relief diffus sur toute la masse : petites hachures claires/sombres appairées → sensation de terrain vallonné partout
    for (let i = 0; i < 520; i++) {
        const x = 230 + rand() * 860, y = 110 + rand() * 500;
        const a = rand() * Math.PI * 2, len = 5 + rand() * 7;
        const dx = Math.cos(a) * len, dy = Math.sin(a) * len * 0.5;
        g.strokeStyle = `rgba(18,22,16,${0.10 + rand() * 0.08})`;
        g.lineWidth = 1.4;
        g.beginPath();
        g.moveTo(x, y);
        g.lineTo(x + dx, y + dy);
        g.stroke();
        g.strokeStyle = `rgba(205,215,195,${0.06 + rand() * 0.06})`;
        g.beginPath();
        g.moveTo(x - dx * 0.4, y - dy * 0.4 - 1.5);
        g.lineTo(x + dx * 0.4, y + dy * 0.4 - 1.5);
        g.stroke();
    }
    // texture de forêt dense (dabs verts) sur toute la masse
    for (let i = 0; i < 1400; i++) {
        const x = 230 + rand() * 860, y = 110 + rand() * 500;
        g.fillStyle = `rgba(${60 + rand() * 40 | 0},${90 + rand() * 50 | 0},${50 + rand() * 30 | 0},${0.12 + rand() * 0.1})`;
        g.beginPath();
        g.ellipse(x, y, 3 + rand() * 4, 2 + rand() * 3, rand() * Math.PI, 0, Math.PI * 2);
        g.fill();
    }
    // --- Marais Bas : zone humide ---
    (function () {
        const z = TERRAIN_FEATURES.find(m => m.id === 'marais-bas');
        const swamp = g.createRadialGradient(z.x, z.y, 10, z.x, z.y, 150);
        swamp.addColorStop(0, 'rgba(60,90,80,0.5)');
        swamp.addColorStop(1, 'rgba(60,90,80,0)');
        g.fillStyle = swamp;
        g.beginPath();
        g.arc(z.x, z.y, 150, 0, Math.PI * 2);
        g.fill();
        g.strokeStyle = 'rgba(90,130,140,0.4)';
        g.lineWidth = 2;
        for (let i = 0; i < 4; i++) {
            g.beginPath();
            g.arc(z.x - 40 + i * 28, z.y + 18, 10 + i * 3, 0, Math.PI * 2);
            g.stroke();
        }
    })();
    // --- Forêt des Cendres : zone corrompue, cendres noircies et lézardes d'énergie violette ---
    (function () {
        const z = TERRAIN_FEATURES.find(m => m.id === 'foret-des-cendres');
        const corrupt = g.createRadialGradient(z.x, z.y, 10, z.x, z.y, 155);
        corrupt.addColorStop(0, 'rgba(28,18,26,0.75)');
        corrupt.addColorStop(1, 'rgba(28,18,26,0)');
        g.fillStyle = corrupt;
        g.beginPath();
        g.arc(z.x, z.y, 155, 0, Math.PI * 2);
        g.fill();
        for (let i = 0; i < 100; i++) {
            const x = z.x - 115 + rand() * 230, y = z.y - 95 + rand() * 190;
            g.fillStyle = `rgba(${40 + rand() * 30 | 0},${18 + rand() * 14 | 0},${30 + rand() * 20 | 0},0.4)`;
            g.beginPath();
            g.ellipse(x, y, 5 + rand() * 5, 4 + rand() * 4, rand() * Math.PI, 0, Math.PI * 2);
            g.fill();
        }
        g.strokeStyle = 'rgba(190,110,230,0.85)';
        g.lineWidth = 1.2;
        g.shadowColor = 'rgba(190,110,230,0.9)';
        g.shadowBlur = 6;
        for (let i = 0; i < 5; i++) {
            let x = z.x - 70 + rand() * 140, y = z.y - 70 + rand() * 140;
            g.beginPath();
            g.moveTo(x, y);
            for (let s = 0; s < 4; s++) {
                x += rand() * 30 - 15;
                y += rand() * 30 - 15;
                g.lineTo(x, y);
            }
            g.stroke();
        }
        g.shadowBlur = 0;
    })();
    // --- Côte Écarlate : falaises chaudes et tons ambrés ---
    (function () {
        const z = TERRAIN_FEATURES.find(m => m.id === 'cote-ecarlate');
        g.fillStyle = 'rgba(185,122,68,0.42)';
        g.beginPath();
        g.ellipse(z.x, z.y, 130, 90, 0, 0, Math.PI * 2);
        g.fill();
        for (let i = 0; i < 40; i++) {
            const x = z.x - 110 + rand() * 220, y = z.y - 70 + rand() * 140;
            g.fillStyle = `rgba(${190 + rand() * 40 | 0},${130 + rand() * 40 | 0},${70 + rand() * 30 | 0},0.3)`;
            g.beginPath();
            g.ellipse(x, y, 5 + rand() * 6, 3 + rand() * 4, rand() * Math.PI, 0, Math.PI * 2);
            g.fill();
        }
    })();
    g.restore();
    // --- petites îles au large, avec leurs propres pics (hors du clip continental) ---
    (function () {
        const islands = [[130, 190], [1225, 180], [95, 600], [1195, 605]];
        islands.forEach(([ix, iy]) => {
            g.beginPath();
            g.ellipse(ix, iy, 28 + rand() * 14, 17 + rand() * 8, 0, 0, Math.PI * 2);
            g.fillStyle = '#2c3526';
            g.fill();
            g.beginPath();
            g.moveTo(ix - 9, iy + 5);
            g.lineTo(ix, iy - 13);
            g.lineTo(ix + 9, iy + 5);
            g.closePath();
            g.fillStyle = 'rgba(212,217,224,0.75)';
            g.fill();
        });
    })();
    // rivières
    g.strokeStyle = 'rgba(90,130,160,0.55)';
    g.lineWidth = 4;
    g.lineCap = 'round';
    g.beginPath();
    g.moveTo(560, 140);
    g.quadraticCurveTo(600, 320, 700, 420);
    g.quadraticCurveTo(780, 500, 900, 540);
    g.stroke();
    // liseré de côte
    g.save();
    landPath();
    g.strokeStyle = 'rgba(180,195,205,0.35)';
    g.lineWidth = 2;
    g.stroke();
    g.restore();
    // sentier pointillé reliant les zones
    const order = ['cote-ecarlate', 'hauteterres', 'foret-des-cendres', 'marais-bas'];
    g.strokeStyle = 'rgba(196,201,209,0.55)';
    g.lineWidth = 2;
    g.setLineDash([6, 7]);
    g.beginPath();
    order.forEach((id, i) => {
        const z = TERRAIN_FEATURES.find(m => m.id === id);
        if (i === 0)
            g.moveTo(z.x, z.y);
        else
            g.lineTo(z.x, z.y);
    });
    g.stroke();
    g.setLineDash([]);
    // vignette globale
    const vg = g.createRadialGradient(WORLD_W * 0.5, WORLD_H * 0.5, 200, WORLD_W * 0.5, WORLD_H * 0.5, 750);
    vg.addColorStop(0, 'rgba(0,0,0,0)');
    vg.addColorStop(1, 'rgba(0,0,0,0.55)');
    g.fillStyle = vg;
    g.fillRect(0, 0, WORLD_W, WORLD_H);
    return canvas;
}
/* Calque de relief séparé : uniquement les pics des Hauteterres, peints sur un canevas
   transparent et surélevés en 3D (translateZ) au-dessus du calque de base. Combiné à
   l'inclinaison de la caméra (rotateX), ce décalage produit un vrai effet de parallaxe —
   le relief « bouge » différemment du sol plat quand on incline/zoome la carte. */
function paintReliefLayer() {
    const canvas = document.createElement('canvas');
    const SUPERSAMPLE = 2;
    canvas.width = WORLD_W * SUPERSAMPLE;
    canvas.height = WORLD_H * SUPERSAMPLE;
    canvas.style.width = WORLD_W + 'px';
    canvas.style.height = WORLD_H + 'px';
    const g = canvas.getContext('2d');
    g.scale(SUPERSAMPLE, SUPERSAMPLE);
    let seed = 42;
    function rand() { seed = (seed * 1103515245 + 12345) & 0x7fffffff; return (seed % 1000) / 1000; }
    // --- Hauteterres : montagnes en relief (rangée arrière embrumée + rangée avant ombrée) ---
    (function () {
        const z = TERRAIN_FEATURES.find(m => m.id === 'hauteterres');
        // rangée arrière : plus petite, plus claire et embrumée → sensation de profondeur
        for (let i = 0; i < 6; i++) {
            const mx = z.x - 165 + i * 58 + rand() * 16, my = z.y - 48 + ((i % 2) ? 8 : -8);
            const h = 30 + rand() * 20;
            g.beginPath();
            g.moveTo(mx - 28, my + 14);
            g.lineTo(mx, my - h);
            g.lineTo(mx + 28, my + 14);
            g.closePath();
            g.fillStyle = 'rgba(126,134,144,0.5)';
            g.fill();
        }
        // rangée avant : volume marqué (face éclairée / face ombrée), ombre portée, neige
        for (let i = 0; i < 7; i++) {
            const mx = z.x - 140 + i * 46 + rand() * 20, my = z.y - 30 + ((i % 3) - 1) * 36;
            const h = 46 + rand() * 40;
            g.beginPath();
            g.ellipse(mx + 8, my + 19, 38, 8, 0, 0, Math.PI * 2);
            g.fillStyle = 'rgba(0,0,0,0.24)';
            g.fill();
            g.beginPath();
            g.moveTo(mx, my - h);
            g.lineTo(mx - 34, my + 18);
            g.lineTo(mx, my + 18);
            g.closePath();
            g.fillStyle = '#5a6166';
            g.fill();
            g.beginPath();
            g.moveTo(mx, my - h);
            g.lineTo(mx, my + 18);
            g.lineTo(mx + 34, my + 18);
            g.closePath();
            g.fillStyle = '#33383b';
            g.fill();
            g.beginPath();
            g.moveTo(mx - 10, my - h + 16);
            g.lineTo(mx, my - h);
            g.lineTo(mx + 10, my - h + 16);
            g.lineTo(mx + 4, my - h + 22);
            g.lineTo(mx - 4, my - h + 22);
            g.closePath();
            g.fillStyle = 'rgba(230,235,240,0.9)';
            g.fill();
        }
    })();
    return canvas;
}
function initMap() {
    const container = document.getElementById('mapCanvasWrap');
    const labelsWrap = document.getElementById('mapLabelsWrap');
    const box = container ? container.closest('.map-box') : null;
    if (!container || !labelsWrap || !box)
        return;
    const worldEl = document.createElement('div');
    worldEl.className = 'map-world';
    const canvas = paintWorldMap();
    canvas.className = 'map-painted-canvas';
    worldEl.appendChild(canvas);
    const reliefCanvas = paintReliefLayer();
    reliefCanvas.className = 'map-relief-canvas';
    worldEl.appendChild(reliefCanvas);
    container.innerHTML = '';
    container.appendChild(worldEl);
    container.style.cursor = 'grab';
    labelsWrap.innerHTML = '';
    MAP_ZONES.forEach((z, i) => {
        const pin = document.createElement('div');
        pin.className = 'map-pin2d pin-enter';
        pin.style.left = z.x + 'px';
        pin.style.top = z.y + 'px';
        pin.innerHTML = `<div class="badge" style="--gclr:${z.glow}"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">${MAP_ZONE_ICONS[z.type] || ''}</svg></div><span class="lbl">${esc(z.label)}</span>`;
        pin.addEventListener('click', (ev) => { ev.stopPropagation(); openZonePanel(z.id); });
        pin.addEventListener('pointerenter', (ev) => showTooltip(z, ev));
        pin.addEventListener('pointermove', (ev) => showTooltip(z, ev));
        pin.addEventListener('pointerleave', hideTooltip);
        worldEl.appendChild(pin);
        setTimeout(() => pin.classList.remove('pin-enter'), 120 + i * 90);
    });
    const novelancePin = document.createElement('div');
    novelancePin.className = 'map-pin2d pin-enter';
    novelancePin.style.left = '760px';
    novelancePin.style.top = '420px';
    novelancePin.title = 'Novelance';
    novelancePin.innerHTML = `<div class="badge" style="--gclr:196,58,74"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="3.2" fill="currentColor" stroke="none"/><path d="M12 3v4M12 17v4M3 12h4M17 12h4"/></svg></div><span class="lbl">Novelance</span>`;
    novelancePin.addEventListener('click', (ev) => { ev.stopPropagation(); navigate('novelance'); });
    worldEl.appendChild(novelancePin);
    setTimeout(() => novelancePin.classList.remove('pin-enter'), 120 + MAP_ZONES.length * 90);
    MAP_ZONES.forEach(z => {
        (z.pois || []).forEach(p => {
            const poi = document.createElement('div');
            poi.className = 'map-poi';
            poi.dataset.zone = z.id;
            poi.style.left = p.x + 'px';
            poi.style.top = p.y + 'px';
            poi.innerHTML = `<span class="poi-dot"></span><span class="poi-label">${esc(p.label)}</span>`;
            poi.addEventListener('click', (ev) => { ev.stopPropagation(); openPoiPanel(z.id, p.id); });
            poi.addEventListener('pointerenter', (ev) => showPoiTooltip(p, ev));
            poi.addEventListener('pointermove', (ev) => showPoiTooltip(p, ev));
            poi.addEventListener('pointerleave', hideTooltip);
            worldEl.appendChild(poi);
        });
    });
    function showPoisForZone(id) {
        worldEl.querySelectorAll('.map-poi').forEach(el => {
            el.classList.toggle('visible', !!id && el.dataset.zone === id);
        });
    }
    const tooltipEl = document.getElementById('mapTooltip');
    function showTooltip(z, ev) {
        const chars = ENTRIES.filter(c => c.cat === 'personnages' && c.region === z.id);
        const rect = box.getBoundingClientRect();
        tooltipEl.style.left = (ev.clientX - rect.left + 14) + 'px';
        tooltipEl.style.top = (ev.clientY - rect.top + 14) + 'px';
        tooltipEl.innerHTML = `<div class="map-tooltip-title">${esc(z.label)}</div>` +
            (chars.length
                ? `<div class="map-tooltip-chars">${chars.map(c => `<div class="map-tooltip-chip" title="${esc(c.name)}">${esc(c.name.charAt(0))}</div>`).join('')}</div>`
                : `<div class="map-tooltip-empty">Aucun personnage lié pour l'instant</div>`);
        tooltipEl.classList.add('visible');
    }
    function showPoiTooltip(p, ev) {
        const chars = (p.chars || []).map(id => findEntry(id)).filter(Boolean);
        const rect = box.getBoundingClientRect();
        tooltipEl.style.left = (ev.clientX - rect.left + 14) + 'px';
        tooltipEl.style.top = (ev.clientY - rect.top + 14) + 'px';
        tooltipEl.innerHTML = `<div class="map-tooltip-title">${esc(p.label)}</div>` +
            (chars.length
                ? `<div class="map-tooltip-chars">${chars.map(c => `<div class="map-tooltip-chip" title="${esc(c.name)}">${esc(c.name.charAt(0))}</div>`).join('')}</div>`
                : `<div class="map-tooltip-empty">Aucun personnage lié pour l'instant</div>`);
        tooltipEl.classList.add('visible');
    }
    function hideTooltip() { tooltipEl.classList.remove('visible'); }
    // état caméra 2D (pan + zoom)
    const cam = { x: WORLD_W / 2, y: WORLD_H / 2, scale: Math.min(box.clientWidth / WORLD_W, box.clientHeight / WORLD_H) * 1.35, tiltDeg: 0 };
    const baseScale = cam.scale;
    const minScale = baseScale * 0.85, maxScale = baseScale * 3.6;
    let dragging = false, moved = false, tweening = false;
    let downPos = null;
    function apply() {
        const w = box.clientWidth, h = box.clientHeight;
        // Le recentrage (translate) doit s'appliquer APRÈS l'échelle/l'inclinaison/la perspective,
        // sinon l'inclinaison 3D dévie le point vers lequel on vient de zoomer hors du cadre.
        const tx = w / 2 - cam.x;
        const ty = h / 2 - cam.y;
        // La distance de perspective doit croître avec le zoom : sinon, à fort zoom/inclinaison,
        // le bord éloigné du monde (loin du point ciblé) finit derrière la caméra et se déforme
        // violemment (voire disparaît). En la liant à cam.scale, l'effet reste stable quelle que
        // soit la taille de l'écran ou le niveau de zoom.
        const persp = 1300 * cam.scale;
        container.style.perspective = `${persp}px`;
        worldEl.style.transform = `translate(${tx}px, ${ty}px) perspective(${persp}px) rotateX(${cam.tiltDeg}deg) scale(${cam.scale})`;
        worldEl.style.transformOrigin = `${cam.x}px ${cam.y}px`;
    }
    cam.scale = baseScale * 0.9;
    apply();
    requestAnimationFrame(() => tweenTo(null, 900, 0));
    function onDown(e) { if (tweening)
        return; dragging = true; moved = false; downPos = { x: e.clientX, y: e.clientY, cx: cam.x, cy: cam.y }; container.style.cursor = 'grabbing'; }
    function onMove(e) {
        if (!dragging || !downPos)
            return;
        const dx = e.clientX - downPos.x, dy = e.clientY - downPos.y;
        if (Math.hypot(dx, dy) > 4)
            moved = true;
        cam.x = downPos.cx - dx / cam.scale;
        cam.y = downPos.cy - dy / cam.scale;
        apply();
    }
    function onUp() { dragging = false; downPos = null; container.style.cursor = 'grab'; }
    function onWheel(e) {
        if (tweening)
            return;
        e.preventDefault();
        cam.scale = Math.max(minScale, Math.min(maxScale, cam.scale * (e.deltaY > 0 ? 0.9 : 1.1)));
        apply();
    }
    container.addEventListener('pointerdown', onDown);
    window.addEventListener('pointermove', onMove);
    window.addEventListener('pointerup', onUp);
    container.addEventListener('wheel', onWheel, { passive: false });
    // bascule 3D : zoom + inclinaison vers la cible cliquée (région ou point d'intérêt)
    function tweenTo(target, dur, tilt, scaleMult) {
        tweening = true;
        const from = { x: cam.x, y: cam.y, scale: cam.scale, tilt: cam.tiltDeg };
        const to = target
            ? { x: target.x, y: target.y, scale: Math.min(maxScale, baseScale * (scaleMult || 2.2)), tilt }
            : { x: WORLD_W / 2, y: WORLD_H / 2, scale: baseScale, tilt: 0 };
        const start = performance.now();
        function step(now) {
            const t = Math.min(1, (now - start) / dur);
            const ease = 1 - Math.pow(1 - t, 3);
            cam.x = from.x + (to.x - from.x) * ease;
            cam.y = from.y + (to.y - from.y) * ease;
            cam.scale = from.scale + (to.scale - from.scale) * ease;
            cam.tiltDeg = from.tilt + (to.tilt - from.tilt) * ease;
            apply();
            if (t < 1)
                requestAnimationFrame(step);
            else
                tweening = false;
        }
        requestAnimationFrame(step);
    }
    mapState = {
        focusZone(id) {
            const z = MAP_ZONES.find(m => m.id === id);
            if (z) { showPoisForZone(id); tweenTo({ x: z.x, y: z.y }, 850, 34, 2.2); }
        },
        focusPoi(zoneId, poiId) {
            const z = MAP_ZONES.find(m => m.id === zoneId);
            const p = z && z.pois ? z.pois.find(pp => pp.id === poiId) : undefined;
            if (p)
                tweenTo({ x: p.x, y: p.y }, 700, 44, 3.2);
        },
        resetView() { showPoisForZone(null); tweenTo(null, 700, 0); },
        cleanup() {
            container.removeEventListener('pointerdown', onDown);
            window.removeEventListener('pointermove', onMove);
            window.removeEventListener('pointerup', onUp);
            container.removeEventListener('wheel', onWheel);
            container.innerHTML = '';
            labelsWrap.innerHTML = '';
            hideTooltip();
        }
    };
}
function cleanupMap() {
    closeZonePanel();
    if (mapState && mapState.cleanup) {
        mapState.cleanup();
        mapState = null;
    }
}
function openZonePanel(id) {
    const entry = findEntry(id);
    if (!entry)
        return;
    if (mapState && mapState.focusZone)
        mapState.focusZone(id);
    const chars = ENTRIES.filter(e => e.cat === 'personnages' && e.region === id);
    const panel = document.getElementById('mapPanel');
    const content = document.getElementById('mapPanelContent');
    if (!panel || !content)
        return;
    content.innerHTML = `
    <div class="map-panel-eyebrow">${esc(CATS.lieux ? CATS.lieux.label : 'Lieu')}</div>
    <div class="map-panel-title">${esc(entry.name)}</div>
    ${chars.length ? `<div class="map-panel-chars">${chars.map(c => `<div class="map-panel-chip" title="${esc(c.name)}" onclick="navigate('entry-${c.id}')">${esc(c.name.charAt(0))}</div>`).join('')}</div>` : ''}
    <div class="map-panel-facts">
      ${Object.entries(entry.info || {}).map(([k, v]) => `<div><div class="map-panel-fact-k">${esc(k)}</div><div class="map-panel-fact-v">${esc(v)}</div></div>`).join('')}
    </div>
    <div class="map-panel-desc">${esc(entry.summary || '')}</div>
    <a class="map-panel-link" onclick="navigate('entry-${entry.id}')">En savoir plus →</a>
  `;
    panel.classList.add('open');
    const box = document.getElementById('mapBox');
    if (box)
        box.classList.add('focused');
}
function closeZonePanel() {
    const panel = document.getElementById('mapPanel');
    if (panel)
        panel.classList.remove('open');
    if (mapState && mapState.resetView)
        mapState.resetView();
    const box = document.getElementById('mapBox');
    if (box)
        box.classList.remove('focused');
}
function openPoiPanel(zoneId, poiId) {
    const zone = MAP_ZONES.find(z => z.id === zoneId);
    const poi = zone && zone.pois ? zone.pois.find(p => p.id === poiId) : undefined;
    if (!zone || !poi)
        return;
    if (mapState && mapState.focusPoi)
        mapState.focusPoi(zoneId, poiId);
    const chars = (poi.chars || []).map(id => findEntry(id)).filter(Boolean);
    const panel = document.getElementById('mapPanel');
    const content = document.getElementById('mapPanelContent');
    if (!panel || !content)
        return;
    content.innerHTML = `
    <div class="map-panel-eyebrow">${esc(zone.label)}</div>
    <div class="map-panel-title">${esc(poi.label)}</div>
    ${chars.length ? `<div class="map-panel-chars">${chars.map(c => `<div class="map-panel-chip" title="${esc(c.name)}" onclick="navigate('entry-${c.id}')">${esc(c.name.charAt(0))}</div>`).join('')}</div>` : ''}
    <div class="map-panel-facts">
      ${Object.entries(poi.facts || {}).map(([k, v]) => `<div><div class="map-panel-fact-k">${esc(k)}</div><div class="map-panel-fact-v">${esc(v)}</div></div>`).join('')}
    </div>
    <div class="map-panel-desc">${esc(poi.desc)}</div>
    <button class="map-panel-back" onclick="openZonePanel('${zoneId}')">← Retour à ${esc(zone.label)}</button>
  `;
    panel.classList.add('open');
    const box = document.getElementById('mapBox');
    if (box)
        box.classList.add('focused');
}
/* ---------------- CARTE — PAGE PLEIN ÉCRAN (couverture + exploration façon carte interactive) ---------------- */
function openMapOverlay() {
    let overlay = document.getElementById('mapOverlay');
    if (overlay && overlay.classList.contains('open'))
        return;
    if (!overlay) {
        overlay = document.createElement('div');
        overlay.id = 'mapOverlay';
        overlay.className = 'map-overlay';
        document.body.appendChild(overlay);
    }
    overlay.innerHTML = mapOverlayHtml();
    document.body.style.overflow = 'hidden';
    requestAnimationFrame(() => {
        overlay.classList.add('open');
        paintMapOverlayCover();
    });
}
function paintMapOverlayCover() {
    const holder = document.getElementById('mapOvCoverCanvasWrap');
    if (!holder)
        return;
    const canvas = paintWorldMap();
    const relief = paintReliefLayer();
    holder.innerHTML = '';
    holder.appendChild(canvas);
    holder.appendChild(relief);
}
function mapOverlayHtml() {
    return `
    <div class="map-ov-cover" id="mapOvCover">
      <div class="map-ov-cover-canvas-wrap" id="mapOvCoverCanvasWrap"></div>
      <div class="map-ov-cover-scrim"></div>
      <button class="map-ov-close" onclick="navigate('home')" aria-label="Fermer la carte">✕</button>
      <div class="map-ov-cover-content">
        <div class="map-ov-eyebrow">Explorez et découvrez</div>
        <h1 class="map-ov-title">${esc(CONTINENT_NAME)}</h1>
        <div class="hero-divider"></div>
        <button class="map-ov-explore-btn" onclick="startMapExplore()">Commencer à explorer</button>
      </div>
    </div>
    <div class="map-ov-explore" id="mapOvExplore">
      <button class="map-ov-close" onclick="navigate('home')" aria-label="Fermer la carte">✕</button>
      <div class="map-box map-box-overlay" id="mapBox">
        <div class="map-toolbar">
          <button class="map-toolbar-btn" onclick="closeZonePanel()" title="Recentrer la carte" aria-label="Recentrer la carte">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 11l9-8 9 8"/><path d="M5 10v10h14V10"/></svg>
          </button>
        </div>
        <div class="map-canvas-wrap" id="mapCanvasWrap"></div>
        <div class="map-tiltshift top"></div>
        <div class="map-tiltshift bottom"></div>
        <div class="map-vignette"></div>
        <div class="map-labels" id="mapLabelsWrap"></div>
        <div class="map-tooltip" id="mapTooltip"></div>
        <div class="map-panel" id="mapPanel">
          <button class="map-panel-close" onclick="closeZonePanel()">✕</button>
          <div id="mapPanelContent"></div>
        </div>
      </div>
    </div>
  `;
}
function startMapExplore() {
    const cover = document.getElementById('mapOvCover');
    const explore = document.getElementById('mapOvExplore');
    if (!cover || !explore)
        return;
    cover.classList.add('leaving');
    explore.classList.add('active');
    initMap();
    setTimeout(() => { cover.style.display = 'none'; }, 650);
}
function closeMapOverlay() {
    const overlay = document.getElementById('mapOverlay');
    if (!overlay)
        return;
    cleanupMap();
    overlay.classList.remove('open');
    document.body.style.overflow = '';
    setTimeout(() => { const el = document.getElementById('mapOverlay'); if (el)
        el.remove(); }, 420);
}
/* ---------------- NOVELANCE — CARTE DE LA CITÉ-BASTION (plan radial) ---------------- */
const NOVELANCE_DISTRICTS = [
    { id: 'centre', label: 'Centre politique / Halcyon', color: '#e8dcd8',
        desc: "Le cœur du pouvoir de Novelance : sièges administratifs et laboratoires de Halcyon, protégés par plusieurs anneaux de sécurité concentriques. Personne n'y entre sans habilitation." },
    { id: 'superieurs', label: 'Quartiers supérieurs', color: '#b4394a',
        desc: "Résidences des dirigeants, des cadres de Halcyon et des hybrides de haut rang, à l'ombre immédiate du centre politique. L'architecture y est aussi imposante que surveillée." },
    { id: 'intermediaires', label: 'Quartiers intermédiaires', color: '#c97f42',
        desc: "Commerces, écoles et logements de la classe moyenne de la cité — le tissu le plus animé de Novelance, entre les fastes du centre et la densité des faubourgs." },
    { id: 'populaires', label: 'Quartiers populaires', color: '#6d7178',
        desc: "Le quotidien de la majorité des habitants : bâtiments plus anciens, plus denses, souvent hérités d'avant la reconstruction. C'est ici que bat le vrai pouls de la ville." },
    { id: 'industrielle', label: 'Zone industrielle / portuaire', color: '#5c7789',
        desc: "Usines, entrepôts et quais qui alimentent Novelance en ressources et en Essence. Le trafic y est incessant, jour et nuit, entre les cargos et les convois vers le centre." },
    { id: 'ruines', label: 'Ancienne cité (ruines)', color: '#4a2c37',
        desc: "Les vestiges de la ville d'avant la chute, jamais totalement reconstruits ni abandonnés. Certains y vivent encore, en marge de la Novelance officielle." },
    { id: 'faubourgs', label: 'Faubourgs', color: '#5a6b4a',
        desc: "La ceinture extérieure de la cité : lotissements épars, entrepôts et petites exploitations qui s'étendent bien au-delà des remparts, là où Novelance se dissout peu à peu dans la campagne." },
];
function novelancePolar(cx, cy, r, angleDeg) {
    const a = (angleDeg - 90) * Math.PI / 180;
    return [cx + r * Math.cos(a), cy + r * Math.sin(a)];
}
function novelanceShade(hex, factor) {
    const h = hex.replace('#', '');
    const r = Math.min(255, Math.round(parseInt(h.substring(0, 2), 16) * factor));
    const g = Math.min(255, Math.round(parseInt(h.substring(2, 4), 16) * factor));
    const b = Math.min(255, Math.round(parseInt(h.substring(4, 6), 16) * factor));
    return `rgb(${r},${g},${b})`;
}
function novelancePointInPolygon(pt, poly) {
    let inside = false;
    for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) {
        const xi = poly[i][0], yi = poly[i][1], xj = poly[j][0], yj = poly[j][1];
        const intersect = ((yi > pt[1]) !== (yj > pt[1])) && (pt[0] < (xj - xi) * (pt[1] - yi) / (yj - yi) + xi);
        if (intersect) inside = !inside;
    }
    return inside;
}
const NOVELANCE_ISO_C = Math.cos(Math.PI / 6);
const NOVELANCE_ISO_S = Math.sin(Math.PI / 6);
const NOVELANCE_ISO_TX = 1300, NOVELANCE_ISO_TY = 550;
function novelanceIsoProject(x, y, z = 0) {
    return [NOVELANCE_ISO_C * (x - y) + NOVELANCE_ISO_TX, NOVELANCE_ISO_S * (x + y) - z + NOVELANCE_ISO_TY];
}
function novelanceRotatePoint(x, y, cx, cy, angleDeg) {
    const a = angleDeg * Math.PI / 180;
    const dx = x - cx, dy = y - cy;
    return [cx + dx * Math.cos(a) - dy * Math.sin(a), cy + dx * Math.sin(a) + dy * Math.cos(a)];
}
function novelanceShrinkQuad(corners, factor) {
    const ccx = corners.reduce((s, p) => s + p[0], 0) / corners.length;
    const ccy = corners.reduce((s, p) => s + p[1], 0) / corners.length;
    return corners.map(p => [ccx + (p[0] - ccx) * factor, ccy + (p[1] - ccy) * factor]);
}
function novelanceIsoBuilding(corners, baseZ, topZ, topColor, wallColor) {
    const ccx = corners.reduce((s, p) => s + p[0], 0) / corners.length;
    const ccy = corners.reduce((s, p) => s + p[1], 0) / corners.length;
    const base = corners.map(p => novelanceIsoProject(p[0], p[1], baseZ));
    const top = corners.map(p => novelanceIsoProject(p[0], p[1], topZ));
    const n = corners.length;
    let walls = '';
    for (let i = 0; i < n; i++) {
        const j = (i + 1) % n;
        const mx = (corners[i][0] + corners[j][0]) / 2, my = (corners[i][1] + corners[j][1]) / 2;
        if ((mx - ccx) + (my - ccy) <= 0) continue;
        const pts = [base[i], base[j], top[j], top[i]];
        walls += `<polygon points="${pts.map(p => `${p[0].toFixed(1)},${p[1].toFixed(1)}`).join(' ')}" fill="${wallColor}" pointer-events="none"/>`;
    }
    const roof = `<polygon points="${top.map(p => `${p[0].toFixed(1)},${p[1].toFixed(1)}`).join(' ')}" fill="${topColor}" pointer-events="none"/>`;
    return { key: ccx + ccy, svg: walls + roof };
}
function novelanceRingBuildings(cx, cy, rInner, rOuter, color, angStepDeg, radialBands, seed, baseHeight, districtId, rotation, ruined, tierChance = 0.3) {
    let s = seed;
    const rand = () => { s = (s * 1103515245 + 12345) & 0x7fffffff; return (s % 1000) / 1000; };
    const pieces = [];
    const angCount = Math.round(360 / angStepDeg);
    const inset = 0.14;
    for (let ai = 0; ai < angCount; ai++) {
        const aStart = ai * angStepDeg + rotation, aEnd = aStart + angStepDeg;
        for (let ri = 0; ri < radialBands; ri++) {
            if (rand() < 0.09) continue;
            const uStart = ri / radialBands, uEnd = (ri + 1) / radialBands;
            const rS = rInner + (rOuter - rInner) * uStart, rE = rInner + (rOuter - rInner) * uEnd;
            const c00 = novelancePolar(cx, cy, rS, aStart), c10 = novelancePolar(cx, cy, rE, aStart);
            const c11 = novelancePolar(cx, cy, rE, aEnd), c01 = novelancePolar(cx, cy, rS, aEnd);
            const bilerp = (u, v) => {
                const top = [c00[0] + (c10[0] - c00[0]) * u, c00[1] + (c10[1] - c00[1]) * u];
                const bot = [c01[0] + (c11[0] - c01[0]) * u, c01[1] + (c11[1] - c01[1]) * u];
                return [top[0] + (bot[0] - top[0]) * v, top[1] + (bot[1] - top[1]) * v];
            };
            const pts = [bilerp(inset, inset), bilerp(1 - inset, inset), bilerp(1 - inset, 1 - inset), bilerp(inset, 1 - inset)];
            const ccx = pts.reduce((s2, p) => s2 + p[0], 0) / 4, ccy = pts.reduce((s2, p) => s2 + p[1], 0) / 4;
            const shade = 0.78 + rand() * 0.4;
            if (ruined && rand() < 0.4) {
                const flat = pts.map(p => novelanceIsoProject(p[0], p[1], 0));
                pieces.push({ key: ccx + ccy, svg: `<polygon points="${flat.map(p => `${p[0].toFixed(1)},${p[1].toFixed(1)}`).join(' ')}" fill="none" stroke="${novelanceShade(color, shade)}" stroke-width="1.2" opacity="0.5" pointer-events="none"/>` });
                continue;
            }
            const h = baseHeight * (0.55 + rand() * 0.9);
            const piece = novelanceIsoBuilding(pts, 0, h, novelanceShade(color, shade), novelanceShade(color, shade * 0.5));
            if (rand() < tierChance) {
                const small = novelanceShrinkQuad(pts, 0.5);
                const h2 = h + baseHeight * (0.3 + rand() * 0.6);
                const topTier = novelanceIsoBuilding(small, h, h2, novelanceShade(color, Math.min(1.35, shade * 1.08)), novelanceShade(color, shade * 0.45));
                piece.svg += topTier.svg;
            }
            piece.svg = `<g class="novelance-building" onclick="onNovelanceBuildingClick(event,'${districtId}')">${piece.svg}</g>`;
            pieces.push(piece);
        }
    }
    return pieces;
}
function novelanceScatterBuildings(poly, color, count, seed, baseHeight, districtId, ruined) {
    let s = seed;
    const rand = () => { s = (s * 1103515245 + 12345) & 0x7fffffff; return (s % 1000) / 1000; };
    const xs = poly.map(p => p[0]), ys = poly.map(p => p[1]);
    const minX = Math.min(...xs), maxX = Math.max(...xs), minY = Math.min(...ys), maxY = Math.max(...ys);
    const pieces = [];
    let placed = 0, attempts = 0;
    while (placed < count && attempts < count * 10) {
        attempts++;
        const x = minX + rand() * (maxX - minX), y = minY + rand() * (maxY - minY);
        if (!novelancePointInPolygon([x, y], poly)) continue;
        const w = 9 + rand() * 15, hlen = 9 + rand() * 15;
        const corners = [[x - w / 2, y - hlen / 2], [x + w / 2, y - hlen / 2], [x + w / 2, y + hlen / 2], [x - w / 2, y + hlen / 2]];
        const shade = 0.72 + rand() * 0.42;
        if (ruined && rand() < 0.4) {
            const flat = corners.map(p => novelanceIsoProject(p[0], p[1], 0));
            pieces.push({ key: x + y, svg: `<polygon points="${flat.map(p => `${p[0].toFixed(1)},${p[1].toFixed(1)}`).join(' ')}" fill="none" stroke="${novelanceShade(color, shade)}" stroke-width="1.2" opacity="0.5" pointer-events="none"/>` });
            placed++;
            continue;
        }
        const h = baseHeight * (0.5 + rand() * 1.1);
        const piece = novelanceIsoBuilding(corners, 0, h, novelanceShade(color, shade), novelanceShade(color, shade * 0.5));
        piece.svg = `<g class="novelance-building" onclick="onNovelanceBuildingClick(event,'${districtId}')">${piece.svg}</g>`;
        pieces.push(piece);
        placed++;
    }
    return pieces;
}
function onNovelanceBuildingClick(evt, districtId) {
    evt.stopPropagation();
    const g = evt.currentTarget;
    document.querySelectorAll('.novelance-building.novelance-lit').forEach(el => { if (el !== g) el.classList.remove('novelance-lit'); });
    g.classList.toggle('novelance-lit');
    showNovelanceDistrict(districtId);
}
function novelanceMapSvg(rotation = 0) {
    const cx = 430, cy = 400;
    const r0 = 60, r1 = 130, r2 = 205, r3 = 280, r4 = 385;
    const road = '#5be6ee';
    const roadDim = 'rgba(91,230,238,0.4)';
    const isoMatrix = `matrix(${NOVELANCE_ISO_C.toFixed(4)},${NOVELANCE_ISO_S.toFixed(4)},${(-NOVELANCE_ISO_C).toFixed(4)},${NOVELANCE_ISO_S.toFixed(4)},${NOVELANCE_ISO_TX},${NOVELANCE_ISO_TY})`;
    const rotateFlat = `rotate(${rotation} ${cx} ${cy})`;
    const spokes = Array.from({ length: 12 }, (_, i) => {
        const ang = i * 30;
        const [x1, y1] = novelancePolar(cx, cy, r0, ang);
        const [x2, y2] = novelancePolar(cx, cy, r4, ang);
        return `<line x1="${x1.toFixed(1)}" y1="${y1.toFixed(1)}" x2="${x2.toFixed(1)}" y2="${y2.toFixed(1)}" stroke="${roadDim}" stroke-width="1.4"/>`;
    }).join('');
    const junctions = [r0, r1, r2, r3, r4].map(r => Array.from({ length: 12 }, (_, i) => {
        const [x, y] = novelancePolar(cx, cy, r, i * 30);
        return `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="2.4" fill="${road}"/>`;
    }).join('')).join('');
    const farRoads = [15, 75, 135, 195, 255, 315].map(ang => {
        const [x1, y1] = novelancePolar(cx, cy, r4 - 10, ang);
        const [x2, y2] = novelancePolar(cx, cy, r4 + 230, ang);
        return `<line x1="${x1.toFixed(1)}" y1="${y1.toFixed(1)}" x2="${x2.toFixed(1)}" y2="${y2.toFixed(1)}" stroke="${roadDim}" stroke-width="1"/>`;
    }).join('');
    const terrainPatchesData = [
        [[-260, -40], [-140, -120], [10, -90], [60, -10], [-30, 70], [-180, 60]],
        [[900, -160], [1060, -210], [1180, -90], [1120, 40], [960, 10]],
        [[-320, 420], [-190, 340], [-60, 400], [-90, 540], [-260, 560]],
        [[880, 760], [1040, 700], [1180, 780], [1120, 900], [940, 880]],
        [[300, 900], [460, 860], [540, 950], [460, 1040], [300, 1020]],
    ];
    const terrainPatches = terrainPatchesData.map((pts, i) => {
        const c = i % 2 === 0 ? '#3c4a34' : '#2f3a2e';
        return `<path d="${pts.map((p, j) => `${j === 0 ? 'M' : 'L'}${p[0]},${p[1]}`).join(' ')} Z" fill="${c}" opacity="0.4"/>`;
    }).join('');
    const ships = [
        [1005, 300, 20, '0'], [1040, 345, -8, '1'], [990, 400, 0, '2'], [1035, 455, 10, '3'], [1000, 505, -4, '4'],
        [1105, 375, 15, '5'], [1120, 430, -10, '6'],
    ].map(([x, y, rot]) => `
    <g transform="translate(${x},${y}) rotate(${rot})" fill="rgba(212,222,236,0.7)" opacity="0.8">
      <path d="M-14,0 L10,0 L14,-3 L-14,-3 Z"/>
    </g>`).join('');
    const industriePoly = [[685, 300], [790, 255], [865, 285], [885, 340], [860, 400], [885, 460], [865, 520], [790, 548], [685, 500]];
    const ruinesPoly = [[150, 560], [232, 518], [322, 540], [382, 582], [420, 650], [400, 720], [318, 742], [216, 720], [146, 680], [120, 618]];
    const industriePolyRot = industriePoly.map(p => novelanceRotatePoint(p[0], p[1], cx, cy, rotation));
    const ruinesPolyRot = ruinesPoly.map(p => novelanceRotatePoint(p[0], p[1], cx, cy, rotation));
    const reliefHillsData = [
        [-160, -60, 150, 26], [980, -140, 170, 32], [-220, 480, 140, 22],
        [960, 780, 160, 28], [360, 960, 130, 20], [-40, -260, 120, 18],
    ];
    const reliefHills = reliefHillsData.map(([x, y, radius, height], i) => {
        const n = 8;
        const pts = Array.from({ length: n }, (_, k) => {
            const a = (k / n) * Math.PI * 2;
            const rr = radius * (0.8 + 0.2 * Math.sin(k * 2.3 + i));
            return novelanceRotatePoint(x + Math.cos(a) * rr, y + Math.sin(a) * rr, cx, cy, rotation);
        });
        const c = i % 2 === 0 ? '#4a5a3e' : '#3d4a36';
        const piece = novelanceIsoBuilding(pts, 0, height, novelanceShade(c, 1.05), novelanceShade(c, 0.55));
        return { key: piece.key - 100000, svg: piece.svg };
    });
    const buildingPieces = [
        ...reliefHills,
        ...novelanceRingBuildings(cx, cy, 0, r0, '#e8dcd8', 15, 2, 11, 130, 'centre', rotation, false, 0.55),
        ...novelanceRingBuildings(cx, cy, r0, r1, '#b4394a', 18, 2, 23, 110, 'superieurs', rotation, false, 0.5),
        ...novelanceRingBuildings(cx, cy, r1, r2, '#c97f42', 14, 2, 37, 42, 'intermediaires', rotation, false, 0.3),
        ...novelanceRingBuildings(cx, cy, r2, r3, '#6d7178', 12, 2, 53, 28, 'populaires', rotation, false, 0.25),
        ...novelanceRingBuildings(cx, cy, r3, r4, '#5a6b4a', 10, 1, 61, 15, 'faubourgs', rotation, false, 0.1),
        ...novelanceScatterBuildings(industriePolyRot, '#5c7789', 40, 71, 34, 'industrielle'),
        ...novelanceScatterBuildings(ruinesPolyRot, '#4a2c37', 30, 89, 14, 'ruines', true),
    ];
    buildingPieces.sort((a, b) => a.key - b.key);
    const buildingsSvg = buildingPieces.map(p => p.svg).join('');
    return `
  <svg class="novelance-svg" id="novelanceSvg" viewBox="0 0 2600 1500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Carte de Novelance">
    <defs>
      <filter id="novGlow" x="-60%" y="-60%" width="220%" height="220%">
        <feGaussianBlur stdDeviation="2.6" result="blur"/>
        <feMerge>
          <feMergeNode in="blur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
      <radialGradient id="novBg" cx="42%" cy="38%" r="80%">
        <stop offset="0%" stop-color="#0e1a1a"/>
        <stop offset="55%" stop-color="#081014"/>
        <stop offset="100%" stop-color="#02040a"/>
      </radialGradient>
    </defs>
    <rect x="0" y="0" width="2600" height="1500" fill="url(#novBg)"/>

    <!-- terrain environnant + routes lointaines (purement décoratif) -->
    <g transform="${isoMatrix}">
      <g transform="${rotateFlat}">${terrainPatches}${farRoads}</g>
    </g>

    <!-- sol / zones cliquables (fond sombre, la couleur du district vient des bâtiments par-dessus) -->
    <g transform="${isoMatrix}">
      <g transform="${rotateFlat}">
        <g class="novelance-district" data-id="industrielle" onclick="showNovelanceDistrict('industrielle')" style="cursor:pointer">
          <path d="${industriePoly.map((p, i) => `${i === 0 ? 'M' : 'L'}${p[0]},${p[1]}`).join(' ')} Z" fill="${novelanceShade('#5c7789', 0.14)}"/>
        </g>
        <g class="novelance-district" data-id="ruines" onclick="showNovelanceDistrict('ruines')" style="cursor:pointer">
          <path d="${ruinesPoly.map((p, i) => `${i === 0 ? 'M' : 'L'}${p[0]},${p[1]}`).join(' ')} Z" fill="${novelanceShade('#4a2c37', 0.14)}"/>
        </g>
        <g class="novelance-district" data-id="faubourgs" onclick="showNovelanceDistrict('faubourgs')" style="cursor:pointer">
          <circle cx="${cx}" cy="${cy}" r="${r4}" fill="${novelanceShade('#5a6b4a', 0.14)}"/>
        </g>
        <g class="novelance-district" data-id="populaires" onclick="showNovelanceDistrict('populaires')" style="cursor:pointer">
          <circle cx="${cx}" cy="${cy}" r="${r3}" fill="${novelanceShade('#6d7178', 0.14)}"/>
        </g>
        <g class="novelance-district" data-id="intermediaires" onclick="showNovelanceDistrict('intermediaires')" style="cursor:pointer">
          <circle cx="${cx}" cy="${cy}" r="${r2}" fill="${novelanceShade('#c97f42', 0.14)}"/>
        </g>
        <g class="novelance-district" data-id="superieurs" onclick="showNovelanceDistrict('superieurs')" style="cursor:pointer">
          <circle cx="${cx}" cy="${cy}" r="${r1}" fill="${novelanceShade('#b4394a', 0.14)}"/>
        </g>
        <g class="novelance-district" data-id="centre" onclick="showNovelanceDistrict('centre')" style="cursor:pointer">
          <circle cx="${cx}" cy="${cy}" r="${r0}" fill="${novelanceShade('#e8dcd8', 0.16)}"/>
        </g>
      </g>
    </g>

    <!-- bâtiments et collines : extrusion isométrique, triés par profondeur -->
    ${buildingsSvg}

    <!-- port : quais et navires -->
    <g transform="${isoMatrix}" pointer-events="none">
      <g transform="${rotateFlat}">
        <line x1="885" y1="340" x2="1080" y2="320" stroke="${road}" stroke-width="7" opacity="0.55"/>
        <line x1="885" y1="400" x2="1055" y2="400" stroke="${road}" stroke-width="7" opacity="0.55"/>
        <line x1="885" y1="460" x2="1080" y2="480" stroke="${road}" stroke-width="7" opacity="0.55"/>
        <circle cx="1120" cy="400" r="26" fill="${novelanceShade('#5c7789', 0.6)}"/>
        <line x1="1055" y1="400" x2="1094" y2="400" stroke="${road}" stroke-width="3" opacity="0.55"/>
        <line x1="1120" y1="374" x2="1120" y2="330" stroke="${road}" stroke-width="5" opacity="0.55"/>
        <line x1="1120" y1="426" x2="1120" y2="470" stroke="${road}" stroke-width="5" opacity="0.55"/>
      </g>
    </g>
    <g transform="${isoMatrix}"><g transform="${rotateFlat}">${ships}</g></g>

    <!-- voirie : avenues radiales, anneaux de rocade, carrefours (lueur néon) -->
    <g transform="${isoMatrix}" filter="url(#novGlow)" pointer-events="none">
      <g transform="${rotateFlat}">
        ${spokes}
        <circle cx="${cx}" cy="${cy}" r="${r0}" fill="none" stroke="${road}" stroke-width="1.8"/>
        <circle cx="${cx}" cy="${cy}" r="${r1}" fill="none" stroke="${road}" stroke-width="1.8"/>
        <circle cx="${cx}" cy="${cy}" r="${r2}" fill="none" stroke="${road}" stroke-width="1.8"/>
        <circle cx="${cx}" cy="${cy}" r="${r3}" fill="none" stroke="${road}" stroke-width="1.8"/>
        <circle cx="${cx}" cy="${cy}" r="${r4}" fill="none" stroke="${road}" stroke-width="1.8"/>
        ${junctions}
      </g>
    </g>
  </svg>`;
}
function novelanceHudHtml() {
    return `
    <div class="novelance-hud">
      <div class="novelance-hud-title">
        <svg width="32" height="52" viewBox="0 0 32 52">
          <path d="M8,0 L14,26 L8,52 L2,26 Z" fill="none" stroke="#c9cfda" stroke-width="1.6"/>
          <path d="M0,26 L16,20 L32,26 L16,32 Z" fill="none" stroke="#c9cfda" stroke-width="1.2" opacity="0.7"/>
        </svg>
        <div>
          <div class="novelance-hud-name">NOVELANCE</div>
          <div class="novelance-hud-tagline">LE BASTION DE LA NOUVELLE ÈRE</div>
        </div>
      </div>

      <div class="novelance-hud-legend">
        <div class="novelance-hud-legend-title">DISTRICTS</div>
        ${NOVELANCE_DISTRICTS.map(d => `
          <div class="novelance-hud-legend-row"><span class="novelance-hud-swatch" style="background:${d.color}"></span>${esc(d.label)}</div>
        `).join('')}
        <div class="novelance-hud-legend-divider"></div>
        <div class="novelance-hud-legend-row"><span class="novelance-hud-line" style="border-top:1.4px solid #5be6ee"></span>Réseau de transport aérien</div>
        <div class="novelance-hud-legend-row"><span class="novelance-hud-line" style="border-top:3px solid #5be6ee"></span>Réseau de transport au sol</div>
        <div class="novelance-hud-legend-row"><span class="novelance-hud-line" style="border-top:4px solid #5c7789"></span>Port / zone maritime</div>
        <div class="novelance-hud-legend-row"><span class="novelance-hud-line" style="border-top:1px dashed rgba(91,230,238,0.4)"></span>Limite de district</div>
      </div>

      <div class="novelance-hud-compass">
        <svg width="88" height="88" viewBox="-44 -44 88 88">
          <circle cx="0" cy="0" r="34" fill="none" stroke="rgba(91,230,238,0.4)" stroke-width="1.2"/>
          <path d="M0,-26 L7,0 L0,26 L-7,0 Z" fill="#c7cfdb" opacity="0.85"/>
          <text x="0" y="-38" text-anchor="middle" font-family="'IBM Plex Mono', monospace" font-size="11" fill="#c7cfdb">N</text>
          <text x="44" y="4" text-anchor="middle" font-family="'IBM Plex Mono', monospace" font-size="11" fill="#9aa7b8">E</text>
          <text x="0" y="50" text-anchor="middle" font-family="'IBM Plex Mono', monospace" font-size="11" fill="#9aa7b8">S</text>
          <text x="-44" y="4" text-anchor="middle" font-family="'IBM Plex Mono', monospace" font-size="11" fill="#9aa7b8">O</text>
        </svg>
      </div>

      <div class="novelance-hud-scale">
        <svg width="200" height="30" viewBox="0 0 200 30">
          <line x1="10" y1="20" x2="190" y2="20" stroke="#5be6ee" stroke-width="1.4"/>
          ${[10, 70, 130, 190].map(x => `<line x1="${x}" y1="15" x2="${x}" y2="25" stroke="#5be6ee" stroke-width="1.4"/>`).join('')}
          <text x="10" y="12" text-anchor="middle" font-family="'IBM Plex Mono', monospace" font-size="10" fill="#9aa7b8">0</text>
          <text x="70" y="12" text-anchor="middle" font-family="'IBM Plex Mono', monospace" font-size="10" fill="#9aa7b8">1</text>
          <text x="130" y="12" text-anchor="middle" font-family="'IBM Plex Mono', monospace" font-size="10" fill="#9aa7b8">2</text>
          <text x="190" y="12" text-anchor="middle" font-family="'IBM Plex Mono', monospace" font-size="10" fill="#9aa7b8">5 km</text>
        </svg>
      </div>

      <div class="novelance-hud-rotate">
        <button type="button" class="novelance-hud-rotate-btn" onclick="rotateNovelanceMap(-30)" title="Tourner à gauche" aria-label="Tourner à gauche">⟲</button>
        <button type="button" class="novelance-hud-rotate-btn" onclick="rotateNovelanceMap(30)" title="Tourner à droite" aria-label="Tourner à droite">⟳</button>
      </div>

      <div class="novelance-hud-hint">🖱️ Glisser pour déplacer · Clic droit + glisser pour tourner · Molette pour zoomer</div>
    </div>
  `;
}
function renderNovelance() {
    novelanceRotationDeg = 0;
    novelanceCam = null;
    return `
    <div class="crumbs"><span onclick="navigate('home')" style="cursor:pointer">Accueil</span> / <span onclick="navigate('carte')" style="cursor:pointer">Carte</span> / Novelance</div>
    <div class="novelance-page">
      <div class="novelance-map-wrap" id="novelanceMapWrap">
        ${novelanceMapSvg(novelanceRotationDeg)}
        ${novelanceHudHtml()}
      </div>
      <div class="novelance-info" id="novelanceInfo">
        <div class="novelance-info-hint">Clique sur un quartier ou un bâtiment de la carte pour en savoir plus.</div>
      </div>
    </div>
  `;
}
const NOVELANCE_WORLD_W = 2600, NOVELANCE_WORLD_H = 1500;
let novelanceRotationDeg = 0;
let novelanceCam = null;
function novelanceRegenerateMap() {
    const wrap = document.getElementById('novelanceMapWrap');
    if (!wrap) return;
    wrap.innerHTML = novelanceMapSvg(novelanceRotationDeg) + novelanceHudHtml();
    const svg = document.getElementById('novelanceSvg');
    if (svg) {
        svg.style.transformOrigin = '0 0';
        if (novelanceCam) svg.style.transform = `translate(${novelanceCam.x}px, ${novelanceCam.y}px) scale(${novelanceCam.scale})`;
    }
}
function rotateNovelanceMap(delta) {
    novelanceRotationDeg = (novelanceRotationDeg + delta + 360) % 360;
    novelanceRegenerateMap();
}
function initNovelanceMap() {
    const wrap = document.getElementById('novelanceMapWrap');
    if (!wrap) return;
    const minScale = 0.28, maxScale = 2.2;
    function getSvg() { return document.getElementById('novelanceSvg'); }
    function apply() {
        const svg = getSvg();
        if (svg && novelanceCam) svg.style.transform = `translate(${novelanceCam.x}px, ${novelanceCam.y}px) scale(${novelanceCam.scale})`;
    }
    if (!novelanceCam) {
        const wrapRect = wrap.getBoundingClientRect();
        const scale = 0.32;
        novelanceCam = { scale, x: (wrapRect.width - NOVELANCE_WORLD_W * scale) / 2, y: (wrapRect.height - NOVELANCE_WORLD_H * scale) / 2 };
    }
    const initSvg = getSvg();
    if (initSvg) initSvg.style.transformOrigin = '0 0';
    apply();
    let dragging = false, moved = false;
    let down = null;
    let rotatingDrag = false;
    let rotateDown = null;
    let rafPending = false;
    function scheduleRegenerate() {
        if (rafPending) return;
        rafPending = true;
        requestAnimationFrame(() => { rafPending = false; novelanceRegenerateMap(); });
    }
    wrap.addEventListener('contextmenu', (e) => e.preventDefault());
    function onDown(e) {
        if (!novelanceCam) return;
        if (e.button === 2) {
            rotatingDrag = true; moved = false;
            rotateDown = { x: e.clientX, rot: novelanceRotationDeg };
            wrap.style.cursor = 'grabbing';
            return;
        }
        if (e.button !== 0) return;
        dragging = true; moved = false;
        down = { x: e.clientX, y: e.clientY, cx: novelanceCam.x, cy: novelanceCam.y };
        wrap.style.cursor = 'grabbing';
    }
    function onMove(e) {
        if (rotatingDrag && rotateDown) {
            const dx = e.clientX - rotateDown.x;
            if (Math.abs(dx) > 2) moved = true;
            const sensitivity = 0.35;
            novelanceRotationDeg = ((rotateDown.rot + dx * sensitivity) % 360 + 360) % 360;
            scheduleRegenerate();
            return;
        }
        if (!dragging || !down || !novelanceCam) return;
        const dx = e.clientX - down.x, dy = e.clientY - down.y;
        if (Math.hypot(dx, dy) > 4) moved = true;
        novelanceCam.x = down.cx + dx;
        novelanceCam.y = down.cy + dy;
        apply();
    }
    function onUp() {
        if (rotatingDrag) {
            rotatingDrag = false;
            rotateDown = null;
            wrap.style.cursor = 'grab';
            if (moved) {
                const block = (ev) => { ev.stopPropagation(); wrap.removeEventListener('click', block, true); };
                wrap.addEventListener('click', block, true);
            }
            return;
        }
        dragging = false;
        wrap.style.cursor = 'grab';
        if (moved) {
            const block = (ev) => { ev.stopPropagation(); wrap.removeEventListener('click', block, true); };
            wrap.addEventListener('click', block, true);
        }
        down = null;
    }
    function onWheel(e) {
        if (!novelanceCam) return;
        e.preventDefault();
        const rect = wrap.getBoundingClientRect();
        const mx = e.clientX - rect.left, my = e.clientY - rect.top;
        const prevScale = novelanceCam.scale;
        novelanceCam.scale = Math.max(minScale, Math.min(maxScale, novelanceCam.scale * (e.deltaY > 0 ? 0.9 : 1.1)));
        novelanceCam.x = mx - (mx - novelanceCam.x) * (novelanceCam.scale / prevScale);
        novelanceCam.y = my - (my - novelanceCam.y) * (novelanceCam.scale / prevScale);
        apply();
    }
    wrap.style.cursor = 'grab';
    wrap.addEventListener('pointerdown', onDown);
    window.addEventListener('pointermove', onMove);
    window.addEventListener('pointerup', onUp);
    wrap.addEventListener('wheel', onWheel, { passive: false });
}
function showNovelanceDistrict(id) {
    const d = NOVELANCE_DISTRICTS.find(x => x.id === id);
    const el = document.getElementById('novelanceInfo');
    if (!d || !el)
        return;
    el.innerHTML = `
    <div class="novelance-info-swatch" style="background:${d.color}"></div>
    <div>
      <div class="novelance-info-title">${esc(d.label)}</div>
      <div class="novelance-info-desc">${esc(d.desc)}</div>
    </div>
  `;
}
/* ---------------- LIVRE D'HISTOIRE (page verrouillée par un code) ---------------- */
const STORY_UNLOCK_CODE = '1234';
let storyBookEntryId = null;
function openStoryBook(id) {
    const e = findEntry(id);
    if (!e)
        return;
    storyBookEntryId = id;
    let overlay = document.getElementById('storyBookOverlay');
    if (!overlay) {
        overlay = document.createElement('div');
        overlay.id = 'storyBookOverlay';
        overlay.className = 'story-book-overlay';
        overlay.innerHTML = `
      <div class="story-book-backdrop" onclick="closeStoryBook()"></div>
      <div class="story-book" id="storyBook">
        <button class="story-book-close" onclick="closeStoryBook()" aria-label="Fermer">✕</button>
        <div class="story-book-inner">
          <div class="story-book-pages" id="storyBookPages">
            <div class="story-page-content" id="storyPageContent"></div>
          </div>
          <div class="story-book-cover" id="storyBookCover">
            <div class="story-book-cover-frame"></div>
            <div class="story-book-cover-emblem">✦ Grimoire ✦</div>
          </div>
        </div>
      </div>`;
        document.body.appendChild(overlay);
    }
    renderStoryLockPage();
    requestAnimationFrame(() => { overlay.classList.add('open'); });
    setTimeout(() => {
        const input = document.getElementById('storyCodeInput');
        if (input)
            input.focus();
    }, 1300);
}
function playPageFlipTransition(pagesEl, swapContent) {
    const leafCount = 6;
    const stepMs = 70;
    const leaves = [];
    const wrap = document.createElement('div');
    wrap.className = 'story-leaves';
    for (let i = 0; i < leafCount; i++) {
        const leaf = document.createElement('div');
        leaf.className = 'story-leaf';
        leaf.style.zIndex = String(leafCount - i);
        leaf.style.transitionDelay = `${i * stepMs}ms`;
        wrap.appendChild(leaf);
        leaves.push(leaf);
    }
    pagesEl.appendChild(wrap);
    void wrap.offsetWidth;
    requestAnimationFrame(() => {
        leaves.forEach(leaf => leaf.classList.add('flipped'));
    });
    const midDelay = Math.floor(leafCount / 2) * stepMs + 260;
    setTimeout(swapContent, midDelay);
    const totalDuration = (leafCount - 1) * stepMs + 620;
    setTimeout(() => { wrap.remove(); }, totalDuration);
}
function renderStoryLockPage() {
    const content = document.getElementById('storyPageContent');
    if (!content)
        return;
    content.innerHTML = `
    <div class="story-page story-page-lock">
      <div class="story-seal">🔒</div>
      <div class="story-title">Page scellée</div>
      <p class="story-desc">Un vieux fermoir protège ce chapitre. Inscris le code pour le briser.</p>
      <div class="story-code-row">
        <input type="text" id="storyCodeInput" maxlength="4" inputmode="numeric" placeholder="Code" class="story-code-input" onkeydown="if(event.key==='Enter') submitStoryCode();">
        <span class="btn btn-primary" onclick="submitStoryCode()">Déverrouiller</span>
      </div>
      <div class="story-error" id="storyError">Code incorrect.</div>
    </div>`;
}
function submitStoryCode() {
    const input = document.getElementById('storyCodeInput');
    const errorEl = document.getElementById('storyError');
    const code = input ? input.value.trim() : '';
    if (code === STORY_UNLOCK_CODE) {
        revealStoryChapter();
    }
    else {
        if (errorEl)
            errorEl.classList.add('show');
        const book = document.getElementById('storyBook');
        if (book) {
            book.classList.remove('shake');
            void book.offsetWidth;
            book.classList.add('shake');
        }
    }
}
function revealStoryChapter() {
    if (!storyBookEntryId)
        return;
    const e = findEntry(storyBookEntryId);
    const pages = document.getElementById('storyBookPages');
    const content = document.getElementById('storyPageContent');
    if (!e || !pages || !content)
        return;
    playPageFlipTransition(pages, () => {
        const chapter = e.story && e.story.length ? e.story : ["Ce chapitre n'a pas encore été écrit. Ajoute le texte dans le champ « story » de cette entrée dans ENTRIES."];
        content.innerHTML = `
      <div class="story-page story-page-chapter">
        <div class="story-chapter-eyebrow">Chapitre I</div>
        <div class="story-chapter-title">${esc(e.name)}</div>
        ${chapter.map(p => `<p class="story-chapter-p">${esc(p)}</p>`).join('')}
      </div>`;
    });
}
function closeStoryBook() {
    const overlay = document.getElementById('storyBookOverlay');
    if (overlay)
        overlay.classList.remove('open');
}
function render() {
    const route = (window.location.hash || '#home').slice(1);
    const content = document.getElementById('content');
    if (route !== 'carte')
        closeMapOverlay();
    if (route !== 'mission')
        stopMissionHud();
    if (route === 'home') ensureNewsTvDock(); else removeNewsTvDock();
    const isHalcyonSection = route === 'halcyon' || route === 'armes' || route.startsWith('arme-') || route === 'archives-corrompues';
    setHalcyonImmersive(isHalcyonSection);
    setMusicContext(isHalcyonSection ? 'halcyon' : 'menu');
    if (!isHalcyonSection)
        removeHalcyonLogoDock();
    if (route !== 'archives-corrompues') {
        const codeOverlay = document.getElementById('corruptCodeOverlay');
        if (codeOverlay) {
            codeOverlay.remove();
            document.body.style.overflow = '';
        }
        const leakOverlay = document.getElementById('leakOverlay');
        if (leakOverlay) {
            leakOverlay.remove();
            document.body.style.overflow = '';
        }
    }
    const zoomOverlay = document.getElementById('rosterZoomOverlay');
    if (zoomOverlay)
        zoomOverlay.remove();
    const storyOverlay = document.getElementById('storyBookOverlay');
    if (storyOverlay)
        storyOverlay.remove();
    storyBookEntryId = null;
    document.querySelectorAll('.nav-link').forEach(el => {
        el.classList.toggle('active', el.dataset.route === route || (el.dataset.route === 'halcyon' && route !== 'halcyon' && isHalcyonSection));
    });
    if (route === 'home') {
        content.innerHTML = renderHome();
    }
    else if (route === 'carte') {
        openMapOverlay();
    }
    else if (route === 'novelance') {
        content.innerHTML = renderNovelance();
        initNovelanceMap();
    }
    else if (route === 'halcyon') {
        dockHalcyonLogoImmediate();
        content.innerHTML = renderHalcyonPage();
        initRosterStage();
    }
    else if (route === 'armes') {
        playDossierBoot(() => renderArmesArchive());
    }
    else if (route.startsWith('arme-')) {
        dockHalcyonLogoImmediate();
        content.innerHTML = renderArmeDossier(route.replace('arme-', ''));
    }
    else if (route === 'archives-corrompues') {
        dockHalcyonLogoImmediate();
        content.innerHTML = renderCorruptedArchive();
    }
    else if (route === 'cat-personnages') {
        content.innerHTML = renderPersonnagesRoster();
        initRosterStage();
    }
    else if (route === 'chronologie') {
        playChronoBoot();
    }
    else if (route === 'mission') {
        content.innerHTML = renderMission();
        initMissionHud();
    }
    else if (route === 'actualites') {
        content.innerHTML = renderNewsPage();
        initNewsIntro();
    }
    else if (route === 'ecriture') {
        if (!isLoggedIn()) { navigate('home'); return; }
        content.innerHTML = renderEcriture();
    }
    else if (route === 'compte') {
        if (!isLoggedIn()) { navigate('home'); return; }
        content.innerHTML = renderCompte();
    }
    else if (route.startsWith('page-')) {
        content.innerHTML = renderCustomPage(route.replace('page-', ''));
    }
    else if (route.startsWith('cat-')) {
        content.innerHTML = renderCategory(route.replace('cat-', ''));
    }
    else if (route.startsWith('entry-')) {
        const entryId = route.replace('entry-', '');
        const stablePlayerId = 'em-' + entryId;
        const oldPlayer = document.getElementById(stablePlayerId);
        content.innerHTML = renderEntry(entryId);
        initPersonnageEntryRail();
        const newPlayer = document.getElementById(stablePlayerId);
        let preserved = false;
        if (oldPlayer && newPlayer && oldPlayer.dataset.kind === newPlayer.dataset.kind) {
            const oldSrc = oldPlayer.querySelector('iframe,audio')?.getAttribute('src');
            const newSrc = newPlayer.querySelector('iframe,audio')?.getAttribute('src');
            if (oldSrc && oldSrc === newSrc) {
                newPlayer.replaceWith(oldPlayer);
                preserved = true;
            }
        }
        if (!preserved) initEntryMusicPlayers();
    }
    else {
        content.innerHTML = renderNotFound();
    }
    content.scrollTop = 0;
    window.scrollTo(0, 0);
    content.classList.remove('page-enter');
    void content.offsetWidth;
    content.classList.add('page-enter');
}
function runIntro() {
    const overlay = document.getElementById('introOverlay');
    const canvas = document.getElementById('introCanvas');
    if (!overlay || !canvas)
        return;
    const ctx = canvas.getContext('2d');
    function size() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    size();
    function buildParticles() {
        const off = document.createElement('canvas');
        off.width = canvas.width;
        off.height = canvas.height;
        const octx = off.getContext('2d');
        const isMobile = canvas.width < 700;
        octx.fillStyle = '#fff';
        octx.textAlign = 'left';
        octx.textBaseline = 'middle';
        octx.font = `300 ${isMobile ? 44 : 90}px 'Cormorant Garamond', serif`;
        const introText = 'MEMORIES OF PAST';
        const introLetterSpacing = isMobile ? 5 : 11;
        let introWidth = 0;
        for (const ch of introText)
            introWidth += octx.measureText(ch).width + introLetterSpacing;
        introWidth -= introLetterSpacing;
        let introX = off.width / 2 - introWidth / 2;
        const introY = off.height / 2;
        for (const ch of introText) {
            octx.fillText(ch, introX, introY);
            introX += octx.measureText(ch).width + introLetterSpacing;
        }
        const data = octx.getImageData(0, 0, off.width, off.height).data;
        const particles = [];
        const step = isMobile ? 3 : 4;
        let minX = off.width, maxX = 0;
        for (let y = 0; y < off.height; y += step) {
            for (let x = 0; x < off.width; x += step) {
                const a = data[(y * off.width + x) * 4 + 3];
                if (a > 120) {
                    if (x < minX)
                        minX = x;
                    if (x > maxX)
                        maxX = x;
                    particles.push({ x, y, ox: x, oy: y, vx: 0, vy: 0, alpha: 1, delay: Math.random() * 300, appearDelay: 0 });
                }
            }
        }
        particles.forEach(p => { p.appearDelay = ((p.ox - minX) / (maxX - minX || 1)) * 520 + Math.random() * 80; });
        return { particles, textY: off.height / 2, minX, maxX };
    }
    const built = buildParticles();
    const particles = built.particles;
    const start = performance.now();
    const REVEAL = 650; // apparition en balayage
    const HOLD = 900; // temps d'affichage du texte formé
    const DISSOLVE = 1500; // durée de la désintégration
    function frame(now) {
        const t = now - start;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        if (t < REVEAL) {
            const lineW = Math.min(1, t / REVEAL) * (built.maxX - built.minX);
            const lineY = built.textY + (canvas.width < 700 ? 40 : 68);
            const cx = (built.minX + built.maxX) / 2;
            ctx.strokeStyle = 'rgba(196,201,209,0.8)';
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(cx - lineW / 2, lineY);
            ctx.lineTo(cx + lineW / 2, lineY);
            ctx.stroke();
            ctx.fillStyle = 'rgba(196,201,209,0.92)';
            particles.forEach(p => {
                const a = Math.max(0, Math.min(1, (t - p.appearDelay) / 220));
                if (a > 0.01) {
                    ctx.globalAlpha = a;
                    ctx.fillRect(p.ox, p.oy, 1.6, 1.6);
                }
            });
            ctx.globalAlpha = 1;
        }
        else if (t < REVEAL + HOLD) {
            const shimmer = 0.9 + 0.1 * Math.sin((t - REVEAL) * 0.006);
            ctx.fillStyle = 'rgba(196,201,209,0.92)';
            ctx.globalAlpha = shimmer;
            particles.forEach(p => { ctx.fillRect(p.ox, p.oy, 1.6, 1.6); });
            ctx.globalAlpha = 1;
        }
        else {
            const dt = t - REVEAL - HOLD;
            ctx.fillStyle = 'rgba(196,201,209,1)';
            particles.forEach(p => {
                const pt = Math.max(0, dt - p.delay);
                if (pt <= 0) {
                    ctx.globalAlpha = 1;
                    ctx.fillRect(p.ox, p.oy, 1.6, 1.6);
                    return;
                }
                if (p.vx === 0 && p.vy === 0) {
                    const ang = Math.random() * Math.PI * 2;
                    p.vx = Math.cos(ang) * (0.15 + Math.random() * 0.35);
                    p.vy = -0.55 - Math.random() * 0.9;
                }
                const prog = Math.min(1, pt / DISSOLVE);
                const ease = prog;
                p.x = p.ox + p.vx * ease * 90;
                p.y = p.oy + p.vy * ease * 90 - ease * ease * 20;
                p.alpha = Math.max(0, 1 - prog * 1.15);
                if (p.alpha > 0.02) {
                    ctx.globalAlpha = p.alpha;
                    ctx.fillRect(p.x, p.y, 1.6, 1.6);
                }
            });
            ctx.globalAlpha = 1;
        }
        if (t < REVEAL + HOLD + DISSOLVE + 400) {
            requestAnimationFrame(frame);
        }
        else {
            overlay.classList.add('intro-hidden');
            setTimeout(() => { overlay.remove(); }, 950);
        }
    }
    requestAnimationFrame(frame);
    window.addEventListener('resize', () => { size(); }, { once: true });
}
// Filet de sécurité : si l'intro plante ou reste bloquée (ex. polices Google
// injoignables en local), on force la disparition du voile noir plutôt que
// de laisser le site inutilisable.
(function startIntroSafely() {
    let started = false;
    function start() {
        if (started)
            return;
        started = true;
        try {
            runIntro();
        }
        catch (err) {
            console.error('Erreur au lancement de l\'intro:', err);
            const overlay = document.getElementById('introOverlay');
            if (overlay)
                overlay.remove();
        }
    }
    if (document.fonts && document.fonts.ready) {
        document.fonts.ready.then(start).catch(start);
    }
    else {
        start();
    }
    // Ne jamais attendre indéfiniment le chargement des polices.
    setTimeout(start, 1500);
    // Filet ultime : quoi qu'il arrive, le voile disparaît après 8s.
    setTimeout(() => {
        const overlay = document.getElementById('introOverlay');
        if (overlay)
            overlay.remove();
    }, 8000);
})();
/* ---------------- LECTEUR MUSICAL PERSISTANT (fichier local, boucle infinie) ---------------- */
const MUSIC_FILE_PATH = "ost/if ~Hitori Omou~ (Lost in Thoughts All Alone)Renka [Music Box] (Game Fire Emblem if Theme Song).mp3";
const HALCYON_MUSIC_PATH = "ost/ost halcyon.mp3";
let musicAudio = null;
let musicPlaying = false;
let musicDuration = 0;
let musicContext = 'menu';
function setMusicContext(ctx) {
    if (musicContext === ctx)
        return;
    musicContext = ctx;
    const audio = initMusicAudio();
    const wasPlaying = musicPlaying;
    audio.pause();
    audio.src = encodeURI(ctx === 'halcyon' ? HALCYON_MUSIC_PATH : MUSIC_FILE_PATH);
    audio.load();
    const titleEl = document.getElementById('musicTitle');
    if (titleEl)
        titleEl.textContent = ctx === 'halcyon' ? 'Halcyon — Système' : 'Thème du monde';
    if (wasPlaying || ctx === 'halcyon') {
        audio.play().catch(err => { console.error('Lecture audio bloquée par le navigateur:', err); });
    }
}
function initMusicAudio() {
    if (musicAudio)
        return musicAudio;
    const audio = document.createElement('audio');
    audio.id = 'musicAudioEl';
    audio.src = encodeURI(MUSIC_FILE_PATH);
    audio.loop = true;
    audio.preload = 'auto';
    audio.addEventListener('loadedmetadata', () => {
        musicDuration = audio.duration;
    });
    audio.addEventListener('timeupdate', () => {
        const fill = document.getElementById('musicProgressFill');
        const timeEl = document.getElementById('musicTime');
        if (fill && audio.duration)
            fill.style.width = (audio.currentTime / audio.duration * 100) + '%';
        if (timeEl)
            timeEl.textContent = fmtMusicTime(audio.currentTime) + ' / ' + fmtMusicTime(audio.duration || 0);
    });
    audio.addEventListener('play', () => { musicPlaying = true; updatePlayIcon(); });
    audio.addEventListener('pause', () => { musicPlaying = false; updatePlayIcon(); });
    audio.addEventListener('error', () => {
        const el = document.getElementById('musicTitle');
        if (el)
            el.textContent = 'Erreur de lecture (fichier introuvable)';
        console.error('Erreur de chargement du fichier audio:', audio.error);
    });
    const host = document.getElementById('musicPlayerHost');
    if (host) {
        host.innerHTML = '';
        host.appendChild(audio);
    }
    musicAudio = audio;
    const vol = document.getElementById('musicVolume');
    setMusicVolume(vol ? vol.value : 55);
    return audio;
}
function toggleMusic() {
    const audio = initMusicAudio();
    if (musicPlaying) {
        audio.pause();
    }
    else {
        audio.play().catch(err => { console.error('Lecture audio bloquée par le navigateur:', err); });
    }
}
function updatePlayIcon() {
    const icon = document.getElementById('musicPlayIcon');
    if (!icon)
        return;
    icon.innerHTML = musicPlaying
        ? '<rect x="4" y="3" width="4" height="14"/><rect x="12" y="3" width="4" height="14"/>'
        : '<path d="M6 4l10 6-10 6V4z"/>';
}
function setMusicVolume(v) {
    if (musicAudio)
        musicAudio.volume = Math.max(0, Math.min(1, Number(v) / 100));
}
function seekMusic(e) {
    if (!musicAudio || !musicAudio.duration)
        return;
    const wrap = document.getElementById('musicProgressWrap');
    const rect = wrap.getBoundingClientRect();
    const pct = Math.min(1, Math.max(0, (e.clientX - rect.left) / rect.width));
    musicAudio.currentTime = musicAudio.duration * pct;
}
function fmtMusicTime(s) {
    if (!isFinite(s) || s < 0)
        s = 0;
    const m = Math.floor(s / 60), sec = Math.floor(s % 60);
    return m + ':' + String(sec).padStart(2, '0');
}
window.addEventListener('hashchange', render);
window.addEventListener('DOMContentLoaded', () => {
    initFirestoreSync();
    updateAuthUI();
    refreshCustomNavLinks();
    render();
});
window.addEventListener('resize', () => { if (rosterState)
    layoutRosterStage(); });
window.addEventListener('mousemove', onRosterDragMove);
window.addEventListener('mouseup', onRosterDragEnd);
window.addEventListener('keydown', (ev) => {
    if (ev.key === 'Escape') {
        const mapOv = document.getElementById('mapOverlay');
        const codeOv = document.getElementById('corruptCodeOverlay');
        const leakOv = document.getElementById('leakOverlay');
        if (mapOv && mapOv.classList.contains('open')) {
            navigate('home');
        }
        else if (leakOv) {
            leakOv.remove();
            document.body.style.overflow = '';
        }
        else if (codeOv && codeOv.classList.contains('open')) {
            closeCorruptCodeWindow();
        }
        else {
            closeRosterZoom();
            closeStoryBook();
        }
    }
});
/* --- search --- */
const searchInput = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults');
searchInput.addEventListener('input', () => {
    const q = searchInput.value.trim().toLowerCase();
    if (!q) {
        searchResults.classList.remove('active');
        searchResults.innerHTML = '';
        return;
    }
    const matches = ENTRIES.filter(e => e.name.toLowerCase().includes(q) || e.summary.toLowerCase().includes(q)).slice(0, 8);
    if (!matches.length) {
        searchResults.innerHTML = `<a style="cursor:default">Aucun résultat</a>`;
    }
    else {
        searchResults.innerHTML = matches.map(e => `<a onclick="navigate('entry-${e.id}'); searchInput.value=''; searchResults.classList.remove('active');">${esc(e.name)}<span class="cat-tag">${CATS[e.cat].label}</span></a>`).join('');
    }
    searchResults.classList.add('active');
});
document.addEventListener('click', (ev) => {
    if (!searchResults.contains(ev.target) && ev.target !== searchInput) {
        searchResults.classList.remove('active');
    }
});
