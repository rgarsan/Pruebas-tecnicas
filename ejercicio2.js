//Dada una cadena de texto, comprobar si es un palindromo o no.
//-------------------------------//
const palindromo = (str)=> {
    str === str.split("").reverse().join("") ? console.log('Es un palindromo') : console.log('No es un palindromo')
}

palindromo('hola')
palindromo('odo')