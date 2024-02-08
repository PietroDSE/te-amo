document.addEventListener("DOMContentLoaded", function() {
    let msg = document.querySelector(".Msg");
    let btn = document.querySelector("#btn");
    let userMessage = document.querySelector("#userMessage");
    btn.addEventListener("click", function() {
        btn.style.display = "none";
        userMessage.style.display = "none";
        msg.classList.add("show");
        // Array de mensagens
        let loveMessages = [
            "Você é meu sol em dias nublados.",
            "Cada segundo falando com você faz meu coração acelerar",
            "Meu coração bate mais forte sempre que eu penso em você.",
            "Você é a melhor coisa que já aconteceu na minha vida.",
            "Meu amor por você é infinito garota.",
            "Você deixa minha vida maravilhosa",
            "Eu sorrio sempre que eu converso com você.",
            "Amor, eu te amo muito, você é extremamente importante para mim.",
            "te amo demais e quase estraguei tudo por causa de uma vadia qualquer.",
            "Estou me sentindo horrível, não te mereço, te amo demais, você é tudo para mim.",
            "Você é minha rainha, tudo que quero é ter uma vida com você.",
            "Você é minha vida garota, MINHA VIDA",
            "Te Amo garota, só penso em você o dia todo",
            "Você é a mulher da minha vida, e eu quero fazer tudo com você até o fim",
            "Você é perfeita em todos os sentidos, te amo muito",
            "Eu nunca pedi uma namorada perfeita que nem você, por que eu achava que era impossível",
            "Se algum dia eu te perder eu nunca mais me perdoaria",
            "Te amo muito porra"
        ];
        // Embaralhando as mensagens
        loveMessages.sort(() => Math.random() - 0.5);
        // Exibindo as mensagens em sequência
        loveMessages.forEach(function(message, index) {
            setTimeout(function() {
                msg.classList.remove("show");
                setTimeout(function() {
                    msg.innerHTML = "<h1>Para o amor da minha vida❤️</h1><p>" + message + "</p>";
                    msg.classList.add("show");
                }, 500); // Tempo de espera para remover a classe "show"
            }, index * 3000); // 3 segundos de intervalo entre cada mensagem
        });
    });
});
