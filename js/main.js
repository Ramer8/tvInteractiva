//Primero obtenemos todos los elementos de la clase cuadrado u otra en un htmlcollection

let screen = document.getElementById("screen") // me trae el div con id frame

console.log(screen)

// function change() {
//   let div1 = document.getElementById("divUno")
//   let div2 = document.getElementsByClassName("divDos")
//   if (div1.hidden == true && div2[0].hidden == false) {
//     div1.hidden = false
//     div2[0].hidden = true
//   } else {
//     div1.hidden = true
//     div2[0].hidden = false
//   }
// }
// function addHtml() {
//   let escrito = document.getElementById("input1")
//   let objetoDiv = document.getElementById("contenedor")
//   let p = document.createElement("p")
//   p.innerHTML = escrito.value
//   console.log(p)
//   console.log(p.innerHTML)
//   escrito.value = ""
//   objetoDiv.appendChild(p)
// }

setInterval(hora, 1000)

function hora() {
  let hora = new Date().getHours()
  let minutos = new Date().getMinutes()
  let segundos = new Date().getSeconds()
  const time = `${hora}:${minutos < 10 ? "0" : ""}${minutos}:${
    segundos < 10 ? "0" : ""
  }${segundos}`
  document.getElementById("hora").innerHTML = time
}

const screenHeader = document.getElementById("screenHeader")

const power = document.getElementById("power")

power.addEventListener("click", (evento) => {
  console.log(screen.classList)
  console.log(screen.classList.length)
  if (powerOn) {
    console.log("encendido")
    screen.classList = []
    screen.classList.add("start")
  }
  if (!powerOn) {
    screen.classList = []
    screen.classList.add("powerOff")
  }
})
// inicialzo bandera encendido/apagado
let powerOn = false
function toggle() {
  let screenHeader = document.getElementById("screenHeader")
  powerOn = !powerOn
  screenHeader.hidden = !screenHeader.hidden
  console.log(powerOn)
}

if (screenHeader.hidden) {
  console.log("apagado")
} else {
  console.log("encendido")
}

buttonNumbers()

function buttonNumbers() {
  const numbers = document.getElementsByClassName("numbers")

  let arrayNumbers = Array.from(numbers)
  //   console.log(arrayNumbers)
  screen = document.getElementById("screen") // me trae el div con id frame

  arrayNumbers.map((item) => {
    item.addEventListener("click", (evento) => {
      console.log("presionaste un nro")
      screen.classList.remove(screen.classList[screen.classList.length - 1])
      console.log(evento.target.innerHTML)
      screen.classList.add("canal" + evento.target.innerHTML)

      console.log(screen.classList)
    })
  })
}
