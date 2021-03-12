function fatorial() {
     let numero = Number(document.getElementById('num').value)
     let resultado = document.getElementById('p1')
     resultado.innerHTML += `<h2>Calculando ${numero}!</h2>`

     let fat = 1

     for(numero ;numero >=1 ;numero--){
          if(numero == 1){
               resultado.innerHTML += `1 = <strong>${fat}</strong>`
          } else{
               resultado.innerHTML += `${numero} x `
          }
          fat *= numero

     }
}