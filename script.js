
const btn = false;

function selecionarPrato(prato){
    const divJaSelecionada = document.querySelector('.prato .selecionado');
    if(divJaSelecionada !== null){
        divJaSelecionada.classList.remove('selecionado');
      
    }
        
    const minhaDiv = document.querySelector(prato);
    minhaDiv.classList.add('selecionado');


}

function selecionarBebida(bebida){
    const divJa = document.querySelector('.bebida .selecionado');
    if(divJa !== null){
        divJa.classList.remove('selecionado');
    }
    
    const minhaD = document.querySelector(bebida);
    minhaD.classList.add('selecionado');

    
}

function selecionarSobremesa(sobremesa){
    const divSobremesa = document.querySelector('.sobremesa .selecionado');
    if(divSobremesa !== null){
        divSobremesa.classList.remove('selecionado');
    }
    
    const minhaSobr = document.querySelector(sobremesa);
    minhaSobr.classList.add('selecionado');

    const cont = document.querySelector('.selecionado');
    
}

