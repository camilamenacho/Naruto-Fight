function Escolhaoponente() {
    while (oponente != 'a' || 'b') {
        var oponente = prompt(`Escolha seu Opoente!
        Digite a letra da opção desejada:
        
        A) Deidara
        B) Itachi`)
        
        if (oponente.toLowerCase() === 'a' ) {
            alert('Você lutará com o Deidara')
            location.href = '../html/sasuke-deidara1.html'
            break
        } else if (oponente.toLowerCase() === 'b') {
            alert('Você lutará com o Itachi') 
            location.href = '../html/sasuke-itachi1.html' 
            break      
        } else {
            alert('Resposta inválida. Tente novamente')
        }
    }
}