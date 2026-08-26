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

   OPTION LENGTH IS DELIBERATE. In the first version of this file the correct
   answer was the longest option in 50 cases out of 50 — because the right
   answer carried all the legal nuance while the wrong ones were curt
   dismissals. Simulated over 200 papers, always picking the longest option
   scored 12/12 on the situational questions without reading a word of them.
   Options are now written to comparable length, the reasoning has moved into
   the explanation where it belongs, and each distractor states a plausible
   wrong rule rather than an obviously silly one.

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

/* ---------- PRINCIPES ET VALEURS ---------- */

{ id:'sit01', cat:'valeurs', sit:true, a:2,
  fr:{ q:"Votre fille rentre de l'école publique et raconte que la maîtresse a parlé des différentes religions en classe. Que pensez-vous ?",
       c:["C'est contraire à la laïcité, qui interdit d'évoquer les religions à l'école","C'est acceptable, mais une dispense reste possible sur demande écrite","C'est normal : l'école enseigne le fait religieux de façon neutre","C'est toléré uniquement dans les cours d'histoire de terminale"],
       e:"La laïcité n'interdit pas de parler des religions : elle interdit d'en promouvoir une. L'histoire des religions figure aux programmes dès l'école élémentaire et s'enseigne de manière neutre. Aucune dispense n'est possible pour un enseignement obligatoire, quel que soit le motif invoqué." },
  en:{ q:"Your daughter comes home from state school saying her teacher discussed different religions in class. What do you think?",
       c:["It breaches laïcité, which bans any mention of religion at school","It is acceptable, but an exemption remains available on written request","It is normal: schools teach about religion neutrally","It is tolerated only in final-year history lessons"],
       e:"Laïcité does not forbid teaching about religions — it forbids promoting one. The history of religions is in the curriculum from primary school and is taught neutrally. No exemption is possible from a compulsory lesson, whatever the reason given." } },

{ id:'sit02', cat:'valeurs', sit:true, a:1,
  fr:{ q:"Vous êtes agent d'accueil dans une mairie. Un usager vous demande de retirer la petite croix que vous portez autour du cou. Que faites-vous ?",
       c:["Vous refusez, votre liberté religieuse primant sur la demande d'un usager","Vous la portez sous vos vêtements pendant votre service","Vous orientez l'usager vers un collègue pour éviter tout incident","Vous la conservez visible mais notez la réclamation au registre"],
       e:"L'obligation de neutralité s'impose aux agents publics pendant leur service : aucun signe religieux ne doit être visible, indépendamment de la demande d'un usager. Cette obligation ne pèse en revanche jamais sur les usagers, qui restent libres de manifester leurs convictions." },
  en:{ q:"You work at a town hall reception desk. A member of the public asks you to remove the small cross you wear round your neck. What do you do?",
       c:["Refuse, since your religious freedom outweighs a user's request","Wear it under your clothes while you are on duty","Direct the user to a colleague to avoid an incident","Keep it visible but log the complaint in the register"],
       e:"The duty of neutrality binds public officials while on duty: no religious sign may be visible, regardless of any user's request. That duty never falls on users, who remain free to show their beliefs." } },

{ id:'sit03', cat:'valeurs', sit:true, a:3,
  fr:{ q:"Une collègue découvre qu'elle est payée 15 % de moins qu'un collègue masculin occupant exactement le même poste. Que lui conseillez-vous ?",
       c:["D'accepter cet écart, les salaires étant négociés individuellement","De chercher un poste équivalent dans une autre entreprise","De ne rien dire tant qu'elle n'a pas davantage d'ancienneté","D'en parler à sa hiérarchie, puis de saisir l'inspection du travail"],
       e:"« À travail égal, salaire égal » est une obligation légale, et un écart fondé sur le sexe est une discrimination. La démarche va du dialogue interne au recours institutionnel : inspection du travail, Défenseur des droits, conseil de prud'hommes." },
  en:{ q:"A colleague discovers she is paid 15% less than a male colleague doing exactly the same job. What do you advise?",
       c:["Accept the gap, since salaries are negotiated individually","Look for an equivalent post at another company","Say nothing until she has more years of service","Raise it with management, then contact the labour inspectorate"],
       e:"Equal pay for equal work is a legal obligation, and a gap based on sex is discrimination. The route runs from internal dialogue to institutional recourse: labour inspectorate, Defender of Rights, employment tribunal." } },

{ id:'sit04', cat:'valeurs', sit:true, a:0,
  fr:{ q:"Votre fils de 14 ans refuse d'aller au cours de natation parce que des filles y participent. Que faites-vous ?",
       c:["Vous lui rappelez que le cours est obligatoire et qu'il doit y assister","Vous sollicitez une dispense auprès du chef d'établissement","Vous le gardez à la maison et prévenez la vie scolaire","Vous demandez que le cours soit organisé en groupes séparés"],
       e:"L'éducation physique est un enseignement obligatoire et la mixité est la règle à l'école publique. Aucune dispense ne peut être accordée pour un motif religieux ou personnel : seul un certificat médical le permet, et de façon temporaire." },
  en:{ q:"Your 14-year-old son refuses to attend swimming class because girls take part. What do you do?",
       c:["Remind him the lesson is compulsory and that he must attend","Request an exemption from the head teacher","Keep him at home and inform the school office","Ask for the lesson to be run in separate groups"],
       e:"PE is a compulsory subject and mixed classes are the rule in state schools. No exemption can be granted on religious or personal grounds — only a medical certificate allows one, and only temporarily." } },

{ id:'sit05', cat:'valeurs', sit:true, a:2,
  fr:{ q:"Dans une conversation de groupe en ligne, une personne publie des messages appelant à la haine contre les habitants d'un quartier en raison de leur origine. Que faites-vous ?",
       c:["Rien : les échanges privés échappent à la loi sur la presse","Vous répondez publiquement pour rétablir les faits vous-même","Vous signalez les messages à la plateforme, puis via PHAROS","Vous quittez le groupe et bloquez son auteur sans autre suite"],
       e:"La liberté d'expression s'arrête à l'incitation à la haine, qui est un délit, y compris en ligne et dans un groupe fermé. Le signalement se fait auprès de la plateforme et sur PHAROS, le portail officiel de signalement des contenus illicites." },
  en:{ q:"In an online group chat, someone posts messages inciting hatred against residents of a neighbourhood because of their origin. What do you do?",
       c:["Nothing — private exchanges fall outside press law","Reply publicly and set the record straight yourself","Report the messages to the platform, then via PHAROS","Leave the group and block the author, and nothing more"],
       e:"Freedom of expression stops at incitement to hatred, which is a criminal offence — online and in a closed group included. Report to the platform and to PHAROS, the official portal for illegal content." } },

{ id:'sit06', cat:'valeurs', sit:true, a:1,
  fr:{ q:"Lors d'un entretien d'embauche, le recruteur vous demande votre religion et si vous comptez avoir des enfants. Que pensez-vous de ces questions ?",
       c:["Elles sont admises si elles éclairent l'organisation du travail","Elles sont illégales : seul ce qui touche au poste peut être demandé","Elles sont permises dans le privé, mais interdites dans le public","Elles sont permises dès lors que le candidat accepte d'y répondre"],
       e:"Un recruteur ne peut poser que des questions ayant un lien direct et nécessaire avec l'emploi proposé. Interroger sur la religion, l'origine, la santé ou les projets familiaux constitue une discrimination interdite, y compris avec l'accord du candidat." },
  en:{ q:"At a job interview the recruiter asks your religion and whether you plan to have children. What do you make of these questions?",
       c:["They are allowed if they help with work scheduling","They are illegal: only job-related matters may be asked about","They are allowed in the private sector but not the public one","They are allowed as soon as the candidate agrees to answer"],
       e:"A recruiter may only ask questions directly and necessarily related to the job. Asking about religion, origin, health or family plans is prohibited discrimination — even with the candidate's consent." } },

