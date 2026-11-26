# Calendário da Catequese

Calendário das celebrações da catequese da Capela São Judas Tadeu, Paróquia Sagrada Família (Diocese de Guarulhos), para consulta dos catequistas.

## Arquivos

- `index.html`: a página publicada. É gerada automaticamente; não edite à mão.
- `fonte/modelo.html`: estrutura, visual e funcionamento da página.
- `fonte/dados.js`: as celebrações de cada calendário e a regra das datas estimadas.
- `fonte/descricoes.js`: os textos da caixa de detalhes.
- `fonte/*.uri`: as logos da Catequese e da Diocese e os desenhos de São Judas Tadeu e São Tomás de Aquino.
- `montar.js`: junta os arquivos de `fonte/` e gera o `index.html`.

## Como atualizar

Altere os arquivos em `fonte/`, rode `node montar.js` e envie as mudanças. O site republica sozinho.

## Situação dos dados

- Datas marcadas com (ESTIMADO) ainda não têm calendário oficial da Diocese.
- Datas de realização, descrições editadas e catequistas ficam no Firebase (projeto calendario-catequese-a3eda, documento calendario/dados). Todos leem; só o coordenador, logado, grava.
