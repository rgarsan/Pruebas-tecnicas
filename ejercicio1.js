//Crear función que le pasemos un parametro y nos devuelva su tabla de multiplicar hasta 10.
//---------------------------//

const multiply = (num) => {
   
    for(let i = 1; i<=10; i++){
        let result= num*i
        let totalResult= `${num} x ${i} = ${result} `
        console.log(totalResult)
    }
  
}
multiply(5)