{ id:'sit07', cat:'valeurs', sit:true, a:3,
  fr:{ q:"Un propriétaire refuse de louer son appartement à un candidat en raison de son origine, alors que son dossier est solide. Que peut faire ce candidat ?",
       c:["Rien : le propriétaire choisit librement parmi les dossiers reçus","Proposer une caution supplémentaire pour emporter la décision","Se faire présenter par une agence pour contourner ce refus","Saisir le Défenseur des droits ou déposer plainte pour discrimination"],
       e:"Le propriétaire choisit son locataire sur des critères de solvabilité, jamais sur l'origine, le nom, la religion ou la couleur de peau. La discrimination au logement est un délit ; le Défenseur des droits peut être saisi gratuitement et sans avocat." },
  en:{ q:"A landlord refuses to rent to an applicant because of their origin, despite a strong application. What can the applicant do?",
       c:["Nothing — a landlord freely chooses among the applications received","Offer an extra guarantee to swing the decision","Apply through an agency to get around the refusal","Contact the Defender of Rights or file a discrimination complaint"],
       e:"A landlord chooses a tenant on ability to pay, never on origin, name, religion or skin colour. Housing discrimination is a criminal offence; the Defender of Rights can be contacted free and without a lawyer." } },

{ id:'sit08', cat:'valeurs', sit:true, a:2,
  fr:{ q:"Dans une administration, un usager refuse d'être reçu par une employée parce que c'est une femme. Quelle est la bonne réaction du service ?",
       c:["Lui proposer un autre agent afin d'apaiser rapidement la situation","Accéder à sa demande, l'usager restant libre de son choix","Refuser : l'égalité et la continuité du service l'interdisent","Reporter le rendez-vous et lui demander de revenir plus tard"],
       e:"L'usager ne peut pas récuser un agent en raison de son sexe, de son origine ou de ses convictions. Céder reviendrait à valider une discrimination et à rompre l'égalité de traitement qui fonde le service public." },
  en:{ q:"At a government office, a user refuses to be served by an employee because she is a woman. What is the correct response?",
       c:["Offer him another official to defuse the situation quickly","Grant the request, since the user is free to choose","Refuse: equality and continuity of service forbid it","Postpone the appointment and ask him to come back later"],
       e:"A user may not reject an official because of their sex, origin or beliefs. Giving in would endorse discrimination and break the equal treatment on which public service rests." } },

{ id:'sit09', cat:'valeurs', sit:true, a:1,
  fr:{ q:"Un ami vous dit qu'il ne croit en aucun dieu et se demande si cela peut l'empêcher de devenir français. Que lui répondez-vous ?",
       c:["Qu'une appartenance religieuse est demandée lors de l'entretien","Que la liberté de conscience protège aussi ceux qui ne croient pas","Qu'il vaut mieux ne pas aborder ce sujet devant l'administration","Que cela peut retarder l'instruction du dossier sans l'empêcher"],
       e:"La liberté de conscience garantit le droit de croire, de ne pas croire ou de changer de conviction. L'État ne recense pas les croyances et n'en tient aucun compte dans l'instruction d'une demande de naturalisation." },
  en:{ q:"A friend tells you he believes in no god and wonders whether that could stop him becoming French. What do you tell him?",
       c:["That a religious affiliation is asked for at the interview","That freedom of conscience protects non-believers too","That it is better not to raise the subject with officials","That it may delay the file being processed but cannot block it"],
       e:"Freedom of conscience guarantees the right to believe, not to believe, or to change belief. The State keeps no record of beliefs and gives them no weight when examining a naturalisation application." } },

{ id:'sit10', cat:'valeurs', sit:true, a:0,
  fr:{ q:"Un homme interdit à son épouse de travailler et de sortir seule. Que dit la loi française ?",
       c:["C'est illégal : une femme majeure dispose librement d'elle-même","C'est un arrangement privé que la loi n'a pas à trancher","C'est admis si le régime matrimonial choisi le prévoit","C'est admis tant que l'époux assume seul les charges du foyer"],
       e:"Depuis 1965, une femme mariée peut travailler et gérer ses biens sans l'accord de son mari. Empêcher son conjoint de travailler ou de se déplacer relève des violences conjugales, punies par la loi quel que soit le lieu du mariage." },
  en:{ q:"A man forbids his wife from working or going out alone. What does French law say?",
       c:["It is illegal: an adult woman freely controls her own life","It is a private arrangement for the law to stay out of","It is allowed if the marriage settlement provides for it","It is allowed as long as the husband covers all the costs"],
       e:"Since 1965 a married woman may work and manage her property without her husband's consent. Preventing a spouse from working or moving freely is domestic abuse, punishable by law wherever the marriage took place." } },

{ id:'sit11', cat:'valeurs', sit:true, a:2,
  fr:{ q:"Un collègue répète chaque jour des plaisanteries humiliantes sur les femmes de l'équipe. Que faut-il faire ?",
       c:["En rire, pour ne pas dégrader davantage l'ambiance de l'équipe","Lui répondre sur le même ton afin qu'il en mesure l'effet","Le signaler à la hiérarchie ou aux représentants du personnel","Attendre la prochaine réunion pour en parler collectivement"],
       e:"Des propos sexistes répétés qui dégradent les conditions de travail constituent un harcèlement, puni par la loi. L'employeur a une obligation de sécurité : il doit faire cesser les faits dès qu'il en est informé." },
  en:{ q:"A colleague makes humiliating jokes about the women on the team every day. What should be done?",
       c:["Laugh along, so as not to sour the team atmosphere further","Answer in the same tone so he sees how it feels","Report it to management or to staff representatives","Wait for the next team meeting to raise it collectively"],
       e:"Repeated sexist remarks that degrade working conditions amount to harassment, punishable by law. The employer has a duty of care and must stop it as soon as they are informed." } },

{ id:'sit12', cat:'valeurs', sit:true, a:1,
  fr:{ q:"Une personne critique publiquement les idées d'une religion. Une autre appelle à s'en prendre aux fidèles de cette religion. Que dit la loi ?",
       c:["Les deux relèvent du délit d'injure à caractère religieux","Critiquer des idées est licite ; viser des personnes est un délit","Les deux sont couverts par la liberté d'expression","Seule la critique des croyances est pénalement sanctionnée"],
       e:"En France, on peut critiquer, discuter et même tourner en dérision des croyances et des idées : le blasphème n'existe pas en droit. En revanche, l'incitation à la haine ou à la violence contre des personnes en raison de leur religion est une infraction." },
  en:{ q:"Someone publicly criticises the ideas of a religion. Someone else calls for attacks on that religion's followers. What does the law say?",
       c:["Both amount to the offence of religious insult","Criticising ideas is lawful; targeting people is an offence","Both are covered by freedom of expression","Only criticism of beliefs is criminally punishable"],
       e:"In France you may criticise, debate and even mock beliefs and ideas: blasphemy is not an offence. Inciting hatred or violence against people because of their religion, however, is." } },

