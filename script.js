// 1. Seleciona todos os botões de perfil
const botoesPerfil = document.querySelectorAll('#opcoes-perfil button');

// 2. Seleciona todos os cards de conteúdo
const cardsConteudo = document.querySelectorAll('#area-de-conteudo .card');

// 3. Função para filtrar o conteúdo
function filtrarConteudo(perfilSelecionado) {
    // Itera sobre todos os cards de conteúdo
    cardsConteudo.forEach(card => {
        // Se o card contém a classe do perfil selecionado
        if (card.classList.contains(perfilSelecionado)) {
            // Mostra o card
            card.style.display = 'block'; 
        } else {
            // Esconde os outros cards
            card.style.display = 'none';
        }
    });
}

// 4. Adiciona um "ouvinte" de clique a cada botão
botoesPerfil.forEach(botao => {
    botao.addEventListener('click', (evento) => {
        // Pega o valor da classe a ser filtrada do atributo 'data-perfil' do botão
        const perfil = evento.target.dataset.perfil;
        
        // Chama a função de filtragem
        filtrarConteudo(perfil);
    });
});

// 5. Opcional: Esconde todo o conteúdo ao carregar a página
// para que o usuário precise selecionar um filtro antes de ver as dicas
window.onload = () => {
    cardsConteudo.forEach(card => {
        card.style.display = 'none';
    });
};