var idade = 6
if (idade < 16){
    console.log('Menor de idade')
} else{
    if (idade < 18 || idade > 65){
        console.log('Facultativo')
    } else {
        console.log('voto obrigatorio')
    }
}