{ id:'sit13', cat:'valeurs', sit:true, a:3,
  fr:{ q:"Un commerçant refuse l'entrée de son magasin à une personne aveugle accompagnée de son chien guide. Que dit la loi ?",
       c:["Le commerçant décide librement des accès à son établissement","Le refus est admis pour des motifs d'hygiène alimentaire","Le refus est admis si la gêne pour la clientèle est établie","C'est une discrimination : le chien guide est admis partout"],
       e:"Refuser l'accès à une personne en situation de handicap accompagnée de son chien guide ou d'assistance est puni par la loi. L'accès est garanti dans les commerces, les transports, les lieux de loisirs et les administrations, sans supplément de prix." },
  en:{ q:"A shopkeeper refuses entry to a blind person with their guide dog. What does the law say?",
       c:["The shopkeeper decides freely who enters the premises","Refusal is allowed on food-hygiene grounds","Refusal is allowed if inconvenience to customers is shown","It is discrimination: guide dogs are admitted everywhere"],
       e:"Refusing access to a disabled person with a guide or assistance dog is punishable by law. Access is guaranteed in shops, transport, leisure venues and public offices, at no extra charge." } },

{ id:'sit14', cat:'valeurs', sit:true, a:0,
  fr:{ q:"À la sortie du bureau de vote, un membre de votre famille vous demande pour qui vous avez voté et insiste. Que faites-vous ?",
       c:["Vous rappelez que le vote est secret et que nul n'a à le dire","Vous répondez, s'agissant d'un membre proche de la famille","Vous lui montrez la photo de votre bulletin pour clore le sujet","Vous répondez de façon évasive pour ne pas créer de tension"],
       e:"Le secret du vote est un principe fondamental : il protège la liberté de chaque électeur contre toute pression, y compris familiale. Nul n'a à justifier son choix, et photographier son bulletin dans l'isoloir est interdit." },
  en:{ q:"Leaving the polling station, a family member insistently asks who you voted for. What do you do?",
       c:["Point out the ballot is secret and nobody has to say","Answer, since it is a close family member","Show them a photo of your ballot to close the subject","Answer vaguely so as not to create tension"],
       e:"Ballot secrecy is a fundamental principle protecting every voter from pressure, family included. Nobody has to justify their choice, and photographing your ballot in the booth is forbidden." } },

{ id:'sit15', cat:'valeurs', sit:true, a:2,
  fr:{ q:"Une association vous demande de signer une pétition pour interdire la construction d'un lieu de culte dans votre commune, au motif de la religion concernée. Que faites-vous ?",
       c:["Vous signez, la laïcité s'opposant aux nouveaux lieux de culte","Vous signez si une majorité d'habitants soutient la démarche","Vous refusez : viser une religion en particulier est discriminatoire","Vous demandez d'abord l'avis du conseil municipal"],
       e:"La loi de 1905 garantit le libre exercice des cultes. L'État ne subventionne aucun culte, mais il ne peut pas en interdire un. S'opposer à un projet en raison de la religion concernée est une discrimination, quel que soit le nombre de signataires." },
  en:{ q:"An association asks you to sign a petition to block a place of worship in your commune, because of the religion concerned. What do you do?",
       c:["Sign, since laïcité opposes new places of worship","Sign if a majority of residents back the move","Refuse: targeting one religion in particular is discriminatory","Ask the municipal council for its view first"],
       e:"The 1905 law guarantees free exercise of worship. The State funds no religion, but it cannot ban one. Opposing a project because of the religion involved is discrimination, however many people sign." } },

{ id:'sit16', cat:'valeurs', sit:true, a:1,
  fr:{ q:"Votre employeur, dans une entreprise privée, vous demande de travailler un jour de fête religieuse importante pour vous. Que pouvez-vous faire ?",
       c:["Vous absenter, la liberté religieuse primant sur le contrat de travail","Demander un congé, que l'employeur accorde si le service le permet","Exiger que ce jour soit chômé pour l'ensemble du personnel","Saisir directement le conseil de prud'hommes pour discrimination"],
       e:"Les jours fériés légaux ne couvrent pas toutes les fêtes religieuses. Le salarié peut demander un congé ; l'employeur peut le refuser pour des raisons d'organisation, mais son refus ne doit pas être discriminatoire ni viser une religion." },
  en:{ q:"Your employer, at a private company, asks you to work on a religious holiday that matters to you. What can you do?",
       c:["Stay away, since religious freedom outweighs the employment contract","Request leave, which the employer grants if staffing allows","Demand the day be a holiday for the whole workforce","Take the case straight to the employment tribunal"],
       e:"Statutory public holidays do not cover every religious festival. An employee may request leave; the employer may refuse for organisational reasons, but the refusal must not be discriminatory or target a religion." } },

{ id:'sit17', cat:'valeurs', sit:true, a:3,
  fr:{ q:"Des parents demandent que leur fille soit dispensée du cours d'histoire portant sur la Shoah. Quelle est la réponse de l'école ?",
       c:["La dispense est accordée sur demande écrite des deux parents","La dispense est accordée pour un motif religieux caractérisé","L'élève peut travailler en autonomie pendant cette séquence","La dispense est refusée : les programmes s'imposent à tous"],
       e:"Aucun enseignement du programme ne peut faire l'objet d'une dispense pour motif religieux ou personnel. L'enseignement de la Shoah participe du devoir de mémoire ; en contester le principe devant la classe est un comportement sanctionnable." },
  en:{ q:"Parents ask for their daughter to be excused from the history lesson on the Holocaust. What does the school say?",
       c:["The exemption is granted on written request from both parents","The exemption is granted on established religious grounds","The pupil may work independently during that unit","The exemption is refused: the curriculum binds everyone"],
       e:"No part of the curriculum can be waived on religious or personal grounds. Teaching the Holocaust is part of the duty of remembrance; disputing it in class is itself punishable conduct." } },

{ id:'sit18', cat:'valeurs', sit:true, a:0,
  fr:{ q:"Une mère portant un foulard souhaite accompagner la sortie scolaire de sa fille. Un parent s'y oppose au nom de la laïcité. Que dit le droit ?",
       c:["Les parents accompagnateurs sont des usagers, non des agents publics","Toute personne encadrant des élèves est tenue à la neutralité","Elle peut accompagner à condition de retirer son foulard","L'accompagnement est réservé aux parents élus délégués"],
       e:"L'obligation de neutralité pèse sur les agents publics, pas sur les usagers. Le Conseil d'État considère les parents accompagnateurs bénévoles comme des usagers : leur participation peut être encadrée au cas par cas, mais pas interdite par principe." },
  en:{ q:"A mother wearing a headscarf wants to help supervise her daughter's school trip. Another parent objects, citing laïcité. What does the law say?",
       c:["Accompanying parents are users, not public officials","Anyone supervising pupils is bound by the neutrality duty","She may come provided she removes her headscarf","Only elected parent representatives may accompany trips"],
       e:"The neutrality duty falls on public officials, not users. The Conseil d'État treats volunteer accompanying parents as users: their participation may be regulated case by case, but not banned as a matter of principle." } },

