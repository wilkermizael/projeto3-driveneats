function selecionarPrato(param){
    const divJaSelecionada = document.querySelector('.selecionado');
    if(divJaSelecionada !== null){
        divJaSelecionada.classList.remove('selecionado');
    }
    
    const minhaDiv = document.querySelector(param);
    minhaDiv.classList.add('selecionado');
}

function selecionarBebida(param){
    const divJaSelecionada = document.querySelector('.selecionado');
    if(divJaSelecionada !== null){
        divJaSelecionada.classList.remove('selecionado');
    }
    
    const minhaDiv = document.querySelector(param);
    minhaDiv.classList.add('selecionado');
}