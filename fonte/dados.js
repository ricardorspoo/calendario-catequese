/* Base de celebracoes extraida dos calendarios da Diocese de Guarulhos.
   Campos: id, pub (crianca|jovem|adulto), et (etapa ou tempo), ciclo, cat (cel|sac|ev),
   t (titulo), i/f (inicio e fim da previsao), ate (so ha data limite), de (a partir de),
   s (data so para ordenar quando nao ha previsao), sm (ha mes mas nao ha dia),
   enc (encontro de referencia), rd/rf (data prevista desse encontro), no (nota do encontro), obs. */
var BASE = [
/* ---------- CRIANCAS 25/26 ---------- */
{id:"c1-agua",pub:"crianca",et:"1ª etapa",ciclo:"25/26",cat:"cel",t:"Celebração da água",i:"2026-01-24",enc:"5º encontro (Somos escolhidos)",rd:"2026-01-17",no:"A celebração é o 6º encontro (pág. 38).",obs:"Com a participação dos pais e padrinhos de Batismo."},
{id:"c1-pen",pub:"crianca",et:"1ª etapa",ciclo:"25/26",cat:"cel",t:"Celebração Penitencial",i:"2026-03-21",enc:"11º encontro (Jesus não foi aceito por muitos)",rd:"2026-03-14",no:"A celebração é o 12º encontro (pág. 56)."},
{id:"c1-gincana",pub:"crianca",et:"1ª etapa",ciclo:"25/26",cat:"ev",t:"Gincana Catequética",i:"2026-09-12",enc:"30º encontro (Jesus cura o filho do funcionário do rei)",rd:"2026-09-05",no:"Pág. 159."},
{id:"c1-romaria",pub:"crianca",et:"1ª etapa",ciclo:"25/26",cat:"ev",t:"Romaria Diocesana",i:"2026-09-19",enc:"30º encontro",rd:"2026-09-05"},
{id:"c1-insc",pub:"crianca",et:"1ª etapa",ciclo:"25/26",cat:"cel",t:"Celebração de inscrição do nome e entrega do Livro Sagrado",i:"2026-11-22",enc:"36º encontro (Preparando a celebração 1)",rd:"2026-11-21",no:"Pág. 122. Domingo de Cristo Rei.",obs:"O calendário põe o 37º encontro (Preparando a celebração 2) em 28/11, depois da celebração. Conferir."},

{id:"c2-entcreio",pub:"crianca",et:"2ª etapa",ciclo:"25/26",cat:"cel",t:"Celebração de entrega do Creio",s:"2025-11-22",enc:"Encontro de preparação para a entrega do Creio (pág. 19)",rd:"2025-11-22",obs:"O calendário traz só o encontro de preparação, sem a data da celebração."},
{id:"c2-eco",pub:"crianca",et:"2ª etapa",ciclo:"25/26",cat:"cel",t:"Celebração ecológica",i:"2026-01-24",enc:"5º encontro (Preservar a criação)",rd:"2026-01-17",no:"A celebração é o 6º encontro (pág. 43).",obs:"Com a participação dos pais e padrinhos de Batismo."},
{id:"c2-luz",pub:"crianca",et:"2ª etapa",ciclo:"25/26",cat:"cel",t:"Celebração da Luz",i:"2026-04-25",enc:"15º encontro (Ressuscitou ao terceiro dia)",rd:"2026-04-18",no:"A celebração é o 16º encontro (pág. 79).",obs:"Com a participação dos pais."},
{id:"c2-romaria",pub:"crianca",et:"2ª etapa",ciclo:"25/26",cat:"ev",t:"Romaria Diocesana",i:"2026-09-19",enc:"27º encontro (Na remissão dos pecados)",rd:"2026-09-12"},
{id:"c2-recit",pub:"crianca",et:"2ª etapa",ciclo:"25/26",cat:"cel",t:"Celebração de recitação da Profissão de Fé",s:"2026-11-08",enc:"31º encontro (preparação da celebração, pág. 118)",rd:"2026-11-07",obs:"Sem data no calendário. Os encontros 30º e 31º preparam a celebração. Em agosto o calendário repete os números 24º, 25º e 26º; conferir a contagem."},

{id:"c3-entpn",pub:"crianca",et:"3ª etapa",ciclo:"25/26",cat:"cel",t:"Celebração de entrega do Pai-Nosso",s:"2025-11-22",enc:"Encontro de preparação para a entrega do Pai-Nosso (pág. 21)",rd:"2025-11-22",obs:"O calendário traz só o encontro de preparação, sem a data da celebração."},
{id:"c3-pao",pub:"crianca",et:"3ª etapa",ciclo:"25/26",cat:"cel",t:"Celebração do Pão",i:"2026-06-20",enc:"17º encontro (Sou responsável por minha Igreja, sou dizimista!)",rd:"2026-05-30",no:"A celebração é o 18º encontro (pág. 72).",obs:"Em 13/06 o calendário prevê visita às famílias carentes ou a uma instituição."},
{id:"c3-rec",pub:"crianca",et:"3ª etapa",ciclo:"25/26",cat:"cel",t:"Celebração da Reconciliação",i:"2026-08-29",enc:"23º encontro (O Sacramento da Reconciliação)",rd:"2026-08-15",no:"A celebração é o 24º encontro (pág. 89)."},
{id:"c3-romaria",pub:"crianca",et:"3ª etapa",ciclo:"25/26",cat:"ev",t:"Romaria Diocesana",i:"2026-09-19",enc:"25º encontro (Lavados e purificados em Cristo)",rd:"2026-09-12"},
{id:"c3-recit",pub:"crianca",et:"3ª etapa",ciclo:"25/26",cat:"cel",t:"Celebração de recitação do Pai-Nosso",s:"2026-10-25",enc:"29º encontro (preparação da celebração, pág. 102)",rd:"2026-10-24",obs:"Sem data no calendário."},
{id:"c3-retiro",pub:"crianca",et:"3ª etapa",ciclo:"25/26",cat:"ev",t:"Retiro espiritual",i:"2026-11-07",f:"2026-11-14",enc:"29º encontro",rd:"2026-10-24",no:"O retiro é o 30º encontro.",obs:"A ser realizado até 14/11."},

{id:"c4-bat",pub:"crianca",et:"4ª etapa",ciclo:"25/26",cat:"cel",t:"Participação em uma celebração batismal",s:"2025-12-13",enc:"4º encontro (Os sete Sacramentos da Igreja)",rd:"2025-12-13",obs:"Sem data no calendário: agendar a participação dos catequizandos (pág. 30)."},
{id:"c4-ador",pub:"crianca",et:"4ª etapa",ciclo:"25/26",cat:"cel",t:"Adoração ao Santíssimo",i:"2026-03-28",f:"2026-04-05",enc:"13º encontro (A Instituição da Eucaristia)",rd:"2026-03-21",no:"A adoração é o 14º encontro (pág. 57).",obs:"Prevista para 28/03, pode ser realizada até 05/04."},
{id:"c4-romaria",pub:"crianca",et:"4ª etapa",ciclo:"25/26",cat:"ev",t:"Romaria Diocesana",i:"2026-09-19",enc:"30º encontro (A dinâmica da prece)",rd:"2026-09-12"},
{id:"c4-pen",pub:"crianca",et:"4ª etapa",ciclo:"25/26",cat:"cel",t:"Celebração da Penitência",i:"2026-10-24",enc:"33º encontro (Preparando a Celebração da Primeira Eucaristia)",rd:"2026-10-17",no:"A celebração é o 34º encontro (pág. 116).",obs:"O calendário anota \"acontecer até dia 22\"."},
{id:"c4-retiro",pub:"crianca",et:"4ª etapa",ciclo:"25/26",cat:"ev",t:"Retiro espiritual",i:"2026-11-07",enc:"34º encontro (Celebração da Penitência)",rd:"2026-10-24"},
{id:"c4-euc",pub:"crianca",et:"4ª etapa",ciclo:"25/26",cat:"sac",t:"Primeira Eucaristia",i:"2026-11-22",enc:"34º encontro e retiro espiritual",rd:"2026-11-07",no:"Domingo de Cristo Rei."},

/* ---------- JOVENS (CRISMA) 25/26 ---------- */
{id:"j1-ret",pub:"jovem",et:"1ª etapa",ciclo:"25/26",cat:"ev",t:"Retiro com a família",i:"2025-03-08",enc:"Nenhum: acontece antes do 1º encontro",rd:"2025-03-15"},
{id:"j2-ret",pub:"jovem",et:"2ª etapa",ciclo:"25/26",cat:"ev",t:"Retiro SAV/PV (obrigatório)",i:"2025-03-08",enc:"Nenhum: acontece antes do 1º encontro",rd:"2025-03-15"},
{id:"j2-previva",pub:"jovem",et:"2ª etapa",ciclo:"25/26",cat:"ev",t:"Pré Viva a Vida",i:"2025-08-16",f:"2025-08-17",enc:"15º encontro",rd:"2025-08-09"},
{id:"j2-viva",pub:"jovem",et:"2ª etapa",ciclo:"25/26",cat:"ev",t:"Viva a Vida",i:"2025-09-07",enc:"18º encontro",rd:"2025-09-06"},
{id:"j2-festa",pub:"jovem",et:"2ª etapa",ciclo:"25/26",cat:"cel",t:"Festa da Unidade Paroquial",i:"2025-12-13",f:"2025-12-14",enc:"28º encontro",rd:"2025-12-06",no:"A festa é o 29º encontro.",obs:"Momento de cada pastoral divulgar seu trabalho aos crismandos."},
{id:"j2-envio",pub:"jovem",et:"2ª etapa",ciclo:"25/26",cat:"cel",t:"Celebração de envio e acolhida nas pastorais (entrega da insígnia)",i:"2026-02-14",f:"2026-02-15",enc:"32º encontro",rd:"2026-02-07",no:"No calendário a celebração conta como o 33º.",obs:"Início da 3ª etapa em 21/02/2026."},

{id:"j3-ret1",pub:"jovem",et:"3ª etapa",ciclo:"25/26",cat:"ev",t:"Retiro SAV/PV (obrigatório)",i:"2025-03-15",enc:"Encontro: Prudência",rd:"2025-03-08"},
{id:"j3-entcreio",pub:"jovem",et:"3ª etapa",ciclo:"25/26",cat:"cel",t:"Celebração de entrega do Creio",i:"2025-04-26",f:"2025-05-04",enc:"Encontro: Os Mandamentos da Igreja",rd:"2025-04-12"},
{id:"j3-recitcreio",pub:"jovem",et:"3ª etapa",ciclo:"25/26",cat:"cel",t:"Celebração de recitação do Creio",i:"2025-05-18",f:"2025-06-01",enc:"Encontro: Creio",rd:"2025-05-17"},
{id:"j3-ret2",pub:"jovem",et:"3ª etapa",ciclo:"25/26",cat:"ev",t:"Retiro SAV/PV (obrigatório)",i:"2025-06-07",enc:"Encontro: Creio",rd:"2025-05-17"},
{id:"j3-entpn",pub:"jovem",et:"3ª etapa",ciclo:"25/26",cat:"cel",t:"Celebração de entrega do Pai-nosso",i:"2025-06-11",f:"2025-06-26",enc:"Encontro: A Oração na vida do Cristão",rd:"2025-06-14",obs:"O encontro de referência cai dentro do período da celebração."},
{id:"j3-recitpn",pub:"jovem",et:"3ª etapa",ciclo:"25/26",cat:"cel",t:"Celebração de recitação do Pai-nosso",i:"2025-07-30",f:"2025-08-03",enc:"Encontro: Pai nosso (segundo encontro do tema)",rd:"2025-07-26"},
{id:"j3-previva",pub:"jovem",et:"3ª etapa",ciclo:"25/26",cat:"ev",t:"Pré Viva a Vida",i:"2025-08-16",f:"2025-08-17",enc:"Encontro: Espiritualidade",rd:"2025-08-09"},
{id:"j3-viva",pub:"jovem",et:"3ª etapa",ciclo:"25/26",cat:"ev",t:"Viva a Vida",i:"2025-09-07",enc:"Encontro: Espiritualidade",rd:"2025-08-09"},
{id:"j3-pen",pub:"jovem",et:"3ª etapa",ciclo:"25/26",cat:"cel",t:"Celebração penitencial com confissão individual e retiro",s:"2025-12-14",obs:"Sem data no calendário: realizar de 20 a 15 dias antes da celebração dos sacramentos."},
{id:"j3-crisma",pub:"jovem",et:"3ª etapa",ciclo:"25/26",cat:"sac",t:"Celebração do Sacramento da Crisma",s:"2025-12-15",obs:"Sem data no calendário: agendar com o bispo a partir da terceira semana do Advento; também pode ser na Quaresma. Da Vigília Pascal a Pentecostes a prioridade de datas é da catequese com adultos. O catequista mantém encontros mensais com a turma até os sacramentos."},

/* ---------- JOVENS (CRISMA) 26/27 ---------- */
{id:"k1-ret",pub:"jovem",et:"1ª etapa",ciclo:"26/27",cat:"ev",t:"Retiro com a família",i:"2026-02-21",enc:"Nenhum: acontece antes do 1º encontro",rd:"2026-02-28"},
{id:"k1-viva",pub:"jovem",et:"1ª etapa",ciclo:"26/27",cat:"ev",t:"Viva a Vida",i:"2026-09-06",enc:"18º encontro",rd:"2026-09-05",obs:"A 1ª etapa é convidada a participar do Pré Viva a Vida e do Viva a Vida."},
{id:"k2-sav",pub:"jovem",et:"2ª etapa",ciclo:"26/27",cat:"ev",t:"Catequese SAV/PV",i:"2026-02-21",enc:"Nenhum: acontece antes do 1º encontro",rd:"2026-02-28"},
{id:"k2-viva",pub:"jovem",et:"2ª etapa",ciclo:"26/27",cat:"ev",t:"Viva a Vida",i:"2026-09-06",enc:"19º encontro",rd:"2026-09-05",obs:"O calendário pede também a participação no Pré Viva a Vida nas foranias, sem data."},
{id:"k2-festa",pub:"jovem",et:"2ª etapa",ciclo:"26/27",cat:"cel",t:"Festa da Unidade Paroquial",i:"2026-12-12",f:"2026-12-13",enc:"28º encontro",rd:"2026-12-05",no:"A festa é o 29º encontro.",obs:"Momento de cada pastoral divulgar seu trabalho aos crismandos."},
{id:"k2-envio",pub:"jovem",et:"2ª etapa",ciclo:"26/27",cat:"cel",t:"Celebração de envio e acolhida nas pastorais (entrega da insígnia)",i:"2027-01-30",f:"2027-01-31",enc:"32º encontro",rd:"2027-01-23",no:"No calendário a celebração conta como o 33º.",obs:"Início da 3ª etapa em 13/02/2027."},

{id:"k3-sav1",pub:"jovem",et:"3ª etapa",ciclo:"26/27",cat:"ev",t:"Catequese SAV/PV",i:"2026-02-28",enc:"Encontro: Prudência",rd:"2026-02-21"},
{id:"k3-entcreio",pub:"jovem",et:"3ª etapa",ciclo:"26/27",cat:"cel",t:"Celebração de entrega do Creio",i:"2026-04-26",f:"2026-05-03",enc:"Encontro: A Fé que Professamos",rd:"2026-04-25"},
{id:"k3-recitcreio",pub:"jovem",et:"3ª etapa",ciclo:"26/27",cat:"cel",t:"Celebração de recitação do Creio",i:"2026-05-23",f:"2026-05-31",enc:"Encontro: Creio",rd:"2026-05-09"},
{id:"k3-sav2",pub:"jovem",et:"3ª etapa",ciclo:"26/27",cat:"ev",t:"Catequese SAV/PV",i:"2026-05-30",enc:"Encontro: A Oração na vida do Cristão",rd:"2026-05-23"},
{id:"k3-entpn",pub:"jovem",et:"3ª etapa",ciclo:"26/27",cat:"cel",t:"Celebração de entrega do Pai-nosso",i:"2026-05-31",f:"2026-06-07",enc:"Encontro: A Oração na vida do Cristão",rd:"2026-05-23"},
{id:"k3-recitpn",pub:"jovem",et:"3ª etapa",ciclo:"26/27",cat:"cel",t:"Celebração de recitação do Pai-nosso",i:"2026-06-27",f:"2026-07-05",enc:"Encontro: Pai nosso (segundo encontro do tema)",rd:"2026-06-20"},
{id:"k3-previva",pub:"jovem",et:"3ª etapa",ciclo:"26/27",cat:"ev",t:"Pré Viva a Vida",s:"2026-08-15",sm:true,enc:"Encontro: Sacramento do Batismo",rd:"2026-08-08",obs:"Sem dia definido: realizado nas paróquias, com datas divulgadas depois pela SAV/PV."},
{id:"k3-viva",pub:"jovem",et:"3ª etapa",ciclo:"26/27",cat:"ev",t:"Viva a Vida",i:"2026-09-07",enc:"Encontro: Sacramento do Batismo",rd:"2026-08-08",obs:"O calendário da 3ª etapa traz dia 07; os da 1ª e da 2ª etapa trazem 06/09. Conferir."},
{id:"k3-pen",pub:"jovem",et:"3ª etapa",ciclo:"26/27",cat:"cel",t:"Celebração penitencial com confissão individual e retiro",s:"2026-12-13",obs:"Sem data no calendário: realizar de 20 a 15 dias antes da celebração dos sacramentos."},
{id:"k3-crisma",pub:"jovem",et:"3ª etapa",ciclo:"26/27",cat:"sac",t:"Celebração do Sacramento da Crisma",s:"2026-12-14",obs:"Sem data no calendário: agendar com o bispo a partir da terceira semana do Advento; também pode ser na Quaresma. Da Vigília Pascal a Pentecostes a prioridade de datas é da catequese com adultos. O catequista mantém encontros mensais com a turma até os sacramentos."},

/* ---------- ADULTOS 25/26 ---------- */
{id:"a-entrada",pub:"adulto",et:"Pré-catecumenato",ciclo:"25/26",cat:"cel",t:"Celebração de entrada no catecumenato",f:"2025-07-27",ate:true,enc:"9º encontro do pré-catecumenato e encontro de organização",rd:"2025-06-22",rf:"2025-06-28",obs:"Presidida pelo padre."},
{id:"a-biblia",pub:"adulto",et:"Catecumenato",ciclo:"25/26",cat:"cel",t:"Entrega da Bíblia",i:"2025-08-17",f:"2025-08-23",enc:"2º encontro do catecumenato",rd:"2025-08-10",rf:"2025-08-16",no:"A entrega acontece no 3º encontro.",obs:"Padre, catequista ou diácono."},
{id:"a-romaria",pub:"adulto",et:"Catecumenato",ciclo:"25/26",cat:"ev",t:"Romaria Diocesana para Aparecida",i:"2025-09-20",enc:"6º encontro do catecumenato",rd:"2025-09-07",rf:"2025-09-13",obs:"Incentivar catequizandos e catecúmenos a irem."},
{id:"a-pen1",pub:"adulto",et:"Catecumenato",ciclo:"25/26",cat:"cel",t:"Celebração penitencial",i:"2025-11-30",f:"2025-12-13",enc:"14º encontro do catecumenato",rd:"2025-11-23",rf:"2025-11-29",obs:"Realizar até dia 21. Presidida pelo padre ou diácono."},
{id:"a-cuidado",pub:"adulto",et:"Catecumenato",ciclo:"25/26",cat:"cel",t:"Celebração de entrega do cuidado com o mundo",i:"2026-01-25",f:"2026-01-31",enc:"16º encontro do catecumenato",rd:"2026-01-18",rf:"2026-01-24",obs:"Presidida pelo diácono ou ministro da Palavra."},
{id:"a-eleicao",pub:"adulto",et:"Iluminação e purificação",ciclo:"25/26",cat:"cel",t:"Celebração da Eleição",i:"2026-02-21",f:"2026-02-22",enc:"16º encontro do catecumenato e encontro de organização da celebração",rd:"2026-02-01",rf:"2026-02-14",obs:"1º sábado ou domingo da Quaresma. Presidida pelo padre."},
{id:"a-retiro",pub:"adulto",et:"Iluminação e purificação",ciclo:"25/26",cat:"ev",t:"Retiro ou momento de oração com confissões individuais",i:"2026-02-28",f:"2026-03-29",enc:"Celebração da Eleição",rd:"2026-02-21",rf:"2026-02-22",obs:"Presidida pelo padre."},
{id:"a-maria",pub:"adulto",et:"Iluminação e purificação",ciclo:"25/26",cat:"cel",t:"Celebração de devoção a Maria",s:"2026-03-01",sm:true,enc:"Catequese sobre o sacramento da Reconciliação",rd:"2026-03-01",rf:"2026-03-07",obs:"Sem dia definido no calendário. Padre, diácono ou ministro da Palavra."},
{id:"a-esc1",pub:"adulto",et:"Iluminação e purificação",ciclo:"25/26",cat:"cel",t:"Primeiro escrutínio",i:"2026-03-08",enc:"Catequese sobre o Creio",rd:"2026-03-01",rf:"2026-03-07",obs:"3º domingo da Quaresma. Presidido pelo padre."},
{id:"a-creio",pub:"adulto",et:"Iluminação e purificação",ciclo:"25/26",cat:"cel",t:"Celebração da entrega do Creio",i:"2026-03-08",f:"2026-03-14",enc:"Catequese sobre o Creio",rd:"2026-03-01",rf:"2026-03-07",obs:"Padre, diácono ou ministro da Palavra."},
{id:"a-pen2",pub:"adulto",et:"Iluminação e purificação",ciclo:"25/26",cat:"cel",t:"Celebração penitencial",i:"2026-03-14",f:"2026-03-21",enc:"Catequese sobre o sacramento da Reconciliação",rd:"2026-03-01",rf:"2026-03-07",obs:"2º ou 3º sábado de março. Presidida pelo padre."},
{id:"a-esc2",pub:"adulto",et:"Iluminação e purificação",ciclo:"25/26",cat:"cel",t:"Segundo escrutínio",i:"2026-03-15",enc:"Celebração da entrega do Creio",rd:"2026-03-08",rf:"2026-03-14",obs:"4º domingo da Quaresma. Presidido pelo padre."},
{id:"a-mand",pub:"adulto",et:"Iluminação e purificação",ciclo:"25/26",cat:"cel",t:"Celebração de entrega do Mandamento Novo do Senhor",i:"2026-03-15",f:"2026-03-21",enc:"Celebração da entrega do Creio",rd:"2026-03-08",rf:"2026-03-14",obs:"Padre, diácono ou ministro da Palavra."},
{id:"a-esc3",pub:"adulto",et:"Iluminação e purificação",ciclo:"25/26",cat:"cel",t:"Terceiro escrutínio",i:"2026-03-22",enc:"Celebração de entrega do Mandamento Novo",rd:"2026-03-15",rf:"2026-03-21",obs:"5º domingo da Quaresma. Presidido pelo padre."},
{id:"a-pn",pub:"adulto",et:"Iluminação e purificação",ciclo:"25/26",cat:"cel",t:"Celebração de entrega da Oração do Senhor (Pai-nosso)",i:"2026-03-22",f:"2026-03-28",enc:"Celebração de entrega do Mandamento Novo",rd:"2026-03-15",rf:"2026-03-21",obs:"Padre, diácono ou ministro da Palavra."},
{id:"a-prep",pub:"adulto",et:"Iluminação e purificação",ciclo:"25/26",cat:"cel",t:"Preparação imediata (somente eleitos e catecúmenos)",i:"2026-04-03",f:"2026-04-04",enc:"Celebração de entrega do Pai-nosso",rd:"2026-03-22",rf:"2026-03-28",obs:"Na Sexta-feira Santa, após a celebração das 15h, ou no Sábado Santo pela manhã. Presidida pelo padre."},
{id:"a-vigilia",pub:"adulto",et:"Iluminação e purificação",ciclo:"25/26",cat:"sac",t:"Sacramentos da iniciação cristã na Vigília Pascal",i:"2026-04-04",enc:"Preparação imediata",rd:"2026-04-03",rf:"2026-04-04",obs:"Somente os catecúmenos recebem os sacramentos na Vigília. Presidida pelo padre."},
{id:"a-eucrisma",pub:"adulto",et:"Iluminação e purificação",ciclo:"25/26",cat:"sac",t:"Eucaristia e Crisma dos catequizandos",i:"2026-04-05",de:true,enc:"Preparação da Quaresma concluída",obs:"A partir do Domingo de Páscoa; agendar previamente com o bispo."},
{id:"a-celeb",pub:"adulto",et:"Mistagogia",ciclo:"25/26",cat:"cel",t:"Encontro celebrativo",i:"2026-04-06",f:"2026-04-18",enc:"Sacramentos da iniciação recebidos",rd:"2026-04-04",obs:"Convidar o CPP da paróquia ou representantes das pastorais."},
{id:"a-novena",pub:"adulto",et:"Mistagogia",ciclo:"25/26",cat:"cel",t:"Novena em preparação a Pentecostes",i:"2026-05-14",f:"2026-05-22",enc:"5º encontro da mistagogia",rd:"2026-05-10",rf:"2026-05-16"},
{id:"a-vigpent",pub:"adulto",et:"Mistagogia",ciclo:"25/26",cat:"cel",t:"Vigília de Pentecostes",i:"2026-05-23",enc:"5º encontro da mistagogia",rd:"2026-05-10",rf:"2026-05-16",obs:"Presidida pelo padre."},
{id:"a-pent",pub:"adulto",et:"Mistagogia",ciclo:"25/26",cat:"cel",t:"Celebração de Pentecostes",i:"2026-05-24",enc:"5º encontro da mistagogia",rd:"2026-05-10",rf:"2026-05-16",obs:"Presidida pelo padre."},
{id:"a-envio",pub:"adulto",et:"Mistagogia",ciclo:"25/26",cat:"cel",t:"Encerramento do grupo e envio para as pastorais",i:"2026-05-25",f:"2026-05-31",enc:"5º encontro da mistagogia",rd:"2026-05-10",rf:"2026-05-16"}
/* ---------- ADULTOS 26/27 (calendario oficial). Os ids repetem os da antiga estimativa
   para nao perder datas de realizacao ja digitadas. ---------- */
,{id:"a-entrada~e",pub:"adulto",et:"Pré-catecumenato",ciclo:"26/27",cat:"cel",t:"Celebração de entrada no catecumenato",f:"2026-06-28",ate:true,enc:"9º encontro do pré-catecumenato e encontro de organização",rd:"2026-06-07",rf:"2026-06-13",obs:"Presidida pelo padre."},
{id:"a-biblia~e",pub:"adulto",et:"Catecumenato",ciclo:"26/27",cat:"cel",t:"Entrega da Bíblia",i:"2026-08-09",f:"2026-08-15",enc:"2º encontro do catecumenato",rd:"2026-08-02",rf:"2026-08-08",no:"A entrega acontece no 3º encontro.",obs:"Padre, catequista ou diácono."},
{id:"a-romaria~e",pub:"adulto",et:"Catecumenato",ciclo:"26/27",cat:"ev",t:"Romaria Diocesana para Aparecida",i:"2026-09-19",enc:"6º encontro do catecumenato",rd:"2026-09-06",rf:"2026-09-12",obs:"Incentivar a participação dos catequizandos e catecúmenos."},
{id:"a-pen1~e",pub:"adulto",et:"Catecumenato",ciclo:"26/27",cat:"cel",t:"Celebração penitencial",i:"2026-11-30",f:"2026-12-13",enc:"15º encontro do catecumenato",rd:"2026-11-22",rf:"2026-11-28",obs:"Presidida pelo padre ou diácono. O 16º encontro (29/11 a 05/12) cai no mesmo período."},
{id:"a-cuidado~e",pub:"adulto",et:"Catecumenato",ciclo:"26/27",cat:"cel",t:"Celebração de entrega do cuidado com o mundo",i:"2027-01-24",f:"2027-01-31",enc:"16º encontro do catecumenato",rd:"2026-11-29",rf:"2026-12-05",obs:"Presidida pelo diácono ou ministro da Palavra."},
{id:"a-eleicao~e",pub:"adulto",et:"Iluminação e purificação",ciclo:"26/27",cat:"cel",t:"Celebração da Eleição",i:"2027-02-13",f:"2027-02-14",enc:"16º encontro do catecumenato e encontro de organização da celebração",rd:"2027-02-01",rf:"2027-02-12",obs:"1º sábado ou domingo da Quaresma. Presidida pelo padre."},
{id:"a-pen2~e",pub:"adulto",et:"Iluminação e purificação",ciclo:"26/27",cat:"cel",t:"Celebração penitencial",i:"2027-02-13",f:"2027-02-20",enc:"Catequese sobre o sacramento da Reconciliação",rd:"2027-02-14",rf:"2027-02-20",obs:"O calendário diz só \"2º ou 3º sábado\", dentro do bloco de fevereiro (13 ou 20/02), sem repetir o mês; em 2025/2026 era em março. Conferir. Presidida pelo padre."},
{id:"a-maria~e",pub:"adulto",et:"Iluminação e purificação",ciclo:"26/27",cat:"cel",t:"Celebração de devoção a Maria",i:"2027-02-21",f:"2027-02-27",enc:"Catequese sobre o sacramento da Reconciliação",rd:"2027-02-14",rf:"2027-02-20",obs:"Padre, diácono ou ministro da Palavra."},
{id:"a-retiro~e",pub:"adulto",et:"Iluminação e purificação",ciclo:"26/27",cat:"ev",t:"Retiro ou momento de oração com confissões individuais",i:"2027-02-28",f:"2027-03-20",enc:"Celebração da Eleição",rd:"2027-02-13",rf:"2027-02-14",obs:"O calendário traz \"de 28/08 a 20/03\"; li como 28/02 a 20/03. Conferir. Presidida pelo padre."},
{id:"a-esc1~e",pub:"adulto",et:"Iluminação e purificação",ciclo:"26/27",cat:"cel",t:"Primeiro escrutínio",i:"2027-02-28",enc:"Catequese sobre o sacramento da Reconciliação",rd:"2027-02-14",rf:"2027-02-20",obs:"3º domingo da Quaresma. Presidido pelo padre."},
{id:"a-creio~e",pub:"adulto",et:"Iluminação e purificação",ciclo:"26/27",cat:"cel",t:"Celebração da entrega do Creio",i:"2027-02-28",f:"2027-03-06",enc:"Catequese sobre o Creio",rd:"2027-02-28",rf:"2027-03-06",obs:"O calendário não repete a data: a celebração aparece junto da catequese sobre o Creio, na mesma semana. Padre, diácono ou ministro da Palavra."},
{id:"a-esc2~e",pub:"adulto",et:"Iluminação e purificação",ciclo:"26/27",cat:"cel",t:"Segundo escrutínio",i:"2027-03-07",enc:"Celebração da entrega do Creio",rd:"2027-02-28",rf:"2027-03-06",obs:"4º domingo da Quaresma. Presidido pelo padre."},
{id:"a-mand~e",pub:"adulto",et:"Iluminação e purificação",ciclo:"26/27",cat:"cel",t:"Celebração de entrega do Mandamento Novo do Senhor",i:"2027-03-07",f:"2027-03-13",enc:"Celebração da entrega do Creio",rd:"2027-02-28",rf:"2027-03-06",obs:"Padre, diácono ou ministro da Palavra."},
{id:"a-esc3~e",pub:"adulto",et:"Iluminação e purificação",ciclo:"26/27",cat:"cel",t:"Terceiro escrutínio",i:"2027-03-14",enc:"Celebração de entrega do Mandamento Novo",rd:"2027-03-07",rf:"2027-03-13",obs:"5º domingo da Quaresma. Presidido pelo padre."},
{id:"a-pn~e",pub:"adulto",et:"Iluminação e purificação",ciclo:"26/27",cat:"cel",t:"Celebração de entrega da Oração do Senhor (Pai-nosso)",i:"2027-03-14",f:"2027-03-20",enc:"Celebração de entrega do Mandamento Novo",rd:"2027-03-07",rf:"2027-03-13",obs:"Padre, diácono ou ministro da Palavra."},
{id:"a-prep~e",pub:"adulto",et:"Iluminação e purificação",ciclo:"26/27",cat:"cel",t:"Preparação imediata (somente eleitos e catecúmenos)",i:"2027-03-26",f:"2027-03-27",enc:"Celebração de entrega do Pai-nosso",rd:"2027-03-14",rf:"2027-03-20",obs:"Na Sexta-feira Santa, após a celebração das 15h, ou no Sábado Santo pela manhã. Presidida pelo padre."},
{id:"a-vigilia~e",pub:"adulto",et:"Iluminação e purificação",ciclo:"26/27",cat:"sac",t:"Sacramentos da iniciação cristã na Vigília Pascal",i:"2027-03-27",enc:"Preparação imediata",rd:"2027-03-26",rf:"2027-03-27",obs:"Presidida pelo padre."},
{id:"a-eucrisma~e",pub:"adulto",et:"Iluminação e purificação",ciclo:"26/27",cat:"sac",t:"Eucaristia e Crisma dos catequizandos",i:"2027-03-28",de:true,enc:"Preparação da Quaresma concluída",obs:"A partir do Domingo de Páscoa; agendar previamente com o bispo."},
{id:"a-celeb~e",pub:"adulto",et:"Mistagogia",ciclo:"26/27",cat:"cel",t:"Encontro celebrativo",i:"2027-03-28",f:"2027-04-03",enc:"Sacramentos da iniciação recebidos",rd:"2027-03-27",obs:"Convidar o CPP da paróquia ou representantes das pastorais."},
{id:"a-novena~e",pub:"adulto",et:"Mistagogia",ciclo:"26/27",cat:"cel",t:"Novena em preparação a Pentecostes",s:"2027-05-09",sm:true,enc:"5º encontro da mistagogia",rd:"2027-05-02",rf:"2027-05-08",obs:"Sem dia definido no calendário; fica entre o 5º encontro e a Vigília de Pentecostes (15/05)."},
{id:"a-vigpent~e",pub:"adulto",et:"Mistagogia",ciclo:"26/27",cat:"cel",t:"Vigília de Pentecostes",i:"2027-05-15",enc:"5º encontro da mistagogia",rd:"2027-05-02",rf:"2027-05-08",obs:"Presidida pelo padre."},
{id:"a-pent~e",pub:"adulto",et:"Mistagogia",ciclo:"26/27",cat:"cel",t:"Celebração de Pentecostes",i:"2027-05-16",enc:"5º encontro da mistagogia",rd:"2027-05-02",rf:"2027-05-08",obs:"Presidida pelo padre."},
{id:"a-envio~e",pub:"adulto",et:"Mistagogia",ciclo:"26/27",cat:"cel",t:"Encerramento do grupo e envio para as pastorais",i:"2027-05-16",f:"2027-05-22",enc:"5º encontro da mistagogia",rd:"2027-05-02",rf:"2027-05-08"}
];

