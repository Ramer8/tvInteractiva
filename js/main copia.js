const cuadrados = document.getElementsByClassName("cuadrado")

const arrayCuadrados = Array.from(cuadrados)
const screen = document.getElementById("frame")

console.log(screen)
// console.log(arrayCuadrados)

// for (let index = 0; index < cuadrados.length; index++) {
//   cuadrados[index].addEventListener("click", (e) => {
//     // console.log("hola, me has clickeado")
//     console.log(e.target.id)
//     document.getElementById(e.target.id).classList.add("selecionado")
//   })
// }

// arrayCuadrados.map((cuadrito, indice) => {
//   cuadrito.addEventListener("click", (e) => {
//     console.log("hola lo clickeaste")
//     document
//       .getElementById(e.target.id)
//       .classList.add("seleccionado" + e.target.id.slice(-1))
//     console.log(arrayCuadrados)
//   })
// })

arrayCuadrados.map((cuadrito, indice) => {
  cuadrito.addEventListener("click", (e) => {
    screen.classList.remove(screen.classList[screen.classList.length - 1])
    screen.classList.add(e.target.id)
    // console.log(screen.classList)
    console.log("hola lo clickeaste")

    // document.getElementById(e.target.id)
    //   .classList.add("seleccionado" + e.target.id.slice(-1))
    // console.log(arrayCuadrados)
  })
})

// let prueba = document
// cuadrados.addEventListener("click", () => {
//   console.log("hola, me has clickeado")
// })
