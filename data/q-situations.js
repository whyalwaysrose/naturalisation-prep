/* ============================================================
   MISES EN SITUATION — 50 questions (25 valeurs + 25 droits)
   ============================================================

   ⚠ NOT OFFICIAL, IN ANY PART.

   The real exam contains 12 "mises en situation" (6 in Principes et valeurs,
   6 in Droits et devoirs — arrêté of 10 October 2025, art. 3). The Ministry
   publishes the knowledge questions ONLY. It publishes no situational
   questions, no examples and no programme for them, so unlike the rest of this
   bank even the QUESTION WORDINGS here are written by us, not transcribed.

   They are modelled on the format every source agrees on — a short everyday
   scene, four possible reactions, one correct — and on the decision pattern
   that runs through all of them:

       dialogue first  →  then the legal or institutional channel.

   Violence, revenge, indifference, "sort it out privately", and any answer
   that sidesteps the law are wrong. A useful filter: what would an agent of
   the public service do?

   Institutions worth knowing by name, because they are frequently the answer:
   Défenseur des droits, inspection du travail, conseil de prud'hommes,
   PHAROS (online reporting), CPAM, mairie, conciliateur de justice,
   and the emergency numbers 15 / 17 / 18 / 112 / 119.

   Sources consulted for the situation types and reasoning patterns (all state
   plainly that they are pedagogical, not real exam content):
   parcours-civique.fr, civiqio.fr, naturalisationfrancefacile.fr,
   refugies.info. Reddit and Facebook could not be consulted: Reddit blocks
   automated access, and Facebook groups are behind a login wall.

   `sit: true` marks these so the app can keep them out of the verbatim
   official bank while still using them for the 12 situational slots.
   ============================================================ */

