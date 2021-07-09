var altura=0
var largura=0
var vidas=1 // Usada no painel de vidas
var tempo=30 // Usada no cronometro
var tempoCriarMosquito=1500

//Definir o nivel de dificuldade do jogo
var nivel=window.location.search
nivel=nivel.replace('?','')

if(nivel==='normal'){
    tempoCriarMosquito=1500
    console.log(tempoCriarMosquito)
} else if(nivel=='dificil'){
    tempoCriarMosquito=1000
    console.log(tempoCriarMosquito)
} else if(nivel=='chucknorris'){
    tempoCriarMosquito=750
    console.log(tempoCriarMosquito)
}


//Definir o tamanho do palco do jogo
function atualizarTamanhoPalcoJogo(){
    altura=window.innerHeight
    largura=window.innerWidth
}
atualizarTamanhoPalcoJogo()

//Funcinamento do cronometro
var cronometro= setInterval(function (){
    tempo-=1
    if(tempo<0){
        clearInterval(cronometro)
        clearInterval(criarMosquito)
        location.href='vitoria.html'
    } else{
        document.getElementById('relogio').innerHTML= tempo
    }
},1000)

//Gerar o mosquito numa posição aleatória
function posicaoRandomica(){
    //Verificar se o elemento existe e se ele exister, removê-lo
    var teste = document.getElementById('mosquito')
    if(teste){
        teste.remove()
        //Controlar vidas e o GAME OVEr
        if(vidas>3){
            location.href='fim_de_jogo.html'
        } else{
            document.getElementById('v' + vidas).src='../imagens/coracao_vazio.png'
            vidas++
        }
    }

    var posicaoX = Math.floor(Math.random() * largura -90) 
    var posicaoY = Math.floor(Math.random() * altura -90)

    posicaoX <0 ? posicaoX=0: posicaoX
    posicaoY <0 ? posicaoY=0: posicaoY

    mosquito = document.createElement('img')
    mosquito.src = '../imagens/mosquito.png'
    mosquito.id = 'mosquito'
    mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
    mosquito.style.left = posicaoX + 'px'
    mosquito.style.top = posicaoY + 'px'
    mosquito.style.position = 'absolute'
    //Remover mosquito ao clicar
    mosquito.onclick= function(){
        this.remove()
    }

    document.body.appendChild(mosquito)
    console.log(posicaoX,posicaoY)
    
}
//Gerar o tamanho do mosquito aleatoriamente
function tamanhoAleatorio(){
    var classe = Math.floor(Math.random()*3)

    switch(classe){
        case 0:
            return 'mosquito1'
        case 1:
            return 'mosquito2'
        case 2:
            return 'mosquito3'
    }
}
//Fazer o mosquito mudar a sua exibição lateral
function ladoAleatorio(){
    var classe = Math.floor(Math.random()*2)

    switch(classe){
        case 0:
            return 'ladoA'
        case 1:
            return 'ladoB'
    }
}
