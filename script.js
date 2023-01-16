let controleDeClicks = 0
let controleDeImg = ''
let testando = 'n'
console.log(controleDeImg);


function NaCarta (elemento) {
    controleDeClicks++
    elemento.classList.add('gambiarra');
    elemento.classList.toggle('virar');
    let srcImg =document.querySelector('.gambiarra>.front').src.toString();
   
    if(controleDeImg === ''){
        controleDeImg = srcImg
    }else{
        if(controleDeImg === srcImg){
          testando='s'
          controleDeImg = ''
        }else{
            testando='n'
            controleDeImg = ''
        }
    }
    console.log(controleDeImg);
    console.log(testando);
    setTimeout(virar,270,elemento);  
}


function virar(elemento) {
    const back=document.querySelector('.gambiarra>.back');
    const front=document.querySelector('.gambiarra>.front');
    elemento.classList.remove('gambiarra');
    back.classList.toggle('hide');
    front.classList.toggle('hide');   
}

