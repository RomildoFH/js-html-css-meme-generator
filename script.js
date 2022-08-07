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