{ id:'sit19', cat:'valeurs', sit:true, a:2,
  fr:{ q:"Un élève de terminale veut créer un club de débat politique dans son lycée public. Que dit la loi ?",
       c:["C'est exclu : la neutralité du service public s'y oppose","C'est réservé aux enseignants encadrant un projet pédagogique","C'est possible dans le cadre fixé par le règlement intérieur","C'est soumis à l'autorisation préalable du rectorat"],
       e:"Les lycéens disposent d'une liberté d'expression, de réunion et d'association encadrée par le règlement intérieur. Le pluralisme est encouragé ; ce sont les personnels, et non les élèves, qui sont tenus à la neutralité." },
  en:{ q:"A final-year pupil wants to start a political debating club at their state lycée. What does the law say?",
       c:["It is ruled out: public-service neutrality forbids it","It is reserved for teachers running a curricular project","It is possible within the framework of the school rules","It requires prior authorisation from the education authority"],
       e:"Lycée pupils have freedom of expression, assembly and association, framed by school rules. Pluralism is encouraged; it is staff, not pupils, who are bound by neutrality." } },

{ id:'sit20', cat:'valeurs', sit:true, a:1,
  fr:{ q:"Vous assistez à une scène où une personne est insultée dans le bus en raison de sa couleur de peau. Quelle est la réaction la plus appropriée ?",
       c:["Filmer la scène et la diffuser pour dénoncer publiquement l'auteur","Soutenir la victime et alerter le conducteur ou la police","Répondre à l'auteur sur le même registre pour le faire cesser","Descendre à l'arrêt suivant pour éviter que cela dégénère"],
       e:"L'injure à caractère raciste est un délit. La bonne réaction n'est ni la violence ni l'indifférence : soutenir la victime, alerter un responsable ou la police (17), et accepter de témoigner si une plainte est déposée. Diffuser des images peut, elle, vous exposer." },
  en:{ q:"You witness someone being insulted on the bus because of their skin colour. What is the most appropriate reaction?",
       c:["Film it and post it to expose the perpetrator publicly","Support the victim and alert the driver or the police","Answer the perpetrator in kind to make them stop","Get off at the next stop to stop things escalating"],
       e:"Racist insult is a criminal offence. The right reaction is neither violence nor indifference: support the victim, alert someone in authority or the police (17), and agree to give evidence. Posting footage can expose you to liability." } },

{ id:'sit41', cat:'valeurs', sit:true, a:2,
  fr:{ q:"Dans une entreprise privée, un salarié souhaite prier quelques minutes pendant sa pause. Que dit le droit ?",
       c:["C'est interdit : la neutralité s'impose dans toute entreprise","C'est un droit que l'employeur ne peut jamais encadrer","C'est possible pendant la pause, sauf restriction justifiée","C'est possible uniquement dans un local prévu à cet effet"],
       e:"La neutralité s'impose au service public, pas aux entreprises privées. Le salarié garde sa liberté religieuse pendant ses temps de pause ; l'employeur ne peut la restreindre que si c'est justifié par la nature de la tâche ou la sécurité, et proportionné." },
  en:{ q:"At a private company, an employee wants to pray for a few minutes during their break. What does the law say?",
       c:["It is forbidden: neutrality applies in every workplace","It is a right the employer may never regulate","It is possible during breaks, absent a justified restriction","It is possible only in a room set aside for the purpose"],
       e:"Neutrality binds the public service, not private companies. Employees keep their religious freedom during breaks; an employer may restrict it only where justified by the nature of the work or safety, and proportionately." } },

{ id:'sit42', cat:'valeurs', sit:true, a:0,
  fr:{ q:"Une personne quitte la religion dans laquelle elle a grandi. Un membre de sa famille la menace pour l'y faire revenir. Que dit la loi ?",
       c:["Changer de religion est un droit ; les menaces sont un délit","Il s'agit d'un différend familial que la loi ne tranche pas","La personne doit se conformer à la religion de sa famille","La loi n'intervient qu'en cas de violence physique avérée"],
       e:"La liberté de conscience comprend le droit de changer de religion ou d'y renoncer. Les menaces et les pressions exercées pour l'en empêcher sont pénalement réprimées, y compris au sein de la famille, et sans qu'une violence physique soit nécessaire." },
  en:{ q:"Someone leaves the religion they grew up in. A family member threatens them to make them return. What does the law say?",
       c:["Changing religion is a right; threats are a criminal offence","It is a family disagreement the law does not settle","The person must conform to their family's religion","The law steps in only where physical violence is proven"],
       e:"Freedom of conscience includes the right to change religion or give it up. Threats and pressure to prevent it are criminally punishable, including within a family, and without any need for physical violence." } },

{ id:'sit43', cat:'valeurs', sit:true, a:3,
  fr:{ q:"Un collègue vous dit qu'il refuse de servir certains clients à cause de leur origine. Quelle est la bonne réaction ?",
       c:["Le laisser faire, chacun restant libre de ses opinions","Servir ces clients à sa place sans en parler à quiconque","Lui proposer discrètement d'échanger vos postes de travail","Lui rappeler que c'est un délit et alerter la hiérarchie"],
       e:"Refuser un bien ou un service en raison de l'origine, du nom, de la religion ou du handicap est une discrimination punie de trois ans d'emprisonnement et 45 000 € d'amende. L'employeur, une fois informé, doit y mettre fin sous peine d'engager sa responsabilité." },
  en:{ q:"A colleague tells you he refuses to serve certain customers because of their origin. What is the right reaction?",
       c:["Let him be, since everyone is entitled to their opinions","Serve those customers instead and tell nobody about it","Quietly suggest swapping your workstations with him","Remind him it is an offence and alert management"],
       e:"Refusing goods or a service because of origin, name, religion or disability is discrimination, punishable by three years' imprisonment and a €45,000 fine. Once informed, the employer must stop it or be liable themselves." } },

{ id:'sit44', cat:'valeurs', sit:true, a:1,
  fr:{ q:"Un voisin affirme que la laïcité interdit de porter un signe religieux dans la rue. A-t-il raison ?",
       c:["Oui : aucun signe religieux ne peut être visible dans l'espace public","Non : la laïcité s'impose à l'État et à ses agents, pas aux particuliers","Oui, sauf pendant les principales fêtes religieuses de l'année","Non, mais seulement pour les personnes de nationalité française"],
       e:"La laïcité impose la neutralité de l'État et de ses agents. Les particuliers restent libres de manifester leurs convictions dans l'espace public. Une exception vise la dissimulation du visage, interdite depuis 2010 pour des motifs d'ordre public." },
  en:{ q:"A neighbour claims that laïcité bans wearing a religious sign in the street. Is he right?",
       c:["Yes: no religious sign may be visible in public space","No: laïcité binds the State and its officials, not private individuals","Yes, except during the main religious festivals of the year","No, but only in the case of French nationals"],
       e:"Laïcité requires neutrality of the State and its officials. Private individuals remain free to show their beliefs in public. One exception is concealing the face, banned since 2010 on public-order grounds." } },

{ id:'sit45', cat:'valeurs', sit:true, a:2,
  fr:{ q:"Des parents demandent que la cantine de l'école publique ne serve que des repas conformes à leur religion. Que répond la commune ?",
       c:["Elle doit accepter, au titre du libre exercice du culte","Elle doit fermer le service pour prévenir tout différend","Elle n'y est pas tenue : un service public ne suit aucune religion","Elle doit soumettre la question au vote des parents d'élèves"],
       e:"La cantine est un service public facultatif. Aucune obligation religieuse ne peut lui être imposée, mais rien n'interdit à une commune de proposer un menu sans porc ou végétarien : c'est un choix local d'organisation, jamais un droit opposable." },
  en:{ q:"Parents ask that the state school canteen serve only meals conforming to their religion. What does the commune reply?",
       c:["It must agree, under freedom of worship","It must close the service to head off any dispute","It is not obliged to: a public service follows no religion","It must put the question to a vote of parents"],
       e:"The canteen is an optional public service. No religious requirement can be imposed on it, but nothing stops a commune offering a pork-free or vegetarian option: that is a local organisational choice, never an enforceable right." } },

