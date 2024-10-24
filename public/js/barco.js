      // Função para exibir e animar o barco
function exibirEAnimarBarco() {
    // Substitua 'caminho_do_seu_barco' pelo caminho real da imagem do barco
    var barcoSrc = 'images/ship.webp';

    // Crie um elemento de imagem para o barco
    var barco = $('<img>').attr('src', barcoSrc).css({
        width: '100px', // Ajuste conforme necessário
        height: '100px', // Ajuste conforme necessário
        position: 'fixed',
        bottom: '0',
        left: '100%', // Começa fora da tela à esquerda
    });

    // Adicione o barco ao corpo do documento
    $('body').append(barco);

    // Anima o barco para se mover da esquerda para a direita
    barco.animate(
        { left: '-100%', opacity: 0 }, // Move para a direita e desaparece
        {
            duration: 25000, // Duração da animação em milissegundos
            easing: 'linear', // Tipo de animação linear (sem aceleração)
            complete: function () {
                // Remove o elemento do barco após a animação
                $(this).remove();
            },
        }
    );
}

// Adicione um ouvinte de evento para detectar a combinação de teclas Ctrl+Shift+K
$(document).keydown(function (e) {
    if (e.ctrlKey && e.shiftKey && e.key === 'L') {
        // Quando a combinação é detectada, exiba e anime o barco
        exibirEAnimarBarco();
    }
});
