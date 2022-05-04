function Escolhapersonagem(personagem) {
    while (personagem != 'a' || 'b' || 'c') {
         var personagem = prompt(`Qual ninja você deseja escolher?
        Digite a letra da opção desejada
        
        A) Naruto
        B) Kakashi
        C) Sasuke`)

        
        
        if (personagem.toLowerCase() === 'a') {
            alert('Você decidiu ser o Naruto')
            location.href = './html/oponentesnaruto.html'
            break
        } else if (personagem.toLowerCase() === 'b') {
            alert('Você decidiu ser o Kakashi') 
            location.href = './html/oponenteskakashi.html' 
            break      
        } else if (personagem.toLowerCase() === 'c') {
            alert('Você decidiu ser o Sasuke')
            location.href = './html/oponentessasuke.html'
            break
        } else {
            alert('Resposta inválida. Tente novamente')
        }
    }
}