/* ---------- DROITS ET DEVOIRS ---------- */

{ id:'sit21', cat:'droits', sit:true, a:2,
  fr:{ q:"Vous êtes témoin d'un accident de la route avec des blessés. Que devez-vous faire ?",
       c:["Poursuivre votre route pour laisser la voie libre aux secours","Sortir les blessés des véhicules avant l'arrivée des pompiers","Alerter les secours (15, 18 ou 112) et sécuriser les lieux","Relever les plaques et attendre l'arrivée d'un autre témoin"],
       e:"Porter secours est une obligation légale : la non-assistance à personne en danger est punie de cinq ans d'emprisonnement et 75 000 € d'amende. Il ne faut pas déplacer un blessé sauf danger immédiat, mais il faut toujours alerter." },
  en:{ q:"You witness a road accident with injuries. What must you do?",
       c:["Drive on to leave the road clear for the emergency services","Pull the injured from the vehicles before the fire crew arrives","Call the emergency services (15, 18 or 112) and make the scene safe","Note the registration plates and wait for another witness"],
       e:"Helping is a legal obligation: failing to assist a person in danger carries five years' imprisonment and a €75,000 fine. Do not move an injured person unless there is immediate danger, but always raise the alarm." } },

{ id:'sit22', cat:'droits', sit:true, a:0,
  fr:{ q:"Un employeur vous propose de travailler payé en espèces, sans contrat ni déclaration. Que faites-vous ?",
       c:["Vous refusez : le travail dissimulé est illégal et vous prive de droits","Vous acceptez, la rémunération nette étant nettement plus élevée","Vous acceptez pour une courte période, le temps de trouver mieux","Vous acceptez et déclarez vous-même ces sommes aux impôts"],
       e:"Le travail dissimulé est un délit pour l'employeur comme pour le salarié. Il prive de couverture maladie, de droits à la retraite, d'assurance chômage et de tout recours en cas d'accident du travail, même si les revenus sont déclarés ensuite." },
  en:{ q:"An employer offers you cash-in-hand work, with no contract or declaration. What do you do?",
       c:["Refuse: undeclared work is illegal and strips you of rights","Accept, since the take-home pay is considerably higher","Accept for a short period, until you find something better","Accept and declare the sums to the tax office yourself"],
       e:"Undeclared work is an offence for employer and employee alike. It removes health cover, pension rights, unemployment insurance and any recourse after a workplace accident — even if the income is declared afterwards." } },

{ id:'sit23', cat:'droits', sit:true, a:3,
  fr:{ q:"Un ami sans couverture maladie vous demande de lui prêter votre carte Vitale pour une consultation. Que faites-vous ?",
       c:["Vous acceptez, s'agissant d'un dépannage ponctuel entre proches","Vous acceptez une fois, puis l'aidez à régulariser sa situation","Vous la lui prêtez en lui demandant de vous rembourser les frais","Vous refusez et l'orientez vers la CPAM : le prêt est une fraude"],
       e:"La carte Vitale est strictement personnelle ; la prêter est une fraude sanctionnée, pour le prêteur comme pour l'utilisateur. Toute personne résidant régulièrement en France a droit à une couverture maladie : la CPAM examine chaque situation." },
  en:{ q:"A friend without health cover asks to borrow your carte Vitale for an appointment. What do you do?",
       c:["Agree, as a one-off favour between friends","Agree once, then help them regularise their situation","Lend it and ask them to reimburse the cost","Refuse and point them to the CPAM: lending it is fraud"],
       e:"The carte Vitale is strictly personal; lending it is punishable fraud, for lender and user alike. Anyone legally resident in France is entitled to health cover — the CPAM assesses each situation." } },

{ id:'sit24', cat:'droits', sit:true, a:1,
  fr:{ q:"Vous n'avez perçu aucun revenu cette année. Devez-vous faire une déclaration d'impôts ?",
       c:["Non : la déclaration ne vise que les foyers effectivement imposables","Oui : la déclaration est annuelle, même sans revenu imposable","Non, sauf si vous avez été salarié une partie de l'année","Oui, mais une régularisation tous les trois ans suffit"],
       e:"Toute personne résidant fiscalement en France déclare ses revenus chaque année, même nuls. La déclaration ouvre droit à certaines aides et permet d'obtenir un avis d'imposition, document demandé dans de nombreuses démarches administratives." },
  en:{ q:"You had no income this year. Must you file a tax return?",
       c:["No: returns only concern households that actually owe tax","Yes: the return is annual, even with no taxable income","No, unless you were employed for part of the year","Yes, but a filing every three years is enough"],
       e:"Anyone tax-resident in France declares their income every year, even if nil. The return opens entitlement to certain benefits and provides a tax notice, a document required for many administrative procedures." } },

{ id:'sit25', cat:'droits', sit:true, a:2,
  fr:{ q:"Votre voisin fait un bruit excessif tard le soir, plusieurs fois par semaine. Quelle est la démarche appropriée ?",
       c:["Lui faire constater la gêne en produisant du bruit à votre tour","Saisir immédiatement le tribunal pour trouble anormal de voisinage","Lui en parler, puis saisir le syndic, un conciliateur ou la mairie","Réunir les autres voisins pour aller le trouver ensemble le soir"],
       e:"Le tapage nocturne est une infraction, mais la démarche commence toujours par le dialogue. En cas d'échec : courrier, conciliateur de justice, police municipale ou nationale, puis le tribunal en dernier recours. Se faire justice soi-même est interdit." },
  en:{ q:"Your neighbour makes excessive noise late at night, several times a week. What is the right approach?",
       c:["Show them the nuisance by making noise back yourself","Take the matter straight to court as an abnormal neighbour nuisance","Speak to them, then involve the building manager, a conciliator or the town hall","Gather the other neighbours to confront them together at night"],
       e:"Night-time noise is an offence, but the process always starts with dialogue. If that fails: a letter, a legal conciliator, municipal or national police, and the court as a last resort. Taking justice into your own hands is forbidden." } },

{ id:'sit26', cat:'droits', sit:true, a:0,
  fr:{ q:"Vous recevez une convocation pour être juré d'assises, mais cela vous dérange dans votre travail. Que devez-vous faire ?",
       c:["Vous présenter : seuls des motifs graves permettent une dispense","Demander à votre employeur d'obtenir un report de la session","Prévenir le tribunal que vous ne pourrez pas vous libérer","Vous faire remplacer par une personne inscrite sur les listes"],
       e:"Les jurés sont tirés au sort sur les listes électorales. L'employeur doit laisser partir le salarié convoqué, qui conserve sa rémunération. Se soustraire à cette obligation sans motif légitime est puni d'une amende." },
  en:{ q:"You are summoned for jury service at the assize court, but it clashes with work. What must you do?",
       c:["Attend: only serious grounds allow an exemption","Ask your employer to obtain a postponement of the session","Tell the court you will not be able to get away","Have someone else on the electoral roll take your place"],
       e:"Jurors are drawn by lot from the electoral rolls. The employer must release the summoned employee, who keeps their pay. Avoiding the duty without legitimate reason is punishable by a fine." } },

