//Un ejemplo sin async await

/*function lastname() {
  console.log("pulgarin");
}
setTimeout(lastname);

function name() {
  console.log("leina");
}
name();
setTimeout(name);*/

//Otro ejemplo con async await

let doscientos = 200;
let once = 11;

function sumar(doscientos, once) {
  var total = doscientos + once;
  alert(total);
  return total;
}

function numeroPrimo(total) {
  if (total % 2 !== 0) {
    alert("es primo");
  } else {
    alert("no es primo");
  }
}

async function todo() {
  await sumar(200, 11);
  await numeroPrimo();
}
todo();
