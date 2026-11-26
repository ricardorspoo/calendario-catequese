// Monta o index.html (a pagina publicada) a partir dos arquivos da pasta fonte/.
// Uso: node montar.js
const fs = require("fs");
const ler = (f) => fs.readFileSync("fonte/" + f, "utf8");
const semExport = (s) => s.replace(/if\(typeof module[^\n]*\n?/, "");
const dados = semExport(ler("dados.js")) + "\n" + semExport(ler("descricoes.js"));
const pagina = ler("modelo.html")
  .replace("/*__DADOS__*/", () => dados)
  .replace("/*__CAT__*/", () => ler("logo-catequese.uri"))
  .replace("/*__DIO__*/", () => ler("brasao-diocese.uri"))
  .replace("/*__JUDAS__*/", () => ler("sao-judas-tadeu.uri"))
  .replace("/*__TOMAS__*/", () => ler("sao-tomas-de-aquino.uri"));
fs.writeFileSync("index.html", pagina);
console.log("index.html montado:", pagina.length, "caracteres");
