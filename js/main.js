const caixaDeTexto = document.querySelector("#afazeres-input");
const formularioTexto = document.querySelector("#formulario-lista");
const listaTarefas = document.querySelector("#lista-afazeres");
const editarTarefas = document.querySelector("#editar-fromulario");
const inputEditar = document.querySelector("#input-editar");
const cancelarEdicao = document.querySelector(".cancelar-edicao");
// const feitoBotao = document.querySelector(".botao-feito");
// const listaFeita = document.querySelectorAll(".lista");
let tituloAntigoDigitado;

//criando a div com as tarefas digitada
const salvarLista  = (texto) => {
    const fazerLista = document.createElement("div");
    fazerLista.classList.add("lista")

    const tituloLista = document.createElement("h3");
    tituloLista.innerText = texto
    fazerLista.appendChild(tituloLista)
    tituloLista.classList.add("texto-adicionado")

    const btnFeito = document.createElement("button");
    btnFeito.classList.add("botao-feito")
    btnFeito.innerHTML = '<i class="fa-sharp fa-solid fa-circle-check"></i>' //adicionando um elemento html via JS (icone)
    fazerLista.appendChild(btnFeito)

    const btnEditar = document.createElement("button");
    btnEditar.classList.add("botao-editar")
    btnEditar.innerHTML = '<i class="fa-solid fa-pen"></i>'
    fazerLista.appendChild(btnEditar)

    const btnExcluir = document.createElement("button");
    btnExcluir.classList.add("botao-excluir")
    btnExcluir.innerHTML = '<i class="fa-sharp fa-solid fa-circle-xmark"></i>'
    fazerLista.appendChild(btnExcluir)


    //fazendo a div aparecer quando clica em checked
    listaTarefas.appendChild(fazerLista);
    caixaDeTexto.value = "";
    caixaDeTexto.focus();


    console.log(fazerLista);
}

//escondendo a parte de adicionar tarefas e tarefas adicionadas quando clica em editar e mostrando a parte do edit e fazendo o caminho oposto quando se clica em no botao de edit
const alternandoLayout = () => {
    editarTarefas.classList.toggle("esconder");
    formularioTexto.classList.toggle("esconder");
    listaTarefas.classList.toggle("esconder");
}



const atualizarEdicao = (inputDeEditar) => {
    const listas = document.querySelectorAll(".lista");

    //selecionando todos itens de minha lista adicionado
    listas.forEach((lista) => {
        let tituloDigitado = lista.querySelector("h3");
        //verificando se o texto do meu titulo é igual ao valor antigo digitado
        if(tituloDigitado.innerText === tituloAntigoDigitado) {
            tituloDigitado.innerText = inputDeEditar //e aqui eu substituo o texto antigo armazenado pelo novo texto
        }
    })
}

//pegando a informação digitada no input
formularioTexto.addEventListener("submit", (evento) => {
    evento.preventDefault();
    
    const valorDoInput = caixaDeTexto.value
    // console.log(valorDoInput);
    localStorage.setItem("nome", valorDoInput);
    if(valorDoInput) {
        salvarLista(valorDoInput)
    }
})

//dando funcionalidade ao botão de feito 
// feitoBotao.addEventListener("click", () => {
//     listaFeita.classList.toggle("feito")
// })
document.addEventListener("click", (evento) => {
    const elementoAlvo = evento.target;
    const elementoParente = elementoAlvo.closest("div") //buscando a div mais proxima da const elementeAlvo
    let tituloDigitado;


    //buscando se o elemento que vamos clicar é um titulo e se esse titulo é um h3, dizendo depois que o tituloDigitado (clicado) receber o seu valor de texto
    if(elementoParente && elementoParente.querySelector("h3")) {
        tituloDigitado = elementoParente.querySelector("h3").innerText || ""; //esta buscando o texto digitado quando clico em editar
        // console.log(tituloDigitado);
    }

    if(elementoAlvo.classList.contains("botao-feito")) {
        elementoParente.classList.toggle("feito")
        console.log("CLICOU");
        //encontrando o elemento com a classe ".botao-feito" -- o efeito de click só acontecerá nele.
    }
    //encontrando o botão de editar
    if(elementoAlvo.classList.contains("botao-editar")) {
        alternandoLayout()
        //guardando o "valor" digitado quando clico em editar -- deixando o campo preenchido quando clicado na caneta de editar
        inputEditar.value = tituloDigitado;
        console.log(tituloDigitado);
        tituloAntigoDigitado = tituloDigitado;
        console.log(tituloAntigoDigitado);
    }


    //excluindo uma tarefa ao clicar no botão
    if(elementoAlvo.classList.contains("botao-excluir")) {
        elementoParente.remove();
        console.log("Excluiu");
    }
})


//dando funcionalidade ao botão de cancelar edição e alternando a div
cancelarEdicao.addEventListener("click", (evento) => {
    evento.preventDefault();
    alternandoLayout();

});


//quando clicado no botão de submit ele envia o novo valor (troca o valor) substituindo e editando os textos
editarTarefas.addEventListener("submit", (evento) => {
    evento.preventDefault(); //caso esteja vazio ele cancela a edição

    const inputDeEditar = inputEditar.value;

    if(inputDeEditar) {
        atualizarEdicao(inputDeEditar)
    }

    alternandoLayout()
    console.log("EDIÇÃO 2");
})

localStorage.setItem("name", "Matheus");

const salvarNoLocalStorage = (lista)

