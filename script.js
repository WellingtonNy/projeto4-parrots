let numeroDeCartas= 0;
let controleDeClicks = 0;
let controleDeClicksCertos=0;
let controleDeImg = '';
let classeControle1;
let classeControle2;
let back;
let front;
let back2;
let front2;
let controleWhile=0;


const dataParrot= ["./src/unicornparrot.gif",
"./src/revertitparrot.gif",
"./src/tripletsparrot.gif",
"./src/fiestaparrot.gif",
"./src/metalparrot.gif",
"./src/bobrossparrot.gif",
"./src/explodyparrot.gif"];

let arrayParrot=[];

const tela = document.querySelector('.cardBoard');


    while (controleWhile===0) {
    numeroDeCartas=prompt('Com quantas cartas deseja jogar? (Digite um numero PAR de 4 a 14)')
    if (numeroDeCartas>=4 && numeroDeCartas<=14 && numeroDeCartas%2==0) {
        controleWhile=1
    }
}

function exibir() {
    
}












function NaCarta (elemento) {
    controleDeClicks++;
    elemento.classList.add('gambiarra');
    elemento.classList.toggle('virar');
    let srcImg =document.querySelector('.gambiarra>.front').src.toString();
    setTimeout(virar,270,elemento);  
   
    if(controleDeImg === ''){
        controleDeImg = srcImg;
        elemento.classList.add('controle1');
        elemento.classList.add('desabilitar');
        classeControle1=document.querySelector('.controle1');
        back2 = back;
        front2 = front;
    }else{
        if(controleDeImg === srcImg){
          elemento.classList.add('controle2');
          elemento.classList.add('desabilitar');
          classeControle2=document.querySelector('.controle2');
          classeControle1.classList.remove('controle1');
          classeControle2.classList.remove('controle2');
          controleDeImg = '';
          controleDeClicksCertos++;
          console.log(controleDeClicksCertos);
        }else{
            elemento.classList.add('controle2');
            classeControle2 =document.querySelector('.controle2')
            classeControle1.classList.remove('desabilitar');
            classeControle1.classList.remove('controle1');
            classeControle2.classList.remove('desabilitar');
            classeControle2.classList.remove('controle2');
            tela.classList.add('desabilitar')
            controleDeImg = '';
            back2 = back;
            front2 = front;
            setTimeout(desvirar,1000);
        };
    };
};

function virar(elemento) {
    back=document.querySelector('.gambiarra>.back');
    front=document.querySelector('.gambiarra>.front');
    back.classList.add('hide');
    front.classList.remove('hide');   
    elemento.classList.remove('gambiarra');
};

function desvirar() {
    setTimeout(desvirarTempo,270);
    classeControle1.classList.toggle('virar');
    classeControle2.classList.toggle('virar');
};

function desvirarTempo() {
    back.classList.remove('hide');
    front.classList.add('hide');
    back2.classList.remove('hide');
    front2.classList.add('hide');
    tela.classList.remove('desabilitar');
};