let modal = document.querySelector('.modal');
let inserirDiv = document.createElement('div');
let img = document.createElement('img')
let aDica = document.querySelector('.areaDica');
let dicas = document.querySelector('.dica');
let Apalavra = document.querySelector('.palavra');
let lUsadas = document.querySelector('.CampoLetrasUsadas')
let canvas = document.querySelector('canvas');




function ganhou(){
    aDica.style.display = 'none';
    dicas.style.display = 'none';
    canvas.style.display ='none'
    Apalavra.style.display = 'none'
    lUsadas.style.display = 'none'
    modal.classList.remove('modal');
    lUsadas.classList.remove('CampoLetrasUsadas');
    lUsadas.classList.add('removerCampoLetras')
    
    modal.classList.add('modalGanhou')
    inserirDiv.textContent = 'Parabéns!!'
    inserirDiv.classList.add('titulo')
    modal.appendChild(inserirDiv);
    img.setAttribute('src','./assets/imagens/medalha.png');
    modal.appendChild(img)


}

function perdeu(){
    aDica.style.display = 'none';
    dicas.style.display = 'none';
    canvas.style.display ='none'
    Apalavra.style.display = 'none'
    modal.classList.remove('modal');
    lUsadas.classList.remove('CampoLetrasUsadas');
    lUsadas.classList.add('removerCampoLetras')

    modal.classList.add('modalGanhou')
    inserirDiv.textContent = 'GAME ORVER'
    inserirDiv.classList.add('titulo')
    modal.appendChild(inserirDiv);
    img.setAttribute('src','./assets/imagens/morte.png');
    modal.appendChild(img)
}