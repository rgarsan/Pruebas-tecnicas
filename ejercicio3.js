// Dada una palabra, buscarla en una frase y devolver cuantas veces aparece en ella.
//La frase y la palabra deben de ser parámetros de una función.
//--------------------------------//
const countWord = (phra, word) => {
  result = [];
  let clanPhra = phra
    .toLowerCase()
    .replace(/[!¡.,]/gi, "")
    .split(" ");

  if (clanPhra.includes(word)) {
    result.push(word);
    console.log(`La palabra que se repite es ${word} y se repite ${result.length} veces`);
  }
};
countWord("hola que ase", "hola");
