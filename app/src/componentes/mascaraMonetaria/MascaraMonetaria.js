export function MascaraMonetaria(evento) {
  var value = evento.target.value;
  evento.target.value = formatarMoeda(value);
}

//Formatando moeda
function formatarMoeda(value) {
  var valorFormatado = String(value)
    .replace(/[a-zA-Z$., ]/g, "")
    .replace(/^(0*)/g, "");
    valorFormatado = valorFormatado.split("").reverse();

  if (valorFormatado.length < 3) {
    var length = valorFormatado.length;
    while (length < 3) {
      valorFormatado.push("0");
      length = valorFormatado.length;
    }
  }

  valorFormatado[2] = valorFormatado[2] + ",";

  var array = valorFormatado.reverse().join("").split(",");
  array[0] = array[0].split("").reverse();

  for (let index = 2; index < array[0].length; index++) {
    if (index % 3 === 0) {
      array[0][index] = array[0][index] + ".";
    }
  }
  
  array[0] = array[0].reverse().join("");
  array = array.join(",");

  return "R$ " + array;
}