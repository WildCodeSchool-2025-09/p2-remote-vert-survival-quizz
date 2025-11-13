import type { HomeNarration, RoomNarration } from "../type/GameDataTypes";

// Texte for home page
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
	ready: `ATTENTION DEFENDS-TOI! Tu as 15 Secondes pour répondre correctement à cette question et repousser les zombies!
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
	initial: `La cuisine et sa vaiselle cassé on laissé place à une bibliothéque au volumes anciens et poussiéreux, laisser à l'abandon depuis longtemps. Un silence de tombe y règne, contrastant violemment avec le chaos du manoir.
            Des livres gisent éparpillés sur le sol, comme arrachés dans une fuite précipitée. `,
	ready: `Alors qu'ils progressent entre les étagères, un craquement sec retenti sur le parquet. 
          Sauve tes personnages d’une mort certaine ! Prêt ? `,
	success: `Bravo!!!
          Les créatures ont lu la dernière page de leur histoire. Le petit groupe avance vers la salle de bal, d’où une petite mélodie leur parvient.`,
	failure: `Faux!
         Les livres s'envolent des étagères dans un tourbillon agressif, un aventurier hurle"vite allons dans la grande salle de ball !".`,
};
export const ballTexts: RoomNarration = {
	initial: `Les grandes portes dorées de la salle de bal sont entrouvertes. De l'autre côté, un vaste parquet ciré s'étend sous un lustre de cristal éteint.
             La mélodie, un air de valse ancienne et égèrement faussée, semble provenir d'un vieux phonographe posé sur l'estrade `,
	ready: `Le phonographe grésille et un grognement morbide ce fait entendre 
            Sauve tes personnages d’une mort certaine ! Prêt ? `,
	success: `Bravo!!!
            Le silence fait place à un graisillement un des miroirs de la salle de ball pivote laissant place à un accés au sous sol`,
	failure: `Faux!
            Une silhouette féminine en robe déchirée surgit de l'ombre et emporte un de vos coéquipiers pour une dérnière valse".`,
};
