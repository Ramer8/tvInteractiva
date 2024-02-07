const TEXT_MSG_TIME = 2500
const INFO_CHANNEL_TIME = 3000

// Initialize variables

// Get screen content id, and create his variables
let screen = document.getElementById("screen")
let screenHeader = document.getElementById("screenHeader")
let led = document.getElementById("led")
// Create power flag
let powerOn = false
// Get content id of value of channel
const channelValue = document.getElementById("channelInfo")

//Get power button id
const power = document.getElementById("power")

power.addEventListener("click", (evento) => {
  if (powerOn) {
    console.log("encendido")
    screen.classList = []
    //Set start channel
    screen.classList.add("channel0")
    led.classList.remove(led.classList[led.classList.length - 1])
    led.classList.add("green")
    //led[0].classList
  }
  if (!powerOn) {
    screen.classList = []
    // Set black screen
    screen.classList.add("powerOff")
    // Clean classes and values
    led.classList.remove(led.classList[led.classList.length - 1])
    led.classList.add("led")
    cleanValues()
    console.log("apagado")
  }
})

//Set header content toggle function
function toggle() {
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
  if (!screenHeader.hidden) {
    const date = new Date().toLocaleDateString()
    let hour = new Date().getHours()
    let minutes = new Date().getMinutes()
    let seconds = new Date().getSeconds()
    const time = `${hour}:${minutes < 10 ? "0" : ""}${minutes}:${
      seconds < 10 ? "0" : ""
    }${seconds}`
    document.getElementById("hour").innerHTML = time
    document.getElementById("date").innerHTML = date
  } else {
    clearInterval(hora, 1000)
  }
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
        channelValue.innerHTML = "channel " + evento.target.innerHTML
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
    channelValue.innerHTML = ""
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
  channelValue.innerHTML = ""
  document.getElementById("hour").innerHTML = ""
  document.getElementById("date").innerHTML = ""
}
// Source button function
let sourceButton = document.getElementById("source")

// Hdmi count number
let count = 0
sourceButton.addEventListener("click", (evento) => {
  if (!screenHeader.hidden) {
    count++
    if (count < 6) {
      screen.classList.remove(screen.classList[screen.classList.length - 1])
      screen.classList.add("source" + count)
      channelValue.innerHTML = `hdmi ${count}`
      // Function timer
      channelInfoTimeOut()
    } else {
      count = 1
      screen.classList.remove(screen.classList[screen.classList.length - 1])
      screen.classList.add("source1")
      channelValue.innerHTML = `hdmi ${count}`
      channelInfoTimeOut()
    }
  }
})

//Channel List
const channelList = [
  { Channel: 1, nombre: "ESPN" },
  { Channel: 2, nombre: "EngineTV" },
  { Channel: 3, nombre: "HBOmax" },
  { Channel: 4, nombre: "Fox" },
  { Channel: 5, nombre: "YoutubeTV" },
  { Channel: 6, nombre: "Mtv" },
  { Channel: 7, nombre: "Paramount" },
  { Channel: 8, nombre: "Disney+" },
  { Channel: 9, nombre: "AppleTV" },
  { Channel: 10, nombre: "WarnerTV" },
]

//Channel List function to displayed on a screen
function displayArrayOfObjects(arr, elementId) {
  const infoListChannel = document.getElementById(elementId)
  let html = "<ul>"
  arr.forEach((obj) => {
    html += "<li>"
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        html += `<strong>${key}:</strong> ${obj[key]} | `
      }
    }
    html = html.slice(0, -3)
    html += "</li>"
  })
  html += "</ul>"
  infoListChannel.innerHTML = html
}

const infoListChannel = document.getElementById("infoListChannel")
let infoButton = document.getElementById("infoButton")

infoButton.addEventListener("click", (evento) => {
  if (!screenHeader.hidden) {
    displayArrayOfObjects(channelList, "infoListChannel")
    //Timer out Channel List
    setTimeout(() => {
      infoListChannel.innerHTML = ""
    }, INFO_CHANNEL_TIME)
  }
})
