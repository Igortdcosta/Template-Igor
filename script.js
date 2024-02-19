function toggleMode() {
  const html = document.documentElement
  /*
  if (html.classList.contains("light")) {
    html.classList.remove("light")
  } else {
    html.classList.add("light")
  } */

  // O código comentado acima pode ser todo substituível por:
  html.classList.toggle("light") // ele já cria toda verificação.

  // Para trocar a imagem, basta seguir o código abaixo:

  // Pegar a tag img
  /*
        const img = document.querySelector("#profile img")
      */

  // substituir a imagem:
  // se tiver lightmode, adicionar imagem Light
  //if (html.classList.contains("light")) {img.setAttribute('src', 'ADICIONAR O ENDEREÇO DO NOVO VALOR, OU SEJA, A LOCALIZAÇÃO DA NOVA IMAGEM') }
  // se tiver sem lightmode, manter a imagem normal
  //else { img.setAttribute('src', 'DEIXAR O PADRÃO') }
}
