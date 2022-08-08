let textInput = document.getElementById('text-input');
let textoExibido = document.getElementById('meme-text');
let memeContainer = document.getElementById('meme-image-container');
let memeInput = document.getElementById('meme-insert');

//Exibindo imagem carregada
let memeImage = document.createElement('img')
memeImage.id = 'meme-image'
memeInput.addEventListener('change', function (evento) {
    //O código utilizado para carregar o arquivo no meme-image-container foi refatorado conforme conteúdo deste site: https://stackoverflow.com/questions/33920409/how-to-get-local-filename-using-url-createobjecturl
    let src = URL.createObjectURL(evento.target.files[0]);
    memeImage.src = src;
    memeContainer.appendChild(memeImage);
});

//Inserindo texto do input no container do meme
function exibirTextoMeme () {
    let textoMeme = textInput.value;
    textoExibido.innerHTML = textoMeme;   
}
textInput.addEventListener('keyup', exibirTextoMeme);

//Requisito 6 - Crie três botões que alterem as cores da borda dos memes
let btnContainer = document.getElementById('btn-container');
let btnFire = document.getElementById('fire');
let btnWater = document.getElementById('water');
let btnEarth = document.getElementById('earth');

btnFire.addEventListener('click', function () {
    memeContainer.style.border = '3px dashed rgb(255, 0, 0)';    
});

btnWater.addEventListener('click', function () {
    memeContainer.style.border = '5px double rgb(0, 0, 255)';    
});

btnEarth.addEventListener('click', function () {
    memeContainer.style.border = '6px groove rgb(0, 128, 0)';    
});

//Requisito 7 - Crie um conjunto de quatro imagens pré prontas que permita que a pessoa usuária possa escolher.
let imgs = document.getElementById('imgs-container');

//Com o código abaixo todas as imagens funcionam com apenas uma função
// imgs.addEventListener('click', function (event) {
//     let memePronto = event.target;
//     let source = memePronto.src;
//     memeImage.src = source;
//     memeContainer.appendChild(memeImage);
// });

//As funções abaixo foram criadas porque o cypress não interpretou corretamente o source das imagens já carregadas no site
let meme1 = document.getElementById('meme-1')

meme1.addEventListener('click', function () {
    // let source = memePronto.src;
    memeImage.src = './imgs/meme1.png';
    memeContainer.appendChild(memeImage);
});

let meme2 = document.getElementById('meme-2')

meme2.addEventListener('click', function () {
    // let source = memePronto.src;
    memeImage.src = './imgs/meme2.png';
    memeContainer.appendChild(memeImage);
});

let meme3 = document.getElementById('meme-3')

meme3.addEventListener('click', function () {
    // let source = memePronto.src;
    memeImage.src = './imgs/meme3.png';
    memeContainer.appendChild(memeImage);
});

let meme4 = document.getElementById('meme-4')

meme4.addEventListener('click', function () {
    // let source = memePronto.src;
    memeImage.src = './imgs/meme4.png';
    memeContainer.appendChild(memeImage);
});




