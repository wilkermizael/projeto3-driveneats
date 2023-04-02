let selectPrato = '';
let selectBebida = '';
let selectSobremesa = '';
let meuPrato = " ";
let minhaBebida ='';
let minhaSobremesa = '';

let valorPrato ='';
let valorBebida ='';
let valorSobremesa ='';
let total = 0;

let valorPratoFixed = 0;
let valorBebidaFixed = 0;
let valorSobremesaixed = 0;

let mensagem='';
let textoFinal ='';

function habilitarBotao(){
   
   if(selectPrato !== '' && selectBebida !== '' && selectSobremesa !== ''){
        const botao = document.querySelector('.botao-falso');
        botao.classList.add('habilitar');
        const fecharPedido = document.querySelector('.botao-falso');
        fecharPedido.innerHTML = 'Fechar Pedido';
        
        document.querySelector('.botao-falso').removeAttribute('disabled');
        /*calcular();*/
   }
   
}

function selecionarPrato(prato, p1check){
    
   selectPrato =document.querySelector(prato);
   
   

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

    habilitarBotao();
}

function selecionarBebida(bebida, p2check){
    selectBebida =document.querySelector(bebida);
    
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

    habilitarBotao();
}

function selecionarSobremesa(sobremesa, p3check){
    selectSobremesa =document.querySelector(sobremesa);
    
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

    habilitarBotao();
    
}

function calcular(){
    
     // Selecionando o Prato escolhido e seu valor
    
    let selectPrato1 = document.querySelector('.prato1');
    let selectPrato2 = document.querySelector('.prato2');
    let selectPrato3 = document.querySelector('.prato3');
    let selectPrato4 = document.querySelector('.prato4');
    
    
   
    if(selectPrato === selectPrato1){
        meuPrato= document.querySelector('.prato1 h4').innerHTML;
        valorPrato =document.querySelector('.prato1 h5').innerHTML;
        /*console.log(meuPrato);
        console.log(valorPrato);*/
    }

    if(selectPrato === selectPrato2){
        meuPrato= document.querySelector('.prato2 h4').innerHTML;
        valorPrato =document.querySelector('.prato2 h5').innerHTML;
       /* console.log(meuPrato);
        console.log(valorPrato);*/
    }

    if(selectPrato === selectPrato3){
        meuPrato= document.querySelector('.prato3 h4').innerHTML;
        valorPrato =document.querySelector('.prato3 h5').innerHTML;
        /*console.log(meuPrato);
        console.log(valorPrato);*/
    }

    if(selectPrato === selectPrato4){
        meuPrato= document.querySelector('.prato4 h4').innerHTML;
        valorPrato =document.querySelector('.prato4 h5').innerHTML;
       /* console.log(meuPrato);
        console.log(valorPrato);*/
    }

    // Escolhendo a Bebida

    let selectBebida1 = document.querySelector('.bebida1');
    let selectBebida2 = document.querySelector('.bebida2');
    let selectBebida3 = document.querySelector('.bebida3');
    let selectBebida4 = document.querySelector('.bebida4');

    if(selectBebida === selectBebida1){
        minhaBebida= document.querySelector('.bebida1 h4').innerHTML;
        valorBebida= document.querySelector('.bebida1 h5').innerHTML;
        /*console.log(minhaBebida);
        console.log(valorBebida);*/
    }

    if(selectBebida === selectBebida2){
        minhaBebida= document.querySelector('.bebida2 h4').innerHTML;
        valorBebida= document.querySelector('.bebida2 h5').innerHTML;
        /*console.log(minhaBebida);
        console.log(valorBebida);*/
    }

    if(selectBebida === selectBebida3){
        minhaBebida= document.querySelector('.bebida3 h4').innerHTML;
        valorBebida= document.querySelector('.bebida3 h5').innerHTML;
        /*console.log(minhaBebida);
        console.log(valorBebida);*/
    }

    if(selectBebida === selectBebida4){
        minhaBebida= document.querySelector('.bebida4 h4').innerHTML;
        valorBebida= document.querySelector('.bebida4 h5').innerHTML;
        /*console.log(minhaBebida);
        console.log(valorBebida);*/
    }

    // Escolhendo a Bebida

    let selectSobremesa1 = document.querySelector('.sobremesa1');
    let selectSobremesa2 = document.querySelector('.sobremesa2');
    let selectSobremesa3 = document.querySelector('.sobremesa3');
    let selectSobremesa4 = document.querySelector('.sobremesa4');

    if(selectSobremesa === selectSobremesa1){
        minhaSobremesa= document.querySelector('.sobremesa1 h4').innerHTML;
        valorSobremesa= document.querySelector('.sobremesa1 h5').innerHTML;
        /*console.log(minhaSobremesa);
        console.log(valorSobremesa);*/
    }

    if(selectSobremesa === selectSobremesa2){
        minhaSobremesa= document.querySelector('.sobremesa2 h4').innerHTML;
        valorSobremesa= document.querySelector('.sobremesa2 h5').innerHTML;
        /*console.log(minhaSobremesa);
        console.log(valorSobremesa);*/
    }

    if(selectSobremesa === selectSobremesa3){
        minhaSobremesa= document.querySelector('.sobremesa3 h4').innerHTML;
        valorSobremesa= document.querySelector('.sobremesa3 h5').innerHTML;
       /* console.log(minhaSobremesa);
        console.log(valorSobremesa);*/
    }

    if(selectSobremesa === selectSobremesa4){
        minhaSobremesa= document.querySelector('.sobremesa4 h4').innerHTML;
        valorSobremesa= document.querySelector('.sobremesa4 h5').innerHTML;
        /*console.log(minhaSobremesa);
        console.log(valorSobremesa);*/
    }

    //Transformando as String em Numbers
    valorPratoFixed= Number(valorPrato);
    valorBebidaFixed = Number(valorBebida);
    valorSobremesaFixed = Number(valorSobremesa);
    total =  valorPratoFixed + valorBebidaFixed + valorSobremesaFixed;
    total = total.toFixed(2)
    

    // Mensagem a ser enviada para o Usuario
    
   const textoPrato = document.querySelector('.mensagemWhats .tprato');
    textoPrato.innerHTML= meuPrato;

    const textoBebida = document.querySelector('.mensagemWhats .tbebida')
    textoBebida.innerHTML = minhaBebida;

    const textoSobremesa = document.querySelector('.mensagemWhats .tsobremesa')
    textoSobremesa.innerHTML = minhaSobremesa;

    const textoTotal = document.querySelector('.mensagemWhats .ttotal')
    textoTotal.innerHTML = total;

    /*mensagem = document.querySelector('.mensagemWhats').innerHTML;*/
    
    let text=(`Olá, gostaria de fazer o seu pedido:
        - Prato:${meuPrato}
        - Bebida:${minhaBebida}
        - Sobremesa:${minhaSobremesa}
        - Total:${total}`)
        console.log(text);
    
    textoFinal = encodeURIComponent(text);

    
    /*console.log(`https://wa.me/55991986103?text=${textoFinal}`);*/

    
    window.location.href = (`https://wa.me/55991986103?text=${textoFinal}`);

    
}

     

