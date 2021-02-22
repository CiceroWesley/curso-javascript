function analisar(){
    let res = document.getElementById('p1')
    let data = new Date
    let dia = data.getDate()
    let mes = data.getMonth()
    let ano = data.getFullYear()
    let diasemana = data.getDay()
    let hora = data.getHours()
    let minuto = data.getMinutes()
    let segundo = data.getSeconds()
    let mesvet = ['Janeiro','Feveiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro']
    let diasemanavet = ['Domingo','Segunda','Terça','Quarta','Quinta','Sexta','Sábado']

    res.innerHTML = `<p>Dia <mark>${dia}</mark></p>`
    res.innerHTML += `<p>Mês: <mark>${mesvet[mes]}</mark></p>`
    res.innerHTML += `<p>Ano: <mark>${ano}</mark></p>`
    res.innerHTML += `<p>Dia da semana: <mark>${diasemanavet[diasemana]}</mark></p>`
    res.innerHTML += `<p>Hora: <mark>${hora}</mark></p>`
    res.innerHTML += `<p>Minuto: <mark>${minuto}</mark></p>`
    res.innerHTML += `<p>Segundo: <mark>${segundo}</mark></p>`



}