// ¿ Cuanto es el x por ciento de x número?

const percentageNumber = (per,num) => {
    let result = ` El ${per} % de ${num} es: ${ per * num / 100}` 

    return result
}

console.log(percentageNumber(2,40))