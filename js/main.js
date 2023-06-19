const controle = document.querySelectorAll("[data-controle]")

const estatistica = document.querySelectorAll("[data-estatistica]")

//console.log(estatistica)



const pecas = {

    "bracos": {

        "forca": 29,

        "poder": 35,

        "energia": -21,

        "velocidade": -5

    },



    "blindagem": {

        "forca": 41,

        "poder": 20,

        "energia": 0,

        "velocidade": -20

    },

    "nucleos":{

        "forca": 0,

        "poder": 7,

        "energia": 48,

        "velocidade": -24

    },

    "pernas":{

        "forca": 27,

        "poder": 21,

        "energia": -32,

        "velocidade": 42

    },

    "foguetes":{

        "forca": 0,

        "poder": 28,

        "energia": 0,

        "velocidade": -2

    }

}



controle.forEach( (elemento) => {

       elemento.addEventListener("click", (evento) => {

        manipulaDados(evento.target.dataset.controle, evento.target.parentNode)

        atualizaEstatisticas(evento.target.dataset.peca)

        

       })

})   

 

function manipulaDados(operacao, controle) {

    const peca = controle.querySelector("[data-contador]")



    if(operacao === "-") {

        peca.value = parseInt(peca.value) - 1



    } else {

        peca.value = parseInt(peca.value) + 1

    }

}



function atualizaEstatisticas(peca) {

    

    estatistica.forEach((elemento) => {

        elemento.textContent = parseInt(elemento.textContent) + pecas[peca] [elemento.dataset.estatistica]



        

    })

}










//somar.addEventListener("click", (evento) => {
        braco.value = parseInt(braco.value) + 1
//})

//subtrair.addEventListener("click", (evento) => {
    braco.value = parseInt(braco.value) - 1
//})

//somar2.addEventListener("click", (evento) => {
   blindagem.value = parseInt(blindagem.value) + 1
//})

//subtrair2.addEventListener("click", (evento) => {
    blindagem.value = parseInt(blindagem.value) - 1
//})

//somar3.addEventListener("click", (evento) => {
    nucleos.value = parseInt(nucleos.value) + 1
//})

//subtrair3.addEventListener("click", (evento) => {
    nucleos.value = parseInt(nucleos.value) - 1
//})

//somar4.addEventListener("click", (evento) => {
    pernas.value = parseInt(pernas.value) + 1
//})

//subtrair4.addEventListener("click", (evento) => {
    pernas.value = parseInt(pernas.value) - 1
//})

//somar5.addEventListener("click", (evento) => {
    foguetes.value = parseInt(foguetes.value) + 1
//})

//subtrair5.addEventListener("click", (evento) => {
        foguetes.value = parseInt(foguetes.value) - 1
//})