{ id:'sit27', cat:'droits', sit:true, a:1,
  fr:{ q:"Vous êtes placé en garde à vue. Que pouvez-vous demander dès le début de la mesure ?",
       c:["La communication immédiate de l'ensemble du dossier d'enquête","L'assistance d'un avocat, un examen médical et prévenir un proche","Un délai de réflexion avant tout interrogatoire des enquêteurs","La présence d'un témoin de votre choix pendant les auditions"],
       e:"Toute personne en garde à vue est informée de ses droits dès le début : connaître les faits reprochés, garder le silence, être examinée par un médecin, prévenir un proche et être assistée d'un avocat. L'aide juridictionnelle permet cet avocat sans ressources suffisantes." },
  en:{ q:"You are taken into police custody. What can you ask for from the outset?",
       c:["Immediate disclosure of the entire investigation file","A lawyer, a medical examination, and to inform a relative","Time to think before any questioning by investigators","A witness of your choosing present during interviews"],
       e:"Anyone in police custody is informed of their rights from the outset: to know the alleged facts, remain silent, be examined by a doctor, inform a relative and have a lawyer. Legal aid provides that lawyer without sufficient means." } },

{ id:'sit28', cat:'droits', sit:true, a:3,
  fr:{ q:"Une salariée annonce sa grossesse et son employeur envisage de la licencier pour ce motif. Que dit la loi ?",
       c:["C'est possible tant que la période d'essai n'est pas achevée","C'est possible en cas de difficultés économiques de l'entreprise","C'est possible si le poste doit être occupé sans interruption","C'est interdit : la grossesse ne peut jamais fonder un licenciement"],
       e:"La salariée bénéficie d'une protection renforcée pendant la grossesse, le congé maternité et les dix semaines qui suivent. Un licenciement fondé sur la grossesse est nul ; la salariée peut demander sa réintégration ou des indemnités aux prud'hommes." },
  en:{ q:"An employee announces her pregnancy and her employer considers dismissing her for it. What does the law say?",
       c:["It is possible while the trial period is still running","It is possible where the company is in financial difficulty","It is possible if the post must be filled without interruption","It is forbidden: pregnancy can never ground a dismissal"],
       e:"An employee has reinforced protection during pregnancy, maternity leave and the ten weeks that follow. A dismissal based on pregnancy is void; she may seek reinstatement or compensation at the employment tribunal." } },

{ id:'sit29', cat:'droits', sit:true, a:2,
  fr:{ q:"Une connaissance vous propose de l'argent pour un mariage qui lui permettrait d'obtenir un titre de séjour. Que faites-vous ?",
       c:["Vous acceptez, le mariage relevant d'un choix strictement privé","Vous acceptez à condition de divorcer dès le titre obtenu","Vous refusez : le mariage de complaisance est un délit","Vous demandez conseil à la mairie avant de vous engager"],
       e:"Le mariage frauduleux est puni de cinq ans d'emprisonnement et de 15 000 € d'amende, pour les deux époux comme pour les organisateurs. Il entraîne l'annulation du mariage, le retrait du titre obtenu et compromet toute demande ultérieure." },
  en:{ q:"An acquaintance offers you money for a marriage that would get them a residence permit. What do you do?",
       c:["Accept, since marriage is a strictly private choice","Accept on condition you divorce once the permit is issued","Refuse: a sham marriage is a criminal offence","Ask the town hall for advice before committing"],
       e:"Marriage fraud carries five years' imprisonment and a €15,000 fine, for both spouses and for organisers. It voids the marriage, withdraws any permit obtained, and jeopardises any later application." } },

{ id:'sit30', cat:'droits', sit:true, a:1,
  fr:{ q:"Votre fils de 15 ans veut arrêter l'école pour travailler. Que dit la loi ?",
       c:["Il peut arrêter dès lors qu'un employeur lui propose un contrat","L'instruction est obligatoire jusqu'à 16 ans, la formation jusqu'à 18","Il peut arrêter avec l'accord écrit de ses deux parents","Il peut arrêter dès 14 ans s'il entre en apprentissage"],
       e:"L'instruction est obligatoire de 3 à 16 ans. De 16 à 18 ans, le jeune doit être en études, en formation, en apprentissage ou en accompagnement vers l'emploi. Les parents répondent du respect de cette obligation." },
  en:{ q:"Your 15-year-old son wants to leave school to work. What does the law say?",
       c:["He may leave as soon as an employer offers him a contract","Education is compulsory to 16, and training until 18","He may leave with the written consent of both parents","He may leave at 14 if he starts an apprenticeship"],
       e:"Education is compulsory from 3 to 16. From 16 to 18 a young person must be in education, training, apprenticeship or a scheme leading to employment. Parents are answerable for compliance." } },

{ id:'sit31', cat:'droits', sit:true, a:0,
  fr:{ q:"Vous entendez régulièrement un enfant être frappé chez vos voisins. Que devez-vous faire ?",
       c:["Signaler la situation en appelant le 119 ou la police","Vous abstenir : l'éducation relève de la seule autorité des parents","Aller les voir directement pour leur demander de cesser","Réunir d'abord des preuves avant d'envisager un signalement"],
       e:"Les violences éducatives sont interdites depuis 2019 et les violences sur mineur sont un délit. Le 119 est gratuit, ouvert en permanence et peut rester anonyme. Il n'appartient pas au témoin de réunir des preuves : le signalement suffit." },
  en:{ q:"You regularly hear a child being hit at your neighbours' home. What must you do?",
       c:["Report it by calling 119 or the police","Stay out of it: upbringing is for the parents alone","Go round yourself and ask them to stop","Gather evidence first before considering a report"],
       e:"Corporal punishment has been banned since 2019 and violence against a minor is an offence. 119 is free, always open and can stay anonymous. It is not for the witness to gather evidence — reporting is enough." } },

{ id:'sit32', cat:'droits', sit:true, a:2,
  fr:{ q:"Votre propriétaire entre dans le logement que vous louez en votre absence, sans vous prévenir. Que dit la loi ?",
       c:["C'est son droit, s'agissant d'un bien dont il est propriétaire","C'est admis une fois par an pour vérifier l'état du logement","C'est interdit : le locataire a droit au respect de son domicile","C'est admis s'il a conservé un double des clés à la remise"],
       e:"Le locataire jouit paisiblement du logement pendant toute la durée du bail. Le propriétaire ne peut y entrer sans son accord, même pour des travaux ou une visite, qui doivent être organisés avec un préavis et à des horaires convenus." },
  en:{ q:"Your landlord enters the flat you rent while you are out, without telling you. What does the law say?",
       c:["It is his right, since he owns the property","It is allowed once a year to check the condition of the flat","It is forbidden: the tenant's home must be respected","It is allowed if he kept a spare key when handing over"],
       e:"A tenant has peaceful enjoyment of the property throughout the lease. The landlord may not enter without agreement, even for works or a viewing, which must be arranged with notice and at agreed times." } },