QUESTIONS.push.apply(QUESTIONS, [

/* ---------- PRINCIPES ET VALEURS (laïcité, égalité, libertés) ---------- */

{ id:'sit01', cat:'valeurs', sit:true, a:2,
  fr:{ q:"Votre fille rentre de l'école publique et raconte que la maîtresse a parlé des différentes religions en classe. Que pensez-vous ?",
       c:["C'est interdit : la laïcité interdit de parler de religion à l'école","Il faut demander que votre fille soit dispensée de ce cours","C'est normal : l'école enseigne le fait religieux de façon neutre, sans en privilégier aucune","Il faut porter plainte contre l'enseignante"],
       e:"La laïcité n'interdit pas de parler des religions : elle interdit d'en promouvoir une. L'histoire des religions fait partie des programmes et s'enseigne de manière neutre. Aucune dispense n'est possible pour un enseignement obligatoire." },
  en:{ q:"Your daughter comes home from state school saying her teacher discussed different religions in class. What do you think?",
       c:["It is forbidden: laïcité bans any mention of religion at school","You should ask for your daughter to be excused from that lesson","It is normal: schools teach about religion neutrally, without favouring any","You should file a complaint against the teacher"],
       e:"Laïcité does not forbid teaching about religions — it forbids promoting one. The history of religions is part of the curriculum and is taught neutrally. No exemption is possible from a compulsory lesson." } },

{ id:'sit02', cat:'valeurs', sit:true, a:1,
  fr:{ q:"Vous êtes agent d'accueil dans une mairie. Un usager vous demande de retirer la petite croix que vous portez autour du cou. Que faites-vous ?",
       c:["Vous refusez : c'est votre liberté religieuse","Vous la portez sous vos vêtements : un agent public est tenu à la neutralité pendant son service","Vous démissionnez","Vous demandez à l'usager de s'adresser à un autre agent"],
       e:"L'obligation de neutralité s'impose aux agents publics pendant leur service : aucun signe religieux ne doit être visible. Elle ne s'applique pas aux usagers, qui restent libres de manifester leurs convictions." },
  en:{ q:"You work at a town hall reception desk. A member of the public asks you to remove the small cross you wear round your neck. What do you do?",
       c:["Refuse — it is your religious freedom","Wear it under your clothes: a public official must be neutral while on duty","Resign","Ask the person to speak to a different official"],
       e:"The duty of neutrality binds public officials while on duty: no religious sign may be visible. It does not apply to members of the public, who remain free to show their beliefs." } },

{ id:'sit03', cat:'valeurs', sit:true, a:3,
  fr:{ q:"Une collègue découvre qu'elle est payée 15 % de moins qu'un collègue masculin occupant exactement le même poste. Que lui conseillez-vous ?",
       c:["D'accepter : les salaires sont négociés individuellement","De démissionner et de chercher ailleurs","De ne rien dire pour ne pas se faire mal voir","D'en parler à sa hiérarchie et, si rien ne change, de saisir l'inspection du travail ou le Défenseur des droits"],
       e:"« À travail égal, salaire égal » est une obligation légale. L'écart fondé sur le sexe est une discrimination. La démarche va du dialogue interne au recours institutionnel : inspection du travail, Défenseur des droits, conseil de prud'hommes." },
  en:{ q:"A colleague discovers she is paid 15% less than a male colleague doing exactly the same job. What do you advise?",
       c:["Accept it — salaries are negotiated individually","Resign and look elsewhere","Say nothing, to avoid making a bad impression","Raise it with management and, if nothing changes, contact the labour inspectorate or the Defender of Rights"],
       e:"Equal pay for equal work is a legal obligation. A gap based on sex is discrimination. The route runs from internal dialogue to institutional recourse: labour inspectorate, Defender of Rights, employment tribunal." } },

{ id:'sit04', cat:'valeurs', sit:true, a:0,
  fr:{ q:"Votre fils de 14 ans refuse d'aller au cours de natation parce que des filles y participent. Que faites-vous ?",
       c:["Vous lui expliquez que les cours sont obligatoires et mixtes, et qu'il doit y assister","Vous demandez une dispense à l'école","Vous le laissez rester à la maison ce jour-là","Vous demandez des cours séparés pour les garçons"],
       e:"L'éducation physique est un enseignement obligatoire et la mixité est la règle à l'école publique. Aucune dispense ne peut être accordée pour un motif religieux ou personnel : seul un certificat médical le permet." },
  en:{ q:"Your 14-year-old son refuses to attend swimming class because girls take part. What do you do?",
       c:["Explain that lessons are compulsory and mixed, and that he must attend","Ask the school for an exemption","Let him stay at home that day","Ask for separate classes for boys"],
       e:"PE is a compulsory subject and mixed classes are the rule in state schools. No exemption can be granted on religious or personal grounds — only a medical certificate allows one." } },

{ id:'sit05', cat:'valeurs', sit:true, a:2,
  fr:{ q:"Dans une conversation de groupe en ligne, une personne publie des messages appelant à la haine contre les habitants d'un quartier en raison de leur origine. Que faites-vous ?",
       c:["Rien : chacun est libre de dire ce qu'il pense","Vous répondez par des insultes","Vous signalez les messages à la plateforme et, si nécessaire, via PHAROS","Vous quittez la conversation sans rien dire"],
       e:"La liberté d'expression s'arrête à l'incitation à la haine, qui est un délit, y compris en ligne. Le signalement se fait auprès de la plateforme et sur PHAROS, le portail officiel de signalement des contenus illicites." },
  en:{ q:"In an online group chat, someone posts messages inciting hatred against residents of a neighbourhood because of their origin. What do you do?",
       c:["Nothing — everyone is free to say what they think","Reply with insults","Report the messages to the platform and, if needed, via PHAROS","Leave the conversation without saying anything"],
       e:"Freedom of expression stops at incitement to hatred, which is a criminal offence, online included. Report to the platform and to PHAROS, the official portal for reporting illegal content." } },

{ id:'sit06', cat:'valeurs', sit:true, a:1,
  fr:{ q:"Lors d'un entretien d'embauche, le recruteur vous demande votre religion et si vous comptez avoir des enfants. Que pensez-vous de ces questions ?",
       c:["Elles sont normales : l'employeur doit connaître ses futurs salariés","Elles sont illégales : seules les questions liées aux compétences et au poste sont autorisées","Elles sont autorisées si l'entreprise est privée","Il faut y répondre pour montrer sa bonne foi"],
       e:"Un recruteur ne peut poser que des questions ayant un lien direct et nécessaire avec l'emploi. Interroger sur la religion, l'origine, la santé ou les projets familiaux constitue une discrimination interdite." },
  en:{ q:"At a job interview the recruiter asks your religion and whether you plan to have children. What do you make of these questions?",
       c:["They are normal — an employer needs to know their future staff","They are illegal: only questions about skills and the job itself are allowed","They are allowed if the company is private","You should answer to show good faith"],
       e:"A recruiter may only ask questions directly and necessarily related to the job. Asking about religion, origin, health or family plans is prohibited discrimination." } },

{ id:'sit07', cat:'valeurs', sit:true, a:3,
  fr:{ q:"Un propriétaire refuse de louer son appartement à un candidat en raison de son origine, alors que son dossier est solide. Que peut faire ce candidat ?",
       c:["Rien : le propriétaire choisit librement son locataire","Proposer un loyer plus élevé","Se faire représenter par une autre personne","Saisir le Défenseur des droits ou déposer plainte : c'est une discrimination punie par la loi"],
       e:"Le propriétaire choisit son locataire sur des critères de solvabilité, jamais sur l'origine, le nom, la religion ou la couleur de peau. La discrimination au logement est un délit ; le Défenseur des droits peut être saisi gratuitement." },
  en:{ q:"A landlord refuses to rent to an applicant because of their origin, despite a strong application. What can the applicant do?",
       c:["Nothing — a landlord freely chooses their tenant","Offer a higher rent","Have someone else act on their behalf","Contact the Defender of Rights or file a complaint: this is discrimination punishable by law"],
       e:"A landlord chooses a tenant on ability to pay, never on origin, name, religion or skin colour. Housing discrimination is a criminal offence; the Defender of Rights can be contacted free of charge." } },

{ id:'sit08', cat:'valeurs', sit:true, a:2,
  fr:{ q:"Dans une administration, un usager refuse d'être reçu par une employée parce que c'est une femme. Quelle est la bonne réaction du service ?",
       c:["Lui trouver un agent masculin pour éviter le conflit","Lui donner raison : l'usager est libre de choisir","Refuser cette demande : l'égalité et le bon fonctionnement du service l'interdisent","Fermer le guichet"],
       e:"L'usager ne peut pas récuser un agent en raison de son sexe, de son origine ou de ses convictions. Céder reviendrait à valider une discrimination et à rompre l'égalité de traitement dans le service public." },
  en:{ q:"At a government office, a user refuses to be served by an employee because she is a woman. What is the correct response from the service?",
       c:["Find him a male official to avoid conflict","Agree — the user is free to choose","Refuse the request: equality and the proper running of the service forbid it","Close the counter"],
       e:"A user may not reject an official because of their sex, origin or beliefs. Giving in would endorse discrimination and break the equal treatment that public service requires." } },

{ id:'sit09', cat:'valeurs', sit:true, a:1,
  fr:{ q:"Un ami vous dit qu'il ne croit en aucun dieu et se demande si cela peut l'empêcher de devenir français. Que lui répondez-vous ?",
       c:["Qu'il doit choisir une religion pour être naturalisé","Que la liberté de conscience protège aussi bien les croyants que les athées, et que cela n'a aucun effet sur sa demande","Qu'il doit le cacher lors de l'entretien","Qu'il devra signer une déclaration religieuse"],
       e:"La liberté de conscience garantit le droit de croire, de ne pas croire ou de changer de conviction. L'État ne recense pas les croyances et n'en tient aucun compte dans une demande de naturalisation." },
  en:{ q:"A friend tells you he believes in no god and wonders whether that could stop him becoming French. What do you tell him?",
       c:["He must choose a religion to be naturalised","Freedom of conscience protects atheists as much as believers, and it has no bearing on his application","He should hide it during the interview","He will have to sign a religious declaration"],
       e:"Freedom of conscience guarantees the right to believe, not to believe, or to change belief. The State keeps no record of beliefs and gives them no weight in a naturalisation application." } },

{ id:'sit10', cat:'valeurs', sit:true, a:0,
  fr:{ q:"Un homme interdit à son épouse de travailler et de sortir seule. Que dit la loi française ?",
       c:["C'est illégal : une femme majeure dispose librement de sa personne, de son travail et de ses biens","C'est une affaire privée qui ne regarde pas la loi","C'est autorisé si le couple s'est marié à l'étranger","C'est autorisé si l'homme subvient seul aux besoins du foyer"],
       e:"Depuis 1965, une femme mariée peut travailler et gérer ses biens sans l'accord de son mari. Empêcher son conjoint de travailler ou de se déplacer relève des violences conjugales, punies par la loi." },
  en:{ q:"A man forbids his wife from working or going out alone. What does French law say?",
       c:["It is illegal: an adult woman freely controls her person, her work and her property","It is a private matter, outside the law","It is allowed if the couple married abroad","It is allowed if the man is the sole earner"],
       e:"Since 1965 a married woman may work and manage her property without her husband's consent. Preventing a spouse from working or moving freely is domestic abuse, punishable by law." } },

{ id:'sit11', cat:'valeurs', sit:true, a:2,
  fr:{ q:"Un collègue répète chaque jour des plaisanteries humiliantes sur les femmes de l'équipe. Que faut-il faire ?",
       c:["En rire pour ne pas envenimer l'ambiance","Répondre par d'autres plaisanteries","Le signaler à la hiérarchie ou aux représentants du personnel : cela peut constituer un harcèlement","Attendre que la situation se règle d'elle-même"],
       e:"Des propos sexistes répétés qui dégradent les conditions de travail constituent un harcèlement moral ou sexuel, puni par la loi. L'employeur a une obligation de protéger ses salariés." },
  en:{ q:"A colleague makes humiliating jokes about the women on the team every day. What should be done?",
       c:["Laugh along so as not to sour the atmosphere","Reply with jokes of your own","Report it to management or staff representatives: this may amount to harassment","Wait for it to sort itself out"],
       e:"Repeated sexist remarks that degrade working conditions amount to moral or sexual harassment, punishable by law. The employer has a duty to protect employees." } },

{ id:'sit12', cat:'valeurs', sit:true, a:1,
  fr:{ q:"Une personne critique publiquement les idées d'une religion lors d'un débat. Une autre appelle à s'en prendre aux fidèles de cette religion. Que dit la loi ?",
       c:["Les deux sont interdits","Critiquer des idées est licite ; appeler à s'en prendre à des personnes est un délit","Les deux sont autorisés au nom de la liberté d'expression","Seule la critique des idées est punie"],
       e:"En France, on peut critiquer, discuter et même tourner en dérision des croyances et des idées. En revanche, l'incitation à la haine ou à la violence contre des personnes en raison de leur religion est une infraction." },
  en:{ q:"Someone publicly criticises the ideas of a religion in a debate. Someone else calls for attacks on that religion's followers. What does the law say?",
       c:["Both are forbidden","Criticising ideas is lawful; calling for attacks on people is a criminal offence","Both are allowed under freedom of expression","Only criticism of ideas is punished"],
       e:"In France you may criticise, debate and even mock beliefs and ideas. Inciting hatred or violence against people because of their religion, however, is an offence." } },

{ id:'sit13', cat:'valeurs', sit:true, a:3,
  fr:{ q:"Un commerçant refuse l'entrée de son magasin à une personne aveugle accompagnée de son chien guide. Que dit la loi ?",
       c:["Le commerçant est libre : c'est un lieu privé","C'est autorisé pour des raisons d'hygiène","C'est autorisé si d'autres clients se plaignent","C'est une discrimination : les chiens guides sont admis dans tous les lieux ouverts au public"],
       e:"Refuser l'accès à une personne en situation de handicap accompagnée de son chien guide ou d'assistance est puni par la loi. L'accès est garanti dans les commerces, les transports et les administrations." },
  en:{ q:"A shopkeeper refuses entry to a blind person with their guide dog. What does the law say?",
       c:["The shopkeeper is free to decide — it is private property","It is allowed on hygiene grounds","It is allowed if other customers complain","It is discrimination: guide dogs are admitted everywhere open to the public"],
       e:"Refusing access to a disabled person accompanied by a guide or assistance dog is punishable by law. Access is guaranteed in shops, transport and public offices." } },

{ id:'sit14', cat:'valeurs', sit:true, a:0,
  fr:{ q:"À la sortie du bureau de vote, un membre de votre famille vous demande pour qui vous avez voté et insiste. Que faites-vous ?",
       c:["Vous rappelez que le vote est secret et que personne n'est obligé de le dire","Vous êtes obligé de répondre à un membre de votre famille","Vous devez le déclarer si on vous le demande officiellement","Vous montrez une photo de votre bulletin"],
       e:"Le secret du vote est un principe fondamental : il protège la liberté de chaque électeur. Nul n'a à justifier son choix, et photographier son bulletin dans l'isoloir est interdit." },
  en:{ q:"Leaving the polling station, a family member insistently asks who you voted for. What do you do?",
       c:["Point out that the ballot is secret and nobody has to say","You must answer a family member","You must declare it if officially asked","Show a photo of your ballot paper"],
       e:"Ballot secrecy is a fundamental principle protecting every voter's freedom. Nobody has to justify their choice, and photographing your ballot in the booth is forbidden." } },

{ id:'sit15', cat:'valeurs', sit:true, a:2,
  fr:{ q:"Une association vous demande de signer une pétition pour interdire la construction d'un lieu de culte dans votre commune, au motif de la religion concernée. Que faites-vous ?",
       c:["Vous signez : la laïcité interdit les lieux de culte","Vous signez si la majorité des habitants est d'accord","Vous refusez : la liberté de culte est garantie et viser une religion en particulier est discriminatoire","Vous demandez un référendum local"],
       e:"La loi de 1905 garantit le libre exercice des cultes. L'État ne subventionne aucun culte, mais il ne peut pas en interdire un. S'opposer à un projet en raison de la religion concernée est une discrimination." },
  en:{ q:"An association asks you to sign a petition to block a place of worship in your commune, because of the religion concerned. What do you do?",
       c:["Sign — laïcité forbids places of worship","Sign if most residents agree","Refuse: freedom of worship is guaranteed and targeting one religion is discriminatory","Call for a local referendum"],
       e:"The 1905 law guarantees free exercise of worship. The State funds no religion, but it cannot ban one. Opposing a project because of the religion involved is discrimination." } },

{ id:'sit16', cat:'valeurs', sit:true, a:1,
  fr:{ q:"Votre employeur, dans une entreprise privée, vous demande de travailler un jour de fête religieuse importante pour vous. Que pouvez-vous faire ?",
       c:["Refuser de venir : la liberté religieuse prime sur le contrat de travail","Demander un jour de congé, que l'employeur accorde si l'organisation du travail le permet","Exiger que ce jour devienne férié pour toute l'entreprise","Porter plainte pour discrimination"],
       e:"Les jours fériés légaux ne couvrent pas toutes les fêtes religieuses. Le salarié peut demander un congé ; l'employeur peut le refuser pour des raisons d'organisation, mais son refus ne doit pas être discriminatoire." },
  en:{ q:"Your employer, at a private company, asks you to work on a religious holiday that matters to you. What can you do?",
       c:["Refuse to come in — religious freedom overrides the employment contract","Request leave, which the employer grants if work organisation allows","Demand the day become a holiday for the whole company","File a discrimination complaint"],
       e:"Statutory public holidays do not cover every religious festival. An employee may request leave; the employer may refuse for organisational reasons, but the refusal must not be discriminatory." } },

{ id:'sit17', cat:'valeurs', sit:true, a:3,
  fr:{ q:"Des parents demandent que leur fille soit dispensée du cours d'histoire portant sur la Shoah. Quelle est la réponse de l'école ?",
       c:["La dispense est accordée si les parents le demandent par écrit","La dispense est accordée pour motif religieux","L'élève peut sortir de la classe pendant ce cours","La dispense est refusée : les programmes sont obligatoires pour tous les élèves"],
       e:"Aucun enseignement du programme ne peut faire l'objet d'une dispense pour motif religieux ou personnel. L'enseignement de la Shoah participe du devoir de mémoire et s'impose à tous." },
  en:{ q:"Parents ask for their daughter to be excused from the history lesson on the Holocaust. What does the school say?",
       c:["The exemption is granted if parents request it in writing","The exemption is granted on religious grounds","The pupil may leave the room during that lesson","The exemption is refused: the curriculum is compulsory for all pupils"],
       e:"No part of the curriculum can be waived on religious or personal grounds. Teaching the Holocaust is part of the duty of remembrance and applies to everyone." } },

{ id:'sit18', cat:'valeurs', sit:true, a:0,
  fr:{ q:"Une mère portant un foulard souhaite accompagner la sortie scolaire de sa fille. Un parent s'y oppose au nom de la laïcité. Que dit le droit ?",
       c:["Les parents accompagnateurs sont des usagers du service public, pas des agents : ils ne sont pas soumis à l'obligation de neutralité","Toute personne entrant dans une école est soumise à la neutralité","Elle peut accompagner à condition de retirer son foulard","Les sorties scolaires sont interdites aux parents"],
       e:"L'obligation de neutralité pèse sur les agents publics, pas sur les usagers. Les parents accompagnateurs bénévoles ne sont pas des agents ; leur participation peut être encadrée, mais pas interdite par principe." },
  en:{ q:"A mother wearing a headscarf wants to help supervise her daughter's school trip. Another parent objects, citing laïcité. What does the law say?",
       c:["Accompanying parents are users of the public service, not officials: the neutrality duty does not apply to them","Anyone entering a school is bound by neutrality","She may come if she removes her headscarf","School trips are closed to parents"],
       e:"The neutrality duty falls on public officials, not on users. Volunteer accompanying parents are not officials; their participation may be regulated, but not banned as a matter of principle." } },

{ id:'sit19', cat:'valeurs', sit:true, a:2,
  fr:{ q:"Un élève de terminale veut créer un club de débat politique dans son lycée public. Que dit la loi ?",
       c:["C'est interdit : la politique n'a pas sa place dans un établissement scolaire","C'est autorisé uniquement pour les enseignants","C'est possible dans le cadre fixé par l'établissement, dans le respect du pluralisme et de la neutralité du service public","Il faut l'autorisation du préfet"],
       e:"Les lycéens disposent d'une liberté d'expression et d'association encadrée par le règlement intérieur. Le pluralisme est encouragé ; ce sont les personnels qui sont tenus à la neutralité, pas les élèves." },
  en:{ q:"A final-year pupil wants to start a political debating club at their state lycée. What does the law say?",
       c:["It is forbidden — politics has no place in a school","It is allowed for teachers only","It is possible within the framework set by the school, respecting pluralism and the neutrality of the public service","The prefect's authorisation is required"],
       e:"Lycée pupils have freedom of expression and association, framed by school rules. Pluralism is encouraged; it is staff who are bound by neutrality, not pupils." } },

{ id:'sit20', cat:'valeurs', sit:true, a:1,
  fr:{ q:"Vous assistez à une scène où une personne est insultée dans le bus en raison de sa couleur de peau. Quelle est la réaction la plus appropriée ?",
       c:["Filmer la scène et la diffuser sur les réseaux sociaux","Ne pas répondre à la violence, soutenir la victime et signaler les faits au conducteur ou à la police","Insulter l'auteur à votre tour","Descendre du bus sans rien dire"],
       e:"L'injure à caractère raciste est un délit. La bonne réaction n'est ni la violence ni l'indifférence : soutenir la victime, alerter un responsable ou la police (17), et témoigner si une plainte est déposée." },
  en:{ q:"You witness someone being insulted on the bus because of their skin colour. What is the most appropriate reaction?",
       c:["Film it and post it on social media","Do not answer violence with violence: support the victim and report it to the driver or the police","Insult the perpetrator back","Get off the bus without saying anything"],
       e:"Racist insult is a criminal offence. The right reaction is neither violence nor indifference: support the victim, alert someone in authority or the police (17), and give evidence if a complaint is filed." } },

/* ---------- DROITS ET DEVOIRS (obligations, recours, vie quotidienne) ---------- */

{ id:'sit21', cat:'droits', sit:true, a:2,
  fr:{ q:"Vous êtes témoin d'un accident de la route avec des blessés. Que devez-vous faire ?",
       c:["Continuer votre route pour ne pas gêner les secours","Déplacer les blessés hors des véhicules","Alerter les secours (15, 18 ou 112) et sécuriser les lieux si c'est possible sans danger","Attendre que quelqu'un d'autre appelle"],
       e:"Porter secours est une obligation légale : la non-assistance à personne en danger est punie de cinq ans d'emprisonnement. Il ne faut pas déplacer un blessé sauf danger immédiat, mais il faut toujours alerter." },
  en:{ q:"You witness a road accident with injuries. What must you do?",
       c:["Drive on so as not to obstruct the emergency services","Move the injured out of the vehicles","Call the emergency services (15, 18 or 112) and make the scene safe if you can do so without danger","Wait for someone else to call"],
       e:"Helping is a legal obligation: failing to assist a person in danger carries five years' imprisonment. Do not move an injured person unless there is immediate danger, but always raise the alarm." } },

{ id:'sit22', cat:'droits', sit:true, a:0,
  fr:{ q:"Un employeur vous propose de travailler payé en espèces, sans contrat ni déclaration. Que faites-vous ?",
       c:["Vous refusez : le travail dissimulé est illégal et vous prive de toute protection sociale","Vous acceptez si le salaire est plus élevé","Vous acceptez pour quelques mois seulement","Vous acceptez et vous le déclarez vous-même aux impôts"],
       e:"Le travail dissimulé est un délit pour l'employeur comme pour le salarié. Il prive de couverture maladie, de droits à la retraite, d'assurance chômage et de tout recours en cas d'accident du travail." },
  en:{ q:"An employer offers you cash-in-hand work, with no contract or declaration. What do you do?",
       c:["Refuse: undeclared work is illegal and leaves you with no social protection","Accept if the pay is higher","Accept for a few months only","Accept and declare it yourself to the tax office"],
       e:"Undeclared work is an offence for employer and employee alike. It removes health cover, pension rights, unemployment insurance and any recourse after a workplace accident." } },

{ id:'sit23', cat:'droits', sit:true, a:3,
  fr:{ q:"Un ami sans couverture maladie vous demande de lui prêter votre carte Vitale pour une consultation. Que faites-vous ?",
       c:["Vous acceptez : c'est un dépannage entre amis","Vous acceptez une seule fois","Vous lui prêtez en lui demandant de rembourser","Vous refusez et vous l'orientez vers la CPAM : prêter sa carte est une fraude"],
       e:"La carte Vitale est strictement personnelle ; la prêter est une fraude sanctionnée. Toute personne résidant régulièrement en France a droit à une couverture maladie : la CPAM examine chaque situation." },
  en:{ q:"A friend without health cover asks to borrow your carte Vitale for an appointment. What do you do?",
       c:["Agree — it is just helping a friend out","Agree, but only once","Lend it and ask to be reimbursed","Refuse and point them to the CPAM: lending your card is fraud"],
       e:"The carte Vitale is strictly personal; lending it is punishable fraud. Anyone legally resident in France is entitled to health cover — the CPAM assesses each situation." } },

{ id:'sit24', cat:'droits', sit:true, a:1,
  fr:{ q:"Vous n'avez perçu aucun revenu cette année. Devez-vous faire une déclaration d'impôts ?",
       c:["Non, la déclaration ne concerne que les personnes imposables","Oui : la déclaration est annuelle et obligatoire, même sans revenu imposable","Non, mais seulement si vous êtes étranger","Oui, mais tous les trois ans seulement"],
       e:"Toute personne résidant fiscalement en France déclare ses revenus chaque année, même nuls. La déclaration ouvre droit à certaines aides et permet d'obtenir un avis d'imposition, souvent demandé dans les démarches." },
  en:{ q:"You had no income this year. Must you file a tax return?",
       c:["No, returns only concern people who owe tax","Yes: the return is annual and compulsory, even with no taxable income","No, but only if you are a foreign national","Yes, but only every three years"],
       e:"Anyone tax-resident in France declares their income every year, even if it is nil. The return opens entitlement to certain benefits and provides a tax notice, often required for administrative steps." } },

{ id:'sit25', cat:'droits', sit:true, a:2,
  fr:{ q:"Votre voisin fait un bruit excessif tard le soir, plusieurs fois par semaine. Quelle est la démarche appropriée ?",
       c:["Faire du bruit à votre tour pour qu'il comprenne","Couper son électricité","Lui en parler d'abord, puis saisir le syndic, un conciliateur de justice ou la mairie si cela continue","Déménager"],
       e:"Le tapage nocturne est une infraction, mais la démarche commence toujours par le dialogue. En cas d'échec : courrier, conciliateur de justice, police municipale ou nationale. Se faire justice soi-même est interdit." },
  en:{ q:"Your neighbour makes excessive noise late at night, several times a week. What is the right approach?",
       c:["Make noise back so they understand","Cut off their electricity","Speak to them first, then involve the building manager, a legal conciliator or the town hall if it continues","Move out"],
       e:"Night-time noise is an offence, but the process always starts with dialogue. If that fails: a letter, a legal conciliator, municipal or national police. Taking justice into your own hands is forbidden." } },

{ id:'sit26', cat:'droits', sit:true, a:0,
  fr:{ q:"Vous recevez une convocation pour être juré d'assises, mais cela vous dérange dans votre travail. Que devez-vous faire ?",
       c:["Vous présenter : être juré est une obligation civique, seuls des motifs graves permettent une dispense","Ignorer la convocation","Envoyer un proche à votre place","Payer une amende pour être dispensé"],
       e:"Les jurés sont tirés au sort sur les listes électorales. L'employeur doit laisser partir le salarié convoqué. Se soustraire à cette obligation sans motif légitime est puni d'une amende." },
  en:{ q:"You are summoned for jury service at the assize court, but it clashes with work. What must you do?",
       c:["Attend: jury service is a civic obligation, and only serious grounds allow an exemption","Ignore the summons","Send a relative in your place","Pay a fine to be excused"],
       e:"Jurors are drawn by lot from the electoral rolls. The employer must release the employee. Avoiding the duty without legitimate reason is punishable by a fine." } },

{ id:'sit27', cat:'droits', sit:true, a:1,
  fr:{ q:"Vous êtes placé en garde à vue. Quels sont vos droits ?",
       c:["Aucun tant que l'enquête n'est pas terminée","Être informé des faits reprochés, garder le silence, être examiné par un médecin, prévenir un proche et être assisté d'un avocat","Uniquement le droit de téléphoner","Le droit de partir à tout moment"],
       e:"Toute personne en garde à vue est informée de ses droits dès le début de la mesure. L'aide juridictionnelle permet d'être assisté d'un avocat même sans ressources suffisantes." },
  en:{ q:"You are taken into police custody. What are your rights?",
       c:["None until the investigation is over","To be told the alleged facts, remain silent, be examined by a doctor, inform a relative and be assisted by a lawyer","Only the right to make a phone call","The right to leave at any time"],
       e:"Anyone held in custody is informed of their rights from the outset. Legal aid provides a lawyer even without sufficient means." } },

{ id:'sit28', cat:'droits', sit:true, a:3,
  fr:{ q:"Une salariée annonce sa grossesse et son employeur envisage de la licencier pour ce motif. Que dit la loi ?",
       c:["C'est possible pendant la période d'essai","C'est possible si l'entreprise a des difficultés économiques","C'est possible si le poste doit être pourvu en continu","C'est interdit : la grossesse ne peut jamais justifier un licenciement"],
       e:"La salariée bénéficie d'une protection renforcée pendant la grossesse, le congé maternité et les semaines qui suivent. Un licenciement fondé sur la grossesse est nul et peut être contesté aux prud'hommes." },
  en:{ q:"An employee announces her pregnancy and her employer considers dismissing her for it. What does the law say?",
       c:["It is possible during the trial period","It is possible if the company is in financial difficulty","It is possible if the post must be filled continuously","It is forbidden: pregnancy can never justify dismissal"],
       e:"An employee has reinforced protection during pregnancy, maternity leave and the following weeks. A dismissal based on pregnancy is void and can be challenged at the employment tribunal." } },

{ id:'sit29', cat:'droits', sit:true, a:2,
  fr:{ q:"Une connaissance vous propose de l'argent pour un mariage qui lui permettrait d'obtenir un titre de séjour. Que faites-vous ?",
       c:["Vous acceptez : le mariage est un choix privé","Vous acceptez si vous divorcez rapidement","Vous refusez : le mariage de complaisance est un délit pour les deux personnes","Vous demandez conseil à la mairie avant d'accepter"],
       e:"Le mariage frauduleux est puni de cinq ans d'emprisonnement et de 15 000 € d'amende, pour les deux époux comme pour les organisateurs. Il entraîne l'annulation du mariage et le retrait du titre obtenu." },
  en:{ q:"An acquaintance offers you money for a marriage that would get them a residence permit. What do you do?",
       c:["Accept — marriage is a private choice","Accept, provided you divorce quickly","Refuse: a sham marriage is a criminal offence for both people","Ask the town hall for advice before accepting"],
       e:"Marriage fraud carries five years' imprisonment and a €15,000 fine, for both spouses and for organisers. It voids the marriage and withdraws any permit obtained." } },

{ id:'sit30', cat:'droits', sit:true, a:1,
  fr:{ q:"Votre fils de 15 ans veut arrêter l'école pour travailler. Que dit la loi ?",
       c:["Il peut arrêter s'il a un contrat de travail","L'instruction est obligatoire jusqu'à 16 ans, puis une obligation de formation s'applique jusqu'à 18 ans","Il peut arrêter avec l'accord écrit des parents","Il peut arrêter dès 14 ans en apprentissage"],
       e:"L'instruction est obligatoire de 3 à 16 ans. De 16 à 18 ans, le jeune doit être en études, en formation, en apprentissage ou en accompagnement vers l'emploi. Les parents sont responsables du respect de cette obligation." },
  en:{ q:"Your 15-year-old son wants to leave school to work. What does the law say?",
       c:["He may leave if he has an employment contract","Education is compulsory to 16, then a training obligation applies until 18","He may leave with written parental consent","He may leave at 14 if apprenticed"],
       e:"Education is compulsory from 3 to 16. From 16 to 18 a young person must be in education, training, apprenticeship or a scheme leading to employment. Parents are responsible for compliance." } },

{ id:'sit31', cat:'droits', sit:true, a:0,
  fr:{ q:"Vous entendez régulièrement un enfant être frappé chez vos voisins. Que devez-vous faire ?",
       c:["Signaler la situation, en appelant le 119 (Enfance en danger) ou la police","Ne pas intervenir : c'est l'éducation des parents","Aller frapper à la porte pour les menacer","Attendre d'avoir des preuves filmées"],
       e:"Les violences éducatives sont interdites depuis 2019 et les violences sur mineur sont un délit. Le 119 est gratuit, ouvert 24h/24 et peut être anonyme. Ne pas signaler peut constituer une non-dénonciation." },
  en:{ q:"You regularly hear a child being hit at your neighbours' home. What must you do?",
       c:["Report it, by calling 119 (child protection) or the police","Do not interfere — that is the parents' upbringing","Bang on their door and threaten them","Wait until you have it on video"],
       e:"Corporal punishment has been banned since 2019 and violence against a minor is a criminal offence. 119 is free, open 24/7 and can be anonymous. Failing to report may itself be an offence." } },

{ id:'sit32', cat:'droits', sit:true, a:2,
  fr:{ q:"Votre propriétaire entre dans le logement que vous louez en votre absence, sans vous prévenir. Que dit la loi ?",
       c:["C'est son droit : il est propriétaire du logement","C'est autorisé une fois par an pour vérifier l'état du logement","C'est interdit : le locataire a droit au respect de son domicile, le propriétaire doit obtenir son accord","C'est autorisé s'il a gardé un double des clés"],
       e:"Le locataire jouit paisiblement du logement pendant toute la durée du bail. Le propriétaire ne peut y entrer sans son accord, même pour des travaux, qui doivent être organisés avec un préavis." },
  en:{ q:"Your landlord enters the flat you rent while you are out, without telling you. What does the law say?",
       c:["It is his right — he owns the property","It is allowed once a year to check the condition","It is forbidden: the tenant's home is protected and the landlord needs their agreement","It is allowed if he kept a spare key"],
       e:"A tenant has peaceful enjoyment of the property throughout the lease. The landlord may not enter without agreement, even for works, which must be arranged with notice." } },

{ id:'sit33', cat:'droits', sit:true, a:1,
  fr:{ q:"Vous souhaitez organiser une manifestation dans votre ville pour défendre une cause. Quelle démarche est nécessaire ?",
       c:["Aucune : manifester est un droit absolu","Déclarer la manifestation en mairie ou en préfecture avant la date prévue","Obtenir l'accord écrit de tous les riverains","Demander l'autorisation du tribunal"],
       e:"La liberté de manifester est garantie, mais elle s'exerce dans un cadre : toute manifestation sur la voie publique doit être déclarée à l'avance. L'autorité peut l'encadrer, voire l'interdire pour des motifs d'ordre public." },
  en:{ q:"You want to organise a demonstration in your town for a cause. What step is required?",
       c:["None — demonstrating is an absolute right","Declare the demonstration to the town hall or prefecture in advance","Get written agreement from all local residents","Ask the court for permission"],
       e:"Freedom to demonstrate is guaranteed but framed: any demonstration on the public highway must be declared in advance. The authorities may impose conditions, or ban it on public-order grounds." } },

{ id:'sit34', cat:'droits', sit:true, a:3,
  fr:{ q:"Vous êtes en profond désaccord avec une loi qui vient d'être votée. Que pouvez-vous faire ?",
       c:["Ne pas l'appliquer, puisque vous la jugez injuste","Demander à un juge de l'annuler vous-même","L'appliquer uniquement si elle vous concerne directement","La contester par le vote, le débat public, la pétition ou une action en justice, mais la respecter tant qu'elle est en vigueur"],
       e:"Dans un État de droit, la loi s'impose à tous, y compris à ceux qui la contestent. Les moyens de la faire changer sont démocratiques : élections, débat, pétitions, associations, et recours juridictionnels." },
  en:{ q:"You strongly disagree with a law that has just been passed. What can you do?",
       c:["Ignore it, since you consider it unjust","Ask a judge to strike it down yourself","Obey it only if it directly concerns you","Challenge it by voting, public debate, petition or legal action — but obey it while it is in force"],
       e:"Under the rule of law, the law binds everyone, including those who oppose it. The means of changing it are democratic: elections, debate, petitions, associations and legal challenges." } },

{ id:'sit35', cat:'droits', sit:true, a:0,
  fr:{ q:"Un collègue est victime de harcèlement moral au travail et n'ose rien dire. Que lui conseillez-vous ?",
       c:["De noter précisément les faits et d'alerter la hiérarchie, les représentants du personnel ou l'inspection du travail","De démissionner immédiatement","De répondre par les mêmes méthodes","D'attendre que cela cesse tout seul"],
       e:"Le harcèlement moral est un délit et l'employeur a une obligation de sécurité envers ses salariés. Conserver des traces écrites est essentiel ; le conseil de prud'hommes peut être saisi." },
  en:{ q:"A colleague is being bullied at work and daren't say anything. What do you advise?",
       c:["Record the facts precisely and alert management, staff representatives or the labour inspectorate","Resign immediately","Respond in kind","Wait for it to stop by itself"],
       e:"Workplace bullying is a criminal offence and the employer has a duty of care. Keeping written records is essential; the employment tribunal can be asked to intervene." } },

{ id:'sit36', cat:'droits', sit:true, a:2,
  fr:{ q:"On vous demande de signer une attestation affirmant des faits que vous n'avez pas constatés, pour aider un proche dans une démarche. Que faites-vous ?",
       c:["Vous signez : c'est pour rendre service","Vous signez en précisant oralement vos réserves","Vous refusez : une fausse attestation est un délit","Vous signez sous un faux nom"],
       e:"Établir une attestation mensongère destinée à une administration ou à une juridiction est puni d'un an d'emprisonnement et de 15 000 € d'amende. Le signataire engage sa responsabilité personnelle." },
  en:{ q:"You are asked to sign a statement asserting facts you did not witness, to help a relative with a procedure. What do you do?",
       c:["Sign — it is doing someone a favour","Sign, stating your reservations verbally","Refuse: a false written statement is a criminal offence","Sign under a false name"],
       e:"Producing a false statement intended for an authority or a court carries one year's imprisonment and a €15,000 fine. The signatory is personally liable." } },

{ id:'sit37', cat:'droits', sit:true, a:1,
  fr:{ q:"Vous voulez créer une association de quartier avec des voisins. Quelle est la démarche ?",
       c:["Obtenir l'autorisation préalable du préfet","Rédiger des statuts et déclarer l'association en préfecture : aucune autorisation n'est nécessaire","Demander l'accord du maire et du conseil municipal","Créer d'abord une entreprise"],
       e:"La loi du 1er juillet 1901 pose la liberté d'association : une simple déclaration suffit pour obtenir la capacité juridique. Les étrangers en situation régulière peuvent créer une association et la diriger." },
  en:{ q:"You want to set up a neighbourhood association with neighbours. What is the process?",
       c:["Obtain prior authorisation from the prefect","Draw up statutes and declare the association to the prefecture: no authorisation is needed","Get the mayor's and council's agreement","Set up a company first"],
       e:"The law of 1 July 1901 establishes freedom of association: a simple declaration confers legal capacity. Legally resident foreign nationals may create and run an association." } },

{ id:'sit38', cat:'droits', sit:true, a:3,
  fr:{ q:"Vous êtes victime d'une escroquerie sur internet : un vendeur a encaissé votre paiement et ne livre rien. Que faites-vous ?",
       c:["Vous publiez ses coordonnées personnelles en ligne","Vous vous rendez chez lui pour récupérer votre argent","Vous laissez tomber : les achats en ligne ne sont pas protégés","Vous conservez les preuves, signalez les faits et déposez plainte"],
       e:"L'escroquerie est un délit. Il faut conserver les échanges et les preuves de paiement, signaler l'annonce à la plateforme, effectuer un signalement en ligne et déposer plainte. Publier les données personnelles d'autrui est illégal." },
  en:{ q:"You are the victim of an online scam: a seller took your payment and delivers nothing. What do you do?",
       c:["Post their personal details online","Go to their home to get your money back","Give up — online purchases are not protected","Keep the evidence, report it, and file a complaint"],
       e:"Fraud is a criminal offence. Keep the correspondence and proof of payment, report the listing to the platform, make an online report and file a complaint. Publishing someone's personal data is illegal." } },

{ id:'sit39', cat:'droits', sit:true, a:0,
  fr:{ q:"Vous êtes pressé et la seule place libre est réservée aux personnes handicapées. Que faites-vous ?",
       c:["Vous cherchez une autre place : y stationner sans carte est interdit et sanctionné","Vous vous garez cinq minutes seulement","Vous vous garez en laissant un mot d'excuse","Vous vous garez si aucune personne handicapée n'est visible"],
       e:"Seuls les titulaires de la carte mobilité inclusion peuvent utiliser ces places. L'amende est de 135 € et le véhicule peut être mis en fourrière : la place doit rester disponible à tout moment." },
  en:{ q:"You are in a hurry and the only free space is reserved for disabled people. What do you do?",
       c:["Look for another space: parking there without a card is forbidden and fined","Park for just five minutes","Park and leave an apologetic note","Park if no disabled person is in sight"],
       e:"Only holders of the inclusion mobility card may use these spaces. The fine is €135 and the vehicle may be towed: the space must stay available at all times." } },

{ id:'sit40', cat:'droits', sit:true, a:2,
  fr:{ q:"Un proche vous dit qu'en tant qu'étranger en situation régulière, vous n'avez le droit à aucune protection sociale. Que lui répondez-vous ?",
       c:["Qu'il a raison, la protection sociale est réservée aux Français","Qu'il faut attendre dix ans de résidence","Qu'une personne qui travaille ou réside régulièrement en France est affiliée à l'Assurance maladie, quelle que soit sa nationalité","Qu'il faut souscrire une assurance privée obligatoire"],
       e:"L'affiliation à la Sécurité sociale dépend du travail ou d'une résidence stable et régulière, pas de la nationalité. Les cotisations ouvrent les mêmes droits : maladie, retraite, allocations familiales." },
  en:{ q:"A relative tells you that as a legally resident foreign national you have no right to social protection. What do you reply?",
       c:["That they are right — social protection is for French nationals","That you must wait ten years of residence","That anyone working or stably and legally resident in France is covered by health insurance, whatever their nationality","That you must take out compulsory private insurance"],
       e:"Social security cover depends on work or stable, legal residence, not nationality. Contributions open the same rights: health care, pensions, family benefits." } },
/* ---------- Folded in from scenario types reported by candidates ----------
   The sites consulted describe these situation types as recurring, drawing on
   candidate recollection. The wordings below are still ours: nobody publishes
   the real questions, and a recalled question is a paraphrase given months
   after the fact. Treated as a signal about WHAT gets tested, not as exam
   content.                                                                   */

{ id:'sit41', cat:'valeurs', sit:true, a:2,
  fr:{ q:"Dans une entreprise privée, un salarié souhaite prier quelques minutes pendant sa pause. Que dit le droit ?",
       c:["C'est interdit : la laïcité s'applique à toutes les entreprises","C'est un droit absolu que l'employeur ne peut jamais limiter","C'est possible pendant les temps de pause ; l'employeur ne peut restreindre que pour des raisons justifiées et proportionnées","C'est possible seulement si l'employeur est de la même religion"],
       e:"La neutralité s'impose au service public, pas aux entreprises privées. Le salarié garde sa liberté religieuse ; l'employeur ne peut la restreindre que si c'est justifié par la tâche ou la sécurité, et proportionné." },
  en:{ q:"At a private company, an employee wants to pray for a few minutes during their break. What does the law say?",
       c:["It is forbidden — laïcité applies to all companies","It is an absolute right the employer can never limit","It is possible during breaks; the employer may restrict only for justified and proportionate reasons","It is possible only if the employer shares the same religion"],
       e:"Neutrality binds the public service, not private companies. Employees keep their religious freedom; an employer may restrict it only where justified by the task or safety, and proportionately." } },

{ id:'sit42', cat:'valeurs', sit:true, a:0,
  fr:{ q:"Une personne quitte la religion dans laquelle elle a grandi. Un membre de sa famille la menace pour l'y faire revenir. Que dit la loi ?",
       c:["Changer de religion ou n'en avoir aucune est un droit ; les menaces sont un délit puni par la loi","C'est un conflit familial privé dans lequel la loi n'intervient pas","La personne doit respecter la religion de sa famille","La loi ne protège que les croyants"],
       e:"La liberté de conscience comprend le droit de changer de religion ou d'y renoncer. Les menaces et les pressions exercées pour l'en empêcher sont pénalement réprimées, y compris au sein de la famille." },
  en:{ q:"Someone leaves the religion they grew up in. A family member threatens them to make them return. What does the law say?",
       c:["Changing religion or having none is a right; threats are a criminal offence","It is a private family matter the law stays out of","The person must respect their family's religion","The law protects believers only"],
       e:"Freedom of conscience includes the right to change religion or give it up. Threats and pressure to prevent it are criminally punishable, including within a family." } },

{ id:'sit43', cat:'valeurs', sit:true, a:3,
  fr:{ q:"Un collègue vous dit qu'il refuse de servir certains clients à cause de leur origine. Quelle est la bonne réaction ?",
       c:["Le laisser faire : chacun ses opinions","Servir ces clients à sa place sans rien dire","Lui proposer d'échanger discrètement de poste","Lui rappeler que le refus de vente fondé sur l'origine est un délit, et alerter la hiérarchie s'il persiste"],
       e:"Refuser un bien ou un service en raison de l'origine, du nom, de la religion ou du handicap est une discrimination punie de trois ans d'emprisonnement et 45 000 € d'amende. L'employeur doit y mettre fin." },
  en:{ q:"A colleague tells you he refuses to serve certain customers because of their origin. What is the right reaction?",
       c:["Let him — everyone has their opinions","Serve those customers in his place and say nothing","Quietly offer to swap roles with him","Remind him that refusing service on grounds of origin is a criminal offence, and alert management if he persists"],
       e:"Refusing goods or a service because of origin, name, religion or disability is discrimination, punishable by three years' imprisonment and a €45,000 fine. The employer must put a stop to it." } },

{ id:'sit44', cat:'valeurs', sit:true, a:1,
  fr:{ q:"Un voisin affirme que la laïcité interdit de porter un signe religieux dans la rue. A-t-il raison ?",
       c:["Oui, aucun signe religieux ne peut être visible en public","Non : la laïcité s'impose à l'État et à ses agents, pas aux particuliers dans l'espace public","Oui, sauf pendant les fêtes religieuses","Non, mais seulement pour les personnes de nationalité française"],
       e:"La laïcité impose la neutralité de l'État et de ses agents. Les particuliers restent libres de manifester leurs convictions dans l'espace public. Une exception vise la dissimulation du visage, interdite depuis 2010." },
  en:{ q:"A neighbour claims that laïcité bans wearing a religious sign in the street. Is he right?",
       c:["Yes, no religious sign may be visible in public","No: laïcité binds the State and its officials, not private individuals in public space","Yes, except during religious festivals","No, but only for French nationals"],
       e:"Laïcité requires neutrality of the State and its officials. Private individuals remain free to show their beliefs in public space. One exception is concealing the face, banned since 2010." } },

{ id:'sit45', cat:'valeurs', sit:true, a:2,
  fr:{ q:"Des parents demandent que la cantine de l'école publique ne serve que des repas conformes à leur religion. Que répond la commune ?",
       c:["Elle doit accepter : c'est la liberté de culte","Elle doit supprimer la cantine pour éviter tout conflit","Elle n'y est pas obligée : le service public ne se règle pas sur une religion, même s'il peut proposer des menus de substitution","Elle doit organiser un vote des parents"],
       e:"La cantine est un service public facultatif. Aucune obligation religieuse ne peut lui être imposée, mais rien n'interdit à une commune de proposer un menu sans porc ou végétarien : c'est un choix local, pas un droit." },
  en:{ q:"Parents ask that the state school canteen serve only meals conforming to their religion. What does the commune reply?",
       c:["It must agree — that is freedom of worship","It must close the canteen to avoid conflict","It is not obliged to: a public service is not governed by a religion, though it may offer alternative menus","It must hold a parents' vote"],
       e:"The canteen is an optional public service. No religious requirement can be imposed on it, but nothing stops a commune offering a pork-free or vegetarian option: that is a local choice, not a right." } },

{ id:'sit46', cat:'droits', sit:true, a:1,
  fr:{ q:"Des collègues en grève bloquent l'entrée de l'entreprise. Vous souhaitez travailler. Que dit le droit ?",
       c:["Les grévistes peuvent empêcher l'accès : c'est le principe même de la grève","La grève est un droit constitutionnel, mais empêcher les non-grévistes de travailler est illicite : prévenez l'employeur","Vous devez faire grève par solidarité","Vous pouvez forcer le passage vous-même"],
       e:"Le droit de grève est garanti par la Constitution. Il ne permet ni de bloquer l'accès aux locaux, ni d'empêcher les non-grévistes de travailler : c'est une entrave. Le règlement passe par l'employeur et la justice." },
  en:{ q:"Colleagues on strike are blocking the entrance. You want to work. What does the law say?",
       c:["Strikers may block access — that is the whole point of a strike","Striking is a constitutional right, but preventing non-strikers from working is unlawful: tell the employer","You must strike out of solidarity","You may force your way through yourself"],
       e:"The right to strike is guaranteed by the Constitution. It allows neither blocking access to the premises nor stopping non-strikers from working: that is unlawful obstruction. Resolution goes through the employer and the courts." } },

{ id:'sit47', cat:'droits', sit:true, a:2,
  fr:{ q:"Vous souhaitez instruire votre enfant à la maison plutôt que de l'inscrire à l'école. Que faut-il faire ?",
       c:["Rien : il suffit d'informer la mairie","Rien : l'instruction en famille est un droit sans formalité","Demander une autorisation préalable à l'académie, accordée pour des motifs limités","Attendre les 6 ans de l'enfant, puis faire une simple déclaration"],
       e:"Depuis 2022, l'instruction en famille est soumise à une autorisation préalable du rectorat, accordée pour des motifs limités (santé, handicap, activité intensive, situation propre à l'enfant). L'instruction reste obligatoire de 3 à 16 ans." },
  en:{ q:"You want to educate your child at home rather than enrol them in school. What must you do?",
       c:["Nothing — just inform the town hall","Nothing — home education is a right with no formalities","Apply for prior authorisation from the education authority, granted on limited grounds","Wait until the child is 6, then simply declare it"],
       e:"Since 2022 home education requires prior authorisation from the education authority, granted on limited grounds (health, disability, intensive activity, the child's own situation). Education remains compulsory from 3 to 16." } },

{ id:'sit48', cat:'droits', sit:true, a:0,
  fr:{ q:"Votre voisin, ressortissant d'un pays de l'Union européenne installé en France, vous demande s'il peut voter. Que lui répondez-vous ?",
       c:["Qu'il peut voter aux élections municipales et européennes, mais pas aux présidentielles ni aux législatives","Qu'il peut voter à toutes les élections françaises","Qu'il ne peut voter à aucune élection en France","Qu'il peut voter uniquement s'il paie des impôts en France"],
       e:"La citoyenneté européenne, créée par le traité de Maastricht en 1992, ouvre aux ressortissants de l'Union résidant en France le droit de vote et d'éligibilité aux élections municipales et européennes. Les scrutins nationaux restent réservés aux Français." },
  en:{ q:"Your neighbour, an EU national living in France, asks whether he can vote. What do you tell him?",
       c:["That he can vote in municipal and European elections, but not presidential or legislative ones","That he can vote in all French elections","That he cannot vote in any election in France","That he can vote only if he pays tax in France"],
       e:"European citizenship, created by the Maastricht Treaty in 1992, gives EU nationals resident in France the right to vote and stand in municipal and European elections. National elections remain reserved for French citizens." } },

{ id:'sit49', cat:'droits', sit:true, a:3,
  fr:{ q:"Vous résidez fiscalement en France et percevez des loyers d'un bien situé à l'étranger. Que devez-vous déclarer ?",
       c:["Rien : ces revenus sont déjà imposés à l'étranger","Seulement si la somme dépasse 10 000 € par an","Seulement les revenus versés sur un compte français","L'ensemble de vos revenus, y compris étrangers, ainsi que vos comptes ouverts à l'étranger"],
       e:"Un résident fiscal français déclare ses revenus mondiaux. Les comptes bancaires détenus à l'étranger doivent aussi être déclarés. Les conventions fiscales évitent la double imposition, mais ne dispensent jamais de déclarer." },
  en:{ q:"You are tax-resident in France and receive rent from a property abroad. What must you declare?",
       c:["Nothing — that income is already taxed abroad","Only if it exceeds €10,000 a year","Only income paid into a French account","All your income, including foreign income, plus any accounts held abroad"],
       e:"A French tax resident declares worldwide income. Bank accounts held abroad must also be declared. Tax treaties prevent double taxation but never remove the duty to declare." } },

{ id:'sit50', cat:'droits', sit:true, a:1,
  fr:{ q:"Dans la rue, vous voyez une personne en agresser physiquement une autre. Quelle est la bonne réaction ?",
       c:["Intervenir physiquement pour séparer les deux personnes","Appeler immédiatement la police (17 ou 112), rester à distance et vous rendre disponible comme témoin","Filmer la scène sans appeler les secours","Passer votre chemin : cela ne vous regarde pas"],
       e:"L'obligation de porter secours n'impose pas de se mettre en danger : alerter suffit et constitue déjà une assistance. Le témoignage est précieux pour l'enquête ; se substituer aux forces de l'ordre ne l'est pas." },
  en:{ q:"In the street you see someone physically assaulting another person. What is the right reaction?",
       c:["Step in physically to separate them","Call the police immediately (17 or 112), keep your distance and make yourself available as a witness","Film it without calling for help","Walk on — it is none of your business"],
       e:"The duty to assist does not require putting yourself in danger: raising the alarm is itself assistance. Your witness account matters to the investigation; substituting yourself for the police does not." } }

]);
