//Dado una cadena de texto devolverlo del reves sin utilizar ningún metodo de string.
//-----------------------------------//
const investText = (text) => {
  let invest = "";

  for (let letter of text) {
    invest = letter += invest;
  }
  return invest;
};
console.log (investText("holiquetal"));
