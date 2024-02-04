//Primero obtenemos todos los elementos de la clase cuadrado u otra en un htmlcollection
const VOLUMEN_TEXT_MSG_TIME = 2500
let screen = document.getElementById("screen") // me trae el div con id frame

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
let contVolume = 3
let v
volume()
const volumeIcon = document.getElementById("volumeIcon")
function setVolumeIcon() {
  contVolume !== 0
    ? ((volumeIcon.innerHTML = v),
      setTimeout(() => {
        volumeIcon.innerHTML = ""
      }, VOLUMEN_TEXT_MSG_TIME))
    : (mute(), (toggleMute = true))
}
function volume() {
  const volumeButton = document.getElementsByClassName("volume")

  volumeButton[0].addEventListener("click", (evento) => {
    console.log(evento.target.innerHTML)
    // let volumeIcon = document.getElementById("volumeIcon")
    if (evento.target.innerHTML === "V +") {
      //Sube el volumen
      contVolume++
      v = ` 🔊⬆ ${contVolume}`
      toggleMute = false
    } else {
      // Baja el volumen
      if (contVolume > 0) {
        contVolume--
        v = `🔊⬇ ${contVolume}`
      } else {
        // v = "silencio 🔇 "
        setVolumeIcon()
        return
      }
    }
    console.log(volumeIcon)
    setVolumeIcon()
  })
}
// inicializo bandera volumen y memoria volumen
let toggleMute = false
let memoryVolume
// Funcion Mute pone el volumen = 0
function mute() {
  memoryVolume = contVolume
  contVolume = 0
  volumeIcon.innerHTML = "silencio 🔇 "
}
const muteButton = document.getElementById("mute")
muteButton.addEventListener("click", () => {
  toggleMute = !toggleMute
  // pregunto por estado de bandera mute para silenciar o no
  toggleMute
    ? (mute(), console.log("mute on"))
    : (console.log("mute off"),
      //si el volumen era 0, al sacar mute se pone en 1
      //si el volumen !=0, al sacar volumen vuelve al valor anterior
      !memoryVolume
        ? (contVolume = memoryVolume + 1)
        : (contVolume = memoryVolume),
      (v = ` 🔊 ${contVolume}`),
      setVolumeIcon())
})
