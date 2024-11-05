function alterarStatus(id){

    let gameClicado = document.getElementById(`game-${id}`);
    let imagem = gameClicado.querySelector('.dashboard__item__img');
    let botaoJogo = gameClicado.querySelector('.dashboard__item__button');

    //quando eu clicar no jogo, o botão mude e a imagem também tanto pra devolver quanto para alugar.

    if (imagem.classList.contains('dashboard__item__img--rented')){

        imagem.classList.remove('dashboard__item__img--rented');
        botaoJogo.classList.remove('dashboard__item__button--return')
        botaoJogo.textContent = ' Alugar'
        
    } else {        
        
        botaoJogo.classList.remove('dashboard__item__button--return')
        imagem.classList.add('dashboard__item__img--rented');
        botaoJogo.classList.add('dashboard__item__button--return')
        botaoJogo.textContent = 'Devolver'
    }
}