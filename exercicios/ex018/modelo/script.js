let valores = []
let numero = document.getElementById('num1')
let tabela = document.getElementById('sel')
let resp = document.getElementById('res')

function ehelemento(n){
  if(Number(n.value) > 0 && Number(n.value) <101){
    return true
  } else {
    return false
  }
}
   
function inserido(n, lista){
  if(lista.indexOf(Number(n.value)) != -1){
    return true
  } else{
    return false
  }
}

function adicionar(){
    if(ehelemento(numero) && !inserido(numero,valores)){
        valores.push(Number(numero.value))
        let elemento = document.createElement('option')
        elemento.text = `elemento ${numero.value} adicionado`
        tabela.appendChild(elemento)
        resp.innerHTML = ''
      } else {
        alert('elemento inválido ou já inserido')
      }
      numero.value = '' //apagar o valor digitado
      numero.focus()
}
    
    
  
function fim(){
    if(valores.length == 0){
        alert('Nenhum valor foi inserido')
    } else{
        resp.innerHTML = ''
        resp.innerHTML += `<p>${valores.length} valores foram inseridos</p>`
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0

        for(let i in valores){
            soma+= valores[i]
            if(valores[i] > maior){
                maior = valores[i]
            }
            if(valores[i] < menor){
                menor = valores[i]
            }
        }
        resp.innerHTML += `<p>Maior valor ${maior} , menor valor ${menor} </p>`
        resp.innerHTML += `<p>Soma de todos os valores ${soma} </p>`
        resp.innerHTML += `<p>Media dos valores digitados ${soma/(valores.length)}</p>`

    }
}
