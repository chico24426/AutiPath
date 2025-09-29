// O código deve estar no arquivo 'script.js'

// 1. Seleciona os elementos-chave (Botões e Cards)
const botoesPerfil = document.querySelectorAll('#opcoes-perfil button');
const cardsConteudo = document.querySelectorAll('#area-de-conteudo .card');

// 2. Função principal para aplicar o filtro
function filtrarConteudo(perfilSelecionado) {
    cardsConteudo.forEach(card => {
        // Se o card contém a classe do perfil selecionado (ex: nivel-3-extenso)
        if (card.classList.contains(perfilSelecionado)) {
            card.style.display = 'block'; // MOSTRA
        } else {
            card.style.display = 'none'; // ESCONDE
        }
    });
}

// 3. Adiciona um "ouvinte" de clique a CADA botão
botoesPerfil.forEach(botao => {
    botao.addEventListener('click', (evento) => {
        // Pega o valor da classe a ser filtrada (definido no HTML com data-perfil)
        const perfil = evento.target.dataset.perfil;
        
        // Remove a classe 'ativo' de todos os botões e adiciona ao clicado (melhoria visual)
        botoesPerfil.forEach(b => b.classList.remove('ativo'));
        evento.target.classList.add('ativo');

        // Chama a função de filtragem
        filtrarConteudo(perfil);
    });
});

// 4. Ação no carregamento: Esconde todo o conteúdo no início
window.onload = () => {
    cardsConteudo.forEach(card => {
        card.style.display = 'none';
    });
};
