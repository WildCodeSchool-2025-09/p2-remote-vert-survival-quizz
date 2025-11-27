import type {
	HomeNarration,
	RoomNarration,
	VictoryTexts,
} from "../types/GameDataTypes";

export const homeTexts: HomeNarration = {
	title: "REACT EVIL",
	undertitle: `Entre dans l'univers de ce survival Quiz. Arriveras tu à sortir en un seul morceau de ce manoir?`,
	text1: `Bienvenue dans le Jeu de Survival Quiz. Dix épreuves t’attendent : chaque mauvaise réponse coûte un membre de ton équipe.
     Si ta logique et tes connaissances te servent, tu seras récompensé et tu pourras sauver les tiens. Prêt à tester ton sang-froid et 
     tes compétences face au temps qui s'écoule et aux zombies qui approchent. 
    Sauras tu vaincre ta peur de perdre ? `,
	text2: `La nuit, lourde et humide, étouffait la forêt d’épicéas. Le van des Traqueurs du Paranormal s’arrêta dans un grincement.
    Luna, la chasseuse d’ombres ; Lisa, l’experte en occultisme ; Émeric, le technicien chauve ; et Jugurta, le costaud au cœur tendre,
    descendirent en silence. Devant eux, le Manoir Blackwood se dressait, sombre et immense.`,
	text3: `Lisa leva les yeux vers la façade. « Ces portes en chêne massif… quels secrets cachent-elles ? » murmura-t-elle. Emeric,
     penché vers cette immense bâtisse, blêmit. « Il y a du mouvement derrière. Plusieurs choses… elles viennent vers nous. » 
     Luna grimaça à la vue de ces portes, gravées de visages déformés par la douleur. « Nous devrions nous faire discret ».
    Jugurta arma son fusil. « Discrétion ? » demanda-t-il avec un rictus.  « Pas ici. On entre, et vite. »`,
};
export const hallTexts: RoomNarration = {
	initial: `Ils firent irruption dans le hall moisi du manoir, l’air saturé d’humidité et de poussière. Leurs pas résonnaient sur le marbre fendu.
	À la lueur des lampes tactiques, Émeric balaya la pièce… et révéla une dizaine de silhouettes aux chairs grises, tremblantes, les yeux vides d’humanité.
	 Un froid glacial s’abattit sur eux. Lisa comprit la première. « Piège ! » hurla-t-elle. Un mort-vivant jaillit de l’obscurité et se jeta sur Luna. 
	Le tir de Jugurta éclata le silence — BOUM. Des éclats de chair retombèrent sur le sol. Luna roula derrière une colonne, haletante. « Feu à volonté ! » cria-t-elle.
	Le hall se remplit de coups de feu, d’échos et de cris.`,
	ready: `Tu as 15 Secondes pour répondre correctement à cette question et repousser les zombies!
	Sauve tes personnages d’une mort certaine ! Prêt ? `,
	success: `Bravo!!!
	  Le hall d’entrée n’était plus qu’un champ de ruines et de cadavres. Les Traqueurs, épuisés mais victorieux, reprenaient leur souffle au milieu du silence. 
	  Une vibration parcourut le sol. Un bruit de loquet déverrouillé fit écho dans un souffle glacial.
	  Luna hocha la tête. « On continue. »`,
	failure: `Faux!
	 Un hurlement déchira le silence..Jugurta s’effondra, happé par l’abomination. Il tenta de se défendre en vain. Son cri résonna dans le hall, le groupe resta figé, pétrifié d’horreur. 
	 « On doit bouger ! » hurla Emeric. Personne ne regarda en arrière. Ils coururent vers la porte suivante, leurs pas résonnant sur le marbre souillé. 
	 Derrière eux, le monstre grognait, repu… mais pas satisfait.
	 Avancer est votre seul espoir.`,
};
export const kitchenTexts: RoomNarration = {
	initial: `Lisa fixa l’évier rouillé, le médaillon à son cou brillant d’une lueur froide. « Ces créatures ne faisaient pas que rôder… quelqu’un les contrôle. Il faut trouver la source. » 
	Luna essuya une tache de sang sur sa joue et hocha la tête. « On ne reste pas ici. D’après les plans, la salle de bal est tout près. » 
	Ils s’avancèrent vers la grande table en bois quand un grondement monta du couloir. Des silhouettes titubantes apparurent dans l’ombre.
	Un nouveau groupe de morts-vivants leur barrait le passage.`,
	ready: `Tu as 15 Secondes pour répondre correctement à cette question et repousser les zombies!
	  Sauve tes personnages d’une mort certaine ! Prêt ? `,
	success: `Bravo!!!
	  Le hall d’entrée n’était plus qu’un champ de ruines et de cadavres. Les Traqueurs, épuisés mais victorieux, reprenaient leur souffle au milieu du silence. 
	  Une vibration parcourut le sol. Un bruit de loquet déverrouillé fit écho dans un souffle glacial.
	  Luna hocha la tête. « On continue. »`,
	failure: `Faux!
	 Un hurlement déchira le silence..Jugurta s’effondra, happé par l’abomination. Il tenta de se défendre en vain. Son cri résonna dans le hall, le groupe resta figé, pétrifié d’horreur. 
	 « On doit bouger ! » hurla Emeric. Personne ne regarda en arrière. Ils coururent vers la porte suivante, leurs pas résonnant sur le marbre souillé. 
	 Derrière eux, le monstre grognait, repu… mais pas satisfait.
	 Avancer est votre seul espoir.`,
};
export const libraryTexts: RoomNarration = {
	initial: `La cuisine en ruine avait disparu, remplacée par une bibliothèque obscure où s’empilaient de vieux volumes poussiéreux. Un silence oppressant y régnait, lourd comme une menace invisible. Des livres gisaient au sol, arrachés dans une panique brutale.
		On aurait dit que quelque chose avait fui… ou s’était caché ? `,
	ready: `Un bruit sourd retentit… et une silhouette décharnée émergea enfin de l’ombre. 
	  Sauve tes personnages d’une mort certaine ! Prêt ? `,
	success: `Bravo!!!
	  Les créatures avaient tourné la dernière page de leur histoire. Le petit groupe avança vers la salle de bal, guidé par une musique lointaine qui rampait dans le couloir comme un murmure venu d'ailleurs.`,
	failure: `Faux!
	 Les livres s’arrachaient des étagères dans un tourbillon agressif. Les aventurier hurlèrent sous l’avalanche de pages poussiéreuses. Émeric cria : « Vite ! La grande salle de bal ! »
	Le chaos l’engloutit avant qu’il ne puisse fuir..`,
};
export const ballTexts: RoomNarration = {
	initial: `Les grandes portes dorées de la salle de bal étaient entrouvertes. De l’autre côté, un vaste parquet ciré s’étendait sous l’éclat silencieux d’un lustre de cristal éteint.
	Une mélodie, valse ancienne aux notes légèrement dissonantes, s’échappait d’un vieux phonographe posé sur l’estrade, flottant dans l’air comme un écho venu d’un autre temps. `,
	ready: `Le phonographe grésille, tandis qu’un grognement morbide s’élève. 
	    Sauve tes personnages d’une mort certaine ! Prêt ? `,
	success: `Bravo!!!
	    Le silence fait place à un graisillement un des miroirs de la salle de ball pivote laissant place à un accés au sous sol`,
	failure: `Faux!
	    Une silhouette féminine en robe déchirée surgit de l'ombre et emporte un de vos coéquipiers pour une dérnière valse".`,
};
export const cellarTexts: RoomNarration = {
	initial: `L’escalier de pierre s’enfonçait vers un cellier moite, où des rangées de barils pourris suintaient un liquide noirâtre le long des murs. La lampe jaillit, déchirant l’obscurité. 
	Les étagères apparurent, croulantes sous les toiles d’araignée. Entre les bouteilles, des corps recroquevillés. Le groupe recula, le souffle suspendu.`,
	ready: `Le silence se brisa : les cadavres bougèrent.. 
	  Réponds correctement, ou les cadavres réveillés t’engloutiront dans les ténèbres.. Prêt ?`,
	success: `Bravo !!!
	  Quand les créatures se désagrégèrent en poussière, comme aspirées par le néant.
	  Au fond de la pièce, une porte en métal rouillée portait une inscription : **« STOCKAGE – INTERDIT »**.
	  Le groupe poursuivis son périple « On n’a pas le choix. »`,
	failure: `Faux !
	  Les hurlements s'intensifies. Des mains osseuses jaillirent des barils, agrippant un membre de l'équipe. 
	  Il se débattit, mais les ombres ne laissent de lui que son arme au sol.
	  La porte du cellier se referma dans un claquement sourd.
	  Ils étaient maintenant un de moins.`,
};
export const pantryTexts: RoomNarration = {
	initial: `En franchissant le seuil, une odeur de viande avariée assaillit le groupe. Le sol était jonché de conserves rouillées, et les murs portaient les cicatrices de griffes acérées. « Ça sent le piège… » murmura l’un d’eux. 
	Soudain, un cliquetis métallique résonna dans l’obscurité : des mâchoires claquaient, avides, affamées. « Ils sont là… » souffla une voix, tandis que les héros, le cœur battant, empoignaient leurs armes tremblantes.`,
	ready: `Quinze secondes… pas une de plus. Elles approchent, rapides, affamées. 
	La moindre erreur, et tu seras dévoré vivant.. Prêt ?`,
	success: `Bravo !!!
	  Les dernières créatures s’effondrèrent, leurs corps se liquéfiant en une bouillie noire.
	  Au fond de la pièce, une caisse était ouverte—à l’intérieur, des os rongés et un carnet de notes couvert de symboles.
	  Luna ramassa le carnet. « On a trouvé quelque chose… de la science oculte et de l'alchime. »`,
	failure: `Faux !
	  Les créatures bondirent. Le sang gicla sur les murs.
	  « FUYEZ ! » Un de nos heros se sacrifia pour leur laisser une ouverture, tu as perdu un membre de l'équipe.`,
};
export const storage_roomTexts: RoomNarration = {
	initial: `La pièce n’était qu’un chaos d’outils rouillés : scies, marteaux, pelles abandonnées. Le sol croulait sous les débris. « Quelqu’un est passé par ici… récemment », souffla l’un des aventuriers. 
	Soudain, une pelle s’effondra dans un fracas sourd. Des silhouettes se redressèrent dans l’ombre : des zombies, surgissant non pas pour jardiner… mais pour chasser.`,
	ready: `15 secondes pour réagir !Les zombies fondent sur toi, brandissant haches, faux et sécateurs. 
	La moindre hésitation… et tu finiras réduit en soupe.. Prêt ?`,
	success: `Bravo !!!
	  Les outils retombèrent au sol dans un fracas assourdissant. Dans un coin de la pièce, un moteur tournait dans un ronronnement léger. « Ce truc… il alimente quelque chose. » Un plan était épinglé au mur : un schéma du manoir avec une zone cerclée en rouge. « On y va. »`,
	failure: `Faux !
	  Une hache trancha l'air. Le sang jaillit en arc de cercle.
	  « NON ! »
	  La porte se referma dans un clang final.
	  De l'autre côté, on entendit des bruits, puis le silence. Un de nos chasseurs a disparu.`,
};
export const morgueTexts: RoomNarration = {
	initial: `Dès l’ouverture de la porte, une odeur âcre de formol mêlée à celle de chair en décomposition assaillit le groupe. Des draps souillés de sang recouvraient les tables de bois, figées dans une immobilité morbide. 
	Puis, un grincement sinistre résonna. L’un des cercueils, posé parmi d’autres, s’ouvrit lentement… révélant un corps qui, contre toute logique, bougeait encore.`,
	ready: `15 secondes pour réagir ! Ces corps ne sont pas morts… pas entièrement. 
	La moindre erreur, et tu deviendras l’un des leurs, ajouté à cette sinistre collection.. Prêt ?`,
	success: `Bravo !!!
	  Le corps retomba dans sa boîte, inerte. Au fond de la pièce, une trappe rouillée était entrouverte, laissant échapper une lueur verdâtre.
	  « On descend ? »
	  Une inscription à peine lisible était gravée sur le mur : Niveau B – Accès Restreint : Projet Humanis.`,
	failure: `Faux !
	  Les mains du cadavre le plus proche s'agrippèrent à la gorge de l'un de tes camarades, le tirant vers le sol. Ses cris s'étouffèrent sous les doigts glacés.
	  Leurs yeux injectés de sang fixés sur les survivants. Le reste du groupe se précipita vers la trappe de métal ouverte.
	  La trappe se referma dans un bruit sinistre.`,
};
export const entrancelabTexts: RoomNarration = {
	initial: `L’escalier de métal s’enfonçait dans les entrailles du manoir, baigné par la lueur maladive de néons clignotants. 
	Les murs, tapissés de carreaux blancs fissurés mais propres, évoquaient une salle plus entretenue que les précédentes. « On dirait un bunker… » murmura l’un des aventuriers.
	Les néons clignotaient, projetant des éclats maladifs sur les carreaux fissurés. Le haut-parleur cracha une voix métallique : « Intrusion détectée. Protocole de stérilisation activé. » Puis, du sol, un homme en blouse blanche se releva, livide, comme arraché à la mort.`,
	ready: `15 secondes pour désactiver le protocole !
	   Une seule erreur… et tu ne seras plus qu’une expérience de laboratoire.. Prêt ?`,
	success: `Bravo !!!
	  La porte blindée s'ouvrit avec un sifflement, révélant un couloir éclairé d'une lueur verdâtre.
	  Au sol, un carnet était tombé d'une poche de la blouse blanche. La dernière page était couverte de notes fiévreuses :
	  « Jour 47 : Les sujets résistent à la décomposition. Ils apprennent. Ils attendent. »`,
	failure: `Faux !
	  La créature en blouse blanche vient de transformer l'un de tes coéquipiers en futur membre du conseil scientifique de ce projet fou.
	  « ON SE CASSE ! » Le reste du groupe agrippa le poignet de la porte blindée face à eux avant de lancer une grenade pour libérer leur ami
	  de la mort atroce et de la mutation qui allait suivre.`,
};
export const officeLaboratoryTexts: RoomNarration = {
	initial: `La pièce était un chaos de dossiers et de plans anatomiques. Un fauteuil renversé témoignait d’une fuite précipitée. 
	Les écrans grésillants affichaient des croquis de créatures hybrides, cerclés en rouge : « Secteur Omega – Cuves ». « Sujet 12 – Réussite partielle »… des photos ignobles montraient un corps immergé dans un liquide poisseux.`,
	ready: `Une odeur immonde envahit la pièce, l'ordinateur se mit à clignoter et les héros comprirent qu'il s'agit d'un gaz toxique.
	  15 secondes pour fuir d'un étouffement imminent. Prêt ?`,
	success: `Bravo !!!
	  « Urgence : Le Sujet Alpha s’est échappé. »
	  Sur le bureau, une clé magnétique brillait. « On a de quoi ouvrir la prochaine porte. »`,
	failure: `Faux !
	  Un des échantillons d'un vers noir dans un bocal explosa son contenant s'introduisant dans la gorge de l'un de nos aventurier.
	  « FERMEZ la port ! » 
	  Le corps de notre amis s’effondra,`,
};
export const surgeryLaboratoryTexts: RoomNarration = {
	initial: `La pièce baignait dans une lumière bleutée, glaciale. Au centre, une table d’opération reliée à des machines clignotantes portait un cœur humain, seul, palpitant sous des électrodes. 
  Soudain, son rythme s’emballa. Les écrans grésillèrent, les alarmes hurlèrent. Une voix synthétique s’éleva : « Détection d’intrus. Activation des défenses. »`,
	ready: `15 secondes pour arrêter ce cauchemar !
	  Détruis le cœur, ou il remplacera le tiens. Prêt ?`,
	success: `Bravo !!!
	  Le cœur explosa en une gerbe de sang noir.
	  Sur un chariot, une seringue remplie d'un liquide doré brillait. Une étiquette : **« Sérum Secondlife – Dernier échantillon. »**
	  « On prend ça ! »`,
	failure: `Faux !
	  Le cœur bondit de la table, des tentacules noirs et luisants servant de membres, s'accrochant au visage de l'un des membres de l'équipe.
	  La porte se verrouilla sur le malheureux dans la fuite. Les machines annoncèrent : « Assimilation en cours. »`,
};
export const cuveLaboratoryTexts: RoomNarration = {
	initial: `La dernière salle s’ouvrait sur une immensité glaciale, saturée de cuves de verre où des cadavres flottaient, reliés à des tubes. Certains remuaient encore. 
	Au centre, un corps en blouse blanche, dévoré de l’intérieur, gisait. « Le scientifique… » souffla Luna, pétrifiée. Sur l’écran verdâtre d’un PC, un message s’affichait : 
	« Jour 50 : Ils ont muté. Ils pensent. Ils veulent sortir. Je ne peux plus les contrôler. Ils nkenfqze » Les cuves vibrèrent. Les créatures ouvrirent les yeux.`,
	ready: `15 secondes pour tout arrêter ! C'est ton dernier combat tu ne peux pas laisser tes aventuriers mourir si prêt du but.. 15 secondes pour tout arrêter !
	  N'échoue pas.. Prêt ?`,
	success: `Bravo !!!
	  Les cuves explosèrent une à une, libérant un gaz qui neutralisa les créatures. Le laboratoire s'effondra dans un grondement.
	  Luna s'échappa par un passage secret, le sérum en poche. Dehors, le manoir brûlait.
	  « C'est fini… » murmura-t-elle, les larmes aux yeux.
	  Mais dans les flammes, une ombre furtive s'enfonça dans la forêt.`,
	failure: `Faux !
	  Les cuves se brisèrent. Les créatures attrapèrent un chasseur de zombies, le tirant vers elles.
	  Le feu se répandit dans l'édifice, le protocole de sécurité c'était enclenché,
	  l'aventure touchait à sa fin avec un des membres en moins de l'expédition.
	  Ce qui restait du groupe pouvait-il cependant échapper aux flammes ?`,
};
export const victoryTexts: VictoryTexts = {
	initial: "VICTOIRE !",
	succes: `L’aube pointait enfin, douce et pâle, effleurant le ciel d’un gris lavande où s’éteignaient les dernières ombres de la nuit.
	La malédiction du Manoir Blackwood n’était plus qu’un mauvais souvenir.
	Le calme revenu avait quelque chose d’irréel, un silence plein, presque apaisant. Le van s’éloignait lentement de l’allée, ses phares glissant sur les herbes folles encore couvertes de rosée. À l’arrière, personne ne parlait, ils se contentaient de respirer, de sentir la fatigue se mêler à un étrange bonheur d’être encore en vie.
	Dans le rétroviseur, le Manoir s’effaçait peu à peu, avalé par la brume du matin.
	Alors, brisant enfin le silence, Jugurtha souffla d’une voix tremblante mais légère « Je sauvegarde ? »
	Un éclat de rire, fragile d’abord, puis franc, résonna dans l’habitacle. « Pull request ! » lança quelqu’un.

	Et pour la première fois depuis longtemps, le rire ne sonnait plus nerveux... mais vivant.`,
};
