//Dado un número inviertelo y devuelvelo de esa manera.

const reverseNum = (num) => {
  let resut = parseInt(num.toString()
  .split("")
  .reverse()
  .join("")) * Math.sign(num);

  let total = parseInt(resut);

  return total;
};

console.log(reverseNum(-59));
