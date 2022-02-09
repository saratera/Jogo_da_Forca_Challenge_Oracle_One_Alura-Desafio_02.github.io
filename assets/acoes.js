let btnAdicionar = document.querySelector('.adcPalavra');
let input1 = document.querySelector('#novaPalavra');
let input2 = document.querySelector('#novaDica');

btnAdicionar.addEventListener('click', ()=>{
    let inputValor1 = input1.value.toUpperCase();
    let inputValo2 = input2.value.toUpperCase();
    
    
    if(inputValor1.length > 0 && inputValo2.length > 3){
        input1.value = '';
        input2.value = ''
    }
    else{
        alert('dados incompletos')
    }
})

function esconderMenu(){
    let menu = document.querySelector('header');
    menu.style.display = 'none'
}

let btnReiniciarJogo = document.querySelector('#reiniciar');
btnReiniciarJogo.addEventListener('click', ()=>{
    location.reload()
})
