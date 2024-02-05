//Primero obtenemos todos los elementos de la clase cuadrado u otra en un htmlcollection
const TEXT_MSG_TIME = 2500
let screen = document.getElementById("screen") // me trae el div con id frame

const screenHeader = document.getElementById("screenHeader")

const power = document.getElementById("power")

power.addEventListener("click", (evento) => {
  console.log(screen.classList)
  if (powerOn) {
    console.log("encendido")
    screen.classList = []
    screen.classList.add("channel0")
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

// Hora y fecha
setInterval(hora, 1000)
function hora() {
  const date = new Date().toLocaleDateString()
  let hora = new Date().getHours()
  let minutos = new Date().getMinutes()
  let segundos = new Date().getSeconds()
  const time = `${hora}:${minutos < 10 ? "0" : ""}${minutos}:${
    segundos < 10 ? "0" : ""
  }${segundos}`
  document.getElementById("hora").innerHTML = time
  document.getElementById("fecha").innerHTML = date
}

// Responde a los numeros del control remoto
buttonNumbers()

function buttonNumbers() {
  const numbers = document.getElementsByClassName("numbers")

  let arrayNumbers = Array.from(numbers)
  screen = document.getElementById("screen") // me trae el div con id screen

  arrayNumbers.map((item) => {
    item.addEventListener("click", (evento) => {
      screen.classList.remove(screen.classList[screen.classList.length - 1])
      screen.classList.add("channel" + evento.target.innerHTML)
      document.getElementById("channelInfo").innerHTML =
        "channel " + evento.target.innerHTML
    })
  })
}
let contVolume = 3
let v
volume()
const volumeIcon = document.getElementById("volumeIcon")

// Funcion del temporizador del volumen
function setVolumeIcon() {
  contVolume !== 0
    ? ((volumeIcon.innerHTML = v),
      setTimeout(() => {
        volumeIcon.innerHTML = ""
      }, TEXT_MSG_TIME))
    : (mute(), (toggleMute = true))
}

// Responde a los botones del volumen

function volume() {
  const volumeButton = document.getElementsByClassName("volume")

  volumeButton[0].addEventListener("click", (evento) => {
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
        // Pone en "silencio 🔇 "
        setVolumeIcon()
        return
      }
    }
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
// Funcion boton mute
const muteButton = document.getElementById("mute")
muteButton.addEventListener("click", () => {
  toggleMute = !toggleMute
  // pregunto por estado de bandera mute para silenciar o no
  toggleMute
    ? mute()
    : //si el volumen era 0, al sacar mute se pone en 1
      //si el volumen !=0, al sacar volumen vuelve al valor anterior
      (!memoryVolume
        ? (contVolume = memoryVolume + 1)
        : (contVolume = memoryVolume),
      (v = ` 🔊 ${contVolume}`),
      setVolumeIcon())
})

//Inicializo contador de canales
let channel
let contChannel = 0

//Responde a los botones para cambiar de canal + y -
channelButtons()

function channelInfoTimeOut() {
  setTimeout(() => {
    document.getElementById("channelInfo").innerHTML = ""
  }, TEXT_MSG_TIME)
}
function channelButtons() {
  const channelButton = document.getElementsByClassName("channel")

  channelButton[0].addEventListener("click", (evento) => {
    //pregunta si es channel Up o down?
    evento.target.innerHTML === "P +"
      ? // Channel up , incrementa contador y copia valor a la clase channel
        (channel(),
        contChannel++,
        screen.classList.add(`channel${contChannel}`),
        (document.getElementById(
          "channelInfo"
        ).innerHTML = `channel ${contChannel}`),
        channelInfoTimeOut())
      : // Channel Down, decrementa contador y copia a clase channel
        (channel(),
        contChannel--,
        // Pregunta si canal es 0 para q no tenga valores negativos.
        contChannel < 0
          ? ((contChannel = 9),
            (document.getElementById(
              "channelInfo"
            ).innerHTML = `channel ${contChannel}`),
            screen.classList.add(`channel${contChannel}`))
          : screen.classList.add(`channel${contChannel}`),
        (document.getElementById(
          "channelInfo"
        ).innerHTML = `channel ${contChannel}`),
        channelInfoTimeOut())

    function channel() {
      // saca el ultimo caracter de screen.classList
      ;(contChannel = screen.classList[0].substring(
        screen.classList[0].length - 1,
        screen.classList[0].length
      )),
        (screen.classList = [])
      {
      }
    }
  })
}
