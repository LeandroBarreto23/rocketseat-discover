function toggleMode() {
  const html = document.documentElement
  html.classList.toggle('light')
  
  // pegar a tag img
  const img = document.querySelector("#profile img")

  // substituir img
  if(html.classList.contains('light')) {
    // se tiver light mode, adicionar img light
    img.setAttribute('src', './image/avatar-light.png')
  } else {
    // se tiver sem light mode, manter a normal
    img.setAttribute('src', './image/avatar.png')
  }
}