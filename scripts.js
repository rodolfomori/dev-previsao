let chave = 'cebcd482eda57fa9a6714c1c2ba91885'

async function buscarCidade() {
  let dados = await fetch("https://api.openweathermap.org/data/2.5/weather?q=paris&appid=cebcd482eda57fa9a6714c1c2ba91885").then(resposta => resposta.json())

  // AWAIT = ESPERE
  // FETCH -> Ferramenta do JavaScript para acessar servidores
  // THEN -> ENTÃO
  // JSON -> JAVASCRIPT OBJECT NOTATION (O FORMATO QUE O JAVASCRIPT ENTENDE)

  console.log(dados)
}

function cliqueiNoBotao() {
  let cidade = document.querySelector('.input-cidade').value

  buscarCidade()
}
