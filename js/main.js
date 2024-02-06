const TEXT_MSG_TIME = 2500

// Initialize variables

// Get screen content id, and create his variables
let screen = document.getElementById("screen")
let screenHeader = document.getElementById("screenHeader")

// Create power flag
let powerOn = false

//Get power button id
const power = document.getElementById("power")

power.addEventListener("click", (evento) => {
  if (powerOn) {
    console.log("encendido")
    screen.classList = []
    //Set start channel
    screen.classList.add("channel0")
  }
  if (!powerOn) {
    screen.classList = []
    // Set black screen
    screen.classList.add("powerOff")
    // Clean classes and values
    cleanValues()
    console.log("apagado")
  }
})

//Set header content toggle function
function toggle() {
  let screenHeader = document.getElementById("screenHeader")
  powerOn = !powerOn
  screenHeader.hidden = !screenHeader.hidden
}
if (screenHeader.hidden) {
  console.log("apagado")
} else {
  console.log("encendido")
}

// Date & hour
setInterval(hora, 1000)

function hora() {
  const date = new Date().toLocaleDateString()
  let hour = new Date().getHours()
  let minutes = new Date().getMinutes()
  let seconds = new Date().getSeconds()
  const time = `${hour}:${minutes < 10 ? "0" : ""}${minutes}:${
    seconds < 10 ? "0" : ""
  }${seconds}`
  document.getElementById("hour").innerHTML = time
  document.getElementById("date").innerHTML = date
}

//Numbers button function
buttonNumbers()

function buttonNumbers() {
  const numbers = document.getElementsByClassName("numbers")

  let arrayNumbers = Array.from(numbers)

  arrayNumbers.map((item) => {
    item.addEventListener("click", (evento) => {
      // Power button validation with screenHeader id element
      if (!screenHeader.hidden) {
        screen.classList.remove(screen.classList[screen.classList.length - 1])
        screen.classList.add("channel" + evento.target.innerHTML)
        //Copy channel info to the id element
        document.getElementById("channelInfo").innerHTML =
          "channel " + evento.target.innerHTML
        channelInfoTimeOut()
      }
    })
  })
}
//Setting start volume level
let countVolume = 3
// Create v variable thats contain volume value displayed on screen
let v
volume()
const volumeIcon = document.getElementById("volumeIcon")

// Volume value time out on screen
function setVolumeIcon() {
  countVolume !== 0
    ? ((volumeIcon.innerHTML = v),
      setTimeout(() => {
        volumeIcon.innerHTML = ""
      }, TEXT_MSG_TIME))
    : (mute(), (toggleMute = true))
}

// Volume button function

function volume() {
  const volumeButton = document.getElementsByClassName("volume")

  volumeButton[0].addEventListener("click", (evento) => {
    if (!screenHeader.hidden) {
      if (evento.target.innerHTML === "V +") {
        //Turn up the volumen
        countVolume++
        v = ` 🔊⬆ ${countVolume}`
        //False state toggleMute flag
        toggleMute = false
      } else {
        // Turn down the volumen
        if (countVolume > 0) {
          countVolume--
          v = `🔊⬇ ${countVolume}`
        } else {
          // mute 🔇
          setVolumeIcon()
          return
        }
      }
      setVolumeIcon()
    }
  })
}
// Setting toggleMute flag and create memory level value
let toggleMute = false
let memoryVolume

// Mute function, set level volume = 0
function mute() {
  memoryVolume = countVolume
  countVolume = 0
  volumeIcon.innerHTML = "silencio 🔇 "
}

const muteButton = document.getElementById("mute")

setMuteButton()

// Mute button Function
function setMuteButton() {
  muteButton.addEventListener("click", () => {
    if (!screenHeader.hidden) {
      toggleMute = !toggleMute
      //Ask about the toggleMute flag state
      toggleMute
        ? mute()
        : //If volume level = 0, when press mute button the volume level = 1
          // If the volume level != 0, level volume set to the last saved value
          (!memoryVolume
            ? (countVolume = memoryVolume + 1)
            : (countVolume = memoryVolume),
          (v = ` 🔊 ${countVolume}`),
          setVolumeIcon())
    }
  })
}

//Counter channel
let channel
let countChannel = 0

channelButtons()

//Channel number time out on screen
function channelInfoTimeOut() {
  setTimeout(() => {
    document.getElementById("channelInfo").innerHTML = ""
  }, TEXT_MSG_TIME)
}

// Plus & minus channel buttons function
function channelButtons() {
  const channelButton = document.getElementsByClassName("channel")

  channelButton[0].addEventListener("click", (evento) => {
    if (!screenHeader.hidden) {
      //Question about which button has been pressed P+ or P-
      evento.target.innerHTML === "P +"
        ? // Channel up , increase channel counter and copy the channel class displayed on screen
          (channel(),
          countChannel++,
          screen.classList.add(`channel${countChannel}`),
          (document.getElementById(
            "channelInfo"
          ).innerHTML = `channel ${countChannel}`),
          channelInfoTimeOut())
        : // Channel Down, decrease channel counter and copy the channel class displayed on a screen
          (channel(),
          countChannel--,
          // Ask if channel counter =0 to avoid negative values
          countChannel < 0
            ? ((countChannel = 9),
              // Copy channel number displayed on a screen
              (document.getElementById(
                "channelInfo"
              ).innerHTML = `channel ${countChannel}`),
              screen.classList.add(`channel${countChannel}`))
            : screen.classList.add(`channel${countChannel}`),
          (document.getElementById(
            "channelInfo"
          ).innerHTML = `channel ${countChannel}`),
          channelInfoTimeOut())

      function channel() {
        // Remove the last character of the first class of screen id element
        ;(countChannel = screen.classList[0].substring(
          screen.classList[0].length - 1,
          screen.classList[0].length
        )),
          (screen.classList = [])
      }
    }
  })
}
// Delete all values displayed on screen
function cleanValues() {
  document.getElementById("channelInfo").innerHTML = ""
  volumeIcon.innerHTML = ""
  document.getElementById("hora").innerHTML = ""
  document.getElementById("fecha").innerHTML = ""
  countChannel = 0
}
