


function selecionarPrato(prato, p1check){
    const divJaSelecionada = document.querySelector('.prato .selecionado');
    const icone= document.querySelector('.prato .check');
   
    
    if(divJaSelecionada !== null){
        divJaSelecionada.classList.remove('selecionado');
        
    }
        
    const minhaDiv = document.querySelector(prato);
    minhaDiv.classList.add('selecionado');
   

    if( icone !== null){
        icone.classList.remove('check')
    }

    const checkmark = document.querySelector(p1check);
    checkmark.classList.add('check');
}

function selecionarBebida(bebida, p2check){
    const divJa = document.querySelector('.bebida .selecionado');
    const iconeBebida= document.querySelector('.bebida .check');

    if(divJa !== null){
        divJa.classList.remove('selecionado');
    }
    
    const minhaD = document.querySelector(bebida);
    minhaD.classList.add('selecionado');

    if( iconeBebida !== null){
        iconeBebida.classList.remove('check')
    }

    const checkmarkBebida = document.querySelector(p2check);
    checkmarkBebida.classList.add('check');

    
}

function selecionarSobremesa(sobremesa, p3check){
    const divSobremesa = document.querySelector('.sobremesa .selecionado');
    const iconPudim = document.querySelector('.sobremesa .check');

    if(divSobremesa !== null){
        divSobremesa.classList.remove('selecionado');
    }
    
    const minhaSobr = document.querySelector(sobremesa);
    minhaSobr.classList.add('selecionado');

    if( iconPudim !== null){
        iconPudim.classList.remove('check');
    }

    const checkmarkPudim = document.querySelector(p3check);
    checkmarkPudim.classList.add('check');
    
}

