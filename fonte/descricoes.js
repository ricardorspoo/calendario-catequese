/* Descricoes para a caixa de detalhes. Resumos preparados para o app a partir das anotacoes
   dos calendarios e do sentido geral de cada rito; o roteiro oficial esta no livro de cada etapa. */
var D_ROMARIA = "Peregrinação da Diocese de Guarulhos ao Santuário Nacional de Aparecida. O calendário dos adultos pede que os catequistas incentivem catequizandos e catecúmenos a participar.";
var D_VIVA = "Evento diocesano para os crismandos, ligado à SAV/PV (Serviço de Animação Vocacional e Pastoral Vocacional). O calendário pede a participação dos crismandos; a 1ª etapa entra como convidada.";
var D_PREVIVA = "Encontro de preparação para o Viva a Vida. Segundo as observações do calendário, é realizado nas paróquias e organizado pela SAV/PV com os coordenadores paroquiais.";
var D_SAV = "Atividade conduzida pela SAV/PV (Serviço de Animação Vocacional e Pastoral Vocacional). As observações do calendário dizem que os retiros com a SAV/PV são obrigatórios para todos os crismandos e catecúmenos, e que a paróquia deve providenciar lista de presença para ser assinada no local.";
var D_ENT_CREIO = "A comunidade entrega aos catequizandos o Creio (Símbolo da fé), resumo daquilo em que a Igreja crê. Eles o recebem para aprender e guardar, e mais adiante o professam diante da comunidade, na celebração de recitação.";
var D_REC_CREIO = "Os catequizandos professam o Creio diante da comunidade, devolvendo a fé que receberam na celebração de entrega.";
var D_ENT_PN = "A comunidade entrega aos catequizandos a Oração do Senhor, o Pai-nosso, que Jesus ensinou aos discípulos. Eles a recebem para rezá-la com a Igreja e mais adiante a recitam diante da comunidade.";
var D_REC_PN = "Os catequizandos rezam o Pai-nosso diante da comunidade, devolvendo a oração que receberam na celebração de entrega.";
var D_PEN_CRISMA = "Celebração penitencial com confissão individual e retiro, como preparação próxima para a Crisma. As observações do calendário mandam realizá-la de 20 a 15 dias antes da celebração dos sacramentos.";
var D_CRISMA = "Celebração em que os crismandos recebem o Sacramento da Confirmação. A data não vem no calendário: é agendada com o bispo, a partir da terceira semana do Advento ou durante a Quaresma. Até lá o catequista mantém encontros mensais com a turma.";
var D_FESTA = "No calendário é o 29º encontro da 2ª etapa: um momento para cada pastoral da paróquia apresentar seu trabalho aos crismandos, que depois escolhem em qual vão se integrar.";
var D_ENVIO = "Celebração que encerra a 2ª etapa da Crisma: os crismandos são enviados e acolhidos nas pastorais que escolheram e recebem a insígnia. Na 3ª etapa eles passam a participar das atividades dessas pastorais.";
var D_ESCRUT = "Rito próprio do tempo da Quaresma para os eleitos, celebrado na missa dominical e presidido pelo padre. A comunidade reza por eles, para que sejam purificados e fortalecidos na preparação próxima para os sacramentos da Páscoa. São três escrutínios, no 3º, 4º e 5º domingos da Quaresma.";
var D_MIST = "Faz parte da mistagogia, o tempo depois da Páscoa em que os que receberam os sacramentos aprofundam o que celebraram e se inserem na vida da comunidade.";
var DESC = {
"c1-agua":"Celebração feita dentro do 6º encontro da 1ª etapa, em torno do sinal da água, com a presença dos pais e dos padrinhos de Batismo. O roteiro está na pág. 38 do livro da etapa.",
"c1-pen":"Celebração feita dentro do 12º encontro, na Quaresma. Os catequizandos são conduzidos a reconhecer suas faltas e a pedir perdão a Deus. O roteiro está na pág. 56 do livro da etapa.",
"c1-gincana":"Gincana com os catequizandos da 1ª etapa, prevista na pág. 159 do livro. No calendário ocupa o sábado seguinte ao 30º encontro.",
"c1-romaria":D_ROMARIA,"c2-romaria":D_ROMARIA,"c3-romaria":D_ROMARIA,"c4-romaria":D_ROMARIA,"a-romaria":D_ROMARIA,
"c1-insc":"Celebração do fim da 1ª etapa: o nome de cada catequizando é inscrito e ele recebe o Livro Sagrado, a Bíblia. No calendário está no Domingo de Cristo Rei. O roteiro está na pág. 122, e os encontros 36º e 37º são dedicados a prepará-la.",
"c2-entcreio":D_ENT_CREIO+" Na 2ª etapa das crianças ela abre o ano: o calendário começa com o encontro de preparação (pág. 19), e os encontros seguintes percorrem o Creio frase por frase.",
"c2-eco":"Celebração feita dentro do 6º encontro da 2ª etapa, depois dos encontros sobre Deus criador e o cuidado com a criação, com a presença dos pais e dos padrinhos de Batismo. O roteiro está na pág. 43 do livro da etapa.",
"c2-luz":"Celebração feita dentro do 16º encontro, no tempo pascal, logo depois do encontro Ressuscitou ao terceiro dia, com a presença dos pais. O roteiro está na pág. 79 do livro da etapa.",
"c2-recit":D_REC_CREIO+" Encerra a 2ª etapa das crianças; os encontros 30º e 31º (págs. 116 e 118) são dedicados a prepará-la, o último com os pais.",
"c3-entpn":D_ENT_PN+" Na 3ª etapa das crianças ela abre o ano: o calendário começa com o encontro de preparação (pág. 21), e os encontros seguintes percorrem o Pai-Nosso pedido por pedido.",
"c3-pao":"Celebração feita dentro do 18º encontro da 3ª etapa, depois dos encontros sobre o pedido O pão nosso de cada dia nos dai hoje. O roteiro está na pág. 72 do livro da etapa.",
"c3-rec":"Celebração feita dentro do 24º encontro da 3ª etapa, logo depois do encontro sobre o Sacramento da Reconciliação e dos encontros sobre o perdão. O roteiro está na pág. 89 do livro da etapa.",
"c3-recit":D_REC_PN+" Encerra a 3ª etapa das crianças; o 29º encontro (pág. 102) é dedicado a prepará-la.",
"c3-retiro":"Retiro espiritual que encerra a 3ª etapa. No calendário conta como o 30º encontro e pode ser realizado até o sábado seguinte ao previsto.",
"c4-bat":"Os catequizandos da 4ª etapa participam de uma celebração de Batismo da comunidade, ligada aos encontros sobre esse sacramento. O calendário não traz data: pede que a participação seja agendada (pág. 30 do livro da etapa).",
"c4-ador":"Momento de adoração a Jesus presente na Eucaristia, feito como o 14º encontro da 4ª etapa, depois dos encontros sobre o Sacramento da Eucaristia e sua instituição. O roteiro está na pág. 57; pode ser realizada até o Domingo de Páscoa.",
"c4-pen":"Celebração penitencial da 4ª etapa, feita como o 34º encontro, na preparação próxima para a Primeira Eucaristia. O roteiro está na pág. 116 do livro da etapa.",
"c4-retiro":"Retiro espiritual da 4ª etapa, depois da Celebração da Penitência e antes da Primeira Eucaristia.",
"c4-euc":"Missa em que os catequizandos da 4ª etapa recebem a Eucaristia pela primeira vez. No calendário está no Domingo de Cristo Rei; o 33º encontro (pág. 114) é dedicado a prepará-la.",
"j1-ret":"Retiro que abre a 1ª etapa da Crisma, com os crismandos e suas famílias, antes do 1º encontro.","k1-ret":"Retiro que abre a 1ª etapa da Crisma, com os crismandos e suas famílias, antes do 1º encontro.",
"j2-ret":D_SAV,"j3-ret1":D_SAV,"j3-ret2":D_SAV,"k2-sav":D_SAV,"k3-sav1":D_SAV,"k3-sav2":D_SAV,
"j2-previva":D_PREVIVA,"j3-previva":D_PREVIVA,"k3-previva":D_PREVIVA,
"j2-viva":D_VIVA,"j3-viva":D_VIVA,"k1-viva":D_VIVA,"k2-viva":D_VIVA,"k3-viva":D_VIVA,
"j2-festa":D_FESTA,"k2-festa":D_FESTA,"j2-envio":D_ENVIO,"k2-envio":D_ENVIO,
"j3-entcreio":D_ENT_CREIO,"k3-entcreio":D_ENT_CREIO,"j3-recitcreio":D_REC_CREIO,"k3-recitcreio":D_REC_CREIO,
"j3-entpn":D_ENT_PN,"k3-entpn":D_ENT_PN,"j3-recitpn":D_REC_PN,"k3-recitpn":D_REC_PN,
"j3-pen":D_PEN_CRISMA,"k3-pen":D_PEN_CRISMA,"j3-crisma":D_CRISMA,"k3-crisma":D_CRISMA,
"a-entrada":"Rito que encerra o pré-catecumenato. Quem deseja seguir o caminho é acolhido pela comunidade e passa a ser catecúmeno; a partir daí começam os encontros do catecumenato. Presidida pelo padre, tem data limite no calendário.",
"a-biblia":"Dentro do 3º encontro do catecumenato, os catecúmenos e catequizandos recebem a Bíblia, que passa a acompanhar os encontros. A entrega pode ser feita pelo padre, pelo catequista ou pelo diácono.",
"a-pen1":"Celebração penitencial do tempo do Advento, presidida pelo padre ou pelo diácono. O calendário a põe nas duas primeiras semanas de dezembro.",
"a-cuidado":"Celebração de entrega própria do itinerário da Diocese, feita no fim do catecumenato, depois do 16º encontro. É presidida pelo diácono ou pelo ministro da Palavra.",
"a-eleicao":"Rito celebrado no 1º domingo da Quaresma (ou no sábado anterior), presidido pelo padre. A Igreja acolhe os catecúmenos que vão receber os sacramentos na Páscoa; a partir daí eles são chamados eleitos e começa o tempo da iluminação e purificação.",
"a-retiro":"Retiro ou momento de oração do tempo da Quaresma, com confissões individuais, presidido pelo padre. O calendário deixa a data livre ao longo da Quaresma.",
"a-maria":"Celebração de devoção a Nossa Senhora no tempo da Quaresma. Pode ser presidida pelo padre, pelo diácono ou pelo ministro da Palavra.",
"a-pen2":"Celebração penitencial da Quaresma, presidida pelo padre, ligada à catequese sobre o Sacramento da Reconciliação. O calendário a põe no 2º ou no 3º sábado do mês.",
"a-esc1":D_ESCRUT,"a-esc2":D_ESCRUT,"a-esc3":D_ESCRUT,
"a-creio":D_ENT_CREIO+" No itinerário dos adultos acontece na semana do primeiro escrutínio, depois da catequese sobre o Creio.",
"a-mand":"Celebração de entrega própria do itinerário da Diocese, na semana do segundo escrutínio: os eleitos recebem o Mandamento Novo do Senhor, o mandamento do amor. Pode ser presidida pelo padre, pelo diácono ou pelo ministro da Palavra.",
"a-pn":D_ENT_PN+" No itinerário dos adultos acontece na semana do terceiro escrutínio.",
"a-prep":"Último momento de preparação antes dos sacramentos, só com os eleitos e catecúmenos, presidido pelo padre. Pode ser na Sexta-feira Santa, depois da celebração das 15h, ou no Sábado Santo pela manhã.",
"a-vigilia":"Na Vigília Pascal os catecúmenos recebem os três sacramentos da iniciação cristã: Batismo, Crisma e Eucaristia. O calendário 2025/2026 anota que só os catecúmenos recebem os sacramentos na Vigília. Presidida pelo padre.",
"a-eucrisma":"Os catequizandos adultos já batizados recebem a Eucaristia e a Crisma a partir do Domingo de Páscoa, em data agendada previamente com o bispo.",
"a-celeb":"Encontro celebrativo que abre a mistagogia, logo depois da Páscoa. O calendário pede que se convide o CPP da paróquia ou representantes das pastorais. "+D_MIST,
"a-novena":"Novena de oração ao Espírito Santo nos dias que antecedem Pentecostes. "+D_MIST,
"a-vigpent":"Vigília celebrada na véspera de Pentecostes, presidida pelo padre. "+D_MIST,
"a-pent":"Missa da solenidade de Pentecostes, presidida pelo padre, que encerra o tempo pascal. "+D_MIST,
"a-envio":"Último encontro do grupo: os catequizandos são enviados para as pastorais da comunidade."
};
if(typeof module !== "undefined") module.exports = {DESC:DESC};