/* Estimativas para os calendarios que a Diocese ainda nao publicou.
   26/27 das criancas sai do calendario 25/26, e 27/28 das criancas sai dessa estimativa.
   27/28 de jovens e adultos sai dos calendarios oficiais 26/27.
   Regra: cada data anda 52 semanas (364 dias), o que mantem o dia da semana. Duas excecoes
   acompanham o ano liturgico: o que cai entre a Quarta-feira de Cinzas e a semana depois de
   Pentecostes anda junto com a Pascoa, e o que cai das seis semanas antes do Advento ate o
   Natal anda junto com o 1o Domingo do Advento. */
var PASCOA = {2025:"2025-04-20", 2026:"2026-04-05", 2027:"2027-03-28", 2028:"2028-04-16"};
var ADVENTO = {2025:"2025-11-30", 2026:"2026-11-29", 2027:"2027-11-28", 2028:"2028-12-03"};
function num(d){ var p = d.split("-"); return Date.UTC(+p[0], +p[1]-1, +p[2]) / 86400000; }
function soma(d, n){ return new Date((num(d) + n) * 86400000).toISOString().slice(0,10); }
function salto(d){
  var a = +d.slice(0,4), p = PASCOA[a], p2 = PASCOA[a+1], v = ADVENTO[a], v2 = ADVENTO[a+1];
  if(p && p2 && d >= soma(p, -46) && d <= soma(p, 56)) return num(p2) - num(p);
  if(v && v2 && d >= soma(v, -42) && d <= a + "-12-24") return num(v2) - num(v);
  return 364;
}
function projeta(r, id, ciclo, fonte){
  var e = {}; for(var k in r) e[k] = r[k];
  e.id = id; e.ciclo = ciclo; e.est = true; e.fonte = fonte;
  var base = r.i || r.s || r.f, n = salto(base);
  ["i","f","s"].forEach(function(k){ if(r[k]) e[k] = soma(r[k], n); });
  if(r.rd){ var m = salto(r.rd); e.rd = soma(r.rd, m); if(r.rf) e.rf = soma(r.rf, m); }
  return e;
}
function montaBase(){
  var out = BASE.slice();
  BASE.forEach(function(r){
    if(r.pub !== "crianca"){ /* jovens e adultos ja tem 26/27 oficial */
      if(r.ciclo === "26/27") out.push(projeta(r, r.id.split("~")[0] + "~e2", "27/28", "2026/2027"));
      return;
    }
    var e1 = projeta(r, r.id + "~e", "26/27", "2025/2026");
    out.push(e1);
    out.push(projeta(e1, r.id + "~e2", "27/28", "2025/2026"));
  });
  return out;
}
if(typeof module !== "undefined") module.exports = {BASE:BASE, montaBase:montaBase};
