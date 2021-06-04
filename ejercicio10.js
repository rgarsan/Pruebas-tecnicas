//Dado un número mostrar una escalera con escalones de "[-]""
//usando el número para los niveles de la escalera.

const stairs = (num) => {
  let completeStairs = "";

  for (let i = 1; i <= num; i++) {
    let stair = "";

    for (let step = 1; step <= i; step++) {
      stair += "[-]";
    }
    completeStairs += stair + "\n";
  }

  return completeStairs;
};

console.log(stairs(4));
