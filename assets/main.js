let aleatorio = Math.floor(Math.random() * palavras.length)
console.log(aleatorio);
var separarPalavra = palavras[aleatorio].palavra.split(''); 
var dica = palavras[aleatorio].dica;
let areaDica = document.querySelector('.dica');
areaDica.textContent = dica

var elementBody = document.body;


let btnIniciarJogo = document.querySelector('#iniciarJogo');
console.log(btnIniciarJogo);
function jogar(){
    btnIniciarJogo.addEventListener('click',()=>{
        esconderMenu()
       let secao = document.querySelector('section');
       secao.style.display = 'block'
       var eventoTeclado = elementBody.addEventListener('keydown', teclaDigitada);
       
    })
    
}

jogar()

function teclaDigitada(event){
    let  tecla = event.key.toUpperCase();
    conferirPalavra(tecla);
    contagemDeErro(tecla)
}

function palavraSorteada(){
    separarPalavra

    for(let i= 0; i< separarPalavra.length; i++){     
        
        let campoPalavra = document.querySelector('.palavra');
        let criarDiv = document.createElement('div');
        let adcClasse = criarDiv.classList.add('campoLetra');
        campoPalavra.appendChild(criarDiv)
    } 
    
    
}
let letrasCertas = []     

function conferirPalavra(tecla){
    if(letrasCertas.indexOf(tecla) == -1){
        for (let index = 0; index < separarPalavra.length; index++) {
        if( tecla == separarPalavra[index] ){
            
            var campoResposta = document.querySelectorAll('.campoLetra');
            var preencherResposta = campoResposta[index].textContent = separarPalavra[index]
            letrasCertas.push(tecla)
            
            
            }
                                        
        }
        if(letrasCertas.length == separarPalavra.length && contador <= 9){
            ganhou()
            elementBody.removeEventListener('keydown',teclaDigitada)
        }
    }
}

let contador = 0
let letrasErradas = []



function contagemDeErro(tecla){
    
    if(separarPalavra.indexOf(tecla) == -1 && letrasErradas.indexOf(tecla) == -1){
        contador++
        console.log(contador);       
        letrasErradas.push(tecla)
        
        let letrasUsadas = document.querySelector('.CampoLetrasUsadas')
        let criarNovaDiv = document.createElement('div');
        let novaClasse = criarNovaDiv.classList.add('letrasUsadas');
        letrasUsadas.appendChild(criarNovaDiv).textContent = tecla
        console.log(letrasErradas);
        
    }
    
    if(contador == 1)forca()   
    
    if(contador == 2)partedecima()        
    
    if(contador == 3)corda()        
    
    if(contador == 4)laco()
    
    if(contador == 5)corpo()
    
    if(contador == 6)bracoDireito()
    
    if(contador == 7)bracoEsquerdo()
    
    if(contador == 8)pernaDireita()
    
    if(contador == 9)pernaEsquerda()

    if(contador == 10){
        perdeu()
        elementBody.removeEventListener('keydown',teclaDigitada)
    }
}

palavraSorteada()


