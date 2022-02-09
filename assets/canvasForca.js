let quadro =  document.querySelector('canvas');
let pincel = quadro.getContext('2d');

function forca(){
    pincel.fillStyle = 'black'
    pincel.fillRect(10,20,20,350);
   
    
}

function partedecima(){
    pincel.fillRect(10,20,200,10)
}
function corda(){
    pincel.fillStyle = 'brown'
    pincel.fillRect(180,20,10,30)
}
function laco(){
    pincel.lineWidth = 2
    pincel.beginPath()
    pincel.arc(185,61,12,0,Math.PI * 2)
    pincel.stroke()
    
}
function corpo(){
    pincel.fillStyle = 'black'
    pincel.fillRect(183,75,5,40);
}
function bracoDireito(){
    pincel.moveTo(183, 74);
    pincel.lineTo(150, 90);
    pincel.stroke();
}
function bracoEsquerdo(){
    pincel.moveTo(185, 73);
    pincel.lineTo(220, 90);
    pincel.stroke();
}
function pernaDireita(){
    pincel.moveTo(183, 115);
    pincel.lineTo(160, 140);
    pincel.stroke();
}
function pernaEsquerda(){
    pincel.moveTo(188, 115);
    pincel.lineTo(220, 140);
    pincel.stroke();
}


/*forca()
partedecima()
corda()
laco()
corpo()
bracoDireito()
bracoEsquerdo()
pernaDireita()
pernaEsquerda()
rosto()*/