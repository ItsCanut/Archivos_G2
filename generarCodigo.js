function generarCodigo(longitud) {
  let caracteres = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T',
    'U', 'V', 'W', 'X', 'Y', 'Z', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0'
  ];

  let codigoArray = [];
  let codigo;

  for(let i = 0; i<longitud; i++){
    codigoArray[i] = caracteres[numeroAleatorio(0, caracteres.length-1)];
  }

  codigo = codigoArray.join("")
  console.log(codigo)
  console.log(typeof(codigo))

}

function numeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max-min)) + min
}

generarCodigo(4);
