//Dado dos números, devolver cuantos numeros impares hay entre los dos

const odd = (num1,num2) => {
    let result = 0

   while(num1 <num2){
      if(num1 % 2 !==0) result++
      
       num1++
   }
   return result
 
} 

console.log(odd(2,100))