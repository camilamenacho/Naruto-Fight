function Escolhaoponente() {
    while (oponente != 'a' || 'b') {
        var oponente = prompt(`Escolha seu Opoente!
        Digite a letra da opção desejada:
        
        A) Pain
        B) Orochimaru`)
        
        if (oponente.toLowerCase() === 'a' ) {
            alert('Você lutará com o Pain')
            location.href = '../html/naruto-pain1.html'
            break
        } else if (oponente.toLowerCase() === 'b') {
            alert('Você lutará com o Orochimaru') 
            location.href = '../html/naruto-orochimaru1.html'
            break      
        } else {
            alert('Resposta inválida. Tente novamente')
        }
    }
}