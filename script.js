let numeroSecreto = Math.floor(Math.random() * 10) + 1;
let tentativas = 0;

function verificar() {
    const palpiteInput = document.getElementById("palpite");
    const mensagem = document.getElementById("mensagem");
    
    // Converte o valor para número
    const palpite = parseInt(palpiteInput.value);
    
    tentativas++;

    if (isNaN(palpite)) {
        mensagem.textContent = "Digite um número válido!";
        mensagem.style.color = "red";
    } 
    else if (palpite === numeroSecreto) {
        // Usei o sinal de + para evitar o erro das crases que o VS Code acusou
        mensagem.textContent = "Parabéns! Você acertou em " + tentativas + " tentativas!";
        mensagem.style.color = "green";
        
        mensagem.classList.add("animacao");
        setTimeout(() => {
            mensagem.classList.remove("animacao");
        }, 800);
    } 
    else if (palpite < numeroSecreto) {
        mensagem.textContent = "Tente um número maior ⬆️";
        mensagem.style.color = "#b555d9";
    } 
    else {
        mensagem.textContent = "Tente um número menor ⬇️";
        mensagem.style.color = "#b555d9";
    }
}