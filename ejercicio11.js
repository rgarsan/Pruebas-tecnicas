/* Dado un texto y una palabra a buscar, censurar todas las coincidencias con el texto [censurado]. */

const censured = (text= false,word=false)=> {
    let result = "";
    if(!text && !word){
        result = 'you must enter text or serch'
    } else if(!text && word){
        result = 'You must enter text'
    } else if(text && ! word){
        result = 'You must enter search'
    }
    return result
    
}


console.log(censured('trtrtr'))