{ id:'sit33', cat:'droits', sit:true, a:1,
  fr:{ q:"Vous souhaitez organiser une manifestation dans votre ville pour défendre une cause. Quelle démarche est nécessaire ?",
       c:["Aucune : manifester est une liberté qui ne se déclare pas","Déclarer la manifestation en mairie ou en préfecture à l'avance","Obtenir l'accord écrit des commerçants du parcours envisagé","Déposer une demande d'autorisation auprès du tribunal"],
       e:"La liberté de manifester est garantie, mais elle s'exerce dans un cadre : toute manifestation sur la voie publique doit être déclarée à l'avance. L'autorité peut en modifier le parcours, voire l'interdire, pour des motifs d'ordre public." },
  en:{ q:"You want to organise a demonstration in your town for a cause. What step is required?",
       c:["None: demonstrating is a freedom that needs no notification","Declare the demonstration to the town hall or prefecture in advance","Get written agreement from businesses along the planned route","File an application for authorisation with the court"],
       e:"Freedom to demonstrate is guaranteed but framed: any demonstration on the public highway must be declared in advance. The authorities may change the route, or ban it, on public-order grounds." } },

{ id:'sit34', cat:'droits', sit:true, a:3,
  fr:{ q:"Vous êtes en profond désaccord avec une loi qui vient d'être votée. Que pouvez-vous faire ?",
       c:["Ne pas l'appliquer, dès lors que vous la jugez manifestement injuste","Demander vous-même à un juge d'en prononcer l'annulation","Ne l'appliquer que dans les situations qui vous concernent","La contester par le vote, le débat ou la justice, mais la respecter"],
       e:"Dans un État de droit, la loi s'impose à tous, y compris à ceux qui la contestent. Les moyens de la faire changer sont démocratiques : élections, débat public, pétitions, action associative et recours devant les juridictions compétentes." },
  en:{ q:"You strongly disagree with a law that has just been passed. What can you do?",
       c:["Ignore it, since you consider it manifestly unjust","Ask a judge yourself to strike the law down","Apply it only in the situations that concern you","Challenge it by voting, debate or the courts, but obey it"],
       e:"Under the rule of law, the law binds everyone, including those who oppose it. The means of changing it are democratic: elections, public debate, petitions, campaigning and challenges before the competent courts." } },

{ id:'sit35', cat:'droits', sit:true, a:0,
  fr:{ q:"Un collègue est victime de harcèlement moral au travail et n'ose rien dire. Que lui conseillez-vous ?",
       c:["De consigner les faits et d'alerter la hiérarchie ou l'inspection","De démissionner rapidement pour préserver sa santé","De répondre par les mêmes méthodes pour rétablir un équilibre","D'attendre quelques semaines pour voir si la situation évolue"],
       e:"Le harcèlement moral est un délit et l'employeur a une obligation de sécurité envers ses salariés. Conserver des traces écrites est essentiel ; le conseil de prud'hommes peut être saisi, et la médecine du travail alertée." },
  en:{ q:"A colleague is being bullied at work and daren't say anything. What do you advise?",
       c:["Record the facts and alert management or the inspectorate","Resign quickly to protect their health","Respond in kind to restore some balance","Wait a few weeks to see whether things improve"],
       e:"Workplace bullying is a criminal offence and the employer has a duty of care. Keeping written records is essential; the employment tribunal can be asked to intervene, and occupational health alerted." } },

{ id:'sit36', cat:'droits', sit:true, a:2,
  fr:{ q:"On vous demande de signer une attestation affirmant des faits que vous n'avez pas constatés, pour aider un proche dans une démarche. Que faites-vous ?",
       c:["Vous signez, la démarche visant seulement à rendre service","Vous signez en indiquant oralement vos réserves au demandeur","Vous refusez : une attestation mensongère est un délit","Vous signez après avoir vérifié les faits auprès d'un tiers"],
       e:"Établir une attestation mensongère destinée à une administration ou à une juridiction est puni d'un an d'emprisonnement et de 15 000 € d'amende. Le signataire engage sa responsabilité personnelle, quelles que soient ses intentions." },
  en:{ q:"You are asked to sign a statement asserting facts you did not witness, to help a relative with a procedure. What do you do?",
       c:["Sign, since the aim is only to do someone a favour","Sign, stating your reservations verbally to the person","Refuse: a false written statement is a criminal offence","Sign after checking the facts with a third party"],
       e:"Producing a false statement intended for an authority or a court carries one year's imprisonment and a €15,000 fine. The signatory is personally liable, whatever their intentions." } },

{ id:'sit37', cat:'droits', sit:true, a:1,
  fr:{ q:"Vous voulez créer une association de quartier avec des voisins. Quelle est la démarche ?",
       c:["Obtenir l'autorisation préalable du préfet du département","Rédiger des statuts et déclarer l'association en préfecture","Recueillir l'accord du maire et du conseil municipal","Constituer d'abord une structure commerciale, puis la convertir"],
       e:"La loi du 1er juillet 1901 pose la liberté d'association : aucune autorisation n'est nécessaire, une simple déclaration suffit pour obtenir la capacité juridique. Les étrangers en situation régulière peuvent créer une association et la diriger." },
  en:{ q:"You want to set up a neighbourhood association with neighbours. What is the process?",
       c:["Obtain prior authorisation from the departmental prefect","Draw up statutes and declare the association to the prefecture","Secure the agreement of the mayor and the council","Set up a commercial entity first, then convert it"],
       e:"The law of 1 July 1901 establishes freedom of association: no authorisation is needed, a simple declaration confers legal capacity. Legally resident foreign nationals may create and run an association." } },

{ id:'sit38', cat:'droits', sit:true, a:3,
  fr:{ q:"Vous êtes victime d'une escroquerie sur internet : un vendeur a encaissé votre paiement et ne livre rien. Que faites-vous ?",
       c:["Vous publiez son identité en ligne pour alerter d'autres acheteurs","Vous vous rendez à son adresse pour récupérer votre argent","Vous renoncez : les achats entre particuliers ne sont pas protégés","Vous conservez les preuves, signalez les faits et déposez plainte"],
       e:"L'escroquerie est un délit. Il faut conserver les échanges et les preuves de paiement, signaler l'annonce à la plateforme, effectuer un signalement en ligne et déposer plainte. Publier les données personnelles d'autrui est en revanche illégal." },
  en:{ q:"You are the victim of an online scam: a seller took your payment and delivers nothing. What do you do?",
       c:["Post their identity online to warn other buyers","Go to their address to get your money back","Give up: private sales between individuals are not protected","Keep the evidence, report the facts and file a complaint"],
       e:"Fraud is a criminal offence. Keep the correspondence and proof of payment, report the listing to the platform, make an online report and file a complaint. Publishing someone's personal data, by contrast, is illegal." } },

{ id:'sit39', cat:'droits', sit:true, a:0,
  fr:{ q:"Vous êtes pressé et la seule place libre est réservée aux personnes handicapées. Que faites-vous ?",
       c:["Vous cherchez une autre place : y stationner sans carte est interdit","Vous vous garez brièvement, le temps de faire votre course","Vous vous garez en laissant vos coordonnées sur le pare-brise","Vous vous garez si aucune personne handicapée ne se présente"],
       e:"Seuls les titulaires de la carte mobilité inclusion peuvent utiliser ces places. L'amende est de 135 € et le véhicule peut être mis en fourrière : la place doit rester disponible à tout moment, y compris pour quelques minutes." },
  en:{ q:"You are in a hurry and the only free space is reserved for disabled people. What do you do?",
       c:["Look for another space: parking there without a card is banned","Park briefly, just long enough to run your errand","Park and leave your contact details on the windscreen","Park if no disabled person turns up needing it"],
       e:"Only holders of the inclusion mobility card may use these spaces. The fine is €135 and the vehicle may be towed: the space must stay free at all times, including for a few minutes." } },

