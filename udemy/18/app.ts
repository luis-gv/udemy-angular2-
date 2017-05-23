interface Xmen {
  nombre:string,
  poder:string
};

function enviarMision(xmen:Xmen){
  console.log('Enviando a misión: ' + xmen.nombre);
}

let xmen:Xmen = {
  nombre: "Wolverine",
  poder: "regeneración"
};

enviarMision(xmen);
