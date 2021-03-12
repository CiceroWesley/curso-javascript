function tabuada() {
    let numero = Number(document.getElementById('num').value)
    let resultado = document.getElementById('p1')
    resultado.innerHTML  = `<h2>Tabuada de ${numero}</h2>`

   for(let i = 1; i <= 10; i++){
        resultado.innerHTML += `${numero} * ${i} = ${numero*i}<br/>`
   } 
 
}