let avenger = {
  nombre: "Steve Rogers",
  alias: "Cap",
  poder: "Super Soldado"
}
let {nombre:name, alias,poder} = avenger;
console.log(name,alias, poder);


let avengers:string[] = ["Peter","Steve","Tony"];
let[spider,cap,iron] = avengers;
console.log(spider,cap,iron);
