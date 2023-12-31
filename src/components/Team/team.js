export default {
    categories: [
        {
            category: 'owner',
            weight: 100,
            name: 'Inhaber'
        },
        {
            category: 'admin',
            weight: 90,
            name: 'Admin Team'
        },
        {
            category: 'developer',
            weight: 80,
            name: 'Entwickler Team'
        },
        {
            category: 'builder',
            weight: 70,
            name: 'Builder Team'
        },
        // {
        //     category: 'moderator',
        //     weight: 60,
        //     name: 'Moderations Team'
        // },
        {
            category: 'content',
            weight: 50,
            name: 'Content Team'
        },
        {
            category: 'designer',
            weight: 40,
            name: 'Design Team'
        },
        {
            category: 'supporter',
            weight: 30,
            name: 'Support Team'
        }
    ],
    roles: {
        owner: {
            name: 'Inhaber',
            color: '#9c1515'
        },
        admin: {
            name: 'Administrator',
            color: '#c21834'
        },
        developer: {
            name: 'Entwickler',
            color: '#127d9e'
        },
        builder: {
            name: 'Builder',
            color: '#129e41'
        },
        content: {
            name: 'Content',
            color: '#cc00ff'
        },
        designer: {
            name: 'Designer',
            color: '#7b0fb8'
        },
        moderator: {
            name: 'Moderator',
            color: '#4147d1'
        },
        supporter: {
            name: 'Supporter',
            color: '#d4d10d'
        }
    },
    members: [
        {
            name: 'Attic9',
            category: 'owner',
            role: 'owner',
            uuid: '1f241fd5-126f-446b-b77e-f80f30a74c4e',
            info: 'Servus, Fabi spricht. Ich bin einer der Inhaber von KuchenGames.de und kümmere mich um den Developingbereich.'
        },
        {
            name: 'RedPanda',
            category: 'owner',
            role: 'owner',
            uuid: '5dc43e20-ba22-4110-89f1-e3fe00a70c3f',
            info: 'Moinsen! Mein Name ist RedPanda. Ich bin einer der Inhaber von KuchenGames.de und leite sowohl das Builder- als auch das Designer-Team. \nSolltest du mich mit Bambus füttern, werde ich dein aller bester Freund! :D'
        },
        {
            name: 'Thomas U.',
            category: 'admin',
            role: 'admin',
            uuid: '94d640d8-87c1-4bc1-971a-2b526906da36',
            info: 'Beruflicher Entwickler & Hoppy Sys. Administrator. Für das was ich mache bekomme ich viel zu wenig Moneten :('
        },
        {
            name: 'TheApexClaw',
            category: 'admin',
            role: 'admin',
            uuid: '9ed501a2-46ff-414d-820e-0e1347d52447',
            info: 'Hai, ich bin Sabrina. Ich bin Administratorin auf KuchenGames. Zu meinen Aufgaben zählen unter anderem die Leitung des Content- und Builderteams. Zudem bin ich zusätzlich als Builder und Designerin tätig. Solltet ihr mich mal auf dem Server sehen, könnt ihr gerne zu mir kommen und ein Screen machen. Ab und zu verteile ich auch Kekse an artige Spieler. Aber krümelt bitte nicht so viel. Wir sehen uns auf KuchenGames.'
        },
        {
            name: 'r3dspace',
            category: 'admin',
            role: 'admin',
            uuid: 'c08290a6-5187-49ec-a734-9726ca01cb30',
            info: "Hi 👋🏽. I'm r3dspace, a system administrator based out of Germany working as an second and third level network engineer.\n\nI create, maintain and update networks all day long.\nI'm passionate about side projects and helping others improve their craft and networks."
        },
        {
            name: 'Lucifer',
            category: 'developer',
            role: 'developer',
            uuid: 'a6a85419-f0d1-45f0-afa0-cb1396cfaa8f',
            info: 'Lucifer: einst Weltherrschaftspläne, jetzt Code-Zauberer.\n\nAus dem Höllenschlund in Deutschland stammend, jongliert er mit Aufgaben, zaubert Plugins und Websites für unser Minecraft-Netzwerk.\nTeuflisch gut im Leiten des Entwicklerteams und im Erkennen von Entwicklertalenten.\n\nHölle ja, er ist unser Game-Changer auf KuchenGames.de!'
        },
        {
            name: 'DevOrange',
            category: 'developer',
            role: 'developer',
            uuid: '1d328e2d-2a56-4ea7-ac63-81f9379e259c',
            info: 'Ich bin DevOrange, Developer auf Kuchengames. Ich versuche mit dem Developerteam und dem Rest des Teams ein gutes Spielerlebnis zu schaffen. Für fragen steht euch den Support unserer Supporter zu Verfügung.'
        },
        {
            name: '9xeuzin',
            category: 'builder',
            role: 'builder',
            uuid: 'fa49afd3-337c-4de7-ac98-be9c68d32572',
            info: "Hello, I'm Will.\n\nI'm passionate about building in Minecraft.\nI've been developing this skill for almost 1 year and 6 months, and I'm studying to reach the level of a level designer.\nI've had the honor of being part of studios like Null Forge and LegacyMC.\nMy passion for creating in Minecraft motivates me to keep learning and improving in this exciting world of virtual construction"
        },
        {
            name: '_GreenTee',
            category: 'builder',
            role: 'builder',
            uuid: '63677075-5c26-4ac5-8aad-5b793588a86b',
            info: 'Moin ich bin Green. ich bin aktiver Builder auf Kuchengames.de und helfe nebenbei dem content Team. ^^'
        },
        {
            name: 'LeEnte',
            category: 'content',
            role: 'content',
            uuid: 'a44e1be9-bf47-44cf-88c4-adf0f8103409',
            info: 'Quack!'
        },
        {
            name: 'Marc',
            category: 'content',
            role: 'content',
            uuid: 'e3f8e6c3-5b35-4e30-8aa3-d5a5160c9cfd',
            info: 'Dieses Rätselhafte Wesen wurde eines Tages einfach in der Stadt entdeckt.\nNiemand hat ihn seit dem mehr einen "schrägen Vogel" genannt. Dafür hat er gesorgt. Heute zaubert er einzigartige Musik für die Maps wie zum Beispiel den Dungeon oder die Mine.\nAußerdem sorgt er auf dem Server für Recht und Ordnung - sowohl Ingame, als auch auf Discord.'
        },
        {
            name: 'Anton',
            category: 'content',
            role: 'content',
            uuid: 'f352db9b-920c-4225-8b05-8c683dd7f6db',
            info: 'Hallo bin Anton 18 Jahre alt und in meiner Freizeit gehe ich ins Gym.'
        },
        {
            name: 'SMIBII',
            category: 'designer',
            role: 'designer',
            uuid: '6201b768-961e-499b-9306-ce4750d00118',
            info: 'Hallo ich bin SMIBII,\nIch bin der coolste aus diesem Team!\n\nDu glaubst mir nicht?\nDein pech!'
        },
        {
            name: 'Blacky',
            category: 'supporter',
            role: 'supporter',
            uuid: '0420c3d2-c6e9-4c34-b587-47749c24e99e',
            info: 'Blacky, die bezaubernde Supporterin auf KuchenGames.de, haucht dem Server mit ihrer tollen Stimme Leben ein und zaubert Probleme einfach weg.'
        },
        {
            name: 'Itsredzyt',
            category: 'supporter',
            role: 'supporter',
            uuid: '1d6cb936-3141-4518-b011-6e443efdb32d',
            info: 'Keine info gegeben!'
        }
    ]
};
