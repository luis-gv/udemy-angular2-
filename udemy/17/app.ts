let promesa = new Promise( function(resuelta,rechazada){
    setTimeout( ()=>{
      console.log("Ejecutando promesa");
      resuelta();
      //rechazada();
    },1500);
} )

console.log("Primer log");

promesa.then(
  function(){
    console.log("Cuando la Promesa es Resuelta");
  },
  function(){
    console.error("Cuando la Promesa es Rechazada");
  }
);

console.log("último log");
