function toggleMode() {
  const html = document.documentElement

  // if (html.classList.contains("light")) {
  //   html.classList.remove("light")
  // } else {
  //   html.classList.add("light")
  // }

  //a linha abaixo é equivalente ao comentado acima

  html.classList.toggle("light")

  // mudar imagem entre os temas
  //pega a tag img
  const img = document.querySelector("#profile img")
  //substitui a imagem
  if (html.classList.contains("light")) {
    // if no light mode mudar a imagem
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    img.setAttribute("src", "./assets/avatar.png")
  }
}
