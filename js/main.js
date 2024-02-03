//Primero obtenemos todos los elementos de la clase cuadrado u otra en un htmlcollection

const cuadrados = document.getElementsByClassName("cuadrado")

//Transformamos esa htmlcollection en un array con la funcion ".from"
const arrayCuadrados = Array.from(cuadrados)

arrayCuadrados.map((cuadrito, indice) => {
  cuadrito.addEventListener("click", (e) => {
    console.log("hola lo clickeaste")

    document
      .getElementById(e.target.id)
      .classList.add("seleccionado" + e.target.id.slice(-1))
    console.log(arrayCuadrados)
  })
})
//Obtenemos todos los elementos del id frame en un htmlcollection

const screen = document.getElementById("screen") // me trae el div con id frame

console.log(screen)

arrayCuadrados.map((item) => {
  item.addEventListener("click", (evento) => {
    screen.classList.remove(screen.classList[screen.classList.length - 1])
    screen.classList.add("canal" + evento.target.id.slice(-1))
  })
})
// console.log(arrayCuadrados)

// let prueba = document
// cuadrados.addEventListener("click", () => {
//   console.log("hola, me has clickeado")
// })

// setInterval(hora, 1000)
// function hora() {
//   let hora = new Date().getHours()
//   let minutos = new Date().getMinutes()
//   let segundos = new Date().getSeconds()
//   let time = hora + ":" + minutos + ":" + segundos
//   console.log(time)
//   return time
// }

function change1() {
  let div1 = document.getElementById("divUno")
  console.log(div1.hidden.target)
  div1.hidden = !div1.hidden
}
function change1() {
  let div1 = document.getElementById("divUno")
  console.log(div1.hidden)
  div1.hidden = !div1.hidden
}
function change() {
  let div1 = document.getElementById("divUno")
  let div2 = document.getElementsByClassName("divDos")
  if (div1.hidden == true && div2[0].hidden == false) {
    div1.hidden = false
    div2[0].hidden = true
  } else {
    div1.hidden = true
    div2[0].hidden = false
  }
}
function addHtml() {
  let escrito = document.getElementById("input1")
  let objetoDiv = document.getElementById("contenedor")
  let p = document.createElement("p")
  p.innerHTML = escrito.value
  console.log(p)
  console.log(p.innerHTML)
  escrito.value = ""
  objetoDiv.appendChild(p)
}

setInterval(hora, 1000)

function hora() {
  let hora = new Date().getHours()
  let minutos = new Date().getMinutes()
  let segundos = new Date().getSeconds()
  const time = `${hora}:${minutos < 10 ? "0" : ""}${minutos}:${
    segundos < 10 ? "0" : ""
  }${segundos}`
  console.log(time)
  document.getElementById("hora").innerHTML = time
}
