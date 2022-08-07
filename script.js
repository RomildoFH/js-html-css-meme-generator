let textInput = document.getElementById('text-input');
let textoExibido = document.getElementById('meme-text');
let memeContainer = document.getElementById('meme-image-container');
let memeInput = document.getElementById('meme-insert');

//Exibindo imagem carregada
let memeImage = document.createElement('img')
memeImage.id = 'meme-image'
memeInput.addEventListener('change', function (evento) {
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
})

btnWater.addEventListener('click', function () {
    memeContainer.style.border = '5px double rgb(0, 0, 255)';    
})

btnEarth.addEventListener('click', function () {
    memeContainer.style.border = '6px groove rgb(0, 128, 0)';    
})



