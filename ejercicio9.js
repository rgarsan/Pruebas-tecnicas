// Dado dos arrays devolver una nueva con los elentos comunes entre las dos.

const twoArrays = (arr1,arr2) => {
    const arrFilter = arr1.filter(elem => arr2.includes(elem))
    return arrFilter
}


console.log(twoArrays([2,3,4,5,6,7],[1,9,0,4,3,5]))