{ id:'sit40', cat:'droits', sit:true, a:2,
  fr:{ q:"Un proche vous dit qu'en tant qu'étranger en situation régulière, vous n'avez droit à aucune protection sociale. Que lui répondez-vous ?",
       c:["Qu'il a raison : ces droits sont réservés aux ressortissants français","Qu'un délai de dix ans de résidence est exigé au préalable","Qu'une résidence stable et régulière ouvre les droits, sans condition de nationalité","Qu'il faut souscrire une assurance privée pour être couvert"],
       e:"L'affiliation à la Sécurité sociale dépend du travail ou d'une résidence stable et régulière, pas de la nationalité. Les cotisations ouvrent les mêmes droits : maladie, retraite, allocations familiales, accidents du travail." },
  en:{ q:"A relative tells you that as a legally resident foreign national you have no right to social protection. What do you reply?",
       c:["That they are right: those rights are for French nationals","That ten years of prior residence are required first","That stable, legal residence opens the rights, with no nationality condition","That you must take out private insurance to be covered"],
       e:"Social security cover depends on work or stable, legal residence, not nationality. Contributions open the same rights: health care, pensions, family benefits, workplace accidents." } },

{ id:'sit46', cat:'droits', sit:true, a:1,
  fr:{ q:"Des collègues en grève bloquent l'entrée de l'entreprise. Vous souhaitez travailler. Que dit le droit ?",
       c:["Le blocage fait partie des moyens d'action reconnus aux grévistes","La grève est un droit, mais empêcher les autres de travailler est illicite","Vous devez vous joindre au mouvement par solidarité professionnelle","Vous pouvez forcer le passage puisque votre contrat vous y oblige"],
       e:"Le droit de grève est garanti par la Constitution. Il ne permet ni de bloquer l'accès aux locaux, ni d'empêcher les non-grévistes de travailler : c'est une entrave, qui peut être sanctionnée. Le règlement passe par l'employeur et le juge." },
  en:{ q:"Colleagues on strike are blocking the entrance. You want to work. What does the law say?",
       c:["Blockading is among the recognised means of strike action","Striking is a right, but stopping others working is unlawful","You should join the action out of professional solidarity","You may force your way through since your contract requires it"],
       e:"The right to strike is guaranteed by the Constitution. It allows neither blocking access nor stopping non-strikers from working: that is unlawful obstruction and can be sanctioned. Resolution goes through the employer and the courts." } },

{ id:'sit47', cat:'droits', sit:true, a:2,
  fr:{ q:"Vous souhaitez instruire votre enfant à la maison plutôt que de l'inscrire à l'école. Que faut-il faire ?",
       c:["Informer la mairie, qui transmet ensuite le dossier au rectorat","Rien de particulier : l'instruction en famille est un libre choix","Demander une autorisation préalable, accordée pour des motifs limités","Attendre les 6 ans de l'enfant, puis faire une déclaration annuelle"],
       e:"Depuis 2022, l'instruction en famille est soumise à une autorisation préalable du rectorat, accordée pour des motifs limités : santé, handicap, pratique sportive ou artistique intensive, itinérance, ou situation propre à l'enfant." },
  en:{ q:"You want to educate your child at home rather than enrol them in school. What must you do?",
       c:["Inform the town hall, which forwards the file to the education authority","Nothing in particular: home education is a free choice","Apply for prior authorisation, granted on limited grounds","Wait until the child is 6, then file an annual declaration"],
       e:"Since 2022 home education requires prior authorisation from the education authority, granted on limited grounds: health, disability, intensive sport or arts, itinerancy, or the child's own situation." } },

{ id:'sit48', cat:'droits', sit:true, a:0,
  fr:{ q:"Votre voisin, ressortissant d'un pays de l'Union européenne installé en France, vous demande s'il peut voter. Que lui répondez-vous ?",
       c:["Qu'il vote aux municipales et aux européennes, mais pas au national","Qu'il peut voter à l'ensemble des élections organisées en France","Qu'aucun scrutin français ne lui est ouvert avant naturalisation","Qu'il peut voter s'il justifie de cinq ans de résidence en France"],
       e:"La citoyenneté européenne, créée par le traité de Maastricht en 1992, ouvre aux ressortissants de l'Union résidant en France le droit de vote et d'éligibilité aux élections municipales et européennes. Les scrutins nationaux restent réservés aux Français." },
  en:{ q:"Your neighbour, an EU national living in France, asks whether he can vote. What do you tell him?",
       c:["That he votes in municipal and European elections, but not national ones","That he may vote in every election held in France","That no French election is open to him before naturalisation","That he may vote if he shows five years of residence in France"],
       e:"European citizenship, created by the Maastricht Treaty in 1992, gives EU nationals resident in France the right to vote and stand in municipal and European elections. National elections remain reserved for French citizens." } },

{ id:'sit49', cat:'droits', sit:true, a:3,
  fr:{ q:"Vous résidez fiscalement en France et percevez des loyers d'un bien situé à l'étranger. Que devez-vous déclarer ?",
       c:["Rien, ces revenus étant déjà imposés dans leur pays d'origine","Uniquement la part effectivement rapatriée sur un compte français","Uniquement si les sommes dépassent le seuil annuel d'imposition","Vos revenus mondiaux, ainsi que vos comptes ouverts à l'étranger"],
       e:"Un résident fiscal français déclare ses revenus mondiaux. Les comptes bancaires détenus à l'étranger doivent aussi être déclarés, sous peine d'amende. Les conventions fiscales évitent la double imposition, mais ne dispensent jamais de déclarer." },
  en:{ q:"You are tax-resident in France and receive rent from a property abroad. What must you declare?",
       c:["Nothing, since that income is already taxed in its home country","Only the share actually transferred to a French account","Only if the sums exceed the annual taxable threshold","Your worldwide income, plus any accounts held abroad"],
       e:"A French tax resident declares worldwide income. Bank accounts held abroad must also be declared, on pain of a fine. Tax treaties prevent double taxation but never remove the duty to declare." } },

{ id:'sit50', cat:'droits', sit:true, a:1,
  fr:{ q:"Dans la rue, vous voyez une personne en agresser physiquement une autre. Quelle est la bonne réaction ?",
       c:["Intervenir physiquement pour séparer les deux protagonistes","Appeler la police (17 ou 112) et vous tenir prêt à témoigner","Filmer la scène afin de disposer d'une preuve exploitable","Vous éloigner rapidement pour ne pas être impliqué vous-même"],
       e:"L'obligation de porter secours n'impose pas de se mettre en danger : alerter suffit et constitue déjà une assistance. Le témoignage est précieux pour l'enquête ; se substituer aux forces de l'ordre ne l'est pas, et peut aggraver la situation." },
  en:{ q:"In the street you see someone physically assaulting another person. What is the right reaction?",
       c:["Step in physically to separate the two people","Call the police (17 or 112) and be ready to give evidence","Film the scene so there is usable proof","Move away quickly so as not to get involved yourself"],
       e:"The duty to assist does not require putting yourself in danger: raising the alarm is itself assistance. Your witness account matters to the investigation; substituting yourself for the police does not, and can make things worse." } }

]);
