$(document).ready(function(){
   
    /*Slide botão nova imagem*/
    $('header button').click(function(){
        $('form').slideDown();
    })


    /*SlideUp botão cancelar*/
    $('#botao-cancelar').click(function(){
        $('form').slideUp();
    })


    $('form').on('submit', function(e) {
        e.preventDefault(); /*não limpar campos automaticamente*/
        
        /*Recuperando informação do form*/
        const enderecoNovaImagem = $('#endereco-imagem-nova').val();
        
        /*construindo o código dinâmico*/
        const novoItem = $('<li style="display: none"></li>');
        
        /*vamos agora escrever um código que insere informação entre os <li> </li> acima:
        apontamos ela através da função .appendTo(nomeDaConstanteDeDestino)*/
        $(`<img src="${enderecoNovaImagem}" />`).appendTo(novoItem);
        
        /* vamos inserir da mesma forma o link de acoragem*/
        $(`
            <div class="overlay-imagem-link">
                <a href="${enderecoNovaImagem}" target="_blank" title="Ver imagem">
                Ver imagem em tamanho real
                </a>
            </div>
        `).appendTo(novoItem);
        
        /* Agora o LI está preenchido com o código dinâmico */

        /* Vamos agora adicionar novoItem a tag <ul> </ul> do HTML */
        $(novoItem).appendTo('ul');
        
        /* Adicionando efeito de fadeIn (aparecer) para uma imagem nova 
        dentro do parenteses colocamos o tempo do efeito em milessegundos*/
        $(novoItem).fadeIn();

        /*limpar endereço depois de acidionar*/
        $('#endereco-imagem-nova').val("");

    })
})
